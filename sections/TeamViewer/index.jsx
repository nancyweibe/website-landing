import { useEffect, useState, useRef } from "react";
import styles from "./TeamViewer.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import ts from "../../styles/global/typography.module.scss"
import Member from "./Member";

const team = [
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  },
  {
    name: "Cameron Williamson",
    role: "Senior Administration Officer",
    image: "cameron-williamson.png"
  },
  {
    name: "Wade Warren",
    role: "Programme Director",
    image: "wade-warren.png"
  }
]

const TeamViewer = ({ isActive, setCanSlide }) => {

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
          <Col lg={4}>
            <h1 className={`${ts.title} mb-5 ${play1 ? 'play' : ''}`}>
              <div data-splitting>Team</div>
            </h1>
            <div className={`${play2 ? 'play' : ''} mb-5`}>
              <p className={`${ts.textRegular} entry-d-1`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          {team.map((member, i) => (
            <Col className={`${styles.col}`} key={`mi-${i}`} md={6} lg={4}>
              <Member {...member} isActive={isActive} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TeamViewer;