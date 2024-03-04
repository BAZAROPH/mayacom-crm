import React, {useState} from 'react'
import items from './items.json'
import brand from '../../images/brand.png'
import { useNavigate, useLocation } from 'react-router-dom';
export default function NavBar(props) {
    const [openedItem, setOpenedItem] = useState(false);
    const navigate = useNavigate('');
    const location = useLocation();
    const toggleChildren = (index)=>{
        if(openedItem === index){
            setOpenedItem(false)
        }else{
            setOpenedItem(index)
        }
    }

    return (
        <nav className={`absolute md:relative md:max-w-[16em] border-r h-screen w-full overflow-y-auto scrollbar-hide z-50 bg-white overflow-hidden transition-all duration-300 ${props.mobileState ? 'max-w-[16em]' : 'max-w-0'}`}>
            <div className='px-4 p-4 flex justify-between sticky top-0 bg-white'>
                <img src={brand} className='h-10 md:h-16 md:mx-auto' alt="" />
                <button onClick={()=>props.setMobileState(!props.mobileState)} className='md:hidden'>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className='mt-4 space-y-6'>
                {items.map((item, index)=>{
                    return(
                        <div key={index}>
                            {/* Block Name */}
                            <div className=' font-semibold text-xs py-2 tracking-wid px-4 select-none uppercase'>
                                {/* {
                                    item.icon &&
                                    <i className={`${item.icon} text-lg pr-2`}></i>
                                } */}
                                {item.blockName}
                            </div>
                            {/* Block elements */}
                            <ul className='w-full'>
                                {
                                    item.elements.map((element, elt_index)=>{
                                        const hasChildren = !!element.children
                                        const childOpened = openedItem === elt_index 
                                        return(
                                            <li className='ring-0' key={elt_index}>
                                                <span className='tracking-wide hover:bg-gray-500/[.15] py-2 px-4 mx-6 rounded cursor-pointer transition-all ease-in-out duration-300 flex justify-between items-center' onClick={()=>{hasChildren ? toggleChildren(elt_index) : element.url ? navigate(element.url) : navigate('')}}>
                                                    <span className=''>
                                                        {
                                                            element.icon &&
                                                            <i className={`${element.icon} pr-2`}></i>
                                                        }
                                                        <span className='select-none text-sm'>{element.label}</span>
                                                    </span>
                                                    {
                                                        hasChildren && 
                                                        <i className={`bi bi-caret-right transition-all ease-in-out duration-300 ${childOpened && 'rotate-90'}`}></i>
                                                    }
                                                </span>
                                                {/* children block  */}
                                                {
                                                    hasChildren && (
                                                        <ul className={`block overflow-hidden pl-10 text-sm space-y-2 transition-all ease-in-out duration-300 mb-2 ${childOpened ? 'max-h-36 pt-2 pb-4' : 'max-h-0'}`}>
                                                            {
                                                                element.children.map((child, child_index)=>{
                                                                    return ( 
                                                                        <li key={child_index} className='cursor-pointer duration-300 hover:font-medium font-normal' onClick={()=>{child.url ? navigate(child.url) : navigate('')}}>
                                                                            <span className="hover:text-black text-sm flex space-x-3 items-center">
                                                                                <span className={`${child.url && location.pathname === child.url ? 'bg-gray-600' : 'bg-gray-300'}   ring-2 ring-opacity-[15%] ring-gray-900 h-2 w-2 rounded-full border border-slate-600 dark:border-white inline-block flex-none`}></span>
                                                                                <span className="flex-1">{child.label}</span>
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}
