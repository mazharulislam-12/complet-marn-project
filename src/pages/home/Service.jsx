import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";

const Service = () => {
    return (
        <div className='section-container mt-12'>
            <div className='flex items-center justify-between'>
                <div className='md:w-1/3'>
                    <div className='text-left space-y-4'>
                        <p className='subtitle'>Our Story & Services</p>
                        <h2 className='title md:w-[550px] '>Our Culinary Journey And Services</h2>
                        <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                        <div className='flex items-center gap-3 mt-3 mb-3'>
                            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Explore</button>
                            <p className='text-xl'> Watch Video</p>
                            <FaPlayCircle className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex items-center justify-around'>
                        <div className="card card-compact bg-base-100 text-center shadow-xl mr-3">
                            <FaCertificate className='mx-auto text-2xl' />
                            <div className="card-body  ">
                                <h2 className=" text-center text-xl font-semibold">Catering</h2>
                                <p>Delight your guests with our flavors and  presentation</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 text-center shadow-xl">
                            <IoIosTime className='mx-auto text-2xl' />
                            <div className="card-body  ">
                                <h2 className=" text-center text-xl font-semibold">Catering</h2>
                                <p>Delight your guests with our flavors and  presentation</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex items-center justify-around mt-10'>
                        <div className="card card-compact bg-base-100 text-center shadow-xl mr-3">
                            <FaCartShopping className='mx-auto text-2xl' />
                            <div className="card-body  ">
                                <h2 className=" text-center text-xl font-semibold">Catering</h2>
                                <p>Delight your guests with our flavors and  presentation</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 text-center shadow-xl">
                            <FaGift className='mx-auto text-2xl' />
                            <div className="card-body  ">
                                <h2 className=" text-center text-xl font-semibold">Catering</h2>
                                <p>Delight your guests with our flavors and  presentation</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;