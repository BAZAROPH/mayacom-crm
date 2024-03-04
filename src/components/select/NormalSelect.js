import React from 'react'

export default function NormalSelect(props) {
    return (
        <>
            {
                props.label &&
                <div className='mb-2'>
                    <label htmlFor="" className='tracking-wide'>{props.label}</label>
                </div>
            }
            <select value={props.value} id="" className='w-full py-[0.61em] px-3 rounded-lg border border-gray-300 appearence-none bg-white' onChange={props.onChange}>
                {/* {props.options.map((elt, index)=>{
                    return <option key={index} value={elt.value}>{elt.option}</option>
                })} */}
                {props.children}
            </select>
        </>
    )
}
