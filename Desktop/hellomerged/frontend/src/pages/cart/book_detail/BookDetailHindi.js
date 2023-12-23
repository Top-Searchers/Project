import React, { useEffect, useState } from 'react'
import { Book } from 'react-feather';
import { useParams } from 'react-router-dom';
import Navbar from "../../../../src/components/navbar/Navbar.js"
import NavbarHindi from "../../../../src/components/navbar/NavbarHindi.js"
import Footer from "../../../../src/components/footer/Footer.js"
import FooterHindi from "../../../../src/components/footer/FooterHindi.js"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions.js';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AudioPlayer from './AudioPlayer.js';
import AlertDialog from './PopUpHindi.js';

const dataofbooks = [
    {
      i: 0,
      title: "अग्नि की उड़ान-1",
      src: "/booksImages/agni-ki-udaan-original-1.jpeg",
      "price": 1500
    },
    {
      i: 1,
      title: "अग्नि की उड़ान",
      src: "/booksImages/agni-ki-udaan-original-2.jpeg",
      "price": 1500
    },
    {
      i: 2,
      title: "आधुनिक भारत के निर्माता AKA",
      src: "/booksImages/buildersofmodernindiaAKA_.jpg",
      desc: "आधुनिक भारत में मौलाना अबुल कलाम आज़ाद के प्रभाव का अन्वेषण करें। यह पुस्तक प्रमुख विद्वान, स्वतंत्रता सेनानी, और पहले शिक्षा मंत्री के जीवन और विरासत पर प्रकाश डालती है।",
      "price": 1500
    },
    {
      i: 3,
      title: "एशियाई शेर - गिर की गौरव की पुनर्स्थापना",
      src: "/booksImages/Asiaticlion.jpg",
      desc: "गिर में एशियाई शेरों के संरक्षण के प्रयासों की खोज करें। यह पुस्तक उनके संरक्षण की व्यापक यात्रा को प्रस्तुत करती है।",
      "price": 1500,
      audioBooks: "/audio/Protecting Asiatic lions in the Gir Forest.mp3"
    },
    {
      i: 4,
      title: "बापू की वाणी",
      src: "/booksImages/BAPU_KI_VAANI.jpg",
      desc: "महात्मा गांधी के गहन विचारों और शिक्षाओं का संग्रह। यह पुस्तक उनकी दार्शनिक अंतर्दृष्टि की झलक प्रदान करती है।",
      "price": 1500
    },
    {
      i: 5,
      title: "भारत की खोज",
      src: "/booksImages/bharat-ki-khauj.jpeg",
      desc: "भारत के ऐतिहासिक खजानों की खोज करें। यह हिंदी पुस्तक भारत के समृद्ध अतीत का पता लगाती है।",
      "price": 1500
    },
    {
      i: 6,
      title: "आधुनिक भारत के निर्माता LBS",
      src: "/booksImages/BuilderofModernIndiaLBS.jpg",
      desc: "मदन मोहन मालवीय के जीवन और योगदान की यात्रा करें। यह पुस्तक इस दूरदर्शी नेता की प्रेरक कहानी को प्रस्तुत करती है।",
      "price": 1500
    },
    {
      i: 7,
      title: "भारत के निर्माता - एससीबी",
      src: "/booksImages/BuildersofIndia-SCB.jpg",
      desc: "नेताजी सुभाष चंद्र बोस के जीवन का वर्णन। यह पुस्तक उनके चरित्र और स्वतंत्रता आंदोलन में योगदान को प्रकाशित करती है।",
      "price": 1500
    },
    {
      i: 8,
      title: "आधुनिक भारत के निर्माता - एलबीएस",
      src: "/booksImages/buildersofmodernIndia-LBS_.jpg",
      desc: "लाल बहादुर शास्त्री के जीवन में गहराई से जाएं। यह पुस्तक भारत के दूसरे प्रधानमंत्री के नेतृत्व और प्रभाव को उजागर करती है।",
      "price": 1500
    },
    {
      i: 9,
      title: "आधुनिक भारत के निर्माता",
      src: "/booksImages/BuildersofModernIndia-MMM.jpg",
      "price": 1500
    },
    {
      i: 10,
      title: "अग्नि की उड़ान",
      src: "/booksImages/agni-ki-udaan-original-3.jpeg",
      "price": 1500,
      audioBooks: "/audio/अगन क उडन Agni Ki Udaan Motivation Stories Stories.mp3"
    }, ,
  
  
    {
      i: 11,
      title: "नेताजी - एक जीवनी चित्र",
      src: "/booksImages/netaji-a-life-in-pictures.jpeg",
      desc: "नेताजी - चित्रों में जीवन के साथ सुभाष चंद्र बोस के जीवन की दृश्य कथा में खुद को डुबोएं। यह पुस्तक दुर्लभ और प्रतिष्ठित तस्वीरों के माध्यम से करिश्माई नेता की असाधारण विरासत को जीवंत करती है।",
      "price": 1500
    },
    {
      i: 12,
      title: "पूरा है विश्वास",
      src: "/booksImages/poora_HAI_VISHWAS.jpg",
      desc: "इस पुस्तक में पाठकों को विश्वास की शक्ति पर जोर देने वाली प्रेरक यात्रा पर ले जाया जाता है। यह हिंदी पुस्तक व्यक्तियों को उनकी क्षमताओं और सपनों में अटूट विश्वास रखने के लिए प्रेरित करती है।",
      "price": 1500
    },
    {
      i: 13,
      title: "सबका साथ सबका विकास",
      src: "/booksImages/sabka saath sabka vikas.jpg",
      desc: "सबका साथ सबका विकास हिंदी में समावेशी विकास की दृष्टि को संक्षेप में प्रस्तुत करता है। यह पुस्तक सामूहिक विकास और प्रगति के विचार का पता लगाती है।",
      audioBooks: "/audio/21st century India is walking on mantra of Sabka Saath, Sabka Vikas_ PM Modi at Aadi Mahotsav.mp3"
    },
    {
      i: 14,
      title: "सरदार पटेल सचित्र जीवनी",
      src: "/booksImages/Sardar Patel Sachitra jivani.jpeg"
    },
    {
      i: 15,
      title: "सरदार पटेल की अनमोल वाणी",
      src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
      desc: "सरदार पटेल की बुद्धिमत्ता और नेतृत्व को अनमोल वाणी के माध्यम से जानें। यह पुस्तक महत्वपूर्ण उद्धरणों और विचारों का संग्रह प्रदान करती है।"
    },
    {
      i: 16,
      title: "बुद्ध की वाणी",
      src: "/booksImages/The Gospel of Buddha.jpg",
      desc: "बुद्ध की आध्यात्मिक और दार्शनिक शिक्षाओं के साथ गहराई में जाएं 'बुद्ध की वाणी' के माध्यम से। यह पुस्तक बुद्ध के समयरहित ज्ञान को प्रस्तुत करती है।"
    },
    {
      i: 17,
      title: "योद्धा लोकतंत्रवादी",
      src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
      desc: "योद्धा लोकतंत्रवादी लोकतंत्र और नेतृत्व के चौराहे पर चर्चा करता है, इतिहास और वर्तमान उदाहरणों को आकर्षित करता है। यह पुस्तक एक नेता की लचीलापन और प्रभावी नेतृत्व क्षमताओं को प्रकट करती है।"
    },
    {
      i: 18,
      title: "अग्नि की उड़ान",
      src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
    },
    {
      i: 19,
      title: "योजना क्लासिक्स",
      src: "/booksImages/Yojana_Classics_Cover_page.jpg",
      desc: "योजना क्लासिक्स - कला और संस्कृति भारतीय कला और संस्कृति के चौराहे का अन्वेषण करता है। यह संकलन योजना पत्रिका के प्रतिष्ठित निबंधों और लेखों की पेशकश करता है।"
    },
    {
      i: 20,
      title: "आधुनिक भारत के निर्माता AKA",
      src: "/booksImages/builders of modern india AKA_.jpg",
      desc: "इस पुस्तक में मौलाना अबुल कलाम आज़ाद के आधुनिक भारत पर प्रभाव की खोज करें। प्रमुख विद्वान, स्वतंत्रता सेनानी, और पहले शिक्षा मंत्री के जीवन और विरासत पर प्रकाश डाला गया है।"
    },
    {
      i: 21,
      title: "नेताजी - एक जीवनी चित्र",
      src: "/booksImages/netaji-a-life-in-pictures.jpeg",
      desc: "नेताजी - चित्रों में जीवन के साथ सुभाष चंद्र बोस के जीवन की दृश्य कथा में खुद को डुबोएं। यह पुस्तक दुर्लभ और प्रतिष्ठित तस्वीरों के माध्यम से नेता की असाधारण विरासत को जीवंत करती है।"
    },
    {
      i: 22,
      title: "पूरा है विश्वास",
      src: "/booksImages/poora_HAI_VISHWAS.jpg",
      desc: "इस पुस्तक में पाठकों को विश्वास की शक्ति पर जोर देने वाली प्रेरक यात्रा पर ले जाया जाता है। व्यक्तियों को उनकी क्षमताओं और सपनों में अटूट विश्वास रखने के लिए प्रेरित करती है।"
    },
    {
      i: 23,
      title: "सबका साथ सबका विकास",
      src: "/booksImages/sabka saath sabka vikas.jpg",
      desc: "सबका साथ सबका विकास समावेशी विकास की दृष्टि को संक्षेप में प्रस्तुत करता है। यह पुस्तक सामूहिक विकास और प्रगति के विचार का पता लगाती है।"
    },
    {
      i: 24,
      title: "सरदार पटेल सचित्र जीवनी",
      src: "/booksImages/Sardar Patel Sachitra jivani.jpeg"
    },
    {
      i: 25,
      title: "सरदार पटेल की अनमोल वाणी",
      src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
      desc: "सरदार पटेल की बुद्धिमत्ता और नेतृत्व की खोज करें अनमोल वाणी के माध्यम से। यह पुस्तक महत्वपूर्ण उद्धरणों और विचारों का संग्रह प्रदान करती है।"
    },
    {
      i: 26,
      title: "बुद्ध की वाणी",
      src: "/booksImages/The Gospel of Buddha.jpg",
      desc: "बुद्ध की आध्यात्मिक और दार्शनिक शिक्षाओं के साथ गहराई में जाएं 'बुद्ध की वाणी' के माध्यम से। यह पुस्तक बुद्ध के समयरहित ज्ञान को प्रस्तुत करती है।"
    },
    {
      i: 27,
      title: "योद्धा लोकतंत्रवादी",
      src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
      desc: "योद्धा लोकतंत्रवादी लोकतंत्र और नेतृत्व के चौराहे पर चर्चा करता है। यह पुस्तक एक नेता के लचीलापन और प्रभावी नेतृत्व क्षमताओं को प्रकट करती है।"
    },
    {
      i: 28,
      title: "अग्नि की उड़ान",
      src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
    },
    {
      i: 29,
      title: "योजना क्लासिक्स",
      src: "/booksImages/Yojana_Classics_Cover_page.jpg",
      desc: "योजना क्लासिक्स - कला और संस्कृति भारतीय कला और संस्कृति के चौराहे का अन्वेषण करता है। यह संकलन योजना पत्रिका के प्रतिष्ठित निबंधों और लेखों की पेशकश करता है।"
    }
  ]
  

