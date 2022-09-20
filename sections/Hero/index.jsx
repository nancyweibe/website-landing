import { useEffect, useState } from "react";
import styles from "./Hero.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";

const Hero = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [playPhones, setPlayPhones] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayPhones(true)
    }, 200)

    setTimeout(() => {
      setPlaySplitting(true)
    }, 500)

    setTimeout(() => {
      setPlay(true)
    }, 1000)
  }, [])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${styles.col1}`} md={6}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>INVESTING</div>
              <div className="d1" data-splitting>MADE</div>
              <div className="d2" data-splitting>SIMPLE</div>
            </h1>
            <div className={`${styles.markets} ${play ? 'play' : ''}`}>
              <div className="entry-h-2">
                <Button variant="info">
                  <img src="/images/google-play.png" alt="" />
                </Button>
              </div>
              <div className="entry-h-1">
                <Button variant="info">
                  <img src="/images/app-store.png" alt="" />
                </Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${styles.illustration} ${playPhones ? 'play' : ''}`}>
              <div className={`entry-1 ${styles.img1}`}><img src="/images/hero-1.png" alt="phone" /></div>
              <div className={`entry-2 ${styles.img2}`}><img src="/images/hero-2.png" alt="phone" /></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;