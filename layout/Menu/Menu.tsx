import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import s from './Menu.module.css'

export const Menu = ():JSX.Element => {

    const {menu, setMenu, firstCategory} = useContext(AppContext)

    return (
        <ul>
        {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
      </ul>
  )
}
