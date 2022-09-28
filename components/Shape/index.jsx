import { useEffect } from "react";
import styles from "./Shape.module.scss"

const Shape = ({ play, isSquare, isLarge }) => {

  const w = isSquare ? 1002 : isLarge ? 1000 : 1241
  const h = isSquare ? 1002 : isLarge ? 1500 : 552

  return (
    <svg className={`${styles.root} ${isLarge ? 'large' : ''} ${play ? 'play' : ''}`} width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width={w - 2} height={h - 2} rx="133.5" fill="white" fillOpacity="0.1" stroke="white" />
    </svg>
  )
}

export default Shape;