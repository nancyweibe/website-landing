import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Lottie from 'lottie-web'
import screen1AnimationData from '../../public/animations/screen-1.json'
import screen2AnimationData from '../../public/animations/screen-2.json'
import screen3AnimationData from '../../public/animations/screen-3.json'
import screen4AnimationData from '../../public/animations/screen-4.json'

let screen1Animation = null;
let screen2Animation = null;
let screen3Animation = null;
let screen4Animation = null;

const Phone = ({ step, isActive }) => {

  const screen1AnimationContainer = useRef(null);
  const screen2AnimationContainer = useRef(null);
  const screen3AnimationContainer = useRef(null);
  const screen4AnimationContainer = useRef(null);

  useEffect(() => {
    if (!screen1AnimationContainer.current.querySelector("svg")) {
      screen1Animation = Lottie.loadAnimation({
        container: screen1AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen1AnimationData,
        onSegmentStart: () => { console.log(1) }
      })
    }
    if (!screen2AnimationContainer.current.querySelector("svg")) {
      screen2Animation = Lottie.loadAnimation({
        container: screen2AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen2AnimationData,
        onSegmentStart: () => { console.log(1) }
      })
    }
    if (!screen3AnimationContainer.current.querySelector("svg")) {
      screen3Animation = Lottie.loadAnimation({
        container: screen3AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen3AnimationData,
        onSegmentStart: () => { console.log(1) }
      })
    }
    if (!screen4AnimationContainer.current.querySelector("svg")) {
      screen4Animation = Lottie.loadAnimation({
        container: screen4AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen4AnimationData,
        onSegmentStart: () => { console.log(1) }
      })
    }
  }, [])

  useEffect(() => {
    if (step == 1) {
      setTimeout(() => {
        screen1Animation.play()
      }, 3500)
    }
    if (step == 2) {
      setTimeout(() => {
        screen2Animation.play()
      }, 2000)
    }
    if (step == 3) {
      setTimeout(() => {
        screen3Animation.play()
      }, 2000)
    }
    if (step == 4 || step == 5) {
      setTimeout(() => {
        screen4Animation.play()
      }, 2000)
    }
  }, [step])

  return (
    <div className={`${styles.phone} s${step} ${isActive ? 'active' : ''}`}>
      <div className={`${styles.phoneBg} ${step == 2 ? 'hide' : ''}`}>
        <Image
          src="/images/phone.png"
          alt="phone bg"
          width={331}
          height={671}
        />
      </div>
      <div className={`${styles.videoContainer}`}>
        <div className={`${styles.phoneVideo1} ${step == 1 || step == 0 ? 'active' : ''}`} ref={screen1AnimationContainer}></div>
        <div className={`${styles.phoneVideo2} ${step == 2 ? 'active' : ''}`} ref={screen2AnimationContainer}></div>
        <div className={`${styles.phoneVideo3} ${step == 3 ? 'active' : ''}`} ref={screen3AnimationContainer}></div>
        <div className={`${styles.phoneVideo4} ${step == 4 ? 'active' : ''}`} ref={screen4AnimationContainer}></div>
      </div>
    </div>
  )
}

export default Phone;