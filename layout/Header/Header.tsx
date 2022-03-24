import React from 'react'
import { HeaderProps } from './Header.props'
import s from "./Header.module.css"

export const Header = ({children, ...props}:HeaderProps):JSX.Element => {
  return (
    <div {...props}>
      Header
      
    </div>
  )
}
