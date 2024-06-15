// import React from 'react'
import Slider from "react-slick";
// import {Card,CardHeader,CardBody,CardFooter,Typography,Button} from "@material-tailwind/react";
import Testimonial1 from "../../assets/img/testimonial1.jpg";
import Testimonial2 from "../../assets/img/testimonial2.jpg";
import Testimonial3 from "../../assets/img/testimonial3.jpg";
import Testimonial4 from "../../assets/img/testimonial4.jpg";
const testimonialData = [
    {
        id:1,
        name:"Soumy",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis.",
        img:Testimonial1,
    },
    {
        id:2,
        name:"Swapnil",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis.",
        img:Testimonial2,
    },
    {
        id:3,
        name:"Smorony",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis.",
        img:Testimonial3,
    },
    {
        id:4,
        name:"Mahfuzar",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio commodi rem sed dolorum corrupti provident tempore obcaecati aliquid maiores, incidunt debitis.",
        img:Testimonial4,
    },
]
const Testimonial = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
           {
            breakpoint:10000,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
           },
           {
            breakpoint:1024,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide:2,
            },
           },
           {
            breakpoint:640,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            },
           },
        ],
      };
  return (
    <section className="py-10 bg-light">
        <div className="container">
            {/* title  */}
            <div className="text-center pb-10">
                <h2 data-aos="fade-up"  className="capitalize text-2xl lg:text-[2rem] font-cursive font-semibold">testimonial</h2>
            </div>
            {/* slider section  */}
            <div data-aos="zoom-in" data-aos-delay="300">
                <Slider {...settings}>
                    {
                        testimonialData.map((tData,index)=>(
                             <div key={index} className="mb-10">
                                <div className="flex flex-col justify-center items-start gap-4 mx-4 p-6 rounded-xl shadow-lg bg-primary/10 relative">
                                    {/* image section  */}
                                    <div className="h-[80px] flex justify-center items-start">
                                        <img src={tData.img} alt="" className="rounded-full w-[80px] shadow-1"/>
                                    </div>
                                    {/* content section  */}
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="">
                                            <p className="text-xs text-gray-500">{tData.text}</p>
                                            <h2 className="font-cursive font-bold text-xl text-black/80">{tData.name}</h2>
                                            <p className="absolute top-0 right-0 text-9xl text-black/20 font-serif">,,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testimonial