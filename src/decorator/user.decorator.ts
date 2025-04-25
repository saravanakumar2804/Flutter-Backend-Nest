// import { ExecutionContext, createParamDecorator } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthSesUser } from '../../authentication/auth-interface';

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const getAuthUserGql = (ctx: any): AuthSesUser => ctx.req.user;

// const getAuthUser = (ctx: ExecutionContext): AuthSesUser =>
//   GqlExecutionContext.create(ctx).getContext().req.user;

// const Auth = createParamDecorator<AuthSesUser>(
//   (data: unknown, ctx: ExecutionContext) => getAuthUser(ctx)
// );

// export { Auth, getAuthUser, getAuthUserGql };
