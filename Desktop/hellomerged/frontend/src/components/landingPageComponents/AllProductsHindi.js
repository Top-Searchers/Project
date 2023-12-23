import React, { useState } from 'react'
import BookComponentHindi from './BookComponentHindi';
import { useDispatch, useSelector } from 'react-redux';


const allproducts = [
    { "i": 0, title: "अग्नि की उड़ान-1", src: "/booksImages/agni-ki-udaan-original-1.jpeg", "price": 1500 },
    { "i": 1, title: "अग्नि की उड़ान", src: "/booksImages/agni-ki-udaan-original-2.jpeg", "price": 1500 },
    {
        "i": 2, title: "आधुनिक भारत के निर्माता AKA", src: "/booksImages/buildersofmodernindiaAKA_.jpg",
        desc: "आधुनिक भारत: अब्दुल कलाम आज़ाद में मौलाना अबुल कलाम आज़ाद के भारत पर प्रभाव का पता लगाएं। यह पुस्तक प्रख्यात विद्वान, स्वतंत्रता सेनानी, और देश के पहले शिक्षा मंत्री के जीवन और विरासत को उजागर करती है, जिन्होंने भारत की शैक्षिक और राजनीतिक परिदृश्य को आकार देने में महत्वपूर्ण भूमिका निभाई।"
    },
    {
        "i": 3, title: "एशियाई शेर - गिर की गौरव को पुनर्जीवित करना", src: "/booksImages/Asiaticlion.jpg",
        desc: "गिर के एशियाई शेरों के संरक्षण के समर्पित प्रयासों और पहलों की खोज करें। यह पुस्तक इस प्रतिष्ठित प्रजाति के संरक्षण यात्रा का व्यापक अवलोकन प्रदान करती है, सफलताओं का जश्न मनाती है और इसके सामने आने वाली चुनौतियों को संबोधित करती है।", "price": 1500
    },
    {
        "i": 4, title: "बापू की वाणी", src: "/booksImages/BAPU_KI_VAANI.jpg",
        desc: "बापू की वाणी हिंदी में महात्मा गांधी के गहन विचारों और शिक्षाओं का संकलन है। यह पुस्तक राष्ट्रपिता के दार्शनिक अंतर्दृष्टि और सिद्धांतों की झलक प्रदान करती है, जो आधुनिक पाठकों के लिए समयातीत ज्ञान प्रस्तुत करती है", "price": 1500
    },
    {
        "i": 5, title: "भारत की खोज", src: "/booksImages/bharat-ki-khauj.jpeg",
        desc: "भारत की खोज के साथ भारत के ऐतिहासिक खजाने का पता लगाएं। यह हिंदी पुस्तक पाठकों को राष्ट्र के समृद्ध अतीत के अन्वेषण की यात्रा पर ले जाती है, भारत के सांस्कृतिक, सामाजिक, और राजनीतिक विकास के समग्र परिप्रेक्ष्य की पेशकश करती है", "price": 1500
    },
    {
        "i": 6, title: "आधुनिक भारत के निर्माता LBS", src: "/booksImages/BuilderofModernIndiaLBS.jpg",
        desc: "मदन मोहन मालवीय, आधुनिक भारत के प्रमुख वास्तुकार के जीवन और योगदान की यात्रा में शामिल हों। आधुनिक भारत के निर्माता: मदन मोहन मालवीय इस दूरदर्शी नेता, शिक्षाविद्, और स्वतंत्रता सेनानी की प्रेरक कहानी का वर्णन करते हैं, उनके द्वारा देश की शैक्षिक परिदृश्य को आकार देने में उनकी महत्वपूर्ण भूमिका को उजागर करते हैं।", "price": 1500
    },
    {
        "i": 7, title: "भारत के निर्माता - एससीबी", src: "/booksImages/BuildersofIndia-SCB.jpg",
        desc: "भारत के निर्माता: सुभाष चंद्र बोस नेताजी सुभाष चंद्र बोस के गतिशील व्यक्तित्व को जीवंत करते हैं। यह पुस्तक बोस की भूमिका का पता लगाती है कि कैसे वे एक करिश्माई नेता के रूप में उभरे, स्वतंत्रता आंदोलन में उनके योगदान, और एक मजबूत, स्वतंत्र भारत के लिए उनकी दृष्टि।", "price": 1500
    },
    {
        "i": 8, title: "आधुनिक भारत के निर्माता - एलबीएस", src: "/booksImages/buildersofmodernIndia-LBS_.jpg",
        desc: "आधुनिक भारत के निर्माता: लाल बहादुर शास्त्री में लाल बहादुर शास्त्री के जीवन में गहराई से जाएं, जो सादगी और ईमानदारी के व्यक्ति थे। यह पुस्तक भारत के दूसरे प्रधानमंत्री को समर्पित है, जिन्होंने महत्वपूर्ण समय के दौरान नेतृत्व किया और राष्ट्र पर उनके स्थायी प्रभाव को प्रकाशित करती है।"
    },
    { "i": 9, title: "आधुनिक भारत के निर्माता", src: "/booksImages/BuildersofModernIndia-MMM.jpg", "price": 1500 },

]

