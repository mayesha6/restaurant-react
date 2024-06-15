// import React from 'react'
import NewsletterImage from "../../assets/img/newsletter.png"
const backgroundStyle={
    backgroundImage:`url(${NewsletterImage})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"contain",
    backgroundPosition:"right",
    maxHeight:"250px",
    width:"100%",
}
const Newsletter = () => {
  return (
    <section style={backgroundStyle} className="bg-primary text-light" >
        <div className=" bg-black/60 sm:bg-transparent py-10 ">
            <div className="sm:container">
            <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center h-full">
                {/* content section  */}
                <div  className="text-center sm:text-left space-y-3">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-white/90">Ready to get started</h1>
                    <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                {/* input section  */}
                <div className="pt-3.5 flex justify-center sm:justify-start">
                    <input type="text" name="" id="" className=" px-2 py-1 sm:px-4 sm:py-2 rounded-l-md ring-0 text-black/70 focus:outline-none" placeholder="Enter your Email"/>
                    <button className="bg-white text-primary pe-2 py-1 sm:px-4 sm:py-2 rounded-r-md">
                        <span className="font-semibold text-[10px] text-nowrap flex items-center sm:text-sm uppercase">Get started</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter