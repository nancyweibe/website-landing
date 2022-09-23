import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Phone from "./Phone";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"

const Features = ({ isActive, setCanSlide }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)
  const [step, setStep] = useState(0)
  const [isDisableScroll, setIsDisableScroll] = useState(false)
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

  useEffect(() => {

    let t1 = null
    let t2 = null
    let t3 = null
    let t4 = null
    let t5 = null
    let t6 = null

    if (t1) clearTimeout(t1)
    if (t2) clearTimeout(t2)
    if (t3) clearTimeout(t3)
    if (t4) clearTimeout(t4)
    if (t5) clearTimeout(t5)
    if (t6) clearTimeout(t6)

    if (step == 0) {
      setCanSlide(true)
      setPlay4(false)
    }
    if (step == 5) {
      setCanSlide(true)
    }
    if (step == 1) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 4000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 6000)

      t4 = setTimeout(() => {
        setPlay4(true)
      }, 3000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 2) {

      setPlay5(false)
      setPlay6(false)

      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 3) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 4) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }
  }, [step])

  const onScroll = (e) => {
    const scrollTop = ref.current.scrollTop;
    const delta = scrollTop - lastPos.current
    lastPos.current = ref.current.scrollTop
    del.current = del.current + delta

    if (del.current > window.innerHeight / 2) {
      sStep.current = sStep.current < 5 ? sStep.current + 1 : sStep.current
      del.current = 0
    }
    if (del.current < -window.innerHeight / 2) {
      sStep.current = sStep.current > 0 ? sStep.current - 1 : sStep.current
      del.current = 0
    }

    setStep(sStep.current)
  }

  return (
    <section ref={ref} className={`${styles.root}`}>

      <div className={`${styles.titleContainer} s${step}`}>
        <Container>
          <Row>
            <Col className="position-relative">
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
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`${styles.blocks} ${isDisableScroll ? 'enable' : ''} ${step > 0 ? 'active' : ''}`}>
        <Phone isActive={isActive} step={step} />
        <div className={`${styles.blocksInner} s${step}`}>
          <Container className="position-relative">
            <div className={`${styles.blockShape}`}>
              <Shape play={play4} />
            </div>
            <Row className="position-relative">
              <Col className={`position-relative`} md={6}>
                <div className={`${styles.colum1} ${styles.blockInner} offset2 ${(step == 2 && play5) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 2 && play5) ? 'play' : ''}`}><div data-splitting>EDUCATION</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 2 && play5) ? 'play' : ''} ${(step == 2 && play6) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Want to learn to be successful in investing in the markets?</strong> The best way to achieve this is to learn from those already having success.</p>
                      </div>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Our platform is built with tools to ease the learning curve.</strong></p>
                        <p>Example: Our Tagging System. Built to show you the creators frame of mind at-a-glance. It highlights Market Sector, Sentiment and Timeframe.. so you too can think like an investor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.colum1} ${styles.blockInner} ${((step == 4 || step == 5) && play5) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${((step == 4 || step == 5) && play5) ? 'play' : ''}`}><div data-splitting>EVOLVE</div></h2>
                  <div>
                    <div style={{ height: "250px" }} className={`${styles.blockParagraph1} ${((step == 4 || step == 5) && play5) ? 'play' : ''} ${((step == 4 || step == 5) && play6) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur</strong></p>
                        <ul className={`${styles.list} ${((step == 4 || step == 5) && play5) ? 'play' : ''}`}>
                          <li><IconAllow /><span>Expand your mindset</span></li>
                          <li><IconAllow /><span>Challange your views</span></li>
                          <li><IconAllow /><span>Explore new ideas</span></li>
                          <li><IconAllow /><span>EVOLVE AND GROW AS AN INVESTOR</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="position-relative" md={6}>
                <div className={`${styles.colum2}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 1 && play5) ? 'play' : ''}`}><div data-splitting>TRUST</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 1 && play5) ? 'play' : ''} ${(step == 1 && play6) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Who can you trust online?</strong> Followers, engagement, views, likes, etc. are not good enough. You need the full data.</p>
                      </div>
                      <div className={`${ts.textRegular}`}>
                        <p>
                          Muunifi takes in <strong>over 100+ data points</strong> in our Content Analytics algorithm. You need the full picture to make an informed decision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.colum2} ${styles.blockInner} offset2 ${(step == 3 && play5) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 3 && play5) ? 'play' : ''}`}><div data-splitting>COMMUNITY</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 3 && play5) ? 'play' : ''} ${(step == 3 && play6) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Lorem ipsum</strong> dolor sit arnet, consectetur</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero.
                        </p>
                      </div>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Lorem ipsum</strong> dolor sit arnet, consectetur</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero.
                        </p>
                      </div>
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