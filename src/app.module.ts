import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from "./users-module/users.module";
import { ProductModule } from "./pruduct-module/product.module";

@Module({
  imports: [
    UsersModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
