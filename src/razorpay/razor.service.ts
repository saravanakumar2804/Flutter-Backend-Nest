const Razorpay = require('razorpay');
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { RazorPayDto } from './dto/razor.dto';
@Injectable()
export class RazorpayService {
  constructor(private readonly prisma: PrismaService) {}
  async createPaymentOrder(createRazorPaymentDto: RazorPayDto) {
    const instance = new Razorpay({
      key_id: 'rzp_test_M9QCylZNDTZcTY',
      key_secret: 'dSzMU5rU25FkUoKadEoYwAd3',
    });
    console.log('createRazorPaymentDto', createRazorPaymentDto.amount);

    const order = await instance.orders.create({
      amount: Number((createRazorPaymentDto?.amount * 100).toFixed(0)),
      currency: 'INR',
    });
    console.log(order);
    const paymentOrder = await this.prisma.razorpay.create({
      data: {
        orderId: order.id,
        amount: createRazorPaymentDto?.amount,
        currency: 'INR',
      },
    });
    return paymentOrder;
  }
}
