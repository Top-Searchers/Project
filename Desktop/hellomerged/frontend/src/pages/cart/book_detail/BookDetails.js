import React, { useEffect, useState } from 'react'
import { Book } from 'react-feather';
import { useParams } from 'react-router-dom';
import Navbar from "../../../../src/components/navbar/Navbar.js"
import Footer from "../../../../src/components/footer/Footer.js"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions.js';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AudioPlayer from './AudioPlayer.js';
import Modal from 'react-modal';
import AlertDialog from './PopUpForReferral.js';

  
const dataofbooks = [{
  i: 0,
  title: "agni ki udaan-1",
  src: "/booksImages/agni-ki-udaan-original-1.jpeg"
  , price: 1500,
},
{
  i: 1,
  title: "Agni ki Udaan ",
  src: "/booksImages/agni-ki-udaan-original-2.jpeg"
  , price: 1500,
},
{
  i: 2,
  title: "builders of modern india AKA_",
  src: "/booksImages/buildersofmodernindiaAKA_.jpg"
  , desc: " Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape.",
  price:1500
},
{
  i: 3,
  title: "Asiatic Lion - Reviving the Pride of Gir",
  src: "/booksImages/Asiaticlion.jpg",
  desc: "Discover the efforts and initiatives dedicated to the conservation of the Asiatic lion in Asiatic Lion - Reviving the Pride of Gir.This book provides a comprehensive overview of the conservation journey, celebrating the successes and addressing the challenges faced by this majestic species."
  , price: 1500,
  audioBooks:"/audio/Protecting Asiatic lions in the Gir Forest.mp3"
},
{
  i: 4,
  title: "Bapu ki Vani",
  src: "/booksImages/BAPU_KI_VAANI.jpg",
  desc: "Bapu ki Vani is a compilation of Mahatma Gandhi's profound thoughts and teachings in Hindi. This book provides a glimpse into the philosophical insights and principles that guided the Father of the Nation, offering timeless wisdom for contemporary readers"
  , price: 1500,
},
{
  i: 5,
  title: "Bharat ki Khauj",
  src: "/booksImages/bharat-ki-khauj.jpeg"
  ,
  desc: "Uncover the historical treasures of India with Bharat ki Khauj This Hindi book takes readers on a journey through the exploration of the nation's rich past, offering a comprehensive perspective on the cultural, social, and political evolution of India"
  , price: 1500,
},
{
  i: 6,
  title: "Builder of Modern India LBS",
  src: "/booksImages/BuilderofModernIndiaLBS.jpg",
  desc: " Embark on a journey through the life and contributions of Madan Mohan Malviya, a key architect of modern India. Builders of Modern India: Madan Mohan Malviya chronicles the inspiring story of this visionary leader, educationist, and freedom fighter, highlighting his significant role in shaping the nation's educational landscape."
  , price: 1500,
},
{
  i: 7,
  title: "Builders of India - SCB",
  src: "/booksImages/BuildersofIndia-SCB.jpg",
  desc: "Builders of Modern India: Subhas Chandra Bose brings to life the dynamic persona of Netaji Subhas Chandra Bose. This book explores Bose's role as a charismatic leader, his contributions to the freedom movement, and his vision for a strong, independent India."
  , price: 1500,
},
{
  i: 8,
  title: "builders of modern India - LBS_",
  src: "/booksImages/buildersofmodernIndia-LBS_.jpg",
  desc: " Delve into the life of Lal Bahadur Shastri, a man of simplicity and integrity, in Builders of Modern India: Lal Bahadur Shastri. This book pays homage to the second Prime Minister of India, highlighting his leadership during crucial times and his enduring impact on the nation."
  ,price:1500
},
{
  i: 9,
  title: "Builders of Modern India",
  src: "/booksImages/BuildersofModernIndia-MMM.jpg",
  price: 1500,
},
{
  i: 10,
  title: "Agni ki Udaan ",
  src: "/booksImages/agni-ki-udaan-original-3.jpeg"
  , price: 1500,
  audioBooks:"/audio/अगन क उडन  Agni Ki Udaan  Motivation Stories  Stories.mp3"
},


{
  i: 11,
  title: "netaji-a-life-in-pictures",
  src: "/booksImages/netaji-a-life-in-pictures.jpeg",
  desc: " Immerse yourself in the visual narrative of Subhas Chandra Bose's life with Netaji - The Life in Pictures.This book provides a captivating visual journey, offering rare and iconic photographs that bring to life the extraordinary legacy of the charismatic leader."
  ,price:1500
},
{
  i: 12,
  title: "poora_HAI_VISHWAS",
  src: "/booksImages/poora_HAI_VISHWAS.jpg",
  desc: " readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence.",
  price:1500
},
{
  i: 13,
  title: "sabka saath sabka vikas",
  src: "/booksImages/sabka saath sabka vikas.jpg",
  desc: "Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
  ,
  audioBooks:"/audio/21st century India is walking on mantra of Sabka Saath, Sabka Vikas_ PM Modi at Aadi Mahotsav.mp3"
},
{
  i: 14,
  title: "Sardar Patel Sachitra jivani",
  src: "/booksImages/Sardar Patel Sachitra jivani.jpeg"
},
{
  i: 15,
  title: "SARDAR_PATEL_KI_ANMOL_VANI",
  src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
  desc: " Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
},
{
  i: 16,
  title: "The Gospel of Buddha",
  src: "/booksImages/The Gospel of Buddha.jpg",
  desc: "Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
},
{
  i: 17,
  title: "The Warrior Democrat",
  src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
  desc: "The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
},
{
  i: 18,
  title: "Wings of Fire",
  src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
},
{
  i: 19,
  title: "Yojana Classics",
  src: "/booksImages/Yojana_Classics_Cover_page.jpg",
  desc: "Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
},
{
  i: 20,
  title: "builders of modern india AKA_",
  src: "/booksImages/builders of modern india AKA_.jpg"
  , desc: " Explore the profound impact of Maulana Abul Kalam Azad on modern India in Builders of Modern India: Abdul Kalam Azad.This book sheds light on the life and legacy of the eminent scholar, freedom fighter, and the country's first Education Minister, who played a crucial role in shaping India's educational and political landscape."
},
{
  i: 21,
  title: "netaji-a-life-in-pictures",
  src: "/booksImages/netaji-a-life-in-pictures.jpeg",
  desc: " Immerse yourself in the visual narrative of Subhas Chandra Bose's life with Netaji - The Life in Pictures.This book provides a captivating visual journey, offering rare and iconic photographs that bring to life the extraordinary legacy of the charismatic leader."
},
{
  i: 22,
  title: "poora_HAI_VISHWAS",
  src: "/booksImages/poora_HAI_VISHWAS.jpg",
  desc: " readers are taken on a motivational journey that emphasizes the power of belief. This book, in Hindi, inspires individuals to have unwavering faith in their abilities and dreams. Through anecdotes and wisdom, it encourages readers to overcome challenges and pursue their aspirations with confidence."
},
{
  i: 23,
  title: "sabka saath sabka vikas",
  src: "/booksImages/sabka saath sabka vikas.jpg",
  desc: "Sabka Saath Sabka Vikas in Hindi encapsulates the vision of inclusive development. This book explores the concept of collective growth and progress, promoting a harmonious society where every individual contributes to the overall welfare of the nation."
},
{
  i: 24,
  title: "Sardar Patel Sachitra jivani",
  src: "/booksImages/Sardar Patel Sachitra jivani.jpeg"
},
{
  i: 25,
  title: "SARDAR_PATEL_KI_ANMOL_VANI",
  src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
  desc: " Delve into the wisdom and leadership of Sardar Vallabhbhai Patel through Anmol Vaani. This Hindi book provides a collection of invaluable quotes and thoughts, shedding light on the principles and philosophies that guided this key architect of modern India"
},
{
  i: 26,
  title: "The Gospel of Buddha",
  src: "/booksImages/The Gospel of Buddha.jpg",
  desc: "Delve into the spiritual and philosophical teachings of Buddhism with The Gospel of Buddha. This book, rooted in arts and culture, presents the timeless wisdom of Buddha, offering a profound exploration of the principles that form the core of this ancient and influential belief system."
},
{
  i: 27,
  title: "The Warrior Democrat",
  src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
  desc: "The Warrior Democrat explores the intersection of democracy and leadership, drawing on historical and contemporary examples. This book delves into the qualities that make a leader resilient and effective in navigating the challenges of democratic governance"
},
{
  i: 28,
  title: "Wings of Fire",
  src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
},
{
  i: 29,
  title: "Yojana Classics",
  src: "/booksImages/Yojana_Classics_Cover_page.jpg",
  desc: "Yojana Classics - Arts and Culture is a literary treasure trove that explores the intersection of arts and culture in India. This compilation offers insightful essays and articles from the renowned Yojana magazine, providing a holistic perspective on the country's cultural heritage"
},
]


