import React from 'react'

import About from "./Component/About/About"
import Footer from "./Component/Footer/Footer"
import HeroSection from "./Component/HeroSection/HeroSection"
import Navbar from "./Component/Navbar/Navbar"
import Newsletter from "./Component/Newsletter/Newsletter"
import OurMenu from "./Component/OurMenu/OurMenu"
import Testimonial from "./Component/Testimonial/Testimonial"
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  })
  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <HeroSection/>
      <About/>
      <OurMenu/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default App