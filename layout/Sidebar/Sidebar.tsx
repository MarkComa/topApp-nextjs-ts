import React from 'react'
import { SidebarProps } from './Sidebar.props'
import s from "./Header.module.css"
import {Menu} from '../Menu/Menu'

export const Sidebar = ({children, ...props}:SidebarProps):JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}
