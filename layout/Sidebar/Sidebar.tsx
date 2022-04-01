import React from 'react'
import { SidebarProps } from './Sidebar.props'
import s from "./Sidebar.module.css"
import LogoIcon from './logo.svg'
import {Menu} from '../Menu/Menu'
import Link from 'next/link'
import { Search } from '../../components'

export const Sidebar = ({children, ...props}:SidebarProps):JSX.Element => {
  return (
    <div className={s.sidebar} {...props}>
     <Link href='/'><LogoIcon/></Link> 
     <Search />
      <Menu />
    </div>
  )
}
