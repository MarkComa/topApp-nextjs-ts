import React, { useState } from 'react'
import { SearchProps } from './Search.props'
import s from "./Search.module.css"
import cn from 'classnames'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import SearchIcon from './SearchIcon.svg'
import { useRouter } from 'next/router'

export const Search = ({className, ...props}:SearchProps):JSX.Element => {
const [search, setSearch] = useState('')
const router = useRouter()

const goToSearch = () => {
  router.push({
    pathname: '/search',
    query: {
      q: search
    }
  })
}
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  }
  return (
    <div className={cn(className, s.search)} {...props}>
      <Input
        className={s.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        apparance={'primary'}
        className={s.btn}
        onClick={goToSearch}>
        {<SearchIcon/>}
      </Button>
    </div>
  )
}
