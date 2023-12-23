import React, { useState } from 'react'
import BookComponent from './BookComponent';
import { useDispatch, useSelector } from 'react-redux';


const allproducts=[
  { i:0,  
    title:"agni ki udaan-1",
      src:"/booksImages/agni-ki-udaan-original-1.jpeg"
      ,price:1500,
  },
  { i:1,  
    title:"Agni ki Udaan ",
      src:"/booksImages/agni-ki-udaan-original-2.jpeg"
      ,price:1500,
  },
  {  
    i:2,
    title:"builders of modern india AKA_",
      src:"/booksImages/buildersofmodernindiaAKA_.jpg"
      ,desc:" Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape."
      ,price:1500,
    },
  { i:3, 
    title:"Asiatic Lion - Reviving the Pride of Gir",
      src:"/booksImages/Asiaticlion.jpg",
      desc:"Discover the efforts and initiatives dedicated to the conservation of the Asiatic lion in Asiatic Lion - Reviving the Pride of Gir.This book provides a comprehensive overview of the conservation journey, celebrating the successes and addressing the challenges faced by this majestic species."
      ,price:1500,
  },
  { i:4, 
     title:"Bapu ki Vani",
      src:"/booksImages/BAPU_KI_VAANI.jpg",
      desc:"Bapu ki Vani is a compilation of Mahatma Gandhi's profound thoughts and teachings in Hindi. This book provides a glimpse into the philosophical insights and principles that guided the Father of the Nation, offering timeless wisdom for contemporary readers"
      ,price:1500,
  },
  { i:5,  
    title:"Bharat ki Khauj",
      src:"/booksImages/bharat-ki-khauj.jpeg"
      ,
      desc:"Uncover the historical treasures of India with Bharat ki Khauj This Hindi book takes readers on a journey through the exploration of the nation's rich past, offering a comprehensive perspective on the cultural, social, and political evolution of India"
      ,price:1500,
  },
  { i:6, 
     title:"Builder of Modern India LBS",
      src:"/booksImages/BuilderofModernIndiaLBS.jpg",
      desc:" Embark on a journey through the life and contributions of Madan Mohan Malviya, a key architect of modern India. Builders of Modern India: Madan Mohan Malviya chronicles the inspiring story of this visionary leader, educationist, and freedom fighter, highlighting his significant role in shaping the nation's educational landscape."
      ,price:1500,
  },
  { i:7, 
     title:"Builders of India - SCB",
      src:"/booksImages/BuildersofIndia-SCB.jpg",
      desc:"Builders of Modern India: Subhas Chandra Bose brings to life the dynamic persona of Netaji Subhas Chandra Bose. This book explores Bose's role as a charismatic leader, his contributions to the freedom movement, and his vision for a strong, independent India."
      ,price:1500,
  },
  { i:8, 
     title:"builders of modern India - LBS_",
      src:"/booksImages/buildersofmodernIndia-LBS_.jpg",
      desc:" Delve into the life of Lal Bahadur Shastri, a man of simplicity and integrity, in Builders of Modern India: Lal Bahadur Shastri. This book pays homage to the second Prime Minister of India, highlighting his leadership during crucial times and his enduring impact on the nation."
      ,price:1500,
  },
  { i:9, 
     title:"Builders of Modern India",
      src:"/booksImages/BuildersofModernIndia-MMM.jpg",
      price:1500,
  },
 

  
  ]
  
const latest_journal=[
    { i:10,  
        title:"Agni ki Udaan ",
          src:"/booksImages/agni-ki-udaan-original-3.jpeg"
          ,price:1500,
      },

    
      { i:11,
          title:"netaji-a-life-in-pictures",
          src:"/booksImages/netaji-a-life-in-pictures.jpeg",
          desc:" Immerse yourself in the visual narrative of Subhas Chandra Bose's life with Netaji - The Life in Pictures.This book provides a captivating visual journey, offering rare and iconic photographs that bring to life the extraordinary legacy of the charismatic leader."
          ,price:1500,
      },
      { i:12, 
         title:"poora_HAI_VISHWAS",
          src:"/booksImages/poora_HAI_VISHWAS.jpg",
          desc:" readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence."
          ,price:1500,
      },
      {  i:13,  
         title:"sabka saath sabka vikas",
          src:"/booksImages/2.jpg",
          desc:"Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
          ,price:1500,
      },
      {  i:14,   
        title:"Sardar Patel Sachitra jivani",
          src:"/booksImages/5.jpg"
          ,price:1500,
      },
      {  
        i:15, 
        title:"SARDAR_PATEL_KI_ANMOL_VANI",
          src:"/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
          desc:" Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
          ,price:1500,
      },
      {  i:16,  
         title:"The Gospel of Buddha",
          src:"/booksImages/4.jpg",
        
          desc:"Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
          ,price:1500,
      },
      {  i:17,  
         title:"The Warrior Democrat",
          src:"/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
          desc:"The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
          ,price:1500,
      },
      { i:18, 
          title:"Wings of Fire",
        
          src:"/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
          ,price:1500,
      },
      {  i:19,  
         title:"Yojana Classics",
          src:"/booksImages/Yojana_Classics_Cover_page.jpg",
          desc:"Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
          ,price:1500,
      },
      ]
