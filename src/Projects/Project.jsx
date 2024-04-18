import './project.css'

function ProjectCard(props){
    return(
        <>
            <div className='project'>
                <img src={props.icon}/>
                <h2>{props.heading}</h2>
                <p>{props.info}</p>
            </div>
        </>
    )
}

function Project(){
    return(
        <>

            <div className='bg'>
                <h1>Club Projects</h1>
            </div>
            <h1 id='title'>Our Projects</h1>
            <div className='club-projects'>
                <ProjectCard icon="/webdev.png" heading="Club Website" info="Build a website for the club. The goal is if someone asks about the club, we should
                            be able to share the link and they can learn everything about what we do, when we meet,
                            how to join, and what we've been up to."/>

                <ProjectCard icon="/gamedev.png" heading="Game Development" info="Learn the game engine Unity to build a video game. If you are interested in game development, join this group to learn more!"/>

                <ProjectCard icon="/ml.png" heading="Machine Learning" info="Join to learn about Machine Learning with the Python programming language!"/>

                <ProjectCard icon="/scpe.png" heading="Competitive Programming" info="Learn to solve coding problems on LeetCode and
                            prepare for upcoming Competitive Programming Contest."/>

                <ProjectCard icon="/llm.png" heading="Sierra LLM" info="Build a Large Language Model, like ChatGPT, focused on helping Sierra College
                            students find information about classes and transferring."/>

                <ProjectCard icon="/physics.png" heading="Physics Homework Platform" info="The physics department uses a mandatory $100+ homework platform and we want to create a
                            new one which professors can manage directly, make new problems, and most importantly free
                            for students. We are joining with the physics professors to make this happen."/>
            </div>
        </>
    )
}

export default Project