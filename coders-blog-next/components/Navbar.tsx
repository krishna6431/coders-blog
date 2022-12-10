import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* Designed Logo  */}
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image src="/logo.png" alt="hello" height={35} width={40} />
                    <span className="font-bold ml-2 text-primary">Coder's Blog</span>
                </div>
            </Link>

            {/* List of Options on Nav Bar  */}
            <ul className="flex items-center">
                <li className="mr-6 fond-medium text-grey-600">
                    <a href="#">Products</a>
                </li>

                <li className="mr-6 fond-medium text-grey-600">
                    <a href="#">Pricing</a>
                </li>

                <li className="mr-6 fond-medium text-grey-600">
                    <a href="#">Docs</a>
                </li>

                <li className="mr-6 fond-medium text-grey-600">
                    <a href="#">Company</a>
                </li>
            </ul>

            {/* Login and signup button  */}
            <ul className="flex items-center">
                <li className="mr-6 fond-medium text-grey-600">
                    <a href="#" className="hover:text-primary-dark-400">Login</a>
                </li>

                <li className="fond-medium text-grey-600">
                    <a href="#" className="bg-primary py-2 px-4 rounded text-white hover:bg-primary-dark">SignUp</a>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar