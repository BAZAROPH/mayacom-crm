import React from 'react'
import { useNavigate } from 'react-router-dom'
import NormalDropdown from '../dropdown/NormalDropdown'
import profil from '../../images/profil.png'

export default function StateBar(props) {
    const navigate = useNavigate('');
    return (
        <div className='p-8 h-16 border-b border-b-300 flex justify-between items-center shadow sticky top-0 bg-white z-50'>
            <div>
                <button className='text-gray-400'>Rechercher ...</button>
            </div>
            <div className='flex justify-end items-center'>
                {/* Notification */}
                <div className='hidden md:block'>
                    <NormalDropdown
                        buttonContent = {
                            <div className='bg-blue/[.08] rounded-full px-2 py-1 relative duration-300 mx-4 hidden md:block'>
                                <i className="bi bi-bell"></i>
                                <span className='absolute text-xs top-0 px-1.5 py-[0.15em] rounded-full text-white text-white bg-red-600'>2</span>
                            </div>
                        }
                    >
                        <ul className='w-60 space-y-1 text-gray-700 divide-y'>
                            <li className='flex justify-between items-center px-2'>
                                <span>Notifications</span>
                                <span className='text-xs underline cursor-pointer'>Voir tous</span>
                            </li>
                            <li className='flex gap-2 items-start py-3 cursor-pointer hover:bg-blue/[.1] px-2'>
                                <img src={profil} alt="" />
                                <div>
                                    <span className='text-sm'>Mes félicitations</span>
                                    <p className='text-xs text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <span className='text-xs text-gray-600 font-semibold'>Il y a 2 min</span>
                                </div>
                            </li>
                            <li className='flex gap-2 items-start py-3 cursor-pointer hover:bg-blue/[.1] px-2'>
                                <img src={profil} alt="" />
                                <div>
                                    <span className='text-sm'>Mes félicitations</span>
                                    <p className='text-xs text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <span className='text-xs text-gray-600 font-semibold'>Il y a 2 min</span>
                                </div>
                            </li>
                        </ul>
                    </NormalDropdown>
                </div>

                {/* Profile */}
                <div className='hidden md:block'>
                    <NormalDropdown
                        buttonContent = {
                            <div className='flex gap-2 items-center hover:text-black'>
                                <img src={profil} alt="" />
                                <span className='text-sm font-medium'>Martin Matin</span>
                                <i className="bi bi-caret-down"></i>
                            </div>
                        }
                    >
                        <ul className='w-36 space-y-1 text-gray-700'>  
                            <li className='flex gap-4 items-center py-2 px-2 hover:bg-gray-500/[.15] cursor-pointer rounded duration-100' onClick={()=>{navigate('/dashboard/settings/account')}}>
                                <i className="bi bi-person-fill"></i>
                                <span className=''>Profil</span>
                            </li>
                            <li className='flex gap-4 items-center py-2 px-2 hover:bg-gray-500/[.15] cursor-pointer rounded duration-100'>
                                <i className="bi bi-chat-dots-fill"></i>
                                <span className=''>Chat</span>
                            </li>
                            <li className='flex gap-4 items-center py-2 px-2 hover:bg-gray-500/[.15] cursor-pointer rounded duration-100'>
                                <i className="bi bi-envelope-check-fill"></i>
                                <span className=''>Email</span>
                            </li>
                            <li className='flex gap-4 items-center py-2 px-2 hover:bg-gray-500/[.15] cursor-pointer rounded duration-100'>
                                <i className="bi bi-gear-wide-connected"></i>
                                <span className=''>Paramètres</span>
                            </li>
                        </ul>
                    </NormalDropdown>
                </div>

                <button className='md:hidden' onClick={()=>props.setMobileState(!props.mobileState)}>
                    <i className="bi bi-list text-2xl"></i>
                </button>
            </div>
        </div>
    )
}
