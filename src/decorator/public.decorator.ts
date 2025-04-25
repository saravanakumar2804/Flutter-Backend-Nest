import { CustomDecorator, SetMetadata } from '@nestjs/common'

export const PublicKey = 'isPublic'
export const Public = (): CustomDecorator<string> => SetMetadata('isPublic', true)