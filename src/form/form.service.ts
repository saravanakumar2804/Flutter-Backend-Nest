import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/form.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { every } from 'rxjs';
import { Prisma } from '@prisma/client';

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) {}

  async createForm(formDto: FormDto) {
    return await this.prisma.form.create({
      data: {
        name: formDto.name,
        email: formDto.email,
        gender: formDto.gender,
        interests: formDto.interests,
        country: formDto.country,
        birthDate: formDto.birthDate,
        age: formDto.age,
      },
    });
  }

  async updateForm(id: string, formDto: FormDto) {
    return await this.prisma.form.update({
      where: {
        id: id,
        archived: false,
      },
      data: {
        name: formDto.name,
        email: formDto.email,
        gender: formDto.gender,
        interests: formDto.interests,
        country: formDto.country,
        birthDate: formDto.birthDate,
        age: formDto.age,
      },
    });
  }

  async getForm() {
    return await this.prisma.form.findMany({
      where: {
        archived: false,
      },
    });
  }

  async deleteForm(id: string) {
    return await this.prisma.form.update({
      where: {
        id: id,
        archived: false,
      },
      data: {
        archived: true,
      },
    });
  }
}
