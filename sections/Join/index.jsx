import { useEffect, useState } from "react";
import styles from "./Join.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

const Join = ({ isActive }) => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [playPhones, setPlayPhones] = useState(false)

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setPlayPhones(true)
      }, 200)

      setTimeout(() => {
        setPlaySplitting(true)
      }, 500)

      setTimeout(() => {
        setPlay(true)
      }, 1000)
    }
  }, [isActive])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${styles.col1}`} md={12}>
            <h1 className={`${styles.heading} text-center ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>JOIN THE WORLD'S</div>
              <div className="d1" data-splitting>LARGEST AND SAFEST</div>
              <div className="d2" data-splitting>FINANCIAL COMMUNITY</div>
            </h1>
            <div className={`${styles.markets} ${play ? 'play' : ''}`}>
              <div className="entry-s-1">
                <Button variant="info">
                  <img style={{ width: "146px", height: "auto", margin: "0 1rem" }} src="/images/muunifi.png" alt="" />
                </Button>
              </div>
              <div className="entry-s-2">
                <Button variant="info">
                  <img src="/images/google-play.png" alt="" />
                </Button>
              </div>
              <div className="entry-s-3">
                <Button variant="info">
                  <img src="/images/app-store.png" alt="" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  )
}

export default Join;