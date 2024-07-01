import Link from "next/link"

export function about() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
          src="/placeholder.svg"
          width={800}
          height={500}
          alt="About"
          className="mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl object-cover object-center sm:aspect-video"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Our Company</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a team of passionate individuals dedicated to creating innovative solutions that empower our
              clients to achieve their goals. Our mission is to deliver exceptional products and services that exceed
              expectations.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default about;