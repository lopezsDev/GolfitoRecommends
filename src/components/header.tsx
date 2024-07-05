import Link from "next/link";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Componente AppLogo actualizado para utilizar correctamente Image de Next.js
function AppLogo() {
    return (
        <div className="h-32 w-20 relative">
            <Image
                src="/Golfologo.png"
                alt="Golfologo"
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}

export function Header() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-light-cyan">
            <div className="flex items-center w-full space-x-4">
                <Link href="#" className="hidden lg:flex items-center" prefetch={false}>
                    <AppLogo />
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