const BookDetails = () => {

  const { id } = useParams();
  const [VideoSwitch, setVideoSwitch] = useState(false)
  const dispatch = useDispatch();
  const [referralCode, setReferralCode] = React.useState('');

  const handleAddToCart = (title, price, src, desc, index) => {

    dispatch(addToCart(title, src, desc, price, index));
  };


  const Book = dataofbooks.filter((i) => i.i == id);

  useEffect(() => {

    console.log(Book[0])
  }, [id])




  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    const code = generateReferralCode();
   
    setReferralCode(code);
    setIsModalOpen(true);
  };

  const generateReferralCode = () => {
    // This function generates a random 6 character string, modify as needed.
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  };
 
  
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='h-[54vh] flex ml-[2vw] '>
          <div className='h-[au] w-[3vw] border '>
            <img src={Book[0].src} alt="" className={`w-full h-[57px]
                ${!VideoSwitch ? "  border-[2px]   border-[blue]" : ""}
                hover:cursor-pointer border-[#17aaff] pb-[2px] mb-[5px]`}
              onClick={() => { setVideoSwitch(false) }}
            />
            {Book[0].audioBooks ? (

              <div className='w-full relative'>

                <img src={Book[0].src} alt="" className={`w-full h-[57px] 
                ${VideoSwitch ? "border-[2px]   border-[blue]" : ""}
                hover:cursor-pointer border-[#17aaff] pb-[2px] mb-[5px]`}

                />
                <PlayCircleOutlineIcon
                  sx={{
                    position: "absolute", left: "17%", top: "9%", width: "35px", height: "6vh", color: "#8f8f8f"
                    , "&:hover": {
                      cursor: 'pointer'
                    }
                  }}
                  onClick={() => { setVideoSwitch(true) }}

                />

              </div>
            ) : <></>}

          </div>
          <div>
            {

             ! VideoSwitch ?
                <div className='h-full ml-[15px]'>
                  <img src={Book[0]?.src} alt="" className='h-full'

                  />

                </div> :

                <div className='h-full ml-[15px]'>
                 <AudioPlayer
                 src={Book[0]?.audioBooks}
                 />

                </div>

            }
          </div>
        </div>

        <div className='flex flex-col items-start text-justify pl-[5vw]'>

          <h1 className='text-[2rem] font-[600] mt-[10px]'>{Book[0]?.title}</h1>
          <p className='text-[20px] mt-[15px]'>Availability: In Stock</p>
          <p className='mt-[15px] text-[18px] font-[600] capitalize trancking-[3px] text-[black]'>price:₹{Book[0]?.price}</p>
         { !Book[0]?.desc?<p className=' mt-[25px] w-[35vw] text-[19px] font-[450] text-[#6a6060] leading-[35px]'>Through this book, an attempt has been made to bring out the stories of some lesser known martyrs in front of the countrymen. During mass revolution, the yogis, fakirs and messengers in other form used to go from place to place to spread the flames of revolution.</p>
        :<p className=' mt-[25px] w-[35vw] text-[19px] font-[450] text-[#6a6060] leading-[35px]'>
          {Book[0]?.desc}
        </p> 
        }


        </div>



      </div>
      <div className='w-full flex justify-center ml-[59px]'>
        
        
        <button
        className='h-[6vh] w-[8vw] border mr-[25px] border-[black] p-[5px] font-[500] hover:cursor-pointer hover:bg-[green] hover:text-[white]'
        onClick={openModal}
        >BUY NOW</button>
        <button
        className='h-[6vh] w-[8vw] border mr-[25px] border-[black] p-[5px] font-[500] hover:cursor-pointer hover:bg-[green] hover:text-[white]'
        >BUY BACK</button>
        <button className='h-[6vh] w-[8vw] border border-[black] p-[5px] font-[500] hover:cursor-pointer hover:bg-[green] hover:text-[white]'
        onClick={() => handleAddToCart(Book[0].title, Book[0].price, Book[0].src, Book[0].desc, Book[0].index)}
      >ADD TO CART</button></div>
      
      <Footer />
      <AlertDialog
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      code={referralCode}
      />
    </>

  )
}

export default BookDetails