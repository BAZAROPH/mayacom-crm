import React from 'react'

export default function NormalInput(props) {
    return (
        <>
            {props.label && (
                <div>
                    <label htmlFor="" className={`tracking-wide ${props.required === true && 'required'}`}>{props.label}</label>
                </div>
            )}
            <div className='mt-2'>
                <input type={props.type} value={props.value} className='border border-gray-300 w-full py-2 focus:outline-none px-3 focus:border-orange rounded-lg appearance-none leading-tight' onInput={props.onInput} placeholder={props.placeholder}/>
            </div>
        </>
    )
}

