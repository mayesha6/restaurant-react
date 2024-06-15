// import React from 'react'
import Slider from "react-slick";
import Pizza from "../../assets/img/pizza.png"
import Pasta from "../../assets/img/pasta.png"
import Noodles from "../../assets/img/noodles.png"
import Burger from "../../assets/img/burger.png"
import Soup from "../../assets/img/soup.png"

const menuData = [
    {
        id:1,
        name:"Burger",
        price:"$250",
        img:Burger,
    },
    {
        id:2,
        name:"Soup",
        price:"$150",
        img:Soup,
    },
    {
        id:3,
        name:"Pizza",
        price:"$550",
        img:Pizza,
    },
    {
        id:4,
        name:"Pasta",
        price:"$180",
        img:Pasta,
    },
    {
        id:5,
        name:"Noodles",
        price:"$250",
        img:Noodles,
    },
]
const OurMenu = () => {
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
  return <section className="bg-primary text-light py-10 ">
        <div className="container">
            {/* title  */}
            <div className="text-center pb-10">
                <h2 data-aos="fade-up" className="capitalize text-2xl lg:text-[2rem] font-cursive font-semibold">Our menu</h2>
                <p data-aos="fade-up" data-aos-delay="200" className="font-poppins text-xs pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam necessitatibus recusandae animi in magnam dolore facere.</p>
                {/* <img src={Burger} alt="" /> */}
            </div>
            
            {/* slider section  */}
            <div data-aos="zoom-in" data-aos-delay="300">
                <Slider {...settings}>
                    {
                        menuData.map((menu,index)=>(
                             <div key={index} className="mb-10">
                                <div className="flex flex-col justify-center items-center gap-4 mx-4 p-6 rounded-xl">
                                    {/* image section  */}
                                    <div className="h-[250px] flex justify-center items-center">
                                        <img src={menu.img} alt="" className="rounded-full w-[250px] shadow-1"/>
                                    </div>
                                    {/* content section  */}
                                    <div className="flex flex-col items-center gap-4">
                                        <div>
                                            <h2>{menu.name}</h2>
                                            <p>{menu.price}</p>
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
  
}

export default OurMenu