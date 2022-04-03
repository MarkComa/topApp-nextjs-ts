import React from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./CloseIcon.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interfasce";

export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, formState: {errors} } = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
    console.log(data)
  };
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(className, s.reviewForm)} {...props}>
				<Input {...register("name", { required: { value: true, message: 'заполните имя'}})}
        placeholder='Имя'
        error={errors.name}/>
				<Input
					{...register("title", { required: { value: true, message: 'заполните заголовок'}})}
					placeholder='Заголовок отзыва'
					className={s.title}
          error={errors.title}
				/>
				<div className={s.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
            rules={{ required: { value: true, message: 'выберите оценку'}}}
            
						render={({ field }) => {
							return <Rating error={errors.rating} isEditable ref={field.ref} rating={field.value} setRating={field.onChange} />;
						}}
					/>
				</div>
				<Textarea
					{...register("description", { required: { value: true, message: 'заполните текст отзыва'}})}
					placeholder='Текст отзыва'
					className={s.description}
          error={errors.description}
				/>
				<div className={s.submit}>
					<Button apparance={"primary"}>Отправить</Button>
					<span className={s.info}>
						* Перед публикацией отзыв пройдет предварительную
						модерацию и проверку
					</span>
				</div>
			</div>
			<div className={s.success}>
				<div className={s.successTitle}>Ваш отзыв отправлен</div>
				<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
				<CloseIcon className={s.close} />
			</div>
		</form>
	);
};
