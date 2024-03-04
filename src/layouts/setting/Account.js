import React from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import UserProfil from '../../images/UserProfil.jpg'

export default function Account() {
    const breadcrumb = [
        {
            'label': 'Tableau de bord',
            'url': '/dashboard',
            'icon' : 'bi bi-house-fill',
        },
        {
            'label': 'Mon Compte',
            'url': 'dashboard/settings/account',
            'active': true,
        }
    ]
    return (
        <>
            <Breadcrumb items={breadcrumb}/>
            <div className='h-96 md:h-56 relative bg-white rounded-lg'>
                <div className="absolute w-full h-20 md:h-1/2 bg-blue rounded-t-lg"></div>
                <div className='md:flex justify-between items-center h-full mx-14'>
                    <div className='md:z-50 md:flex justify-between items-end w-full'>

                        <div className='mb-3 md:mb-0'>
                            <img src={UserProfil} className='h-36 md:h-44 rounded-full mx-auto z-50 ring-2 ring-orange' alt="" />
                        </div>

                        <div className='md:flex justify-between items-end w-11/12 text-center'>

                            <div>
                                <div className='font-semibold text-lg text-orange'>Albert Flores</div>
                                <div className='font-thin text-sm'>Front End Developer</div>
                            </div>

                            <div className='justify-between md:flex items-center md:w-1/4 mt-3 md:mt-0 space-y-2'>
                                <div>
                                    <div className='font-medium'>34.000 Fcfa</div>
                                    <div className='font-thin text-sm'>Montant Total</div>
                                </div>
                                <div>
                                    <div className='font-medium'>34.000 Fcfa</div>
                                    <div className='font-thin text-sm'>Montant Total</div>
                                </div>
                                <div>
                                    <div className='font-medium'>34.000 Fcfa</div>
                                    <div className='font-thin text-sm'>Montant Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 md:grid grid-cols-3'>
                <div className='bg-white rounded-lg'>
                    <div className='text-xl py-4 px-6 border-b'>
                        Info
                    </div>
                    <div>
                        <div className='flex gap-4 items-start py-4 px-6'>
                            <i className="bi bi-envelope text-xl"></i>
                            <div className='text-base'>
                                <div className='font-thin'>Email</div>
                                <div>bazaroph@gmail.com</div>
                            </div>
                        </div>
                        
                        <div className='flex gap-4 items-start py-4 px-6'>
                            <i className="bi bi-telephone-inbound text-xl"></i>
                            <div className='text-base'>
                                <div className='font-thin'>Téléphone</div>
                                <div>+225 01 41 9936 777</div>
                            </div>
                        </div>

                        <div className='flex gap-4 items-start py-4 px-6'>
                            <i className="bi bi-map text-xl"></i>
                            <div className='text-base'>
                                <div className='font-thin'>Adresse</div>
                                <div>Home# 320/N, Road# 71/B, Mohakhali, Dhaka-1207, Bangladesh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
