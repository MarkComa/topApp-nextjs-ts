import React, { useEffect, useState } from 'react'
import { HeaderProps } from './Header.props'
import LogoIcon from '../Sidebar/logo.svg'
import s from "./Header.module.css"
import cn from 'classnames'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon'
import {motion} from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'
import { useRouter } from 'next/router'

export const Header = ({children, className, ...props}:HeaderProps):JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setIsOpened(false)
  }, [router])
  const variants = {
    opened: {opacity:1, x:0, transition: {
      stiffness:20
    }},
    closed:{opacity:0, x:'100%'}
  }
  return (
    <header className={cn(className, s.header)} {...props}>
      <LogoIcon/>
      <ButtonIcon icon={'MenuIcon'} apparance={'white'} onClick={()=> setIsOpened(true)}/>
      <motion.div className={s.mobileMenu} variants={variants} initial={'closed'}
      animate={isOpened ? 'opened' : 'closed'}>
        <Sidebar />
        <ButtonIcon className={s.closed} icon={'MenuCloseIcon'} apparance={'white'} onClick={()=> setIsOpened(false)}/>
      </motion.div>
    </header>
  )
}
