import { HTMLAttributes, ReactNode } from 'react';
import { DetailedHTMLProps } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}