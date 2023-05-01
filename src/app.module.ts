import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductModule } from "./pruduct-module/product.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { Product } from "./models/product";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'alquimia',
      database: 'nestjs',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
