import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import { Card, HhData, Htag, Tag } from '../../components'
import s from './TopPageComponent.module.css'
import { TopLevelCategory } from '../../interfaces/page.interface'

export const TopPageComponent = ({page, products, firstCategory}:TopPageComponentProps):JSX.Element => {
  return (
    <div className={s.wrapper}> 
    <div className={s.title}>
      <Htag tag='h1' >{page.title}</Htag>
      {products &&<Tag size='m' color='gray'>{ products.length}</Tag>}
      <span>Сортировка</span>
    </div>
    <div>
      {products && products.map(el => (<div key={el._id}>{el.title}</div>))}
    </div>
    <div className={s.hhTitle}>
      <Htag tag='h2' >Вакансии - {page.category}</Htag>
      {products &&<Tag size='m' color='red'>hh.ru</Tag>}
    </div>
    <div className={s.hh}>
     {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
    </div>
    </div>
  )
}
