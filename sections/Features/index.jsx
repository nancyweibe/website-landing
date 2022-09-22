import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Phone from "./Phone";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"

const Features = ({ isActive, setCanSlide }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)
  const [step, setStep] = useState(0)
  const videoRef = useRef(null)
  const ref = useRef(null)
  const lastPos = useRef(0)
  const sStep = useRef(0)
  const del = useRef(0)

  useEffect(() => {
    if (isActive) {
      setCanSlide(false)

      ref.current.addEventListener("scroll", onScroll)

      setTimeout(() => {
        setPlay1(true)
      }, 200)

      setTimeout(() => {
        setPlay2(true)
      }, 500)

      setTimeout(() => {
        setPlay3(true)
        videoRef.current.play()
      }, 1000)
    }

    return () => ref?.current && ref.current.removeEventListener("scroll", onScroll)
  }, [isActive])

  useEffect(()=>{
    if(step == 0) {
      setCanSlide(true)
    }
    if(step == 2) {
    //if(step == 5) {
      setCanSlide(true)
    }
    if(step == 1) {
      setTimeout(() => {
        setPlay5(true)
      }, 4000)

      setTimeout(() => {
        setPlay6(true)
      }, 6000)

      setTimeout(() => {
        setPlay4(true)
      }, 2000)
    }
  }, [step])

  const onScroll = (e) => {
    const scrollTop = ref.current.scrollTop;
    const delta = scrollTop - lastPos.current
    lastPos.current = ref.current.scrollTop
    del.current = del.current + delta

    if (del.current > window.innerHeight / 4) {
      sStep.current = sStep.current < 5 ? sStep.current + 1 : sStep.current
      del.current = 0
    }
    if (del.current < -window.innerHeight / 4) {
      sStep.current = sStep.current > 0 ? sStep.current - 1 : sStep.current
      del.current = 0
    }

    //setStep(sStep.current) // Original
    setStep(sStep.current < 3 ? sStep.current : 2) // just for demo
  }

  return (
    <section ref={ref} className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className="position-relative">
            <div className={`${styles.titleContainer} s${step}`}>
              <h1 className={`${styles.heading} ${play2 ? 'play' : ''} d-none d-md-block`}>
                <div data-splitting>"THE WORLD'S SAFEST</div>
                <div className="d1" data-splitting>AND BEST SOCIAL MEDIA</div>
                <div className="d2" data-splitting>BUILT FOR FINANCIAL</div>
                <div className="d3" data-splitting>COMMUNITIES</div>
              </h1>
              <h1 className={`${styles.heading} ${play2 ? 'play' : ''} d-block d-md-none`}>
                <div data-splitting>"THE WORLD'S</div>
                <div className="d1" data-splitting>SAFEST AND</div>
                <div className="d2" data-splitting>BEST SOCIAL</div>
                <div className="d3" data-splitting>MEDIA BUILT</div>
                <div className="d4" data-splitting>FOR FINANCIAL</div>
                <div className="d6" data-splitting>COMMUNITIES</div>
              </h1>
              <div className={`${styles.likeAnimation} ${play3 ? 'active' : ''}`}>
                <div className={`${styles.likeBg}`}>
                  <Image
                    src="/images/like.svg"
                    alt="like bg"
                    width={237}
                    height={237}
                  />
                </div>
                <video
                  ref={videoRef}
                  className={`${styles.likeVideo}`}
                  width="115"
                  height="115"
                  muted="muted"
                >
                  <source src="/animations/like.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={`${styles.blocks}`}>
        <Phone step={step < 2 ? step : 1} />
        {/* <Phone step={step} /> */}
        <div className={`${styles.blocksInner} s${step}`}>
          <Container className="position-relative">
            <div className={`${styles.blockShape}`}>
              <Shape play={play4} />
            </div>
            <Row>
              <Col className="position-relative" md={6}>
              </Col>
              <Col md={6}>
                <div>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${play5 ? 'play' : ''}`}><div data-splitting>TRUST</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${play5 ? 'play' : ''} ${play6 ? 'play2' : ''} mt-4`}>
                      <p className={`${ts.textRegular}`}>
                        <strong>Who can you trust online?</strong> Followers, engagement, views, likes, etc. are not good enough. You need the full data.
                      </p>
                      <p className={`${ts.textRegular}`}>
                        Muunifi takes in over 100+ data points in our Content Analytics algorithm. You need the full picture to make an informed decision.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </section>
  )
}

export default Features;