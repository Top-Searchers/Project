import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import FormForFooterHindi from './FormForFooterHindi';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    
    return (
        <footer className='w-[full] flex  mt-[15vh] pt-[5vh] bg-[#e9e7e7]'>
            <div className='flex-[0.5] px-[15px] border-r-[1px] border-[black] pl-[23px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>हमारे बारे में</h1>
                <p className='text-justify  w-[83%] tracking-[.5px] leading-[33px]'>
                प्रकाशन प्रभाग राष्ट्रीय महत्व के विषयों और भारत की समृद्ध सांस्कृतिक विरासत को उजागर करने वाली पुस्तकों और पत्रिकाओं का भंडार है। 1941 में स्थापित, प्रकाशन प्रभाग भारत सरकार के एक प्रमुख प्रकाशन गृह के रूप में उभरा है, जो निम्नलिखित विशिष्ट धाराओं में राष्ट्रीय ज्ञान भंडार को समृद्ध कर रहा है: ....


                </p>
               

            </div>
            <div className='flex-[0.5] px-[15px] border-r-[1px] border-[black] ml-[5px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>संबंधित साइटें</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">डीपीडी जर्नल्स</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">रोजगार समाचार वेबसाइट</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">सूचना एवं प्रसारण मंत्रालय</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">आकाशवाणी पर समाचार</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">प्रेस सूचना ब्यूरो</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">डीडी न्यूज़</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">फ़िल्म प्रभाग</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">आउटरीच एवं संचार ब्यूरो</a>
                    </li>
                </ul>


            </div>
            <div className='w-[24vw] px-[15px] border-r-[1px]  border-[black]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>जानकारी</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">फोटो गैलरी</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">वीडियो गैलरी</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">घटनाएँ और मुख्य बातें</a>
                    </li>
                   
                </ul>
                <h1 className='font-[450] text-[22px] text-[green] my-[30px]'>संपर्क में रहो</h1>
                <ul className='flex'>

                <li>
                  <a href="https://www.linkedin.com/in/publications-division-6aab1b285/?originalSubdomain=in" target='_blank'>
                  <LinkedInIcon
                      sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"",
                        "&:hover":{
                            color:"blue"
                            ,cursor:"pointer"
                        }}}
                    
                    />
                  </a>

                    </li>

                    <li>
                      <a href="https://www.youtube.com/@PublicationsDivisionGoI" target='_blank'>
                      <YouTubeIcon
                         sx={{
                            height:"35px",
                            width:"35px",
                            marginLeft:"15px",
                            "&:hover":{
                                color:"red",
                                cursor:"pointer"
                            }
                        
                        }}
                       />

                      </a>
                        
                    </li>

                    <li>
                  <a href="https://www.facebook.com/publicationsdivision/" target='_blank'>

                  <FacebookIcon
                    
                    sx={{ height:"35px",
                    width:"35px",
                    marginLeft:"15px",
                    "&:hover":{
                        color:"blue",
                        cursor:"pointer"
                    }}}
                    />
                  </a>

                    </li>




                    <li>

                        <a href="">
                        <TwitterIcon
                     sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"15px",
                        "&:hover":{
                            color:"#1DA1F2",
                            cursor:"pointer"
                        }
                    
                    }}/>
                        </a>
                    </li>


                    <li>

                        <a href="https://shorturl.at/ahmuY">
                            <WhatsAppIcon   sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"15px",
                        "&:hover":{
                            color:"green",
                         cursor:"pointer"
                        }
                    
                    }}  />
                            
                        </a>
                    </li>

                    <li>
                      <a href="">
                      <PinterestIcon sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"15px",
                        "&:hover":{
                            color:"red",
                         cursor:"pointer"
                        }
                    
                    }}/>
                      </a>
                    </li>
                    <li>
<a href="">
<InstagramIcon sx={{
                        height:"35px",
                        width:"35px",
                        marginLeft:"15px",
                        "&:hover":{
                            color:"blue",
                         cursor:"pointer"
                        }
                    
                    }}/>
</a>

                    </li>
                  
                  
                </ul>

            </div>

          <div className='flex-[0.5] px-[15px]  border-[black] ml-[5px]'>
          <FormForFooterHindi/>
          </div>
        </footer>
    )
}

export default Footer