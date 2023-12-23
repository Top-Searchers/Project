import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import FormForFooter from './FormForFooter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    
    return (
        <footer className='w-[full] flex  mt-[15vh] pt-[5vh] bg-[#e9e7e7]'>
            <div className='flex-[0.5] px-[15px] border-r-[1px] border-[black] pl-[23px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>ABOUT US</h1>
                <p className='text-justify  w-[83%] tracking-[.5px] leading-[33px]'>
                    Publications Division is a repository of books and journals highlighting subjects of national importance and India’s rich cultural heritage. Established in 1941, Publications Division has emerged as a premier publishing house of the Government of India, enriching the national knowledge repository in distinctive streams as under : ....


                </p>
               

            </div>
            <div className='flex-[0.5] px-[15px] border-r-[1px] border-[black] ml-[5px]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>Related sites</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">DPD JOURNALS</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Employment News Website</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Ministry of I & B</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">News On AIR</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Press Information Bureau</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">DD News</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Film Division</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Bureau of Outreach & Communication</a>
                    </li>
                </ul>


            </div>
            <div className='w-[24vw] px-[15px] border-r-[1px]  border-[black]'>
                <h1 className='font-[450] text-[22px] text-[green] mb-[36px]'>Information</h1>
                <ul>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Photo Gallery</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Video Gallery</a>
                    </li>
                    <li className='mt-[10px] hover:cursor-pointer hover:text-[green]'>
                        <a href="www.google.com">Events And Higlights</a>
                    </li>
                   
                </ul>
                <h1 className='font-[450] text-[22px] text-[green] my-[30px]'>Get In Touch</h1>
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
          <FormForFooter/>
          </div>
        </footer>
    )
}

export default Footer