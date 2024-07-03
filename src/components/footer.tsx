import React from 'react';
import Link from "next/link";

// Definición de los tipos de props para los iconos
interface IconProps extends React.SVGProps<SVGSVGElement> {
}

// Componente Icono de Facebook
function FacebookIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
  );
}

// Componente Icono de Instagram
function InstagramIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
  );
}

// Componente Icono de Correo
function MailIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
  );
}

// Componente Icono de Teléfono
function PhoneIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
  );
}

// Componente Icono de Twitter
function TwitterIcon(props: IconProps) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
  );
}

// Componente Footer con todos los iconos
export function Footer() {
  return (
      <footer className="bg-light-cyan w-full">
        <div className="container mx-auto flex items-center justify-between gap-4 h-20 px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="h-8 w-8" />
            </Link>
            <Link
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="h-8 w-8" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-8 w-8" />
            </Link>
            <Link href="#" aria-label="Email" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <MailIcon className="h-8 w-8" />
            </Link>
            <Link href="#" aria-label="Phone" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <PhoneIcon className="h-8 w-8" />
            </Link>
          </div>
          <span>© All rights reserved</span>
        </div>
      </footer>
  );
}

export default Footer;
