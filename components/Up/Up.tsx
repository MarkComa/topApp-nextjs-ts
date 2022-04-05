import React, { useEffect } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import s from './Up.module.css'
import UpIcon from './UpIcon.svg'
import {useAnimation, motion} from 'framer-motion'


export const Up = ():JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(()=> {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y,controls])
    const ScrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <motion.button 
        className={s.up}
        onClick={ScrollToTop}
        animate={controls}
        initial={{opacity: 0}}
        ><UpIcon /></motion.button>
  )
}
