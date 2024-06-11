import Link from 'next/link'
import React from 'react'
import "./hr.css"


const Navbar2 = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div style={{borderBottom :"1px solid gray"}} className='flex justify-center align-center text-center p-2'>
                <ul className='flex'>
                            <Link href={"/"}>
                            <li id='links' className='hover:cursor-pointer font-bold' style={{"marginRight":"40px"}}>Home</li>
                            </Link>
                            <Link href={"/category"}>
                            <li id='links' className='hover:cursor-pointer font-bold' style={{"marginRight":"40px"}}>Products</li>
                            </Link>
                            <Link href={"/about"}>
                            <li id='links' className='hover:cursor-pointer font-bold' style={{"marginRight":"40px"}}>About Us</li>
                            </Link>
                            <Link href={"/contact"}>
                            
                            <p id='links' className='hover:cursor-pointer font-bold'>Contact Us</p>
                            </Link>
                        </ul>
            </div>
        </>
    )
}

export default Navbar2
