/* eslint-disable react/display-name */
import React, { ForwardedRef, forwardRef } from "react";
import {InputProps} from "./Input.props";
import s from "./Input.module.css";
import cn from "classnames";


export const Input = forwardRef(({className,error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={cn(s.inputWrapper, className)}>
			<input ref={ref} className={cn(s.input, {
				[s.error]: error
			})} {...props }/>
			{error && <span className={s.errorMsg}>{error.message}</span>}
		</div>
		
	);
});