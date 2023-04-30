import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";


@Controller('products')
export class ProductController {
  constructor(private  productService: ProductService) {
  }
  @Get()
  getAll() {
      return this.productService.findAll();
  }


  @Post()
  create(@Body() body: any) {



  }

  @Patch(':product_id')
  update(@Param() id: number) {

  }

  @Delete(':product_id')
  remove(@Param() id: number) {

  }

}
