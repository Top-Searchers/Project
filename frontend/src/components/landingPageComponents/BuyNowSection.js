import React from 'react'

const BuyNowSection = () => {
  return (
    <div className='flex items-center justify-between h-[53vh] flex-col mt-[70px]'>
        <button className='h-[46px] w-[133px] border border-[#dad8d8] hover:bg-[green] hover:text-[white] font-[700] spacing-[2px] tracking-wider transition ease-in-out duration-500  rounded-[10px]'>Buy Now</button>

        <div style={{
            // background:" url(/images/bg-border-choose.png) repeat-x scroll center",
            width:"30%",
            display:"flex",
            justifyContent:"center"
        }}>
            <div
            style={{  background:" url(/images/bg-border-choose.png) repeat-x scroll center",
            width:"50%",}}
            ></div>
            <img src="/images/book.png" alt=""  className='bg-white mx-[10px]'/>
            <div
              style={{  background:" url(/images/bg-border-choose.png) repeat-x scroll center",
              width:"50%",}}
            ></div>
        </div>

        <div className='flex w-[64%] justify-around'>
            <div className='flex justify-center items-center flex-col border border-[#c6c5c5] h-[27vh] w-[25vw]'>
                <img src="/images/iconsshpi.png" alt="" />
                <h5 className='font-[700] text-[13px] mt-[5px] tracking-[1px]'>OUR AGENTS</h5>
                <p className='text-[10px] tracking-[1px] text-[#151414] mt-[5px]'>Agents</p>
            </div>
            <div className='flex justify-center items-center flex-col border border-[#c6c5c5] h-[27vh] w-[25vw]'>
                <img src="/images/telephone.png" alt="" />
                <h5 className='font-[700] text-[13px] mt-[5px] tracking-[1px]'>CONTACT US</h5>
                <p className='text-[10px] tracking-[1px] text-[#101010] mt-[5px]'>Books: 24365609/24367260, Journals: 24367453</p>
            </div>

        </div>
    </div>
  )
}

export default BuyNowSection