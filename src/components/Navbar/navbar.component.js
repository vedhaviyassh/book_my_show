import React from "react";
import {BiChevronRight, BiSearch} from "react-icons/bi";
import { IoMdArrowDropdown, IoIosMenu} from "react-icons/io";
const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between px-2 py-4">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Chennai 
                    <BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    )
};
const NavMd = () => {
    return(
        <>
        <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input 
                type="search"
                className="w-full"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
        </div>
        </>
    );
};
const NavLg = () => {
    return (
        <>
        <div className="flex flex-col h-26 w-full">
        <div className="flex px-32 h-16 items-center text-sm justify-between">
            <div className="flex w-full items-center">
                <img 
                src="https://i.ibb.co/mDTPbqq/bookmyshow-removebg-preview.png"
                alt="bookmyshow img"
                className="h-24 w-30 cursor-pointer"
                />
                <div className="w-1/2 flex gap-3 bg-white items-center px-3 py-2 rounded">
                <BiSearch className="text-gray-500"/>
                <input 
                    type="search"
                    className="w-full"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
                </div>
            </div>
            <div className="flex gap-5 text-white items-center cursor-pointer">
                <div className="flex text-gray-400">
                    <p>Salem</p>
                    <IoMdArrowDropdown className="text-white"/>
                </div>
                <button type="button" className="w-16 h-6 bg-bms-300 rounded text-xs">Sign in</button>
                <IoIosMenu className="object-cover w-10 h-8"/>
            </div>
        </div>
        <nav>
        <div id="ptag" className=" flex flex-row px-40 items-center bg-bms-800 text-gray-400  text-sm h-10 w-full justify-between">
            <div className="flex gap-5  text-gray-300 text-sm">
                <p>Movies</p>
                <p>Stream</p>
                <p>Events</p>
                <p>Plays</p>
                <p>Sports</p>
                <p>Activities</p>
                <p>Buzz</p>
            </div>
            <div className="flex gap-5 text-gray-100 text-xs text-white">
                <p>ListYourShow</p>
                <p>Corporates</p>
                <p>Offers</p>
                <p>Gift Cards</p>
            </div>
        </div>
        </nav>
        </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
        <nav className="bg-bms-500">
            <div className="md:hidden">{/*"Mobile Screen"*/}
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden px-2 py-4">{/*"Tablet Screen"*/}
                <NavMd />
            </div>
            <div className="hidden lg:flex">{/*"Large Screen"*/}
                <NavLg />
            </div>
        </nav>
        </>
    )
};

export default Navbar;