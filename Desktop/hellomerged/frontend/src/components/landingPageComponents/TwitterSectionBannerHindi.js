import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <div className="twitter-feed w-[26vw] ">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="DPD_India"
        options={{ height:550 }}
      />
    </div>
  );
};



const TweeterSectionBanner = () => {
    return (
        <div className='flex h-[67vh] mt-[40px] justify-end p-[20px]' >
          

          <div className='flex flex-col items-center justify-center w-[30vw]'>
   <section className='flex '>
<img src="/channel.jpeg" alt="" className='h-[131px]' />
<p className='ml-[50px] h-[16vh] flex items-center font-[500]  '>channel</p>
   </section>
<section className='flex mt-[20px]'>
  <img src="/onetwo.jpeg" alt=""  className='h-[131px]'/>
  <p  className='ml-[50px] h-[16vh] flex items-center font-[500]  '>whatsapp</p>

</section>
      </div>

     
     



            <div className='flex justify-center flex-col w-[38%] mr-[30px] '>
                <h1 className='text-[45px] font-[300] text-center'>ऑनलाइन बुक स्टोर</h1>
                <p>प्रकाशन विभाग ने भारतीय परिदृश्य और विरासत के कई पहलुओं को कवर करने वाली गुणवत्तापूर्ण गैर-काल्पनिक पुस्तकों के प्रकाशक के रूप में अपनी पहचान बनाई है। प्रतिष्ठित अधिकारियों द्वारा लिखी गई उनकी सामग्री के कारण, डीपीडी की कई पुस्तकों को उनके संबंधित क्षेत्रों में 'अवश्य पढ़ा जाना चाहिए' माना जाता है।
                    <br/>

                    इसकी कुछ सबसे लोकप्रिय श्रेणियां हैं- गांधीवादी साहित्य, आधुनिक भारत के निर्माता श्रृंखला, विरासत मूल्य पुस्तकें और भारत और भारत संदर्भ वार्षिक। संगठन के पास बच्चों के लिए किताबों का एक समृद्ध भंडार भी है, जिनमें शीला धर की दिस इंडिया/ये भारत से लेकर मथुराम भूतलिंगम की बच्चों की महाभारत (अंग्रेजी/हिंदी) तक शामिल हैं।
                    <br/>
                    ऑनलाइन पुस्तक स्टोर प्रकाशन विभाग के सभी शीर्षक एक बटन के एक क्लिक पर उपलब्ध कराता है।</p>

            </div>

          
                <TwitterFeed/>
         


        </div>
    )
}

export default TweeterSectionBanner