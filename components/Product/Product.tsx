import React from 'react'
import { ProductProps } from './Product.props'
import s from "./Product.module.css"
import cn from 'classnames'
import { Card } from '../Card/Card'
import { Rating } from '../Rating/Rating'
import { Tag } from '../Tag/Tag'

export const Product = ({product, className, ...props}:ProductProps):JSX.Element => {
  return (
    <Card className={s.product} {...props}>
      <div className={s.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={s.product}>{product.title}</div>
      <div className={s.price}>{product.price}</div>
      <div className={s.credit}>{product.credit}</div>
      <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
      <div className={s.tags}>{product.categories.map(el => <Tag color='ghost' key={el}>{el}</Tag>)}</div>
      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.ratingTitle}>{product.reviewCount} отзывов</div>
    </Card>
  )
}
