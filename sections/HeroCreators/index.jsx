import { useEffect, useState } from "react";
import styles from "./HeroCreators.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import ts from "../../styles/global/typography.module.scss"

const HeroCreators = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)

  useEffect(() => {
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
          <Col className={`${styles.col1}`} lg={12}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>CONTENT</div>
              <div className="d1" data-splitting>CREATORS</div>
            </h1>
            <div className={`${styles.text} ${play ? 'play' : ''}`}>
              <p className={`${ts.textRegular} text-center entry-d-1`}>We have built our platform for you. We believe the first step in building a safe ecosystem is to support and empower our creators.</p>
              <p className={`${ts.textRegular} text-center entry-d-2`}>It's time you stop building on someone else's network, come build on the network <strong>YOU</strong> own!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroCreators;