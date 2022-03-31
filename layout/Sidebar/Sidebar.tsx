import React from 'react'
import { SidebarProps } from './Sidebar.props'
import s from "./Sidebar.module.css"
import LogoIcon from './logo.svg'
import {Menu} from '../Menu/Menu'

export const Sidebar = ({children, ...props}:SidebarProps):JSX.Element => {
  return (
    <div className={s.sidebar} {...props}>
      <LogoIcon/>
      <Menu />
    </div>
  )
}
