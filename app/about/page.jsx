import React from 'react';
import "../Components/hr.css";
import image2 from "../../public/Images/Who_We_Are_Image_1.jpg";
import image3 from "../../public/Images/Who_We_Are_Image_2.jpg";
import about1 from "../../public/Images/about11.jpg";
import about2 from "../../public/Images/about12.jpg";
import Image from 'next/image';

const About = () => {
    return (
        <>
            <style>{`
                body {
                    background-color: white;
                }
            `}</style>
            <div className='bg-white'>

                <div className='bg-white mt-5 container p-3'>
                    <div className="flex">
                        <div className="text-5xl font-extrabold tracking-wider bgVideoText">
                            <h1 className="heading text-black font-bold">About Us</h1>
                        </div>
                    </div>
                    <div className="hr-about"></div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">
                            <h1 style={{ color: "#006429" }} className="text-lg font-bold text-green-800 tracking-widest mt-4">COMPANY PROFILE</h1>
                            <h3 className="text-4xl font-bold text-black">WHO WE ARE</h3><br />
                            <p className="text-[16px] text-justify">shandong changlu tools co., ltd. is an industrial and trade enterprise which integrates hardware tools, automobile maintenance tools, machine repair tools and household tools development, production and sales. it is located in linyi, shandong province, the capital of logistics in china. <br /><br /> The company covers an area of 50,000 square meters, with a production and storage area of 25,000 square meters. it mainly deals in 16 categories and more than 5,000 specifications such as changlu brand sets of tools, sleeves, sleeve accessories, wrenches, screwdrivers, fastening, shearing, clamps, knocking, etc. it is widely used in machinery, petroleum, chemical, electric power, automobile manufacturing and maintenance, etc. industry. <br /><br /> The company is currently the director of china wujiaochua business association, the executive director of the national federation of industry and commerce hardware and electrical chamber of commerce and the director unit of shandong hardware and electrical chamber of commerce.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={image2}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR FACTORY</h3><br />
                            <p className="text-[16px] text-justify">Nestled near major transportation arteries for seamless logistics, our expansive 6,000-square-meter facility hums with innovation. This isn&apos;t just a production plant; it&apos;s a hub for research, development, and the creation of cutting-edge tools for the automotive industry. From specialized auto protection solutions to comprehensive car tool sets, our diverse range caters to a global audience. Our unwavering commitment to quality and exceeding customer expectations has cemented our reputation as a trusted partner worldwide. We are more than just a manufacturer; we are a team dedicated to pushing the boundaries and providing exceptional tools that empower individuals around the world. <br /><br /> We pride ourselves on being more than just a manufacturer. We are a dedicated team of professionals who are passionate about empowering individuals and businesses around the world with exceptional tools. Our mission is to innovate, inspire, and deliver unparalleled solutions that drive success in the automotive sector. Whether it&apos;s enhancing vehicle safety through our advanced protection products or providing mechanics with the tools they need to excel, we are committed to making a tangible difference in the industry.
                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={image3}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-3">OUR VISION</h3><br />
                            <p className="text-[16px] text-justify">Changlu Tools UAE aspires to be the go-to brand for anyone who loves to create, from seasoned professionals to enthusiastic DIYers. Their mission is to achieve this by offering a complete line of top-of-the-line power tools and dependable hand tools. <br /> <br /> Changlu Tools UAE envisions a future where creativity has no limitations. They imagine a world where power and hand tools effortlessly work with the user&apos;s intent, transforming ideas into reality with ever-greater efficiency and precision. This vision is fueled by the belief that powerful yet user-friendly and accessible tools have the power to make creation available to everyone. <br /><br /> Their ultimate goal is to develop a future where both seasoned professionals and budding enthusiasts have access to the tools they need to bring their dreams to life. <br /><br />
                                To achieve their mission, Changlu Tools UAE is committed to innovation, quality, and customer satisfaction. They continuously invest in research and development to push the boundaries of tool performance, ensuring their products are at the forefront of technological advancements. 

                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about1}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    {/* first */}
                    <div className="row">
                        <div className="col-lg-6 mb-2">

                            <h3 className="text-4xl font-bold text-black mt-4">OUR MISSION</h3><br />
                            <p className="text-[16px] text-justify">
                                Changlu Tools UAE strives to be the go-to resource for anyone bringing their ideas to life,  from seasoned professionals to enthusiastic DIYers. They achieve this by offering a complete selection of top-notch power tools alongside dependable hand tools. <br /><br /> Believing the right tools are vital for making dreams a reality, Changlu Tools is dedicated to providing solutions that empower users to confidently tackle any project. Their commitment to innovation drives the development of cutting-edge power tools that boast exceptional performance and durability.By heavily investing in research and development, Changlu ensures their power tools integrate the latest advancements in technology, delivering unmatched efficiency and functionality to conquer even the most challenging tasks. <br /><br />
                                Changlu Tools UAE emphasizes customer experience, offering detailed product guides and responsive after-sales support to ensure users get the most out of their tools. Committed to sustainability, they explore eco-friendly manufacturing processes to reduce their environmental impact. With a focus on excellence and responsibility, Changlu Tools UAE aims to build a trusted community of creators, supported by superior quality and service.

                            </p>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <Image src={about2}
                                className='object-cover img-fluid'
                                width={"100px"}
                                style={{ height: "550px" }}
                                alt='about'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
