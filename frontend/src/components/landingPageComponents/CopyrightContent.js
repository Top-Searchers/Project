import React from 'react'

const CopyrightContent = () => {
  return (
    <div className='flex'>

        <div className='w-[91vw] m-[28px]'>
            <div className='w-[100%] overflow-hidden'>
            <img src="/bannersection/copyright[1]-500x300.jpg" alt=""
            className='w-[100%] hover:scale-[1.05] hover:cursor-pointer'
            />
            </div>
            <h1 className='text-[23px] font-[600] mt-[27px]'>Copyright Policy</h1>
            <p
            className='text-[18px] font-[#7e7979] mt-[25px] text-justify'
            >Material featured on this portal may be reproduced free of charge in any format or media without requiring specific permission. This is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context. Where the material is being published or issued...</p>
            <button
            className='w-[101px] h-[40px] bg-[orange] mt-[30px] rounded-[9px]'
            >Read More</button>

        </div>
        <div className='w-[91vw] m-[28px]'>
            <div  className='w-[100%] overflow-hidden'>
            <img src="/bannersection/Acce-500x300-500x300.jpg" alt=""
             className='w-[100%] hover:scale-[1.05] hover:cursor-pointer'
            />
            </div>
            <h1 className='text-[23px] font-[600] mt-[27px]'>Accessibility Statement</h1>
            <p
            className='text-[18px] font-[#7e7979] mt-[25px] text-justify'
            >It is ensured that the Publications Division website is accessible to all users irrespective of device in use, technology or ability. It has been built, with an aim, to provide maximum accessibility and usability to its visitors. As a result, this website can be viewed from a variety of devices...</p>
            <button
            className='w-[101px] h-[40px] bg-[orange] mt-[30px] rounded-[9px]'
            >Read More</button>

        </div>
       
        <div>

        </div>
    </div>
  )
}

export default CopyrightContent