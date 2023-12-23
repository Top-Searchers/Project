import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import NavbarHindi from '../../components/navbar/NavbarHindi'
import Footer from '../../components/footer/Footer'
import FooterHindi from '../../components/footer/FooterHindi'
import DeleteIcon from '@mui/icons-material/Delete';
import "./cart.css"


// import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateItemQuantity } from '../../redux/actions';
import { useLanguage } from '../../components/Context/Context'


const Cart = () => {
    window.onload = function() {
        window.scrollTo(0, 0);
    }
    
    // const {desc,index,price,quantity,src,title} = useSelector(state => state.cartItems.counter.items);
const data=    useSelector(state=>state?.counter.items)
const [totalprice, setTotalPrice] = useState(0);

const {language}=useLanguage()
   
let totalPrice=0;
    
 const dispatch=useDispatch();
 const increment =(id)=>{
   dispatch(updateItemQuantity(id,1))
   data.forEach((i)=>{
    totalPrice+=(i.quantity)*(i.price)
    console.log(totalPrice)
})
 };
 const decrement =(id)=>{
    dispatch(updateItemQuantity(id,-1))
    data.forEach((i)=>{
        totalPrice+=(i.quantity)*(i.price)
        console.log(totalPrice)
    })

 };
const deleteHandler =(id)=>{
   dispatch(removeFromCart(id))
   console.log("delted")
   data.forEach((i)=>{
    totalPrice+=(i.quantity)*(i.price)
    console.log(totalPrice)
    // setDeletedclickedd(prev=>!prev)
}) 
};


data.forEach((i)=>{
  totalPrice+=(i.quantity)*(i.price)
  console.log(totalPrice)
})



useEffect(() => {
    let newTotal = 0;
    data.forEach(item => {
        newTotal += item.quantity * item.price;
    });
    setTotalPrice(newTotal);
}, [data]);


    return (
        <>
       {language==="ENGLISH"?(
       <>
       <Navbar/>



<div className='cart '>
    <main>
        {
            data.length>0?(
                data.map(i=>(
                    <CartItem
                    imgSrc={i.src}
                    name={i.title}
                    price={i.price}
                    qty={i.quantity}
                    id={i.index}
                    decrement={()=>decrement(i.index)}
                    increment={()=>increment(i.index)}
                    deleteHandler={()=>deleteHandler(i.index)}
                    
                    />
                    ))
                    ):(<h1 className='w-full text-center !text-black'>No Items Yet</h1>)
        }
    </main>

    <aside>
        <h2>Subtotal:  ₹{totalPrice?totalPrice:"0"}</h2>
        <h2>Shipping:  ₹{40}</h2>
        {/* <h2>Tax:  ₹{tax}</h2> */}
        <h2>Total:  ₹{totalPrice?totalPrice+40:"0"}</h2>            
    </aside>
</div>
<Footer/>
</>
):(
<>

<NavbarHindi/>

<div className='cart '>
    <main>
        {
            data.length>0?(
                data.map(i=>(
                    <CartItem
                    imgSrc={i.src}
                    name={i.title}
                    price={i.price}
                    qty={i.quantity}
                    id={i.index}
                    decrement={()=>decrement(i.index)}
                    increment={()=>increment(i.index)}
                    deleteHandler={()=>deleteHandler(i.index)}
                    
                    />
                    ))
                    ):(<h1 className='w-full text-center !text-black'>No Items Yet</h1>)
        }
    </main>

    <aside>
        <h2>Subtotal:  ₹{totalPrice?totalPrice:"0"}</h2>
        <h2>Shipping:  ₹{40}</h2>
        {/* <h2>Tax:  ₹{tax}</h2> */}
        <h2>Total:  ₹{totalPrice?totalPrice+40:"0"}</h2>            
    </aside>
</div>

<FooterHindi/>
</>



)}
</>
  )
}

const CartItem=({imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id})=>(
        <>
    <div className='cartItem border-b-[1px] '>
        <img src={imgSrc} alt="Item" />
        <article className='ml-[20px] '>
            <h3 className='text-[23px] font-[450] underline'>{name}</h3>
            <p className='text-[20px] text-[green]'> ${price}</p>
         

        </article>
        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>

        </div>
        <DeleteIcon onClick={()=>deleteHandler(id)}/>
        
    </div>
   
        </>
)


export default Cart;