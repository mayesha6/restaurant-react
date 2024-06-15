// import React from 'react'
import Noddles from "../../assets/img/noodles.png"
const About = () => {
  return (
    <section className="min-h-[550px] sm:min-h-[550px] bg-lightBlue/70 flex justify-between items-center py-10">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between items-center">
                {/* about image  */}
                <div  data-aos="zoom-in" data-aos-delay="500" className="flex justify-center items-center lg:justify-start relative">
                    <a href="#">
                        <img src={Noddles} alt="Burger" className="max-w-[400px] w-full shadow-1" />
                    </a>
                </div>
                {/* content  */}
                <div className="text-center sm:text-left">
                    <h3 data-aos="fade-up" data-aos-delay="100" className="capitalize font-poppins font-bold text-6xl lg:text-[2rem] text-dark">
                        about
                    </h3>
                    <h2 data-aos="fade-up" data-aos-delay="200" className="capitalize font-cursive font-bold text-6xl lg:text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 pb-4">
                        fresh bowl
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-sm text-dark font-poppins pb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis. Facilis blanditiis ad vel laudantium repellat quidem minus amet!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis. Facilis blanditiis ad vel laudantium repellat quidem minus amet!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis. Facilis blanditiis ad vel laudantium repellat quidem minus amet!
                    </p>
                    <button data-aos="fade-up" data-aos-delay="400" className="primary-btn ">view more menu</button>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About