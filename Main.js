import React from 'react'

export default function Main()
{

    const handleClickInstagram = url => {
        window.open(url, 'https://www.instagram.com/gdscumd/');
    }

    const handleClickLinkedin = url => {
        window.open(url, 'https://www.linkedin.com/company/developerstudentclubs/');
    }

    return(
        <div className='main-container'>
            <h1 className='main-h1'>
                GDSC Test Run
            </h1>
            <h2 className='main-h2'>
                Student
            </h2>
            <div className='main-about'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ullam possimus non culpa nulla? Consequatur tempore debitis obcaecati, 
                    magnam nisi labore suscipit quibusdam nemo enim, quae, 
                    vero aliquid sint deleniti necessitatibus.</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi illo ipsam aliquam, voluptas iste, aliquid impedit 
                    laudantium accusamus beatae error quos non sint dolor labore in, 
                    dicta illum. Debitis, earum.</p>
            </div>
            <h4 className='main-h4'>Personal Links</h4>
            <div className='main-button'>
                <button className='main-button-instagram' onClick={() => handleClickInstagram('https://www.instagram.com/gdscumd/')}>Instagram</button>
                <button className='main-button-linkedin'onClick={() => handleClickLinkedin('https://www.linkedin.com/company/developerstudentclubs/')}>Linkedin</button>
            </div>
        </div>
    )
}