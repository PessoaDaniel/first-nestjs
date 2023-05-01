import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "../models/product";


@Controller('products')
export class ProductController {
  constructor(private  productService: ProductService) {
  }
  @Get()
  getAll() {
      return this.productService.findAll();
  }


  @Post()
  async create(@Body() body: any) {
    const product = await this.productService.save(body);
    return {
      status: 'sucess',
      product: product
    }

  }

  @Patch(':id')
  async  update(@Body() body: Product, @Param() param) {
    const { id } = param;
     let product: Product = await this.productService.findOne(id);
     product.name = body.name;
     product = await  this.productService.save(product);
     return {
       status: 'succes',
       product: product
     }

  }

  @Delete(':id')
  async remove(@Param() param) {
    const { id } = param;
    const product: Product = await this.productService.remove(id);
    return {
      status: 'success',
      removed_product: product
    }
  }

}
