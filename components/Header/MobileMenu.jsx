import styles from './Header.module.scss'
import Link from 'next/link';
import { IconFacebook, IconTwitter } from "../Icon"

const linksTerms = [
  { name: "Terms and conditions", link: "terms" },
  { name: "Privacy policy", link: "privacy" },

]

const MobileMenu = ({ active, links, setIsActiveMobile }) => {

  return (
    <div className={`${styles.mobileNavigationContainer} ${active ? "active" : ""}`}>
      <div className={styles.mobileNavigation}>
        <ul className={`${active ? 'play' : ''}`}>
          {links.map((link, i) => (
            <li onClick={() => setIsActiveMobile(false)} key={`ml-${i}`} className={`d${i}`} data-splitting><Link href={link.link}>{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className={`${styles.socials} ${active ? 'active' : ''}`}>
          <span>Our Social Media:</span>
          <div className={styles.socialInner}>
            <a href="https://www.linkedin.com/company/muunifi-com/" target="blank"><IconFacebook /></a>
            <a href="https://twitter.com/MuunifiSocial" target="blank"><IconTwitter /></a>
          </div>
        </div>
        <div className={`${styles.mobileTermsNavigation} ${active ? 'active' : ''}`}>
          <ul>
            {linksTerms.map((link, i) => (
              <li key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;