import React from 'react'
import Navbar from './Main/Navbar'
import Footer from './Main/Footer'
import BackgroundImage from './Main/BackgroundImage'
import styles from '../style'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const photos = [
  'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
];

const CareerNav = () => {

  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view

  });

  const container = {
    visible: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };


  return (
    <motion.div className="bg-primary w-full overflow-hidden"
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Navbar />
      <BackgroundImage photos={photos} />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </motion.div>
  )
}

export default CareerNav