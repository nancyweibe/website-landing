import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Phone = ({ step, isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)
  const videoRef4 = useRef(null)

  useEffect(() => {
    if (step == 1) {
      setTimeout(() => {
        videoRef1.current.play()
      }, 3500)
    }
    if (step == 2) {
      setTimeout(() => {
        videoRef2.current.play()
      }, 2000)
    }
    if (step == 3) {
      setTimeout(() => {
        videoRef3.current.play()
      }, 2000)
    }
    if (step == 4 || step == 5) {
      setTimeout(() => {
        videoRef4.current.play()
      }, 2000)
    }
  }, [step])

  return (
    <div className={`${styles.phone} s${step} ${isActive ? 'active' : ''}`}>
      <div className={`${styles.phoneBg}`}>
        <Image
          src="/images/phone.png"
          alt="phone bg"
          width={331}
          height={671}
        />
      </div>
      <div className={`${styles.videoContainer}`}>
        <video
          ref={videoRef1}
          className={`${styles.phoneVideo1} ${step == 1 ? 'active' : ''}`}
          width="298"
          height="645"
          muted="muted"
        >
          <source src="/animations/screen-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoRef2}
          className={`${styles.phoneVideo2} ${step == 2 ? 'active' : ''}`}
          width="400"
          height="695"
          muted="muted"
        >
          <source src="/animations/screen-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoRef3}
          className={`${styles.phoneVideo3} ${step == 3 ? 'active' : ''}`}
          width="298"
          height="645"
          muted="muted"
        >
          <source src="/animations/screen-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          ref={videoRef4}
          className={`${styles.phoneVideo4} ${(step == 4 || step == 5) ? 'active' : ''}`}
          width="298"
          height="645"
          muted="muted"
        >
          <source src="/animations/screen-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Phone;