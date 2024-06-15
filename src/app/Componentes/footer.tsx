import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="https://wa.me/" legacyBehavior>
                <a><img src="/red_social/whatsapp.png" alt="WhatsApp" className="footer-logo1" /></a>
            </Link> 
            <Link href="https://instagram.com/" legacyBehavior>
                <a><img src="/red_social/instagram.png" alt="Instagram" className="footer-logo2" /></a>
            </Link> 
            <Link href="https://facebook.com/" legacyBehavior>
                <a><img src="/red_social/facebook.png" alt="Facebook" className="footer-logo3" /></a>
            </Link> 
            <Link href="mailto:" legacyBehavior>
                <a><img src="/red_social/correo.png" alt="Correo" className="footer-logo4" /></a>
            </Link>
        </footer>
    );
};

export default Footer;

