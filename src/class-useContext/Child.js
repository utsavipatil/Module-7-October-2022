import React, { useContext } from 'react'
import UtsaviContext from '../context'

function Child() {

  const appTheme = useContext(UtsaviContext);

  return (
    <div>Child {appTheme.theme}</div>
  )
}

export default Child