import React, { FunctionComponent } from 'react'
import { Footer, Header, Sidebar } from '.'
import { LayoutProps } from './Layout.props'
import s from './Layout.module.css'
import { AppContextProvider, IAppContext } from '../context/app.context'
import { Up } from '../components'

const Layout = ({children, ...props}: LayoutProps):JSX.Element => {
  return (
    <div {...props} className={s.container}>
      <Header className={s.header}/>    
      <Sidebar className={s.sidebar}/>
      <div className={s.body}>
      {children}
      </div>  
      <Footer className={s.footer}/>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) =>{
  return function withLayoutComponent(props: T):JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
      <Layout> 
        <Component {...props}/>
        <Up />
      </Layout>
      </AppContextProvider>

    )
  }
}