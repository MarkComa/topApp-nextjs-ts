import React, { useState } from "react"
import { Htag, Tag, Rating, Button, P, Input, Textarea } from '../components'
import { withLayout } from "../layout/Layout"
import axios from "axios"
import { GetStaticProps } from "next"
import { MenuItem } from "../interfaces/menu.interface"
import { API } from "../helpers/api"


function Home({menu, firstCategory}:HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3)

  return <>
    <Htag tag="h1">Текст h1</Htag>
    <Htag tag="h2">Текст h2</Htag>
    <Htag tag="h3">Текст h3</Htag>
    <Button apparance="primary" arrow="down">Кнопка</Button>
    <Button apparance="ghost" arrow="right">Кнопка</Button>
    <P size="s">текст s</P>
    <P>текст m</P>
    <P size="l">текст l</P>
    <Tag color="primary">Тег</Tag>
    <Tag>Тег</Tag>
    <Tag color="red">Тег</Tag>
    <Tag color="gray" size="s">Тег</Tag>
    <Tag color="green">Тег</Tag>
    <Tag color="primary" size="s" href='#'>Тег</Tag>
    <Rating rating={rating} isEditable={true} setRating={setRating}/>
    <Input placeholder='тест'/>
    <div>
    <Textarea placeholder='test'/></div>
  </>
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {firstCategory})

    return {
      props: {
        menu,
        firstCategory
      }
    }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}