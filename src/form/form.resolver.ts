import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { Form } from './form.model';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';

@Resolver(() => Form)
export class FormResolver {
  constructor(private formService: FormService) {}

  @Mutation(() => Form, { nullable: true })
  async createForm(@Args('formDto') formDto: FormDto) {
    return await this.formService.createForm(formDto);
  }
  @Mutation(() => Form, { nullable: true })
  async updateForm(@Args('id') id: string, @Args('formDto') formDto: FormDto) {
    return await this.formService.updateForm(id, formDto);
  }
  @Query(() => [Form])
  async getForm() {
    return await this.formService.getForm();
  }
  @Query(() => Form)
  async deleteForm(@Args('id') id: string) {
    return await this.formService.deleteForm(id);
  }
}
