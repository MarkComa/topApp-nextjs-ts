import { HTMLAttributes, ReactNode } from 'react';
import { DetailedHTMLProps } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
  children: ReactNode;
}