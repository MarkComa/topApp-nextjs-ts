import React from "react";
import {SortEnum, SortProps} from "./Sort.props";
import s from "./Sort.module.css";
import cn from "classnames";
import SortIcon from './SortIcon.svg'


export const Sort = ({sort, setSort, className, ...props  }:SortProps): JSX.Element => {
	return (
		<div className={cn(s.sort, className)} {...props}>
			<span onClick={() => setSort(SortEnum.Rating)}
			className={cn({
				[s.active]: sort === SortEnum.Rating
			})}
			>
				<SortIcon className={s.sortIcon}/> По рейтингу
			</span>
			<span onClick={() => setSort(SortEnum.Price)}
			className={cn({
				[s.active]: sort === SortEnum.Price
			})}
			>
				<SortIcon className={s.sortIcon}/> По&nbsp;цене
			</span>
		</div>
	)
}