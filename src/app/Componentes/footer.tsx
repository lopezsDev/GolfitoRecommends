import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="tel:+1234567890" legacyBehavior>
                <a>Teléfono</a>
            </Link> |
            <Link href="https://instagram.com/Tony_barra09" legacyBehavior>
                <a target="_blank">Instagram</a>
            </Link> |
            <Link href="https://facebook.com/Tony_barra09" legacyBehavior>
                <a>Facebook</a>
            </Link> |
            <Link href="https://twitter.com/Tony_barra09" legacyBehavior>
                <a target="_blank">Twitter</a>
            </Link>
        </footer>
    );
};

export default Footer;

