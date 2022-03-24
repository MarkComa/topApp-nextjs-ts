import React from 'react'
import { FooterProps } from './Footer.props'
import s from "./Footer.module.css"
import cn from 'classnames'

export const Footer = ({children,className, ...props}:FooterProps):JSX.Element => {
  return (
    <footer className={cn(className, s.footer)}{...props}>
      <p className={s.p}>OwlTop © 2020 - 2021 Все права защищены</p>
      <p className={s.p}>Пользовательское соглашение</p>
      <p className={s.p}>Политика конфиденциальности</p>     
    </footer>
  )
}
