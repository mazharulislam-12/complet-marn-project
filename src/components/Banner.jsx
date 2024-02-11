import React from 'react';

const Banner = () => {
    return (
        <div className='section-container bg-gradient-to-r form-[#FAFAFA] from-0% to-[#FCFCFC] to-100% flex items-center'>
            <div className='py-24 flex flex-col-reverse  md:flex-row justify-between items-center gap-8'>
                {/* text div */}
                <div className='md:w-1/2 sm:top-36 space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span> </h2>
                    <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>

                {/* img div */}
                <div className='md:w1/2'>
                    <img src="/images/home/banner.png" alt="" />
                    <div className=' flex flex-col md:flex-row items-center -mt-14 gap-4 justify-around'>
                        <div className=' md:flex hidden space-y-1 bg-slate-900 shadow-md rounded-md  items-center gap-3 px-4 py-2 '>
                            <img src="/images/home/b-food1.png" className='rounded-2xl' alt="" />
                            <div>
                                <h5>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                </div>
                                <p className='text-red '>$18.00</p>
                            </div>
                        </div>

                        <div className=' md:flex hidden space-y-1 bg-slate-900 shadow-md rounded-md  items-center gap-3 px-4 py-2'>
                            <img src="/images/home/b-food1.png" className='rounded-2xl' alt="" />
                            <div>
                                <h5>Spicy noodles</h5>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                                </div>
                                <p className='text-red '>$18.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;