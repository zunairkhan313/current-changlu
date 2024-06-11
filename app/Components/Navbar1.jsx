"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/Images/logo1.png';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./hr.css"
import SearchIcon from '@mui/icons-material/Search';



export default function NavbarScrollExample() {
    
    const [header, setHeader] = useState(false);
    const { data: session } = useSession();

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.addEventListener('scroll', scrollHeader);
        };
    }, []);


    var menu;
    var menu1;
    if (session?.user) {

        menu = (
            <button
                onClick={() => signOut()}
                className="ml-5 font-bold text-white  mt-[-8px]"
            >
                LOGOUT
            </button>

        )
    } else {
        menu1 = (
            <>
                <Link href={"/login"}>
                    <button className='ml-5 text-sm font-bold text-white mt-[-8px]'>LOGIN / REGISTER</button>
                </Link>
            </>


        )
    }
    return (


        <Navbar expand="lg" style={{ "backgroundColor": "#006429", "paddingTop": "0px", "paddingBottom": "0px" ,marginTop: header ? 0 : '0px'}} >
            <Container fluid>
                <Link href={"/"}>
                    <Image
                        className='ml-10'
                        style={{ 'width': "100px" }}
                        src={logo}
                        alt='logo'
                    />
             
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        navbarScroll
                    >
                    </Nav>
                    <div className='flex' style={{"marginRight":"157px"}}>
                  <div>
                    <input id='search' style={{height:"43px",borderTopLeftRadius :"19px",borderBottomLeftRadius :"19px"}} className='mt-1 w-[400px] border border-gray-200 py-2 px-6' type="text" placeholder='Search for products' />
                  </div>
                  <div>
                    <button className='p-2 mt-1' style={{border : "1px solid white", borderTopRightRadius :"19px",borderBottomRightRadius : "19px"}}><SearchIcon className='text-white'/></button>
                  </div>
                
                    </div>
                    <div id='loginn' className='flex list-none m-5 gap-3'>
                        <div>
                         
                            <span id='user' className="font-bold text-white">{session?.user?.name}</span>
                 
                        </div>

                        <div id='log'>
                            {menu1}
                            {menu}
                        </div>
                        <Link href={"/cart"}>
                        <div id='cartt'>
                            <MdOutlineShoppingBag className='text-white' size={24} />
                        </div>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
