/* eslint-disable react/display-name */
import React, { ForwardedRef, forwardRef, useRef, useState } from "react";
import { ProductProps } from "./Product.props";
import s from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { Review } from "../Review/Review";
import Image from "next/image";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion'


export const Product = motion(forwardRef(({
	product,
	className,
	...props
}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const refReviews = useRef(null);

	const variants = {
		visible: {opacity: 1, height: 'auto'},
		hidden: {opacity: 0, height: 0}
	}

	const scrollToReview = () =>{
		setIsReviewOpened(true);
		refReviews.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}
	
	return (
		<div className={className} {...props} ref={ref}>
			<Card className={s.product}>
				<div className={s.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={s.title}>{product.title}</div>
				<div className={s.price}>
					{priceRu(product.price)}
					{product.oldPrice && (
						<Tag className={s.oldPrice} color='green'>
							{priceRu(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={s.credit}>
					{priceRu(product.credit)} /{" "}
					<span className={s.month}>мес</span>
				</div>
				<div className={s.rating}>
					<Rating
						rating={product.reviewAvg ?? product.initialRating}
					/>
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
				<div className={s.ratingTitle}>
					<a href='#ref'onClick={scrollToReview}>{product.reviewCount}
					{declOfNum(product.reviewCount, [
						" отзыв",
						" отзыва",
						" отзывов",
					])}
					</a>
				</div>
				<Divider className={cn(s.hr, s.hr1)} />
				<div className={s.description}>{product.description}</div>
				<div className={s.feature}>
					{product.characteristics &&
						product.characteristics.map((el) => {
							return (
								<div
									className={s.characteristics}
									key={el.name}>
									<span className={s.characteristicsName}>
										{el.name}
									</span>
									<span
										className={
											s.characteristicsDots
										}></span>
									<span className={s.characteristicsValue}>
										{el.value}
									</span>
								</div>
							);
						})}
				</div>
				<div className={s.advBlock}>
					{product.advantages && (
						<div className={s.advantages}>
							<div className={s.advTitle}>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={s.disadvantages}>
							<div className={s.advTitle}>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={cn(s.hr, s.hr2)} />
				<div className={s.actions}>
					<Button apparance={"primary"}>Узнать подробнее</Button>
					<Button
						onClick={() => setIsReviewOpened(!isReviewOpened)}
						apparance={"ghost"}
						arrow={!isReviewOpened ? "right" : "down"}
						className={s.actionBtn}>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card
					color='blue'
					className={s.reviews} ref={refReviews}>
					{product.reviews.map((el) => (
						<div key={el._id}>
							<Review review={el}  />
							<Divider />
						</div>
					))}
					<ReviewForm productId={product._id}/>
				</Card>
			</motion.div>
		</div>
	);
}));
