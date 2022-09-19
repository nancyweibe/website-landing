import styles from "./Header.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";

const links = [
  { name: "Team", link: "team" },
  { name: "Content Creators", link: "creators" },
  { name: "White Paper", link: "whitepaper" },
  { name: "FAQ", link: "faq" },
]

const Header = () => {

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col>
            <div className={styles.inner}>
              <Link href="/">
                <img className={styles.logo} src="/images/logo.png" alt="Logo" />
              </Link>
              <div className={styles.navigation}>
                <ul>
                  {links.map((link, i) => (
                    <li key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div className={styles.buttons}>
                <Button>Launch App</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;