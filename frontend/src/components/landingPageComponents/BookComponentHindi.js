import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions';




const BookComponent = ({title,src,desc,price,index}) => {

    const [hovered, setHovered] = useState(false);
    const nav=useNavigate();
    
    const hoverEnabled=()=>{
        setHovered(true);
       
    }
    const hoverDisabled=()=>{
        setHovered(false)
    }
    const dispatch = useDispatch();

    const handleAddToCart = (title,price,src,desc,index) => {
      
      dispatch(addToCart(title,src,desc,price,index));
    };
  
const amandeepsharam=(index)=>{
dispatch(removeFromCart(index))
}

  return (
    <>
    <div className='w-[20%] h-[50vh]  flex flex-col items-center'
    onMouseEnter={hoverEnabled}
    onMouseLeave={hoverDisabled}
    >
      <div className='w-[80%] h-[74%] px-[5%] relative flex justify-center'>

      <img src={src} alt="" 
        className={`w-full h-full  ${hovered?"scale-[1.01]":""}`}
      />
      <div className={`absolute  ${hovered?"block h-[100%]  scale-[1.01] ":"h-[0] hidden"} w-full bg-[rgba(0,0,0,0.6)] bottom-0 transition-height duration-[500]
      flex flex-col items-center  text-[white]
      `}>
           <h1 className='font-[500] text-[15px] mt-[10px]'>{title.slice(0,20).toUpperCase()}{title.length>20?"...":""}</h1>
            <p className='mt-[10px]'>$1,2344</p>
            <button className='border mt-[10px] px-[10px] py-[4px] hover:bg-[white] hover:text-[black]'

               onClick={()=>handleAddToCart(title,price,src,desc,index)}
            >कार्ट में जोड़ें</button>
            <button className='border mt-[10px] px-[10px] py-[4px] hover:bg-[white] hover:text-[black]'
            onClick={()=>amandeepsharam(index)}
            >इच्छा-सूची</button>


      </div>
      </div>
        

         
        <div className='flex w-[full] flex-col items-center hover:cursor-pointer hover:text-[green] pt-[15px]'
        onClick={()=>{
         nav(`/BookDetail/${index}`)
        }}
        >
                <h1 className='font-[500] text-[15px] '>{title.slice(0,20).toUpperCase()}{title.length>20?"...":""}</h1>
            <p className='text-[green]'>$1,2344</p>
        </div>
        
    </div>
    
    </>
  )
}

export default BookComponent