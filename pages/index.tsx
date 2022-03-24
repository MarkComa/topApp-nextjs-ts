import React, { useState } from "react"
import { Htag, Tag } from '../components'
import { Button } from '../components'
import { P } from '../components'
import {Rating} from "../components"
import { withLayout } from "../layout/Layout"


function Home(): JSX.Element {
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
  </>
}

export default withLayout(Home)