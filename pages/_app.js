import 'swiper/css'
import "../styles/main.scss"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Header from "../components/Header";

function App({ Component, pageProps }) {

  return <>
    <Header />
    <Component {...pageProps} />
  </>

}

export default App
