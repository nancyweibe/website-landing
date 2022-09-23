import { useState, useEffect } from "react"
import 'swiper/css'
import "../styles/main.scss"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Header from "../components/Header";
import styles from "./Page.module.scss";
import AnimatedBg from "../components/AnimatedBg";
import { useRouter } from "next/router";
import Loader from '../components/Loader'

function App({ Component, pageProps }) {

  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  const start = (e) => {
    setIsLoaded(isLoaded)
  };
  const end = (e) => {
    setIsLoaded(true)
  };

  useEffect(() => {
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    setIsLoaded(true)

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [])

  return <>
    <Loader isLoaded={isLoaded} />
    <Header isActiveMobile={isActiveMobile} setIsActiveMobile={setIsActiveMobile} />
    {router.pathname != "/_error" && <AnimatedBg />}
    <div className={`${styles.root} ${isActiveMobile ? 'active-mobile' : ''}`} >
      <Component {...pageProps} />
    </div>
  </>

}

export default App
