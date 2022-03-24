import React from 'react'
import { TagProps } from './Tag.props'
import s from "./Tag.module.css"
import cn from 'classnames'

export const Tag = ({size = 'm',color ='ghost',href, children, className, ...props}:TagProps):JSX.Element => {
  return (
    <div className={cn(s.tag, className, {
        [s.s]: size === 's',
        [s.m]: size === 'm',
        [s.ghost]: color === 'ghost',
        [s.red]: color === 'red',
        [s.gray]: color === 'gray',
        [s.green]: color === 'green',
        [s.primary]: color === 'primary'
    })} {...props}>
      { href
            ? <a href={href}>{children}</a>
            : <>{children}</>}
    </div>
  )
}
