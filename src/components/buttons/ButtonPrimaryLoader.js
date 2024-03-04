import React from 'react'

export default function ButtonPrimaryLoader(props) {
    //Button with orange color extend with loader
    return (
        <button className={`bg-orange text-white py-2 rounded-lg font-semibold w-36 not-italic focus:italic hover:w-full hover:italic hover:font-bold hover:uppercase transition-all ease-in-out duration-700`}>{props.children}</button>
    )
}
