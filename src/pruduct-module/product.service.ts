import { Injectable } from "@nestjs/common";
import { Product } from "../models/product";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";


@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private productRepository: Repository<Product>;

  findAll () {
    return this.productRepository.find();
  }

  async save(product: Product) {
   return await this.productRepository.save(product);
  }


  async  findOne (id: number) {
    return this.productRepository.findOne({
      where:  {
        id: id
      }
    });
  }

  async remove (id: number ) {
    const product =  await this.productRepository.findOne({
      where: { id: id.valueOf() }

    } as FindOneOptions<Product>);
    console.log(product);
    await this.productRepository.remove(product);
    return product;
}
}
