import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Navbar from './Navbar'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main >
    <Navbar />
    <Card1/>
    <Card2/>
    <Card3/>
   

  </main>,
)
