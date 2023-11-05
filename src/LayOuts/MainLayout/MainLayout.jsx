/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div className='py-5 shadow-lg'>
                <section className=' container  mx-auto  '>
                    <div className='flex justify-between items-center mx-3'>
                        <div>
                            <h1 className='text-2xl font-extrabold text-teal-400  '><a className='border-2 border-white duration-500 hover:border-2 hover:border-red-200' href="#">E-SHOP</a></h1>
                        </div>
                        <nav>
                            <ul className='flex justify-between items-center gap-6 uppercase  text-xl  font-semibold'>

                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-green-200 p-2 rounded-lg hover:bg-green-400 duration-800 " : ""
                                    }
                                >Home</NavLink>

                                <NavLink
                                    to="/products"
                                     className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-green-200 p-2 rounded-lg hover:bg-green-400 duration-800 " : ""
                                    }
                                >products </NavLink>
                                <NavLink
                                    to="/about"
                                     className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-green-200 p-2 rounded-lg hover:bg-green-400 duration-800 " : ""
                                    }
                                > About </NavLink>

                                <NavLink
                                    to="/dashboard"
                                     className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-green-200 p-2 rounded-lg hover:bg-green-400 duration-800 " : ""
                                    }
                                >Dashboard </NavLink>
                            </ul>
                        </nav>

                    </div>
                </section>
            </div>
            <div className="container mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>
            <div className=" mx-auto">

                <footer class="bg-white rounded-lg  ">
                    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div class="sm:flex sm:items-center sm:justify-between">
                            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                                <h1 className='text-2xl font-extrabold text-teal-400  '><a className='border-2 border-white duration-500 hover:border-2 hover:border-red-200' href="#">E-SHOP</a></h1>
                            </a>
                            <ul class="flex flex-wrap items-center mb-6 text-xl font-medium text-gray-500 sm:mb-0 dark:text-gray-800">
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                                </li>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                    </div>
                </footer>

            </div>

        </>
    );
};

export default MainLayout;