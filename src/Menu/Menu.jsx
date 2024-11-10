import { Link, Outlet } from 'react-router-dom';
import './Menu.css';

function Menu(){
    return(
        <>
        <body>
            <div className="invisible">

            </div>

            <div className="box">
                <ul className='menu'>
                    <li className='top-corner'>
                        <Link to='/'><img src="/club-icon.svg"/></Link>
                        <Link to='/'>Sierra CS Club</Link>
                    </li>

                    <li className='dropdown'>
                        <li>Menu</li>
                        <div className='content'>
                            <ul className='list'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about-us'>About Us</Link>
                                </li>
                                <li>
                                    <Link to=''>Events</Link>
                                </li>
                                <li>
                                    <Link to='/project'>Projects</Link>
                                </li>
                                <li>
                                    <Link to=''>Tutoring</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </body>
        
        </>
    )
}

export default Menu
