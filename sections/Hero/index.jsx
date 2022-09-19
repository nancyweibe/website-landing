import styles from "./Hero.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";

const Hero = () => {

  return (
    <section className={`${styles.root}`}>
      <Header />
      <Container>
        <Row>
          <Col className={`${styles.col1}`} md={6}>
            <h1>
              INVESTING MADE SIMPLE
            </h1>
            <div className={`${styles.markets}`}>
              <Button variant="info">
                <img src="/images/google-play.png" alt="" />
              </Button>
              <Button variant="info">
                <img src="/images/app-store.png" alt="" />
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${styles.illustration}`}>
              <img className={`${styles.img1}`} src="/images/hero-1.png" alt="phone" />
              <img className={`${styles.img2}`} src="/images/hero-2.png" alt="phone" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;