import { ReviewModel } from './../../interfaces/product.interface';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  review: ReviewModel;
}