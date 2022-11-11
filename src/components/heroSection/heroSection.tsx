import React from 'react'
import HeaderMenus from '../headerMenus/headerMenus';
import './heroSection.css'
import Marquee from "react-fast-marquee";
import { fontFamily } from '@mui/system';

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    window.location.href = '/test';
}
const HeroSection: React.FC<{}> = () => {
    return (
        <>  <HeaderMenus />
            <div className='Hero'>

                <div className='Event_date'>
                    NoV 28 - Dec 2
                </div>
                <div className='Hero_logo'>
                    <img src="src/assets/Hero_Logo.png" alt="Hero_Logo" className='Vector_Hero' />
                </div>
                <div className='hero_text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
                <div>
                    <button className='register_btn_hero' onClick={handleClick}>REGISTER NOW <img src="src/assets/RightArrow.png" alt="arrow" className='right_arrow' /></button>
                </div>
            </div>
            <div className='marquee_section'>
            <Marquee gradient={false} speed={20} pauseOnClick={true} pauseOnHover={false}>
                        <div className="mq">
                           <p className='mq_txt'>Artificial intelligence</p>
                           <p className='mq_txt'>cloud computing</p>
                           <p className='mq_txt'>Blockchain and cryptocurrency</p>
                           <p className='mq_txt'>internet of things</p>
                           <p className='mq_txt'>Edge computing and deployment</p>
                           <p className='mq_txt'>Game Development</p>
                        </div>
            </Marquee>
            </div>

        </>
    )
}
export default HeroSection;
