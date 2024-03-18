import './App.css';
import './card.css';

function Member() {
    return(
        <>
            <div className="member-card">
            
                <img src='./odie.jpg'></img>
                <h3>Odie</h3>
            
            </div>
        </>
    )
}

function Card() {
    return(
        <>
            <div className="card">
                <h1 className="heading">Members</h1>
                <div className="member">
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                </div>
            </div>
            
        </>
    );
}

export default Card