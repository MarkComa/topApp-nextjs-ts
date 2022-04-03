/* eslint-disable react/display-name */
import React, { ForwardedRef, forwardRef } from 'react'
import { CardProps } from './Card.props'
import s from "./Card.module.css"
import cn from 'classnames'

export const Card = forwardRef(({color ='white', children, className, ...props}:CardProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  return (
    <div className={cn(s.card, className, {
        [s.blue]: color === 'blue',
    })} 
    ref={ref}
    {...props}>
      {children}
    </div>
  )
})
