import { IsNotEmpty } from "class-validator";

export class CreateProductBody {
  @IsNotEmpty({
    message: "Product Name should not be empty"
  })
  name: string;
}

export class UpdateProductBody {
  @IsNotEmpty({
    message: "Product Name should not be empty"
  })
  name: string;
}
