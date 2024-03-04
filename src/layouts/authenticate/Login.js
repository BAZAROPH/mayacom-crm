import React from 'react'
import ButtonPrimaryLoader from '../../components/buttons/ButtonPrimaryLoader'
import NormalInput from '../../components/input/NormalInput'
export default function Login() {
    return (
        <div className='rounded-lg max-w-xl mx-auto '>
            <div>
                <NormalInput type="email" placeholder='mon-email@mail.com' label='Email'/>
            </div>
            <div className='mt-5'>
                <NormalInput type="password" placeholder='*********' label='Mot de passe'/>
            </div>
            <div className='text-right mt-2'>
                <span className='text-sm font-semibold hover:text-orange hover:underline underline-offset-4 duration-300 cursor-pointer'>Mot de passe oublié ?</span>
            </div>
            <div className='text-center mt-4'>
                <ButtonPrimaryLoader>Connexion</ButtonPrimaryLoader>
            </div>
        </div>
    )
}
