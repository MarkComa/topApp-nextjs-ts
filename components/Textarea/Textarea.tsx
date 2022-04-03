/* eslint-disable react/display-name */
import React, {ForwardedRef, forwardRef} from "react";
import {TextareaProps} from "./Textarea.props";
import s from "./Textarea.module.css";
import cn from "classnames";


export const Textarea = forwardRef(({error, className, ...props  }:TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<div className={cn(className, s.textareaWrapper)}> 
			<textarea ref={ref} className={cn(s.textarea, {
				[s.error] : error
			})} {...props }/>
			{error && <span className={s.errorMsg}>{error.message}</span>}
		</div>
		)
})