import React from 'react'
import { About, Blog, Footer, Header, Services } from './containers'
import { Navbar, Particlebg, Newsletter} from './components'
import './app.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Particlebg></Particlebg>
        <Navbar></Navbar>
        <Header></Header>
        <div className='backgound_plain'>
          <About></About>
          <Services></Services>
          <Newsletter></Newsletter>
          <Blog></Blog>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
