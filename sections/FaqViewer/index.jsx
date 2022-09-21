import { useEffect, useState } from "react";
import styles from "./FaqViewer.module.scss"
import { Container, Row, Col, Collapse } from "react-bootstrap";
import { IconChevronDown } from "../../components/Icon"

const list = [
  {
    question: "Invest in other creators?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "Tools to better engage w/ community?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "Invest in other creators?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    question: "Tools to better engage w/ community?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const FaqViewer = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [open, setOpen] = useState(list.map((item, i) => false))

  useEffect(() => {
    setTimeout(() => {
      setPlaySplitting(true)
    }, 500)

    setTimeout(() => {
      setPlay(true)
    }, 1000)
  }, [])

  const isMob = () => {
    return window.innerWidth < 880;
  }

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>Faq</div>
            </h1>
            <div className={`${play ? 'play' : ''}`}>
              {list.map((item, i) => (
                <div className={`${styles.row} entry-d-${i+1} ${open[i] && item.answer ? "active" : ""}`} key={`ai-${i}`}>
                  <div className={`${styles.header}`} onClick={() => { setOpen(open[i] ? open.map((item, z) => i == z ? false : item) : open.map((item, z) => z == i ? true : isMob() ? item : false)); }}>
                    {item.question} <div className={`${styles.icon} ${open[i] ? 'active' : ''}`}><IconChevronDown /></div>
                  </div>
                  {item.answer && <Collapse in={open[i]}>
                    <div className={`${styles.inner}`}>
                      <div dangerouslySetInnerHTML={{ __html: item.answer }}>

                      </div>
                    </div>
                  </Collapse>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FaqViewer;