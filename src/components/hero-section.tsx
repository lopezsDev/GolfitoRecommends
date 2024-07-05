import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-12">
                        <div className="space-y-2 ml-12">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black">
                                Golfito Remmendations
                            </h1>
                            <p className="max-w-[600px] text-black md:text-xl">
                                Explore, discover and enjoy. Our platform guides you to the best places near you,
                                from restaurants and bars to parks and museums - start your next local adventure with us
                                today!
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2 ml-12">
                            <form className="flex gap-2">
                                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                <Button type="submit">Get Started</Button>
                            </form>
                            <p className="text-xs text-black">
                                Sign up to unlock the full potential of our platform.{" "}
                                <Link href="#" className="underline underline-offset-2 text-black" prefetch={false}>
                                    Terms &amp; Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/placeholder.svg"
                        width={550}
                        height={550}
                        alt="Hero"
                        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;