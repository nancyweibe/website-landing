import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"
import VisibilitySensor from '../../utils/react-visibility-sensor'

const FeaturesMobile1 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)
  const [step, setStep] = useState(0)
  const videoRef = useRef(null)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)
  const videoRef4 = useRef(null)
  const ref = useRef(null)
  const lastPos = useRef(0)
  const sStep = useRef(0)
  const del = useRef(0)

  useEffect(() => {
    if (isActive) {
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

      videoRef1.current.play()
      //videoRef2.current.play()
      //videoRef3.current.play()
      //videoRef4.current.play()
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile}`}>

      <div className={`${styles.titleContainerMobile}`}>
        <Container>
          <Row>
            <Col className="position-relative">
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
      <div className={`${styles.blocksMobile} mt-5`}>
        <VisibilitySensor minTopValue={100} partialVisibility={true}>
          {({ isVis }) =>
            <Container>

              <Col md={6}>
                <div className={`${styles.phoneM1}`}>
                  <Phone isActive={isVis}>
                    <video
                      ref={videoRef1}
                      width="200"
                      height="433"
                      muted="muted"
                    >
                      <source src="/animations/screen-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Phone>
                </div>
                <div className="position-relative">
                  <div className={`${styles.blockShapeMobile}`}>
                    <Shape isSquare play={isVis} />
                  </div>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${isVis ? 'play' : ''}`}><div data-splitting>TRUST</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${isVis ? 'play' : ''} ${isVis ? 'play2' : ''} mt-4`}>
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
              </Col>
            </Container>
          }
        </VisibilitySensor>

        <div className={`${styles.blocksInner} s${step}`}>
          <Container className="position-relative">

            <Row className="position-relative">
              <Col className={`position-relative`} md={6}>
                <div className={`${styles.colum1} ${styles.blockInner} offset2 ${(step == 2 && play5) ? 'play' : ''}`}>

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

export default FeaturesMobile1;