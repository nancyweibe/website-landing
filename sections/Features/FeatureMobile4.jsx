import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"

const FeatureMobile4 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const videoRef1 = useRef(null)
  const ref = useRef(null)
  let tmr = null

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setPlay1(true)
      }, 500)

      setTimeout(() => {
        setPlay2(true)
      }, 1000)

      setTimeout(() => {
        setPlay3(true)
      }, 1500)

      setTimeout(() => {
        setPlay5(true)
      }, 2500)

      videoRef1.current.play()

      tmr = setInterval(() => {
        setPlay4(c => !c)
      }, 5000)

      return () => clearInterval(tmr)
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile4}`}>
      <div className={`${styles.blocksMobile} mt-5`}>
        <Container>
          <Col>
            <div className={`${styles.mobile4Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''}`}><div data-splitting>PERSONAL GROWTH</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <ul className={`${styles.list} mobile ${(play5) ? 'play' : ''}`}>
                      <li><IconAllow /><span>Expand your mindset</span></li>
                      <li><IconAllow /><span>Challange your views</span></li>
                      <li><IconAllow /><span>Explore new ideas</span></li>
                      <li><IconAllow /><span>EVOLVE AND GROW AS AN INVESTOR</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.phoneM4} ${play3 ? 'play' : ''}`}>
              <Phone isActive={play1}>
                <video
                  ref={videoRef1}
                  width="200"
                  height="433"
                  muted="muted"
                >
                  <source src="/animations/screen-4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Phone>
            </div>
          </Col>
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobile4;