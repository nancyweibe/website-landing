import { useState } from "react"
import 'swiper/css'
import "../styles/main.scss"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Header from "../components/Header";
import styles from "./Page.module.scss";
import AnimatedBg from "../components/AnimatedBg";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {

  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const router = useRouter()

  return <>
    <Header isActiveMobile={isActiveMobile} setIsActiveMobile={setIsActiveMobile} />
    {router.pathname != "/_error" && <AnimatedBg />}
    <div className={`${styles.root} ${isActiveMobile ? 'active-mobile' : ''}`} >
      <Component {...pageProps} />
    </div>
  </>

}

export default App
