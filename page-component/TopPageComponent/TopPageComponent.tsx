import React from 'react'
import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({page, product, firstCategory}:TopPageComponentProps):JSX.Element => {
  return (
    <> {product && product.length} </>
  )
}
