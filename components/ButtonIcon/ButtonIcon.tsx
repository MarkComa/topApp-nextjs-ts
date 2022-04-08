import React from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import s from './ButtonIcon.module.css';
import cn from 'classnames';

export const ButtonIcon = ({apparance, icon, children, className, ...props}:ButtonIconProps):JSX.Element => { 
        const IconComp = icons[icon]
        return <button
        className={cn(s.button, className, {
                [s.primary]: apparance=='primary',
                [s.white]: apparance=='white'
        })}
        {...props}>
                <IconComp />
        </button>
} 