
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Definición de los tipos de props para los iconos
interface IconProps extends React.SVGProps<SVGSVGElement> {}

function MountainIcon(props: IconProps) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

export function Header() {
    return (

        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-light-cyan">
            <div className="flex items-center w-full space-x-4">
                <Link href="#" className="hidden lg:flex items-center" prefetch={false}>
                    <MountainIcon className="h-10 w-8" />

                    <span className="sr-only">Acme Inc</span>
                </Link>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex items-center space-x-4">
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                        <Button className="text-lg font-medium">Get Started</Button>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}

export default Header;
