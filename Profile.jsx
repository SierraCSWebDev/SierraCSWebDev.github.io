import './Profile.css';

const Card = (props) => {
    return(
        <>
            <h1>{props.name}</h1>
        </>
    )
}

function Profile(){
    return(
        <>
            <div className="card">
                <Card
                    name="John"
                />
            </div>
        </>
    )
    
}

export default Profile