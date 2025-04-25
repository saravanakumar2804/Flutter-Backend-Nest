import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQlModule } from './graphql/graphql.module';
import { FormModule } from './form/form.module';
import { RazorPayModule } from './razorpay/razor.module';

@Module({
  imports: [GraphQlModule, FormModule , RazorPayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
