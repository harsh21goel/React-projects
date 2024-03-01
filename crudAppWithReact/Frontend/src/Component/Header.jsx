import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className='flex justify-around'>
             <NavLink to="/"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-black-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black-500 hover:scale-125 lg:p-0 font-bold`
                  }
                >
                  Create
                </NavLink>
              
                <NavLink to="/find"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-black-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black-500 hover:scale-125  lg:p-0 font-bold`
                  }
                >
                  Read
                </NavLink>
                <NavLink to="/update"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-black-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black-500 hover:scale-125 lg:p-0 font-bold`
                  }
                >
                  Update
                </NavLink>
                <NavLink to="/delete"
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-black-700" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black-500 hover:scale-125 lg:p-0 font-bold`
                  }
                >
                  Delete
                </NavLink>
            

    </div>
    </>
  )
}