const latest_journal = [
    { "i": 10, title: "अग्नि की उड़ान", 
    src:"/booksImages/agni-ki-udaan-original-3.jpeg", 
      "price": 1500 },
    {
        "i": 11, title: "नेताजी-एक जीवनी चित्र", src: "/booksImages/netaji-a-life-in-pictures.jpeg",
        desc: "सुभाष चंद्र बोस के जीवन की दृश्य कथा में खुद को डुबोएं नेताजी - चित्रों में जीवन। यह पुस्तक एक आकर्षक दृश्य यात्रा प्रदान करती है, दुर्लभ और प्रतिष्ठित तस्वीरों के माध्यम से करिश्माई नेता की असाधारण विरासत को जीवंत करती है।"
    },
    {
        "i": 12, title: "पूरा है विश्वास", src: "/booksImages/poora_HAI_VISHWAS.jpg",
        desc: "इस पुस्तक में पाठकों को विश्वास की शक्ति पर बल देने वाली प्रेरक यात्रा पर ले जाया जाता है। यह हिंदी पुस्तक व्यक्तियों को अपनी क्षमताओं और सपनों में अटूट विश्वास रखने के लिए प्रेरित करती है। यह पुस्तक किस्सों और ज्ञान के माध्यम से पाठकों को चुनौतियों का सामना करने और आत्मविश्वास के साथ उनकी आकांक्षाओं का पीछा करने के लिए प्रेरित करती है।"
    },
    {
        "i": 13,
        title: "सबका साथ सबका विकास",
        src: "/booksImages/sabka saath sabka vikas.jpg",
        desc: "सबका साथ सबका विकास सामाजिक समावेशन की दृष्टि को संक्षेप में प्रस्तुत करता है। यह पुस्तक सामूहिक विकास और प्रगति के विचार का पता लगाती है, जहाँ हर व्यक्ति राष्ट्र की समग्र कल्याण में योगदान देता है।"
    },
    { "i": 14, title: "सरदार पटेल सचित्र जीवनी", src: "/booksImages/Sardar Patel Sachitra jivani.jpeg" },
    {
        "i": 15, title: "सरदार पटेल की अनमोल वाणी", src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
        desc: "सरदार वल्लभभाई पटेल की बुद्धिमत्ता और नेतृत्व को अनमोल वाणी के माध्यम से जानें। यह हिंदी पुस्तक अमूल्य उद्धरणों और विचारों का संग्रह प्रदान करती है, जो आधुनिक भारत के प्रमुख स्थापत्य के सिद्धांतों और दर्शन पर प्रकाश डालती है।"
    },
    {
        "i": 16, title: "बुद्ध की वाणी", src: "/booksImages/The Gospel of Buddha.jpg",
        desc: "बुद्ध की आध्यात्मिक और दार्शनिक शिक्षाओं में गहराई से जानें बुद्ध की वाणी के साथ। यह पुस्तक कला और संस्कृति में निहित है, जो बुद्ध के समयरहित ज्ञान को प्रस्तुत करती है, इस प्राचीन और प्रभावशाली धर्म प्रणाली के मूल सिद्धांतों की गहन खोज करती है।"
    },
    {
        "i": 17, title: "योद्धा लोकतंत्रवादी", src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
        desc: "योद्धा लोकतंत्रवादी लोकतंत्र और नेतृत्व के संगम पर चर्चा करता है, ऐतिहासिक और समकालीन उदाहरणों के आधार पर। यह पुस्तक एक नेता के गुणों का पता लगाती है जो लोकतांत्रिक शासन की चुनौतियों को नेविगेट करने में लचीला और प्रभावी होता है।"
    },
    { "i": 18, title: "अग्नि की उड़ान", src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg" },
    { "i": 19, title: "योजना क्लासिक्स", src: "/booksImages/Yojana_Classics_Cover_page.jpg" },
]
const latestbook = [
    {
        "i": 20,
        title: "आधुनिक भारत के निर्माता AKA",
        src: "/booksImages/builders of modern india AKA_.jpg",
        desc: "आधुनिक भारत: अब्दुल कलाम आज़ाद में मौलाना अबुल कलाम आज़ाद के प्रभाव की खोज करें। यह पुस्तक प्रख्यात विद्वान, स्वतंत्रता सेनानी, और देश के पहले शिक्षा मंत्री के जीवन और विरासत पर प्रकाश डालती है।"
    },
    {
        "i": 21,
        title: "नेताजी-एक जीवनी चित्र",
        src: "/booksImages/netaji-a-life-in-pictures.jpeg",
        desc: "नेताजी - चित्रों में जीवन के साथ सुभाष चंद्र बोस के जीवन की दृश्य कथा में खुद को डुबोएं। यह पुस्तक दुर्लभ और प्रतिष्ठित तस्वीरों के माध्यम से करिश्माई नेता की असाधारण विरासत को जीवंत करती है।"
    },
    {
        "i": 22,
        title: "पूरा है विश्वास",
        src: "/booksImages/poora_HAI_VISHWAS.jpg",
        desc: "इस पुस्तक में पाठकों को विश्वास की शक्ति पर जोर देने वाली प्रेरक यात्रा पर ले जाया जाता है। यह पुस्तक, हिंदी में, व्यक्तियों को उनकी क्षमताओं और सपनों में अटूट विश्वास रखने के लिए प्रेरित करती है।"
    },
    {
        "i": 23,
        title: "सबका साथ सबका विकास",
        src: "/booksImages/sabka saath sabka vikas.jpg",
        desc: "सबका साथ सबका विकास सामाजिक समावेशन की दृष्टि को संक्षेप में प्रस्तुत करता है। यह पुस्तक सामूहिक विकास और प्रगति के विचार का पता लगाती है, जहां हर व्यक्ति राष्ट्र की समग्र कल्याण में योगदान देता है।"
    },
    {
        "i": 24,
        title: "सरदार पटेल सचित्र जीवनी",
        src: "/booksImages/Sardar Patel Sachitra jivani.jpeg"
    },
    {
        "i": 25,
        title: "सरदार पटेल की अनमोल वाणी",
        src: "/booksImages/SARDAR_PATEL_KI_ANMOL_VANI.jpg",
        desc: "सरदार वल्लभभाई पटेल की बुद्धिमत्ता और नेतृत्व की खोज करें अनमोल वाणी के माध्यम से। यह हिंदी पुस्तक महत्वपूर्ण उद्धरणों और विचारों का संग्रह प्रदान करती है।"
    },
    {
        "i": 26,
        title: "बुद्ध की वाणी",
        src: "/booksImages/The Gospel of Buddha.jpg",
        desc: "बुद्ध की आध्यात्मिक और दार्शनिक शिक्षाओं के साथ गहराई में जाएं 'बुद्ध की वाणी' के माध्यम से। यह पुस्तक कला और संस्कृति में निहित है, जो बुद्ध के समयरहित ज्ञान को प्रस्तुत करती है।"
    },
    {
        "i": 27,
        title: "योद्धा लोकतंत्रवादी",
        src: "/booksImages/THE_WARRIOR_DEMOCRAT_-_SYAMA_PRASAD_MOOKERJEE.jpg",
        desc: "योद्धा लोकतंत्रवादी लोकतंत्र और नेतृत्व के चौराहे पर चर्चा करता है, इतिहास और वर्तमान उदाहरणों को आकर्षित करता है। यह पुस्तक एक नेता की लचीलापन और प्रभावी नेतृत्व क्षमताओं को प्रकट करती है।"
    },
    {
        "i": 28,
        title: "अग्नि की उड़ान",
        src: "/booksImages/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg"
    },
    {
        "i": 29,
        title: "योजना क्लासिक्स",
        src: "/booksImages/Yojana_Classics_Cover_page.jpg",
        desc: "योजना क्लासिक्स - कला और संस्कृति भारतीय कला और संस्कृति के चौराहे का अन्वेषण करता है। यह संकलन योजना पत्रिका के प्रतिष्ठित निबंधों और लेखों की पेशकश करता है, देश की सांस्कृतिक विरासत पर एक समग्र दृष्टिकोण प्रदान करता है।"
    }
]


const Allproducts = () => {

    const [selected, setSelected] = useState("ALL PRODUCTS");

    const handleOnClick = (e) => {
        setSelected(e.target.innerText)
    }



    return (
        <>
            <div className='w-full flex justify-center mt-[70px] border-t-[1px]'>
                <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected === "ALL PRODUCTS" ? "text-[green] underline" : "text-[black]"}`}
                    onClick={handleOnClick}
                >सभी प्रोडक्ट</p>
                <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected === "LATEST BOOKS" ? "text-[green] underline" : "text-[black]"}`}

                    onClick={handleOnClick}
                >नवीनतम पुस्तकें</p>
                <p className={`px-[8px] py-[6px] text-[19px] font-[600] tracking-[1px]  hover:cursor-pointer mx-[5px] ${selected === "LATEST JOURNALS" ? "text-[green] underline" : "text-[black]"}`}

                    onClick={handleOnClick}
                >नवीनतम पत्रिकाएँ</p>
            </div>
            <div className='w-full flex flex-wrap  mt-[15vh]'>
                {
                    selected === "सभी प्रोडक्ट" ? allproducts.map(({ title, src, price, i, desc }) => {
                        return (<BookComponentHindi title={title} src={src} desc={desc} price={price} index={i} />)
                    })

                        : selected === "नवीनतम पुस्तकें" ?
                            latestbook.map(({ title, src, price, i, desc }) => {
                                return (<BookComponentHindi title={title} src={src} desc={desc} price={price} index={i} />)
                            })
                            : latest_journal.map(({ title, src, price, i, desc }) => {
                                return (
                                    <>
                                        <BookComponentHindi title={title} src={src} desc={desc} price={price} index={i} />

                                    </>
                                )
                            })
                }

            </div>

            <div className='flex justify-center mt-[6vh]'>
                <button className='w-[136px] h-[46px] border bg-green-500 hover:bg-[green] hover:text-[white]'>
                सभी को देखें
                </button>

            </div>
        </>
    )
}

export default Allproducts