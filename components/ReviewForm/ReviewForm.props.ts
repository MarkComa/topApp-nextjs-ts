import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  productId: string
}