import React from 'react'
const imagesdata=["/images/events1.jpg","images/event6.jpg","/images/event5.png","/images/event4.jpg","/images/event3.jpg","/images/event2.png"]
const Events = () => {
  return (
    <div className='w-full flex justify-around  items-center mt-[5%] overflow-hidden'>
        {
            imagesdata.map((e,i)=>{
                return(
                    <div className='w-[155px] h-[104px] hover:scale-[1.05] transition-all ease-in-out duration-[500]'>
                        <img src={e} alt=""  />
                    </div>
                )
            })
        }

    </div>
  )
}

export default Events