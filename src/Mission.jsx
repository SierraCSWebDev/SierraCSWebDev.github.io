import './mission.css';


function Blog(props){
    return(

        <>
            <div className='blog-label'>
                <img src={props.pic}/>
                <h3>{props.heading}</h3>
                <div>
                    <h3>{props.date}</h3>
                </div>
            </div>
        </>

    )
}

function Mission(){

    return(
        <>

            <div className='background-pic'>
                    <h1>WELCOME TO OUR CLUB</h1>
            </div>

            <div className='news'>

                <div className="news-box">
                    <div className='title'>
                        <h2>Meeting Schedule</h2>
                    </div>
                    <div className='info'>
                        <h2>
                            Friday at 2PM
                            <br/>
                            Math Center (V-319)
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Join the Cult
                            </h2>
                        <a href="https://discord.gg/4CUhxRnsty" target='_blank'><img src="icons8-discord.svg"/></a>
                            
                    </div>
                </div>

                <div className="news-box">
                    <div className='title'>
                        <h2>Latest Blog Post</h2>
                    </div>
                    <div className='blog'>
                        <Blog pic="/club-icon.svg" heading="Computer Science Club Has Returned!" date="02/04"/>
                        <Blog pic="/odie.jpg" heading="Odie Got Adopted!" date="03/03"/>
                        <h2>Upcoming Events!</h2>
                        <Blog pic="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Intel.png"
                            heading="Two Guests From Intel Is Attending Our Club Meeting from 1:00 - 2:00 pm" date="04/19"/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Mission;
