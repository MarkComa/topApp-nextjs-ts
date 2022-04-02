import React from 'react'
import { ReviewFormProps } from './ReviewForm.props'
import s from "./ReviewForm.module.css"
import cn from 'classnames'
import { Input } from '../Input/Input'
import { Rating } from '../Rating/Rating'
import { Textarea } from '../Textarea/Textarea'
import { Button } from '../Button/Button'
import CloseIcon from './CloseIcon.svg'


export const ReviewForm = ({ className, ...props}:ReviewFormProps):JSX.Element => {
 
  return (
    <>
    <div className={cn(className, s.reviewForm)} {...props}>
      <Input placeholder='Имя' />
      <Input placeholder='Заголовок отзыва' className={s.title}/>
      <div className={s.rating}>
        <span>Оценка:</span>
        <Rating rating={0} />
      </div>
      <Textarea placeholder='Текст отзыва' className={s.description}/>
      <div className={s.submit}>
        <Button apparance={'primary'}>Отправить</Button>
        <span className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
    </div>
    <div className={s.success}>
      <div className={s.successTitle}>Ваш отзыв отправлен</div>
      <div>
        Спасибо, ваш отзыв будет опубликован после проверки
      </div>
      <CloseIcon className={s.close}/>
    </div>
    </>
  )
}
