import React, {useState} from 'react'
import Login from './Login'
import Register from './Register'
import loginImage from '../../images/loginImage.jpg';
import registerImage from '../../images/registerImage.jpg';

export default function Authentification() {
    const activeClass = useState('text-white bg-orange uppercase font-bold italic w-full');
    const [active, setActive] = useState('login');
    return (
        <div className='grid grid-cols-2'>
            <div className='h-screen overflow-hidden'>
                <img src={active === 'login' ? loginImage : registerImage} className='object-cover h-full w-full' alt="" />
            </div>
            <div className='pt-40 flex flex-col justify-between pt-40'>
                <div>
                    <div className='grid grid-cols-2 my-4 max-w-xl mx-auto w-full'>
                        <button className={`${active === 'login' ? activeClass : 'text-lg font-semibold'} py-2`} onClick={()=>{setActive('login')}}>Se connecter</button>
                        <button className={`${active === 'register' ? activeClass : 'text-lg font-semibold'} py-2`} onClick={()=>{setActive('register')}}>S'incrire</button>
                    </div>
                    <div className='max-w-2xl mx-auto py-4 rounded'>
                        {
                            active === 'login' ?
                            <Login/>
                            :
                            <Register/>
                        }
                    </div>
                </div>
                <div className="text-center pb-2">
                    Texte en bas du bloc de droite
                </div>
            </div>
        </div>
    )
}
