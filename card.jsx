import './App.css';
import './card.css';

function Member(props) {
    return(
        <>
            <div className="member-card">
            
                <img src={props.pfp}/>
                <h3>{props.name}</h3>
            
            </div>
        </>
    )
}

function Statement(props){
    return(
        <>
            <div className='statement'>
                <img src={props.pfp}/>
                <h2>{props.name}</h2>
                <h4>{props.statement}</h4>
            </div>
        </>
    )
}

function Card() {
    return(
        <>
            <div className='team'>
                <h1>MEET THE TEAM</h1>
            </div>

            <div className='mission'>
                <h1>Our Mission</h1>
                <p>
                    The Sierra College Computer Science Club (SCCSC) brings together and empowers students interested
                    in Computer Science and other related majors. We highly encourage students coming from diverse
                    backgrounds to consider this opportunity to get involved in their community, increase their chances
                    at internships, and hear the stories of guest speakers in the profession.
                </p>
            </div>

            

            <div id='wwd'>
                <h1>What We Do:</h1>
                <h3>Creating community, opportunity, and programming experience for individuals interested in Computer Science</h3>
                <ul>
                    <li><h3>Workshops</h3></li>
                    <li><h3>Guest Speakers</h3></li>
                    <li><h3>Competitions</h3></li>
                    <li><h3>Social Events</h3></li>
                </ul>
            </div>


            <div className="card">
                <h1 className="heading">Members</h1>
                <div className="member">
                    <Member pfp="/club-icon.svg" name="DV"/>
                    <Member pfp="/club-icon.svg" name="Dahlia"/>
                    <Member pfp="/club-icon.svg" name="Theresa"/>
                    <Member pfp="/club-icon.svg" name="Ben"/>
                    <Member pfp="/vicky.jpg" name="Vicky"/>
                    <Member pfp="/shawyan.jpg" name="Shawyan"/>
                    <Member pfp="/sparsh.JPG" name="Sparsh"/>
                    <Member pfp="/marcus.jpg" name="Marcus"/>
                    <Member pfp="/seaven.jpg" name="Seaven"/>
                    <Member pfp="/club-icon.svg" name="Justin"/>
                </div>
            </div>

            <div className='Statements'>
                <Statement pfp="./neil.jpeg" name="Neil" statement="Create a Computer Science community at Sierra."/>
                <Statement pfp="./jason.jpg" name="Jason" statement="Share knowledge and challenge each other in new ways of thinking."/>
                <Statement pfp="./club-icon.svg" name="Austin" statement="Allow Computer Science students the opportunity to create personal projects."/>
                <Statement pfp="./club-icon.svg" name="Alan Turing" statement="Allow Computer Science students to gain experience working in a team."/>
                <Statement pfp="./club-icon.svg" name="Nathan" statement="Building professional networking connections with industry professionals and alumni."/>
                <Statement pfp="./club-icon.svg" name="Theresa" statement="Fostering curiosity, ingenuity, and creativity in students 
                about Computer Science through open opportunities."/>
            </div>
            
        </>
    );
}

export default Card