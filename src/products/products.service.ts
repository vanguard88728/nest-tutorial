import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Watch', price: 1000 },
    { id: 2, name: 'Phone', price: 25000 },
  ];

  getAllProducts() {
    return Promise.resolve(this.products);
  }

  getProduct(id: number) {
    const product = this.products.find((product) => {
      return product.id === id;
    });

    if (!product) {
      throw new HttpException('Product not found', 404);
    }

    return Promise.resolve(product);
  }

  addProduct(product: CreateProductsDto): Observable<object[]> {
    this.products.push(product);
    return of(this.products);
  }
}