const BookDetails = () => {

  const { id } = useParams();
  const [VideoSwitch, setVideoSwitch] = useState(false)
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referralCode, setReferralCode] = React.useState('');
  const openModal = () => {
    const code = generateReferralCode();
   
    setReferralCode(code);
    setIsModalOpen(true);
  };

  const generateReferralCode = () => {
    // This function generates a random 6 character string, modify as needed.
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  };

  const handleAddToCart = (title, price, src, desc, index) => {

    dispatch(addToCart(title, src, desc, price, index));
  };


  const Book = dataofbooks.filter((i) => i.i == id);

  useEffect(() => {

    console.log(Book[0])
  }, [id])



  return (
    <>
      <NavbarHindi />
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
          <p className='text-[20px] mt-[15px]'>उपलब्धता: स्टॉक में हैं</p>
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
        >अभी खरीदें</button>
        <button
        className='h-[6vh] w-[8vw] border mr-[25px] border-[black] p-[5px] font-[500] hover:cursor-pointer hover:bg-[green] hover:text-[white]'
        >वापस खरीदे</button>
        <button className='h-[6vh] w-[8vw] border border-[black] p-[5px] font-[500] hover:cursor-pointer hover:bg-[green] hover:text-[white]'
        onClick={() => handleAddToCart(Book[0].title, Book[0].price, Book[0].src, Book[0].desc, Book[0].index)}
      >कार्ट में जोड़ें</button></div>
      <FooterHindi />
      <AlertDialog
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      code={referralCode}
      />
    </>

  )
}

export default BookDetails