import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import MenuIcon from './MenuIcon.svg'
import MenuCloseIcon from './MenuCloseIcon.svg'
import UpIcon from './UpIcon.svg'

export const icons = {
  UpIcon,
  MenuCloseIcon,
  MenuIcon
}

export type iconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  icon: iconName;
  apparance: 'primary' | 'white';
}