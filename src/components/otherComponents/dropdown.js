import React, { useState } from 'react';
import admin from '../../images/admin.png'
import { deleteAdmin } from '../../services/sessionProvider';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAdmin = () => {
        deleteAdmin();
        navigate('/');
    }

    return (
        <div className="relative cursor-pointer">
            <div onClick={toggleDropdown} className='w-[50px] h-[50px] md:w-[5vw] md:h-[5vw] pr-4 pt-1'>
                <img src={admin} alt='admin' className='rounded-full' />
            </div>
            {isOpen && (
                <div className="absolute top-14 right-5 w-[100px] md:w-[10vw] bg-white border border-gray-300 p-2 z-50 rounded-md">
                    <ul>
                        <li>Profile </li>
                        <li onClick={handleAdmin}>Logout</li>
                        {/* <li>Option 3</li> */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
