import React from 'react';


const categoryItems = [
    { id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "/images/home/category/img1.png" },
    { id: 2, title: "Break Fast", despriction: "(12 break fast)", image: "/images/home/category/img2.png" },
    { id: 3, title: "Dessert", despriction: "(48 dessert)", image: "/images/home/category/img3.png" },
    { id: 4, title: "Browse All", despriction: "(255 Items)", image: "/images/home/category/img4.png" }
]

const Categories = () => {
    return (
        <div className='section-container py-16 '>
            <div className='text-center'>
                <p className='sub-title'>Customer Favorites</p>
                <h2 className='title'>Popular Catagories</h2>
            </div>

            {/* category card */}
            <div className='flex flex-col sm:flex-row  gap-8 justify-around items-center mt-12 '>
                {categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-slate-300 py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all' >
                        <div className='flex w-full mx-auto items-center justify-center '>
                            <img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full  w-28 h-28' />
                        </div>
                        <div className='mt-5 space-y-1 text-black '>
                            <h5>{item.title}</h5>
                            <p>{item.despriction}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Categories;

//1.38 min