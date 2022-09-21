import { useMemo, useState, useEffect } from "react"
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import FaqViewer from "../sections/FaqViewer";
import Join from "../sections/Join";
import VisibilitySensor from '../utils/react-visibility-sensor'
import { allowScroll } from "../utils"

export default function FAQ() {

  const [swiper, setSwiper] = useState(null)
  const [w, setW] = useState(null)

  useEffect(() => {
    const Splitting = require('splitting');
    Splitting({ by: "chars" });
    setW(window)
  }, [])

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChangeTransitionEnd', allowScroll);
    }
    if (swiper?.__swiper__) {
      allowScroll(swiper)
    }
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
        <title>FAQ</title>
        <meta name="description" content="FAQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Swiper onSwiper={setSwiper} {...options}>
          <SwiperSlide className="scroll">
            {({ isActive }) => (
              <VisibilitySensor minTopValue={100} partialVisibility={true}>
                {({ isVisible }) =>
                  <FaqViewer isActive={w?.innerWidth < 991 ? isVisible : isActive} />
                }
              </VisibilitySensor>
            )}
          </SwiperSlide>
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
