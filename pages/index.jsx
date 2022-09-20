import { useMemo, useState, useEffect } from "react"
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import AnimatedBg from "../components/AnimatedBg";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Join from "../sections/Join";

export default function Home() {

  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    const Splitting = require('Splitting');
    Splitting({ by: "chars" });
  }, [])

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChangeTransitionEnd', allowScroll);
    }
  }, [swiper])

  const options = useMemo(() => (
    {
      direction: 'vertical',
      modules: [Navigation, Pagination, Mousewheel],
      mousewheel: true,
      speed: 1000,
    }
  ))

  const allowScroll = (swiper) => {
    var activeIndex = swiper.activeIndex;
    var activeSlide = swiper.slides[activeIndex];
    var { scrollHeight, clientHeight } = activeSlide;
    const diff = scrollHeight - clientHeight;
    if (activeSlide.scrollTop === 0) activeSlide.scrollTop = 1;
    else if (activeSlide.scrollTop === diff) activeSlide.scrollTop = diff - 1;
    if (diff > 0) {
      const findScroll = (e) => {
        const scrollUp = e.deltaY < 0;
        if (
          (scrollUp || e.type === "touchmove") &&
          activeSlide.scrollTop <= 0
        ) {
          swiper.mousewheel.enable();
          swiper.allowTouchMove = true;
          activeSlide.removeEventListener("wheel", findScroll);
          activeSlide.removeEventListener("touchmove", findScroll);
        } else if (
          (!scrollUp || e.type === "touchmove") &&
          activeSlide.scrollTop >= diff
        ) {
          swiper.mousewheel.enable();
          swiper.allowTouchMove = true;
          activeSlide.removeEventListener("wheel", findScroll);
          activeSlide.removeEventListener("touchmove", findScroll);
        }
      };
      activeSlide.addEventListener("wheel", findScroll);
      activeSlide.addEventListener("touchmove", findScroll);
      swiper.mousewheel.disable();
      swiper.allowTouchMove = false;
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedBg />
      <>
        <Swiper onSwiper={setSwiper} {...options}>
          <SwiperSlide>
            {({ isActive }) => (
              <Hero isActive={isActive} />
            )}
          </SwiperSlide>
          <SwiperSlide className="scroll">
            {({ isActive }) => (
              <Features isActive={isActive} />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <Join isActive={isActive} />
            )}
          </SwiperSlide>
        </Swiper>
      </>
    </>
  )
}
