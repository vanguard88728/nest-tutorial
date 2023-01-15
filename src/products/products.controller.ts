import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAllProducts(@Request() req, @Response() res) {
    await this.productService
      .getAllProducts()
      .then((products) => {
        res.status(HttpStatus.OK).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Get(':/id')
  async getProduct(@Response() res, @Param('id') id) {
    await this.productService
      .getProduct(+id)
      .then((product) => {
        res.status(HttpStatus.OK).json(product);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post()
  async addProduct(
    @Response() res,
    @Body() createProductDTO: CreateProductsDto,
  ) {
    await this.productService
      .addProduct(createProductDTO)
      .subscribe((products) => {
        res.status(HttpStatus.OK).json(products);
      });
  }
}
