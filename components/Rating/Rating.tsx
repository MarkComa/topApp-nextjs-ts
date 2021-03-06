/* eslint-disable react/display-name */
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { RatingProps } from './Rating.props'
import s from './Rating.module.css'
import StarIcon from './star.svg'
import cn from 'classnames'

export const Rating = forwardRef(({error,isEditable = false, rating, setRating,className,...props}:RatingProps, ref: ForwardedRef<HTMLDivElement>):JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(()=>{
    constructRating(rating)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[rating]);

  const constructRating = (currentRating:number) => {
    const updatedArr = ratingArr.map((el:JSX.Element, i:number) =>{
      // eslint-disable-next-line react/jsx-key
        return <span className={cn(s.star, {
          [s.filled]: i < currentRating,
          [s.editable]: isEditable
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={()=> changeDisplay(rating)}
        onClick={() => onClick(i + 1)}> <StarIcon 
        tabIndex={isEditable ? 0 : -1}
      />
      </span>
    } );
    setRatingArr(updatedArr);
  };
  
const changeDisplay = (i:number) => {
  if (!isEditable) {
    return;
  }
  constructRating(i);
}
const onClick = (i:number) => {
  if (!isEditable || !setRating) {
    return;
  }
  setRating(i);
}
  const ratingEl = ratingArr.map((el,i)=> {
  return <span className={cn({
    [s.error] : error
  })} key={i}>{el}</span>})
  return (
    <div className={s.ratingWrapper} ref={ref} {...props}>
      {ratingEl}
      {error && <span className={s.errorMsg}>{error.message}</span>}
    </div>
  )
}
)
