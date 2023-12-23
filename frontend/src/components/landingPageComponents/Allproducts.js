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
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqBgonxCeiOha71SuUnO_jB3M86qFa_ix9S9oADoommca33jOIo-QQRvS4oJv4kpViNA&usqp=CAU"
      ,desc:" Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape."
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
      },
      { i:12, 
         title:"poora_HAI_VISHWAS",
          src:"/booksImages/poora_HAI_VISHWAS.jpg",
          desc:" readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence."
      },
      {  i:13,  
         title:"sabka saath sabka vikas",
          src:"https://www.publicationsdivision.nic.in/image/cache/catalog/1692944552_sabka_saath_sabka_vikas_vol_-_7_hindi-900x900.jpg",
          desc:"Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
      },
      {  i:14,   
        title:"Sardar Patel Sachitra jivani",
          src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb71OVIeZsgxWxcglY6NyeFTihVRO2kSAn5-ZJQlz6JrYZ7NEKZbrbZc18tHNyx3VIik&usqp=CAU"
          ,price:1500,
      },
      {  
        i:15, 
        title:"SARDAR_PATEL_KI_ANMOL_VANI",
          src:"/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
          desc:" Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
      },
      {  i:16,  
        title:"The Gospel of Buddha",
         src:"data:image/jpeg;base64,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",
       
         desc:"Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
         ,price:1500,
      },
      {  i:17,  
         title:"The Warrior Democrat",
          src:"/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
          desc:"The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
      },
      { i:18, 
          title:"Wings of Fire",
          src:"/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
      },
      {  i:19,  
         title:"Yojana Classics",
          src:"/booksImages/Yojana_Classics_Cover_page.jpg",
          desc:"Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
      },
      ]
const latestbook=[
      { i:20, 
           title:"builders of modern india AKA_",
          src:"/booksImages/buildersofmodernindiaAKA_.jpg"
          ,desc:" Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape."
      },
      {  i:21,   
        title:"netaji-a-life-in-pictures",
          src:"/booksImages/netaji-a-life-in-pictures.jpeg",
          desc:" Immerse yourself in the visual narrative of Subhas Chandra Bose's life with Netaji - The Life in Pictures.This book provides a captivating visual journey, offering rare and iconic photographs that bring to life the extraordinary legacy of the charismatic leader."
      },
      {  i:22,  
         title:"poora_HAI_VISHWAS",
          src:"/booksImages/poora_HAI_VISHWAS.jpg",
          desc:" readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence."
      },
      {  i:23,  
         title:"sabka saath sabka vikas",
          src:"/booksImages/sabka saath sabka vikas.jpg",
          desc:"Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
      },
      {  
        i:24, 
        title:"Sardar Patel Sachitra jivani",
          src:"/booksImages/Sardar Patel Sachitra jivani.jpeg"
      },
      {  
        i:25, 
        title:"SARDAR_PATEL_KI_ANMOL_VANI",
          src:"/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
          desc:" Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
      },
      {  i:6,  
        title:"The Gospel of Buddha",
         src:"data:image/jpeg;base64,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",
       
         desc:"Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
         ,price:1500,
      },
      {   i:27,
          title:"The Warrior Democrat",
          src:"/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
          desc:"The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
      },
      {   i:28,
         title:"Wings of Fire",
          src:"/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
      },
      {  
        i:29, 
        title:"Yojana Classics",
          src:"/booksImages/Yojana_Classics_Cover_page.jpg",
          desc:"Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
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