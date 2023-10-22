import { Link } from 'react-router-dom';

function Navbar() {
    let linkNav = [
        {name: "Home", link: "/"},
        {name: "Gallery", link: "/"},
        {name: "About", link: "/"},
    ];

    return (
        <div>
            <div>
                <div>
                    <span>
                        hola
                    </span>
                </div>
                <ul>
                    {linkNav.map((li) => (
                        <li key={li.name}>
                            <Link to={li.link}>{li.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
