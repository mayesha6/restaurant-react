// import React from 'react'
import Logo from "../../assets/img/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const FooterLinks = [
    {
        title:"Home",
        link:"/#"
    },
    {
        title:"About",
        link:"/#about"
    },
    {
        title:"Contact",
        link:"/#contact"
    },
    {
        title:"Blog",
        link:"/#blog"
    },
]
const Footer = () => {
  return (
    <section>
        <div className="container grid md:grid-cols-3 py-10">
            {/* company details  */}
            <div className="py-8">
                <a href="#">
                    <img src={Logo} alt="LOGO" className="w-10" />
                </a>
                <div className="space-y-5">
                    <p className=" pt-2 opacity-60">We serves best food for you.</p>
                    <div>
                        <button href="https://www.youtube.com/" target="_blank" className="primary-btn ">Visit youtube channel</button>
                    </div>
                </div>
            </div>
            {/* footer links  */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                <div className="py-8">
                    <h1 className="capitalize text-xl font-semibold mb-5 sm:text-left">
                        important links
                    </h1>
                    <ul className="space-y-5">
                        {
                            FooterLinks.map((link,index)=>(
                                <li key={index}>
                                    <a href={link.link} className="hover:text-primary duration-300">{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Quick links  */}
                <div className="py-8">
                    <h1 className="capitalize text-xl font-semibold mb-5 sm:text-left">
                        Quick links
                    </h1>
                    <ul className="space-y-5">
                        {
                            FooterLinks.map((link,index)=>(
                                <li key={index}>
                                    <a href={link.link} className="hover:text-primary duration-300">{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* company address section  */}
                <div className="py-8 col-span-2 sm:col-auto">
                    <h1 className="capitalize text-xl font-semibold sm:text-left mb-5">
                        address
                    </h1>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaFacebook className="text-3xl hover:text-primary duration-300"/> 
                        </a>
                        <a href="#">
                            <FaInstagram className="text-3xl hover:text-primary duration-300"/> 
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl hover:text-primary duration-300"/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* copyright section  */}
        <div className="bg-primary">
            <div className="font-poppins font-semibold text-light text-xs md:text-sm container py-4 flex justify-between">
                <p>@2024 all rights reserved Inc.</p>
                <div className="flex justify-center items-center gap-4 capitalize ">
                    <a href="#">privacy</a>
                    <a href="#">accessibility</a>
                    <a href="#">terms</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer