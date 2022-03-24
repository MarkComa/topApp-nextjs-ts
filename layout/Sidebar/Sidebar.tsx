import React from 'react'
import { SidebarProps } from './Sidebar.props'
import s from "./Header.module.css"

export const Sidebar = ({children, ...props}:SidebarProps):JSX.Element => {
  return (
    <div {...props}>
      Sidebar
    </div>
  )
}
