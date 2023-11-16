import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
const App = () => {



  return (
    <div className="container">
      {/* <Header />
      <Footer />
      <Body></Body> */}
      <div className="header"><Header /></div>
      <div className="body"><Body /></div>
      <div className="footer"><Footer /></div>
    </div>
  )
}

export default App