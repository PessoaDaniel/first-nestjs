import { Injectable } from "@nestjs/common";
import { Product } from "../models/product";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class ProductService {
  @InjectRepository(Product)
  private productRepository: Repository<Product>;

  findAll () {
    return this.productRepository.find();
  }
}
