import styles from "./Footer.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import { IconFacebook, IconTwitter } from "../Icon"

const links = [
  { name: "Terms and conditions", link: "terms" },
  { name: "Privacy policy", link: "privacy" },

]

const Header = () => {

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col className="d-flex align-items-center" md={6}>
            <div className={styles.inner}>
              <div className={styles.navigation}>
                <ul>
                  {links.map((link, i) => (
                    <li key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center" md={6}>
            <div className={styles.socials}>
              <span>Our Social Media:</span>
              <a href="#" target="blank"><IconFacebook /></a>
              <a href="#" target="blank"><IconTwitter /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;