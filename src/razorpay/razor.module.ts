import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { RazorpayResolver } from './razor.resolver';
import { RazorpayService } from './razor.service';

@Module({
  imports: [PrismaModule], 
  providers: [RazorpayResolver, RazorpayService],
  exports: [],
  controllers: [],
})
export class RazorPayModule {}
