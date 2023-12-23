import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => {
  return (
    <div className="twitter-feed w-[26vw] ">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="DPD_India"
        options={{ height: 550 }}
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
      <div>


</div>

        <h1 className='text-[45px] font-[300] text-center'>Online Book Store</h1>
        <p>Publications Division has carved a niche for itself as a publisher of quality non-fiction books covering multiple aspects of Indian panorama and heritage. Many of the DPD’s books are considered  ‘must reads’ in their respective fields, for their contents authored by reputed authorities.
          <br />

          Some of its most popular categories are-  Gandhian Literature, Builders of Modern India Series, Heritage value books and INDIA and BHARAT Reference Annuals.  The organization also  has a rich repository of children’s books ranging from This India / Yeh Bharat by Sheila Dhar to children's Mahabharata (English/Hindi) by Mathuram Bhoothalingam.
          <br />
          The online book store makes all the Publications Division titles available at a click of a button.</p>

      </div>


      <TwitterFeed />



    </div>
  )
}

export default TweeterSectionBanner