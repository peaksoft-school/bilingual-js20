import React from 'react'
import { Header } from './components/Header'
import { HeaderTwo } from './components/HeaderTwo'

export const App = () => {
  return (
    <div>
      <Header role="client" />
      
      <HeaderTwo role='client'/>
    </div>
  )
}

export default App
