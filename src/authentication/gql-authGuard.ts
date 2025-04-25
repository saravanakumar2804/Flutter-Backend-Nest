import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { PublicKey } from 'src/decorator/public.decorator'
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('firebase-auth') {
  public constructor(private readonly reflector: Reflector) {
    super()
  }

  private getGraphqlRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }

  private getHttpRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest()
  }

  getRequest(context: ExecutionContext) {
    return this.getGraphqlRequest(context) || this.getHttpRequest(context)
  }

  private validateError(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException()
    }
  }

  private validatePublic(context, user, err) {
    const isPublic = this.reflector.get<boolean>(PublicKey, context.getHandler())
    if (isPublic) return

    this.validateError(err, user)
  }

 
  handleRequest(err, user, info, context) {
    this.validatePublic(context, user, err)

    return user
  }
}