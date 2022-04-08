import React, { useEffect } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import s from './Up.module.css'
import {useAnimation, motion} from 'framer-motion'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'


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
    <motion.div 
        className={s.up}
        animate={controls}
        initial={{opacity: 0}}
        >
            <ButtonIcon icon={'UpIcon'} apparance={'primary'} onClick={ScrollToTop} />
        </motion.div>
  )
}
