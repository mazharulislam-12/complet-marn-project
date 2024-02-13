import React from 'react';

const Testimonials = () => {
    return (
        <div className='section-container'>
            <div className='flex items-center flex-col md:flex-row justify-between gap-12'>
                <div className='md:w-1/3'>
                    <img src="/images/home/testimonials/testimonials.png" alt="" />
                </div>

                <div className='md:w-1/3'>
                    <div className='text-left space-y-4'>
                        <p className='subtitle'>Testimonials</p>
                        <h2 className='title md:w-[550px] '>What Our Customers Say About Us</h2>
                        <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 w-12 mt-5'>
                            <img src="/images/home/testimonials/testimonial1.png" alt="" />
                            <img src="/images/home/testimonials/testimonial2.png" alt="" />
                            <img src="/images/home/testimonials/testimonial3.png" alt="" />
                        </div>
                        <div className='text-right '>
                            <h4 className='text-xl'>Customer Feedback</h4>
                            <div className='flex gap-3'>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <p>4.9 (18.96K Reviews) </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;