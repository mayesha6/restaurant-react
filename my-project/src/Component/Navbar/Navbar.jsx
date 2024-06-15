import { useState } from 'react'
import Logo from "../../assets/img/logo.png";
import { FiAlignJustify } from "react-icons/fi";
const Menu = [
    {
        id:1,
        name:"burger",
        link:"#"
    },
    {
        id:2,
        name:"pizza",
        link:"#"
    },
    {
        id:3,
        name:"soup",
        link:"#"
    },
    {
        id:4,
        name:"noodles",
        link:"#"
    },
    {
        id:5,
        name:"pasta",
        link:"#"
    },
]
const Navbar = () => {
   // eslint-disable-next-line no-undef
    const [open, setOpen]=useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
  return (
    <header className="bg-lightBlue">
        <div className="container">
            <div className="flex justify-between items-center py-2">
                {/* logo  */}
                <div data-aos="fade-down" data-aos-once="true">
                    <a href="#">
                        <img src={Logo} alt="LOGO" className="w-10" />
                    </a>
                </div>
                {/* menu  */}
                <div  data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
                    <ul className="hidden lg:flex gap-20">
                        {
                            Menu.map((menu)=>(
                                <li key={menu.id} className="capitalize">
                                    <a href={menu.link} className='hover:text-primary font-semibold font-poppins duration-300'>{menu.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* dropdown button for menu  */}
                <div className="lg:hidden relative">
                    <button onClick={handleOpen}> {/*  */}
                        <FiAlignJustify/>
                    </button>
                    {open && (
                        <div>
                            <ul className="bg-white  rounded-md shadow-md absolute right-0 top-6 z-50">
                                {
                                    Menu.map((menu)=>(
                                        <li key={menu.id} className="capitalize">
                                            <a href={menu.link} className='hover:bg-primary px-5 py-2 block rounded-md hover:text-white font-semibold font-poppins'>{menu.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar