import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import comics from "./assets/comics.js";
import headerLink from "./assets/headerLink.js"

function App() {
  return (
    <>
      <Header menuItems={headerLink} />
      <Main comicsList={comics} />
      <Footer />
    </>
  )
}

export default App
