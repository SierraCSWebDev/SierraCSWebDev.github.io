import './footer.css'

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div>
                    <p>
                    5100 Sierra College Blvd<br></br>
                    Rocklin, CA 95677<br></br><br></br>
                    &copy Neil Enterprises
                    </p>
                </div>

                <div className='contact'>
                    <ul>
                        <li><a href='https://discord.gg/4CUhxRnsty' target='_blank'><img src='/icons8-discord.svg'/></a></li>
                        <li><a href='https://www.instagram.com/sierracsclub?igsh=MmVlMjlkMTBhMg%3D%3D&utm_source=qr' target='_blank'><img src="/icons8-instagram.svg"/></a></li>
                        <li><a href='' target='_blank'><img src="/icons8-twitterx.svg"/></a></li>
                        <li><a href='' target='_blank'><img src="/icons8-youtube.svg"/></a></li>
                        <li><a href='https://github.com/SierraCSWebDev/WebsiteProject' target='_blank'><img src="/icons8-github.svg"/></a></li>
                        <li><a href='' target='_blank'><img src="/icons8-gmail.svg"/></a></li>
                    </ul>
                    <p>sierracompsci@gmail.com</p>
                </div>

            </footer>
            
        </>
    )
}

export default Footer
