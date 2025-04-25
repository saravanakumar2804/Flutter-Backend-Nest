import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { RazorPayDto } from "./dto/razor.dto";
import { Razorpay } from "./razor.model";
import { RazorpayService } from "./razor.service";
@Resolver(() => Razorpay)
export class RazorpayResolver {
  constructor(private razorpayService: RazorpayService) {}
  @Mutation(() => Razorpay)
  async createPaymentOrder(
    @Args('createRazorPaymentDto') createRazorPaymentDto: RazorPayDto,
  ) {
    return await this.razorpayService.createPaymentOrder(createRazorPaymentDto);
  }
}