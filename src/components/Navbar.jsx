import React from 'react';

const Navbar = () => {

    const links = [
        {
            href: '#home',
            title: 'Home'
        },
        {
            href: '#about',
            title: 'About'
        },
        {
            href: '#services',
            title: 'Services'
        },
        {
            href: '#contact',
            title: 'Contact'
        },
        {
            href: '#projects',
            title: 'Our Projects'
        },
    ]


    return (
        <nav className='nav'>
            {links.map((link) => (
                <a 
                    href={link.href} 
                    key={link.title} 
                    className='nav-link'
                > {link.title} </a>
            ))}
        </nav>
    );
}

export default Navbar;
