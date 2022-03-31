import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import { Advantages, Card, HhData, Htag, P, Sort, Tag } from '../../components'
import s from './TopPageComponent.module.css'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { SortEnum } from '../../components/Sort/Sort.props'

export const TopPageComponent = ({page, products, firstCategory}:TopPageComponentProps):JSX.Element => {
  return (
    <div> 
    <div className={s.title}>
      <Htag tag='h1' >{page.title}</Htag>
      {products &&<Tag size='m' color='gray'>{ products.length}</Tag>}
      <Sort sort={SortEnum.Rating} setSort={()=>{}}/>
    </div>
    <div>
      {products && products.map(el => (<div key={el._id}>{el.title}</div>))}
    </div>
    <div className={s.hhTitle}>
      <Htag tag='h2' >Вакансии - {page.category}</Htag>
      {products &&<Tag size='m' color='red'>hh.ru</Tag>}
    </div>
    <div className={s.hh}>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Преимущества</Htag>
        <Advantages advantages={page.advantages} />
      </>}
    </div>
        {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
        <Htag tag='h2'>Получаемые навыки</Htag>
        {page.tags.map(el => <Tag key={el} color='primary'>{el}</Tag>)}
    </div>
  )
}
