// import React from 'react'
import Burger from "../../assets/img/burger.png";
// import Noodles from "../../assets/img/noodles.png";
// import Pasta from "../../assets/img/pasta.png";
// import Pizza from "../../assets/img/pizza.png";
// import Soup from "../../assets/img/soup.png";
const HeroSection = () => {
  return (
    <section className="min-h-[550px] sm:min-h-[400px] bg-lightBlue flex justify-between items-center">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-between items-center">
                {/* content  */}
                <div className="text-center sm:text-left order-2 sm:order-1">
                    <h1  data-aos="zoom-out" data-aos-delay="200" className="font-cursive font-bold text-6xl lg:text-[7rem] bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 pb-5 lg:pb-8">
                        Burger
                    </h1>
                    <p  data-aos="fade" data-aos-delay="300" className="text-sm text-dark font-poppins pb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis. Facilis blanditiis ad vel laudantium repellat quidem minus amet!
                    </p>
                    <button  data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" className="primary-btn ">view more menu</button>
                </div>
                {/* hero image  */}
                <div  data-aos="zoom-in" data-aos-duration="500" className="flex justify-center items-center lg:justify-end order-1 sm:order-2 relative">
                    <a href="#">
                        <img src={Burger} alt="Burger" className="max-w-[450px] w-full shadow-1" />
                    </a>
                    <div className="absolute top-0 left-[18%] sm:left-[35%] bg-primary/80 px-1 py-0.2 text-light font-semibold capitalize rounded">
                        <p>fresh food</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;