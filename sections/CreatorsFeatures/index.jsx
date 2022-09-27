import { useEffect, useState, useRef } from "react";
import styles from "./CreatorsFeatures.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"

const CreatorsFeatures = ({ isActive, setCanSlide }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (isActive) {

      setTimeout(() => {
        setPlay1(true)
      }, 200)

      setTimeout(() => {
        setPlay2(true)
      }, 500)

      setTimeout(() => {
        setPlay4(true)
      }, 1000)

    }
  }, [isActive])

  return (
    <section ref={ref} className={`${styles.root}`}>
      <Container>
        <Row className="pb-5">
          <Col className={`${styles.column1} ${play2 ? 'play' : ''}`} md={6}>
            <div className={`${styles.blockShape}`}>
              <Shape isSquare play={play4} />
            </div>
            <img className={`${styles.chart} entry-op-2`} src="/images/creators-tools.svg" alt="" />
          </Col>
          <Col md={6} className={`position-relative d-flex align-items-center ps-4 ${play4 ? 'play' : ''}`}>
            <div>
              <div className={`${styles.row} entry-d-1`}>
                <div className={`${styles.icon}`}>
                  <Image
                    src="/images/creators-icon-1.svg"
                    alt="like bg"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Tools to monetize</h3>
                  <p className={`${ts.textRegular} mb-0`}>We believe the first step in building a safe</p>
                </div>
              </div>

              <div className={`${styles.row} entry-d-2`}>
                <div className={`${styles.icon}`}>
                  <Image
                    src="/images/creators-icon-2.svg"
                    alt="like bg"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Invest in other creators</h3>
                  <p className={`${ts.textRegular} mb-0`}>We have built our platform for you</p>
                </div>
              </div>

              <div className={`${styles.row} entry-d-3`}>
                <div className={`${styles.icon}`}>
                  <Image
                    src="/images/creators-icon-3.svg"
                    alt="like bg"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Analytics to help grow your brand</h3>
                  <p className={`${ts.textRegular} mb-0`}>support and empower our creators</p>
                </div>
              </div>

              <div className={`${styles.row} entry-d-4`}>
                <div className={`${styles.icon}`}>
                  <Image
                    src="/images/creators-icon-4.svg"
                    alt="like bg"
                    width={54}
                    height={54}
                  />
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Tools to better engage w/ community</h3>
                  <p className={`${ts.textRegular} mb-0`}>It's time you stop building on someone</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={6} className="position-relative d-flex align-items-center">
            <div>
              <h2 className={`${ts.title} mb-4 ${play2 ? 'play' : ''}`}>
                <div data-splitting>Build</div>
                <div className="d1" data-splitting>Bounty</div>
              </h2>
              <div className={`${play2 ? 'play' : ''}`}>
                <p className={`${ts.textRegular} entry-op-2`}>
                  We have reserved <strong>20% of our data</strong> company in the form of bounties. We want our top creators having skin in the game. Things we look at are...
                </p>
              </div>
            </div>
          </Col>
          <Col className={`${styles.column1} ${play2 ? 'play' : ''}`} md={6}>
            <div className={`${styles.blockShape}`}>
              <Shape isSquare play={play4} />
            </div>
            <img className={`${styles.chart} entry-2`} src="/images/creators-chart.svg" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreatorsFeatures;