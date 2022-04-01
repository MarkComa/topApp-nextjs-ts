import React, { useReducer } from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'
import { Advantages, HhData, Htag, Product, Sort, Tag } from '../../components'
import s from './TopPageComponent.module.css'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { SortEnum } from '../../components/Sort/Sort.props'
import { sortReducer } from './sort.reducer'

export const TopPageComponent = ({page, products, firstCategory}:TopPageComponentProps):JSX.Element => {
  const [{products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating})
  
  const setSort = (sort: SortEnum) => {
    dispathSort({type: sort})
  } 
  return (
    <div> 
    <div className={s.title}>
      <Htag tag='h1' >{page.title}</Htag>
      {products &&<Tag size='m' color='gray'>{ products.length}</Tag>}
      <Sort sort={sort} setSort={setSort}/>
    </div>
    <div>
      {products && products.map(el => (<Product key={el._id} product={el} />))}
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
