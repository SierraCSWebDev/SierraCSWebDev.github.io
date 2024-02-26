import './Header.css';

function Header(){

    const Home = "Home";
    return (
        <>
            <div id='blankhead'>
                <ul className="navbar-left">
                    <li><a href="">Sierra College CS Pog Website</a></li>
                </ul>
                <ul className="navbar">
                    <li><a href="">{Home}</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Tutoring</a></li>
                </ul>
            </div>

        </>
    )
}

export default Header