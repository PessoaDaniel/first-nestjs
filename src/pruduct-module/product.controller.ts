import { Controller, Get } from "@nestjs/common";


@Controller('products')
export class ProductController {

  @Get()
  getAll() {
      return {
        message: "Hello Products"
      }
  }
}
