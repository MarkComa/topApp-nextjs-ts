import { ProductModel } from './../../interfaces/product.interface';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  product: ProductModel;
}