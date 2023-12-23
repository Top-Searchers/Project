import React from 'react'

const BannerforAD = () => {
  return (
    <div
    style={{backgroundImage:"url('bannersection/home1-banner1.jpg')"}}
    className='h-[82vh] p-[40px] mt-[20vh] w-full  flex '>
<img src="bannersection/offerbannernew.jpg" alt="" className='w-[45vw]' />
<div className='flex flex-col items-center w-full'>
    <p className='text-[28px] mb-[19px]'>SPECIAL OFFER</p>
    <h1 className='font-[700] text-[33px] text-[green]'>GET 20% OFF </h1>
    <p className='text-[23px] text-center mt-[20px]'>ON YOUR ORDER OF RS. 3000 OR 
    <br/>
    MORE
    </p>
    <div></div>
    <button
    className='w-[136px] h-[46px] border bg-green-500 hover:bg-[green] hover:text-[white] mt-[25px]'
    >SHOP NOW</button>
</div>

    </div>
  )
}

export default BannerforAD