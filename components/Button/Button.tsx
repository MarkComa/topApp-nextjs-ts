import React from 'react';
import { ButtonProps } from './Button.props';
import s from './Button.module.css';
import ArrowIcon from './arrow.svg'
import cn from 'classnames';

export const Button = ({apparance, arrow = 'none', children, className, ...props}:ButtonProps):JSX.Element => { 
        return <button
        className={cn(s.button, className, {
                [s.primary]: apparance=='primary',
                [s.ghost]: apparance=='ghost'

        })}
        {...props}
        >
                {children}
        {arrow !== 'none' &&
                <span className={cn(s.arrow,{
                        [s.down]: arrow === 'down'
                        })}>
                        <ArrowIcon />
                </span>}
        </button>
} 