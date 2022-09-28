import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"

const FeatureMobile3 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
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

      videoRef1.current.play()

      tmr = setInterval(() => {
        setPlay4(c => !c)
      }, 5000)

      return () => clearInterval(tmr)
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile1}`}>
      <div className={`${styles.blocksMobile} mt-5`}>
        <Container>
          <Col>
            <div className={`${styles.phoneM2} ${play3 ? 'play' : ''}`}>
              <Phone isActive={play1}>
                <video
                  ref={videoRef1}
                  width="200"
                  height="433"
                  muted="muted"
                >
                  <source src="/animations/screen-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Phone>
            </div>
            <div className={`${styles.mobile1Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''}`}><div data-splitting>COMMUNITY</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <p><strong>Lorem ipsum</strong> dolor sit arnet, consectetur</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                  <div className={`${ts.textRegular2}`}>
                    <p><strong>Lorem ipsum</strong> dolor sit arnet, consectetur</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobile3;