import React,{useState} from 'react'
import logo from '../assets/logo-mobile.svg'
import iconDown from '../assets/icon-chevron-down.svg'
import iconUp from '../assets/icon-chevron-up.svg'
import elipsis from "../assets/icon-vertical-ellipsis.svg"
import HeaderDropDown from '../Components/HeaderDropDown';

const Header=()=>{
    const [openDropdown , setOpenDropdown] = useState(false)
  return (

    // left side
    <div className='p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0'>
        <header className='flex justify-between dark:text-white items-center' >
            <div className='flex items-center space-x-2 md:space-x-4'>
                <img src={logo} alt='logo' className='h-6 w-6'/>
                <h3 className='hidden md:inline-block  font-bold font-sans md: text-4xl'>
                    Kanban Board  
                </h3>
                <div className='flex item-center '>
                    <h3 className='truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans '>
                        Board Name 
                    </h3>
                    <img src={openDropdown ? iconUp : iconDown} alt='dropdown icon' className='w-3 ml-2 md:hidden cursor-pointer '
                    onClick={()=> setOpenDropdown(state => !state)}
                    />
                </div>
            </div>
             {/* Right side */}

             <div className='flex space-x-4'>
                    <button className='button'>
                        + Add new Task 
                    </button>
                    <button className='button py-1 px-3 md:hidden'>

                    </button>
                    <img src={elipsis} alt='+'  className='cursor-pointer h-6'/>
             </div>


        </header>
            {openDropdown && < HeaderDropDown  setOpenDropdown ={setOpenDropdown}/>}
      

    </div>
  )
}

export default Header

