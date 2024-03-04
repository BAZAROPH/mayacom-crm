import React, {useState, useRef, useEffect} from 'react'

export default function NormalDropdown(props) {
    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef(null);
    const toggleDropdown = ()=>{
        setIsOpened(!isOpened);
    }

    const handleClickOutside = (event)=>{
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpened(false);
        }
    } 

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return ()=>{
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])
    
    return (
        <div className='relative inline-bloc text-left' ref={dropdownRef}>
            {/* dropdown button */}
            <button type='button' className='inline-flex justify-center items-center w-full p-2' onClick={()=>{toggleDropdown()}}>{props.buttonContent}</button>


            {/* dropdown Content */}
            {isOpened &&
                <div className='absolute right-0 mt-2 border border-gray-300 shadow-lg rounded-md p-2 bg-white'> 
                    {props.children}
                </div>
            }
        </div>
    )
}
