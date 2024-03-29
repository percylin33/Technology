import { Link } from 'react-router-dom';
import ButtonSecion from '../ButtonSecion/ButtonSecion';
import { IoMenu, IoCloseCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import logo from '../../acces/logo.png'


function Navbar() {
    let linkNav = [
        {name: "Home", link: "/"},
        {name: "Gallery", link: "/gallery"},
        {name: "About", link: "/about"},
    ];
    let [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <div className='shadow-md w-full sticky  top-0 left-0'>
            <div className='md:flex bg-negro items-center justify-between  bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <img src={logo} alt="imagen logo" className='w-14 h-14' />
                    <span className='text 3xl text-cyan-500  '>
                        commerce
                    </span>
                </div>
                <div onClick={()=>setOpen(!open)} className='text-plomo text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <IoCloseCircleSharp /> : <IoMenu />}
                </div>
                <ul className={`bg-negro md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[90px] opacity-100':'top-[-490px] md:opacity-100 opacity-0'} `}>
                    {linkNav.map((li) => (
                        <li key={li.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={closeMenu}>
                            <Link to={li.link} className='text-gris hover:text-gray-400 duration-500 '>{li.name}</Link>
                        </li>
                    ))}
                    <TiShoppingCart size={30} className='mb-6 md:mb-0  md:ml-6 text-gris' onClick={closeMenu}/>
                    <ButtonSecion>
                        <Link to='/login' onClick={closeMenu}>login</Link> 
                    </ButtonSecion>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
