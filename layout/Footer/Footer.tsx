import React from 'react'
import { FooterProps } from './Footer.props'
import s from "./Footer.module.css"
import cn from 'classnames'
import { format } from 'date-fns';

export const Footer = ({children,className, ...props}:FooterProps):JSX.Element => {
  return (
    <footer className={cn(className, s.footer)}{...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
      <a href='#' target='_blank'>Политика конфиденциальности</a>     
    </footer>
  )
}
