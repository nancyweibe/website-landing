import { useEffect } from "react"
import Head from 'next/head'
import TermsViewer from "../sections/TermsViewer";
import Join from "../sections/Join";
import VisibilitySensor from '../utils/react-visibility-sensor'

export default function Privacy() {

  useEffect(() => {
    const Splitting = require('splitting');
    Splitting({ by: "chars" });
  }, [])

  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <meta name="description" content="Privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VisibilitySensor minTopValue={100} partialVisibility={true}>
        {({ isVisible }) =>
          <TermsViewer isActive={isVisible} />
        }
      </VisibilitySensor>
      <VisibilitySensor minTopValue={100} partialVisibility={true}>
        {({ isVisible }) =>
          <Join isActive={isVisible} />
        }
      </VisibilitySensor>
    </>
  )
}