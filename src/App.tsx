import './App.css'
import Hero from './components/hero'
import Nav from './components/nav'
import Trend from './components/trendin'
import Cryptos from './components/cryptos'
import NewsLetter from './components/newsletter'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Trend />
      <Cryptos />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
