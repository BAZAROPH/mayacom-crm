import React from 'react'
import NormalInput from '../../components/input/NormalInput'
import NormalSelect from '../../components/select/NormalSelect'
import ButtonPrimaryLoader from '../../components/buttons/ButtonPrimaryLoader'
export default function Register() {
    return (
        <div className='rounded-lg max-w-xl mx-auto space-y-4'>
            <div>
                <NormalInput type="text" placeholder='Votre nom' label='Nom'/>
            </div>
            <div>
                <NormalInput type="text" placeholder='Votre prénom' label='Prénom'/>
            </div>
            <div>
                <NormalInput type="email" placeholder='Votre email' label='Email'/>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <NormalInput type="text" placeholder='Votre entreprise' label='Entreprise'/>
                </div>
                <div>
                    <div>
                        <label htmlFor="" className='tracking-wide'>Domaine</label>
                    </div>
                    <div className='mt-2'>
                        <NormalSelect>
                            <option value="">Formation</option>
                            <option value="">E-commerce</option>
                            <option value="">Évènement</option>
                            <option value="">Autre</option>
                        </NormalSelect>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <NormalInput type="text" placeholder='Votre contact' label='contact'/>
                </div>
                <div>
                    <div>
                        <label htmlFor="" className='tracking-wide'>Pays</label>
                    </div>
                    <div className='mt-2'>
                        <NormalSelect>
                            <option value="">Angleterre</option>
                            <option value="">Bénin</option>
                            <option value="">Côte D'ivoire</option>
                            <option value="">Zambi</option>
                        </NormalSelect>
                    </div>
                </div>
            </div>
            <div className='text-center pt-10'>
                <ButtonPrimaryLoader>
                    Continuer
                </ButtonPrimaryLoader>
            </div>
        </div>
    )
}
