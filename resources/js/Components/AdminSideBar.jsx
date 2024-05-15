import NavLink from '@/Components/NavLink';

import { useState } from "react";
import ResponsiveNavLink from './ResponsiveNavLink';


export default function AdminSideBar({name , links}){
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const listBtn = links.map((value, index) => (
        <li key={index}>
            <button  className='SideBarBTN w-40 bg-red-400 h-15 text-xl font-semibold rounded-md'>
            <div>
              {value === "logout" ?
              <ResponsiveNavLink  method="post" href={route(value)} active={route().current(value)}>
                    <h1 className=' text-black text-base'>{value.replace('.index', '').toUpperCase()}</h1>
              </ResponsiveNavLink>:
              <ResponsiveNavLink href={route(value)} active={route().current(value)}>
                    <h1 className=' text-black text-base'>{value.replace('.index', '').toUpperCase()}</h1>
              </ResponsiveNavLink>
              }
            </div>
            </button>
        </li>
    ))
    // check muna kung ano ang type na user

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
    return(
        <>
            <button onClick={toggleSidebar}  className=" -mt-14 fixed text-4xl left-10  z-20" > {sidebarVisible ? '✕' : '☰'}</button>
            <aside className={` -mt-20 pt-20 flex top-16 w-72 flex-col h-full items-center gap-1 z-10 bg-slate-500 fixed overflow-auto transition-all duration-300 ${sidebarVisible ? 'left-0' : '-left-full'}`}>
                <h1 className=" text-bold text-xl mt-32">{name}</h1>
                <div className=" w-32 h-32 bg-slate-300 rounded-full absolute "></div>
                <ul className=" flex gap-5  flex-col relative  pb-40">
                   {listBtn}
                </ul>
            </aside>
        </>
    );

}
