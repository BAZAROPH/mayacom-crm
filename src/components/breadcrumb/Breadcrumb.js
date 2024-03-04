import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Breadcrumb(props) {
    const navigate = useNavigate()
    return (
        <>
            <ul className='flex gap-3 items-center justify-left mb-6'>
                {props.items.map((item, index)=>{
                    return (
                        <li key={index} className={`text-sm`} onClick={()=>{!item.active && navigate(item.url)}}>
                            {
                                index > 0 &&
                                <span className='pr-1'> - </span>
                            }
                            {item.icon &&
                                <i className={`${item.icon} pr-1 text-blue`}></i>
                            }
                            <span className={`${!item.active ? 'cursor-pointer hover:text-orange text-blue' : 'font-semibold text-orange'} cursor-pointer`}>{item.label}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
