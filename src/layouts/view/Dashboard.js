import React, {useState} from 'react'
import NavBar from '../../components/menu/NavBar'
import StateBar from '../../components/menu/StateBar'
import { Outlet } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { useLocation } from 'react-router-dom';
export default function Dashboard() {
    const [mobileState, setMobileState] = useState(false);
    // const location = useLocation();
    return (
        <div className='flex'>
            <NavBar mobileState={mobileState} setMobileState={setMobileState}/>
            <div className={`w-full overflow-y-auto ${mobileState ? 'pointer-events-none blur-sm h-screen' : ''}`}>
                <StateBar setMobileState={setMobileState} mobileState={mobileState}/>
                <div className="p-8 bg-gray-500/[.07] h-screen md:h-full">
                    {/* <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            className="fade"
                            timeout={100}
                        >
                        </CSSTransition>
                    </TransitionGroup> */}
                    <Outlet/>
                </div>
                <div className='mt-auto bg-white px-4 py-2 md:fixed bottom-0 w-full'>
                    COPYRIGHT © 2022 MAYACOM, All rights Reserved
                </div>
            </div>
        </div>
    )
}
