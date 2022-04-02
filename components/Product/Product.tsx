import React from "react";
import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";

export const Product = ({
	product,
	className,
	...props
}: ProductProps): JSX.Element => {
	return (
		<Card className={s.product} {...props}>
			<div className={s.logo}>
				<img
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					alt={product.title}
				/>
			</div>
			<div className={s.title}>{product.title}</div>
			<div className={s.price}>
        {priceRu(product.price)}
        {product.oldPrice && <Tag className={s.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
      </div>
			<div className={s.credit}>
				{priceRu(product.credit)} / <span className={s.month}>мес</span>
			</div>
			<div className={s.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={s.tags}>
				{product.categories.map((el) => (
					<Tag className={s.category} color='ghost' key={el}>
						{el}
					</Tag>
				))}
			</div>
			<div className={s.priceTitle}>цена</div>
			<div className={s.creditTitle}>кредит</div>
			<div className={s.ratingTitle}>{product.reviewCount} отзывов</div>
			<Divider className={s.hr}/>
			<div className={s.description}>{product.description}</div>
			<div className={s.feature}>fi4i</div>
			<div className={s.advBlock}>
				{product.advantages && <div className={s.advantages}>
					<div className={s.advTitle}>Преимущества</div>
					<div>{product.advantages}</div>
				</div>}
				{product.disadvantages && <div className={s.disadvantages}>
					<div className={s.advTitle}>Недостатки</div>
					<div>{product.disadvantages}</div>
				</div>}
			</div>
			<Divider className={s.hr}/>
			<div className={s.actions}>
				<Button apparance={"primary"}>Узнать подробнее</Button>
				<Button apparance={"ghost"} arrow='right' className={s.actionBtn}>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
