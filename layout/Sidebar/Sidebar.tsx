import React from 'react'
import { SidebarProps } from './Sidebar.props'
import s from "./Sidebar.module.css"
import LogoIcon from './logo.svg'
import {Menu} from '../Menu/Menu'
import { Search } from '../../components'

export const Sidebar = ({children, ...props}:SidebarProps):JSX.Element => {
  return (
    <div className={s.sidebar} {...props}>
    <LogoIcon/>
     <Search />
      <Menu />
    </div>
  )
}
