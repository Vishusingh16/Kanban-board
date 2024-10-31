import React from 'react'

const HeaderDropDown = (setOpenDropdown) => {
    return (
        <div className='px-6 py-10 absolute left-0 right-0 botton-[-100vh] top-16 bg-black'>
            {/* dropdownbox */}
            <div className='bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a] w-full py-4 rounded xl'>
                <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
                    All Board

                </h3>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default HeaderDropDown
