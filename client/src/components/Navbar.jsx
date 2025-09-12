import { useState } from "react"
import Image from "./Image"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <nav className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
                <Image src='logo.png' alt="fronty logo" w={32} h={32} />
                <small>Frontylog</small>
            </Link>
            {/* MOBILE MENU  */}
            <div className="md:hidden">
                <div className="cursor-pointer text-3xl"
                    onClick={()=>setOpen(prev=>!prev)}
                 >
                    {open ? 'X' : '='}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out bg-red-700 
                    ${open ? "-right-0" :"-right-[100%]"} gap-8 font-medium text-lg`}>
                    <Link href="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                        </Link>
                    </SignedOut>
                </div>
            </div>
            {/* DESKTOP MENU  */}
            <div className="hidden md:flex items-center gap-8 md:gap-12 font-medium">
                <Link href="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar