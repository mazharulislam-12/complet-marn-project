import React, { useEffect, useState } from 'react';
import Card from "../../components/Cards.jsx";

const Menu = () => {

    const [menu, setMenu] = useState(/* your initial menu data */);
    const [filterItems, setFilterItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [sortOption, SetSortOption] = useState("default")

    // loading data
    useEffect(() => {
        // fetch data form the backend
        const fetchData = async () => {
            try {
                const response = await fetch("/menu.json")
                const data = await response.json()
                // console.log(data);
                setMenu(data);
                setFilterItems(data);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        // call the function
        fetchData();
    }, [])


    // filtering data base on category
    const filterItemss = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilterItems(filtered);
        setSelectedCategory(category);
    };



    // show all data
    const showAll = () => {
        setFilterItems(menu)
        setSelectedCategory("all")
    };

    // shoring based A-z, Z-A and Low to High
    const handleShoringChange = (option) => {
        SetSortOption(option)

        let sortedItem = [...filterItems];


        //login
        switch (option) {
            case "A-Z":
                sortedItem.sort((a, b) => a.name.localCompare(b.name))
                break;
            case "Z-A":
                sortedItem.sort((a, b) => b.name.localCompare(a.name))
                break;
            case low - to - high:
                sortedItem.sort((a, b) => a.price - b.price)
                break;
            case high - to - low:
                sortedItem.sort((a, b) => b.price - a.price)
                break;

            default:
                // code block
                break;
        }
        setFilterItems(sortedItem);
    }



    return (
        <div>
            {/* menu banner */}
            <div className='section-container bg-gradient-to-r form-[#FAFAFA] from-0% to-[#FCFCFC] to-100% flex items-center'>
                <div className='py-48 flex flex-col-reverse   justify-center items-center gap-8'>
                    {/* text div */}
                    <div className=' text-center sm:top-36 space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights Of Delectable Food <span className='text-green'>Food</span> </h2>
                        <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                    </div>


                </div>
            </div>

            {/* menu shop section */}
            <div className="section-container">
                {/* filtering and sorting */}
                <div>
                    {/* all category btn */}
                    <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button>ALL</button>
                        <button>Salad</button>
                        <button>Pizza</button>
                        <button>Shops</button>
                        <button>Desserts</button>
                        <button>Drinks</button>
                    </div>
                </div>

                {/* product card */}
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        filterItems.map((item) => (
                            <Card key={item._id} item={item} ></Card>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Menu;