import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import comics from "./assets/comics.js";
import { headerLink, shopLinks } from "./assets/headerLink.js"

function App() {
  return (
    <>
      <Header menuItems={headerLink} />
      <Main comicsList={comics} iconsArray={shopLinks} />
      <Footer />
    </>
  )
}

export default App
