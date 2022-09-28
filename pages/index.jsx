import { useMemo, useState, useEffect } from "react"
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Join from "../sections/Join";
import VisibilitySensor from '../utils/react-visibility-sensor'
import { allowScroll } from "../utils"
import FeatureMobileTitle from "../sections/Features/FeatureMobileTitle";
import FeatureMobile1 from "../sections/Features/FeatureMobile1";
import FeatureMobile2 from "../sections/Features/FeatureMobile2";
import FeatureMobile3 from "../sections/Features/FeatureMobile3";
import FeatureMobile4 from "../sections/Features/FeatureMobile4";

export default function Home() {

  const [swiper, setSwiper] = useState(null)
  const [w, setW] = useState(null)
  const [canSlide, setCanSlide] = useState(true)

  useEffect(() => {
    setW(window)
  }, [])

  useEffect(() => {
    if (w) {
      const Splitting = require('splitting');
      Splitting({ by: "chars" });
    }
  }, [w])

  useEffect(() => {
    if (swiper) {
      canSlide ? swiper.mousewheel.enable() : swiper.mousewheel.disable();
      swiper.allowTouchMove = canSlide;
    }
  }, [canSlide])

  useEffect(() => {
    // if (swiper) {
    //   swiper.on('slideChangeTransitionEnd', allowScroll);
    // }
    if (swiper && window.innerWidth < 991 && swiper.__swiper__) swiper.destroy();
  }, [swiper])

  const options = useMemo(() => (
    {
      direction: 'vertical',
      modules: [Navigation, Pagination, Mousewheel],
      mousewheel: true,
      speed: 1000,
    }
  ))

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Swiper onSwiper={setSwiper} {...options}>
          <SwiperSlide>
            {({ isActive }) => (
              <VisibilitySensor minTopValue={100} partialVisibility={true}>
                {({ isVisible }) =>
                  <Hero isActive={w?.innerWidth < 991 ? isVisible : isActive} />
                }
              </VisibilitySensor>
            )}
          </SwiperSlide>
          {w?.innerWidth < 991 ?
            <SwiperSlide>
              {({ isActive }) => (
                <>
                  <VisibilitySensor minTopValue={100} partialVisibility={true}>
                    {({ isVisible }) => <FeatureMobileTitle isActive={isVisible} />
                    }
                  </VisibilitySensor>
                  <VisibilitySensor minTopValue={100} partialVisibility={true}>
                    {({ isVisible }) => <FeatureMobile1 isActive={isVisible} />
                    }
                  </VisibilitySensor>
                  <VisibilitySensor minTopValue={100} partialVisibility={true}>
                    {({ isVisible }) => <FeatureMobile2 isActive={isVisible} />
                    }
                  </VisibilitySensor>
                  <VisibilitySensor minTopValue={100} partialVisibility={true}>
                    {({ isVisible }) => <FeatureMobile3 isActive={isVisible} />
                    }
                  </VisibilitySensor>
                  <VisibilitySensor minTopValue={100} partialVisibility={true}>
                    {({ isVisible }) => <FeatureMobile4 isActive={isVisible} />
                    }
                  </VisibilitySensor>
                </>
              )}
            </SwiperSlide>
            :
            <SwiperSlide>
              {({ isActive }) => (
                <VisibilitySensor minTopValue={100} partialVisibility={true}>
                  {({ isVisible }) => <Features setCanSlide={setCanSlide} isActive={w?.innerWidth < 991 ? isVisible : isActive} />
                  }
                </VisibilitySensor>
              )}
            </SwiperSlide>
          }
          <SwiperSlide>
            {({ isActive }) => (
              <VisibilitySensor minTopValue={100} partialVisibility={true}>
                {({ isVisible }) =>
                  <Join isActive={w?.innerWidth < 991 ? isVisible : isActive} />
                }
              </VisibilitySensor>
            )}
          </SwiperSlide>
        </Swiper>
      </>
    </>
  )
}
