import Link from "next/link"

// import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className=" fixed top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center border-b-2 border-slate-300/10">
      <div className="container flex  h-14 max-w-screen-xl">
        <Link className="mr-6 flex items-center  space-x-2 "  href="#">
        
          <span className="font-bold">&lt; &gt; CodeForge</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end  space-x-6 text-sm font-medium">
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#"
          >
            About
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#"
          >
            Features
          </Link>
          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#"
          >
            Services
          </Link>

          <Link
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#"
          >
            Projects
          </Link>
        </nav>
        
      </div>
    </header>
  )
}