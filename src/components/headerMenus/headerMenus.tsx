import React from 'react'
import './headerMenus.css'

const HeaderMenus: React.FC<{}> = () => {
    return (
        <>
            <div className='Header'>
                <img src="src/assets/Vector.png" alt="Technosphere_logo" className='vector_logo'/>


                <div>ABOUT</div>
                <div>AGENDA</div>
                <div>SPEAKERS</div>
                <div>SPONSORS</div>

            </div>
        </>
    )
}
export default HeaderMenus;
