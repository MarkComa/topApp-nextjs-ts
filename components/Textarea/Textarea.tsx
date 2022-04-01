import React from "react";
import {TextareaProps} from "./Textarea.props";
import s from "./Textarea.module.css";
import cn from "classnames";


export const Textarea = ({className, ...props  }:TextareaProps): JSX.Element => {
	return (
		<textarea className={cn(s.textarea, className)} {...props }/>
	)
}