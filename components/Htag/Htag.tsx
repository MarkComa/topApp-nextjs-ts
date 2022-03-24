import React from 'react'
import { HtagProps } from './Htag.props'
import s from './Htag.module.css'

export const Htag = ({tag, children}:HtagProps):JSX.Element => {
  switch (tag) {
    case 'h1': 
        return <h1 className={s.h1}>{children}</h1>;
    case 'h2': 
        return <h2 className={s.h2}>{children}</h2>;
    case 'h3': 
        return <h3 className={s.h3}>{children}</h3>;
    case 'h4': 
        return <h4>{children}</h4>;
    case 'h5': 
        return <h5>{children}</h5>;
    case 'h6': 
        return <h6>{children}</h6>;
    default: 
        return <></>
  }
}
