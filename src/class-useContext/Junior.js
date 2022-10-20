import React, { useContext } from 'react'
import UtsaviContext from '../context'

function Junior() {

    const appTheme = useContext(UtsaviContext);

  return (
    <div>Junior {appTheme.color}</div>
  )
}

export default Junior