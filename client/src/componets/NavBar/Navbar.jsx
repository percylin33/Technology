import { Link } from 'react-router-dom';


function Navbar() {
    let linkNav = [
        {name: "Home", link: "/home"},
        {name: "Gallery", link: "/"},
        {name: "About", link: "/"},
    ];

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between  bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text 3xl text-indigo-600 mr-1 pt-2'>
                        Ecommerce
                    </span>
                </div>
                <ul className='md:flex md:items-center'>
                    {linkNav.map((li) => (
                        <li key={li.name} className='md:ml-8 text-xl'>
                            <Link to={li.link} className='text-gray-800 hover:text-gray-400 duration-500'>{li.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
