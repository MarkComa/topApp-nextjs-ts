import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import s from "./Advantages.module.css";
import CheckIcon from "./CheckIcon.svg";
import { P } from "../P/P";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map((el) => (
				<div className={s.advantage} key={el._id}>
          <CheckIcon />
          <div className={s.title}>{el.title}</div>
            <hr className={s.vline}/>
          <P className={s.description}>{el.description}</P>
        </div>
			))}
		</>
	);
};