const latestbook=[
      { i:20, 
           title:"builders of modern india AKA_",
          src:"/booksImages/1.jpg"
          ,desc:" Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape."
          ,price:1500,
      },
      {  i:21,   
        title:"netaji-a-life-in-pictures",
          src:"/booksImages/netaji-a-life-in-pictures.jpeg",
          desc:" Immerse yourself in the visual narrative of Subhas Chandra Bose's life with Netaji - The Life in Pictures.This book provides a captivating visual journey, offering rare and iconic photographs that bring to life the extraordinary legacy of the charismatic leader."
          ,price:1500,
      },
      {  i:22,  
         title:"poora_HAI_VISHWAS",
          src:"/booksImages/poora_HAI_VISHWAS.jpg",
          desc:" readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence."
          ,price:1500,
      },
      {  i:23,  
         title:"sabka saath sabka vikas",
          src:"/booksImages/1.jpg",
          desc:"Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
          ,price:1500,
      },
      {  
        i:24, 
        title:"Sardar Patel Sachitra jivani",
          src:"/booksImages/3.jpg"
          ,price:1500,
      },
      {  
        i:25, 
        title:"SARDAR_PATEL_KI_ANMOL_VANI",
          src:"/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
          desc:" Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
          ,price:1500,
      },
      {  i:26,
           title:"The Gospel of Buddha",
          src:"/booksImages/4.jpg",
          desc:"Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
          ,price:1500,
      },
      {   i:27,
          title:"The Warrior Democrat",
          src:"/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
          desc:"The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
          ,price:1500,
      },
      {   i:28,
         title:"Wings of Fire",
          src:"/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
          ,price:1500,
      },
      {  
        i:29, 
        title:"Yojana Classics",
          src:"/booksImages/Yojana_Classics_Cover_page.jpg",
          desc:"Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
          ,price:1500,
      },
      ]
  

const Allproducts = () => {

    const [selected, setSelected] = useState("ALL PRODUCTS");

    const handleOnClick=(e)=>{
       setSelected(e.target.innerText)
    }

  

  return (
   <>
    <div className='w-full flex justify-center mt-[70px] border-t-[1px]'>
        <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected==="ALL PRODUCTS"?"text-[green] underline":"text-[black]"}`}
        onClick={handleOnClick}
        >ALL PRODUCTS</p>
        <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected==="LATEST BOOKS"?"text-[green] underline":"text-[black]"}`}
        
        onClick={handleOnClick}
        >LATEST BOOKS</p>
        <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected==="LATEST JOURNALS"?"text-[green] underline":"text-[black]"}`}
        
        onClick={handleOnClick}
        >LATEST JOURNALS</p>
    </div>
    <div className='w-full flex flex-wrap  mt-[15vh]'>
      {
        selected==="ALL PRODUCTS"?allproducts.map(({title,src,price,i,desc})=>{
          return(<BookComponent title={title}  src={src} desc={desc} price={price} index={i}/>)})
        
        :selected==="LATEST BOOKS"?
          latestbook.map(({title,src,price,i,desc})=>{
            return(<BookComponent title={title}  src={src} desc={desc} price={price} index={i} />)
          })
        :latest_journal.map(({title,src,price,i,desc})=>{
          return(
          <>
            <BookComponent  title={title}  src={src} desc={desc} price={price} index={i}/>
          
          </>
          )
        })
      }

    </div>
    
    <div className='flex justify-center mt-[6vh]'>
        <button className='w-[136px] h-[46px] border bg-green-500 hover:bg-[green] hover:text-[white]'>
            VIEW ALL
        </button>

    </div>
   </>
  )
}

export default Allproducts