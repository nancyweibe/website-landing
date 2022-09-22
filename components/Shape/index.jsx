import { useEffect } from "react";
import styles from "./Shape.module.scss"

const Shape = ({play}) => {

  useEffect(()=>{
    if(play) {

    }
  }, [play])

  return (
    <svg className={`${styles.root} ${play ? 'play' : ''}`} width="1241" height="552" viewBox="0 0 1241 552" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.836792" width="1240" height="550" rx="133.5" fill="white" fillOpacity="0.1" stroke="white" />
    </svg>
  )
}

export default Shape;