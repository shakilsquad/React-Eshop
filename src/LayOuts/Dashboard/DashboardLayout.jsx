import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='py-9 flex gap-8'>

            <div className='w-[20%] shadow-lg p-5 rounded-lg'>
                <ul className='space-y-5 text-xl font-bold'>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/editProfile'}>EditProfile</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[75%] '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;