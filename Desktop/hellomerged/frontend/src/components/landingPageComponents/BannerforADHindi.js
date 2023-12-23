import React from 'react'

const BannerforAD = () => {
  return (
    <div
    style={{backgroundImage:"url('bannersection/home1-banner1.jpg')"}}
    className='h-[82vh] p-[40px] mt-[20vh] w-full  flex '>
<img src="bannersection/offerbannernew.jpg" alt="" className='w-[45vw]' />
<div className='flex flex-col items-center w-full'>
    <p className='text-[28px] mb-[19px]'>विशेष पेशकश</p>
    <h1 className='font-[700] text-[33px] text-[green]'>20% की छूट पाएं</h1>
    <p className='text-[23px] text-center mt-[20px]'>आपके रुपये के ऑर्डर पर. 3000 या
    <br/>
    अधिक
    </p>
    <div></div>
    <button
    className='w-[136px] h-[46px] border bg-green-500 hover:bg-[green] hover:text-[white] mt-[25px]'
    >अभी खरीदें</button>
</div>

    </div>
  )
}

export default BannerforAD