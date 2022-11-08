import React from 'react'
import './headerMenus.css'
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={'links_container'}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={'link'}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const HeaderMenus: React.FC<{}> = () => {
    return (
        <>
            <div className='Header'>   
                <span><img src="src/assets/Vector.png" alt="Technosphere_logo" className='vector_logo'/></span>
                <Links links={links} />
            </div>

        </>
    )
}
export default HeaderMenus;
