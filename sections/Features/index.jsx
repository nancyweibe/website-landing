import { useEffect, useState } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";

const Features = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)

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
      }, 1000)
    }
  }, [isActive])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col>
            <h1 className={`${styles.heading} ${play2 ? 'play' : ''}`}>
              <div data-splitting>"THE WORLD'S SAFEST</div>
              <div className="d1" data-splitting>AND BEST SOCIAL MEDIA</div>
              <div className="d2" data-splitting>BUILT FOR FINANCIAL</div>
              <div className="d3" data-splitting>COMMUNITIES</div>
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features;