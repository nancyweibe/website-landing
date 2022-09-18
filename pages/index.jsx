import { useMemo, useState, useEffect } from "react"
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import AnimatedBg from "../components/AnimatedBg";

export default function Home() {

  const [swiper, setSwiper] = useState(null)

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

  const checkScroll = (evt) => {
    const slide = evt.slides[evt.activeIndex]

    console.log(slide)

    // scrollTop = slide.scrollTop(); 
    // if (scrollTop > 0 && (scrollTop + slide.height()) < slide[0].scrollHeight) {
    //     evt.stopPropagation();
    // }
  };

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
            <section>1</section>
          </SwiperSlide>
          <SwiperSlide className="scroll">
            <div>
              <h4>Scroll Container</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <section>3</section>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  )
}
