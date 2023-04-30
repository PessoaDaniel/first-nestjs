import { Controller, Get } from "@nestjs/common";


@Controller('/users')
export class UsersController {

  @Get()
  getAll() {
    return  {
      message: "Hello users"
    }
  }
}
