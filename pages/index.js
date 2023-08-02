/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub,
  AiFillInstagram,
  
} from 'react-icons/ai'
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png'
import code from '../public/code.png'
import Link from "next/link";
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import headshot from "../public/headshot.jpg"
import ToolTip from "./ToolTip";
import DownloadButton from "./donwloadButton";

import ContactButton from "./Contact";
import React from "react";
import Slide from 'react-reveal';
import Flip from 'react-reveal';
import { Bounce } from "react-awesome-reveal";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter();
  
  const handleButtonClick = () => {
    router.push('./myGear');
  }
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
    
    <time datetime="2016-10-25" suppressHydrationWarning />
    
      <Head>
        <title>Chiedozie</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.65"/>
        <link rel="icon" href="logo.jpg" />
      </Head>

      
      <main className="bg-white px-10 md:px-20 lg:px-14 transition-all duration-700 dark:bg-gray-900 "> {/* add fade in to dark mode feature */}
        
          <section className=" h-screen">
            <Slide top>
              <nav className="py-10 mb-12 flex justify-between">
                <ToolTip tooltip={"Chiedozie Ehileme"} > 
                  <Slide top>
                    <h1 className="text-xl font-burtons dark:text-white " ><a href="localhost:3000" >chiedozie ehileme</a></h1>
                  </Slide>
                </ToolTip>
                    <ul className="flex items-center">
                      <li>
                          <ToolTip tooltip={ darkMode ? "Toggle Light Mode": "Toggle Dark Mode"}  >
                            <Slide top>
                                <BsFillMoonStarsFill  className="cursor-pointer text-xl dark:text-yellow-400" 
                                  onClick={() => setDarkMode(!darkMode)}
                                />
                            </Slide>
                          </ToolTip>
                          
                      </li>
                        <li>
                          <DownloadButton />
                        </li>
                        <li>
                          <ContactButton  />
                        </li>
                    </ul>
              </nav>
            </Slide>
          <Slide top small >
            <div className="text-center p-10 ">
              <h2 className="text-5xl py-2 text-blue-500 font-medium md:text-6xl">Chiedozie Ehileme</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Computer Science Major.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Current Computer Science Major with the goal of becoming a software engineer; Future CEO of Cephrius Technologies</p>
            </div>
          </Slide>
          <section>
            <Bounce top cascade>
              <div className="flex justify-center">
                  <button className="bg bg-gradient-to-r from-blue-500 to-blue-400 rounded-md px-12 py-2 font-bold text-white duration-200 hover:scale-125"
                    onClick={handleButtonClick}>
                      Check Out My Gear
                  </button>
              </div>
            </Bounce>
          </section>
    
          
            <div className="text-6xl flex justify-center gap-16 py-10 text-gray-600 dark:text-white ">
              
                <ToolTip textSize="lg" tooltip={"Linkedin"}  ><a href="https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/" target="_blank" rel="noreferrer">
                    <Slide left big>
                      <AiFillLinkedin className="duration-300 hover:scale-125" />
                    </Slide>
                  </a>
                </ToolTip>

                <ToolTip textSize="lg" tooltip={"GitHub"}  ><a href="https://github.com/Cephrius/" target="_blank" rel="noreferrer">
                  <Slide left big >
                    <AiFillGithub className="duration-300 hover:scale-125" />
                  </Slide>
                  </a>
                </ToolTip>
                <ToolTip textSize="lg" tooltip={"Instagram"}><a href="https://www.instagram.com/chiedozie.py/" target="_blank" rel="noreferrer" >
                  <Slide right big>
                      <AiFillInstagram className="duration-300 hover:scale-125"/> 
                  </Slide> 
                  </a> 
                </ToolTip>
                <ToolTip textSize="lg" tooltip={"Twitter"}><a href="https://twitter.com/CEhileme" target="_blank" rel="noreferrer">
                  <Slide right big>
                    <AiFillTwitterCircle className="duration-300 hover:scale-125" />
                  </Slide>
                  </a>
                </ToolTip>
             
            </div>
          <Slide top >
            <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={headshot} objectFit="cover"/>
            </div>
          </Slide>
         </section>
         
         <section>
          <div className="">
            <h2 className="text-4xl py-2 text-center dark:text-white">About Me</h2>
            <p className="relative text-md py-2 leading-9 text-gray-800 text-center lg:mx-auto dark:text-white"  >
            Hey there! I'm Chiedozie, a Computer Science major hailing from Katy, Texas. Ever since I can remember, Ive had this burning passion for technology, especially when it comes to the world of development.
            Ive always been that kid who rocked it in the computer classes. Now, I want to take that passion to the next level and turn it into a full-blown career. So, I decided to dive into the exciting 
            world of software engineering. Im planning to start off as a backend developer, but my ultimate goal is to work my way up to a full stack developer and land a postion at either a major Tech Company or a FAANG. On the side, when I'm not buried in coursework, Im working on some pretty awesome side projects. You should totally check them out on my <a className="font-bold" href="https://github.com/Cephrius/">GitHub Link.</a>
            
            <p className="text-base py-2 leading-8 text-gray-800 dark:text-white
            ">
             Thanks for taking the time to read my story. Lets rock the tech world together!
            </p>
            </p>
          </div>
          <div className="lg:flex justify-center gap-28">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 border-black border-10 transition-all duration-400 hover:scale-110" >
              <Image src={design} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Side Projects</h3>
              <p className="py-2 dark:text-white ">
                Majority of my side projects are apps and websites that I am working
              </p>
              <h4 className="py-4 text-blue-600 dark:text-blue-400">Current projects in the works :</h4>
              <p className="text-gray-800 py-1 dark:text-white">Personal Portofolio</p>
              <p className="text-gray-800 py-1 dark:text-white">Video Conferencing App</p>
              <p className="text-gray-800 py-1 dark:text-white">Social Media App</p>
              <p className="text-gray-800 py-1 dark:text-white">Whatapp Style App</p>
              <p className="text-gray-800 py-1 dark:text-white">Entertainment Streaming Platform </p>
              <p className="text-gray-800 py-1 dark:text-white">E-Commerce Moblie App</p>
              <p className="text-gray-800 py-1 dark:text-white">E-Commerce + Dashboard Web Platform</p>
              <p className="text-gray-800 py-1 dark:text-white">Admin Dashboard </p>
              <p className="text-gray-800 py-1 dark:text-white">Spotify Style App</p>

            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 border-black border-10 dark:text-white transition-all duration-300 hover:scale-110" >
              <Image src={code} width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Tools and Programming Languages</h3>
              <p className="py-2 dark:text-white">
                Majority of my side projects are apps that are built using these tools.
              </p>
              <h4 className="py-4 text-blue-600 dark:text-blue-400">Frameworks, Languages and tools that I use :</h4>
              <p className="text-gray-800 py-1 dark:text-white">Visual Studio Code</p>
              <p className="text-gray-800 py-1 dark:text-white">Java | Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">React | React Native</p>
              <p className="text-gray-800 py-1 dark:text-white">Node.JS & Next.JS</p>
              <p className="text-gray-800 py-1 dark:text-white">Tailwind CSS </p>
              <p className="text-gray-800 py-1 dark:text-white">Python</p>
              <p className="text-gray-800 py-1 dark:text-white">HTML & CSS </p>
              <p className="text-gray-800 py-1 dark:text-white">Swift</p>
              <p className="text-gray-800 py-1 dark:text-white">Notion</p>

            </div>
            
          </div>
         </section>
         <section>
          <div className={darkMode ? "text-white":"text-gray-800"} >
            
            <h3 className="text-4xl py-1 text-center">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-center ">
              Here are some of the projects that I've worked on.
            </p>
          </div>
        <div className=" container mx-auto w-screen pb-28">
          <div className="snap-mandatory snap-x flex overflow-x-scroll w-full space-x-10 ">

            <div className="snap-center h-96 w-96  flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web1} className="rounded-lg object-cover" 
                width={'100%'} 
                height={'100%'} 
                layout="responsive" 
                />
            </div>

            <div className="snap-center h-96 w-96 m-2 flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web2} className="rounded-lg object-cover shadow-lg"
              width={'100%'}
              height={'100%'}
              layout="responsive" />
            </div>

            <div className="snap-center h-96 w-96 m-2 flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web3} 
               width={'100%'}
               height={'100%'} 
               layout="responsive" 
               />
            </div>

            <div className="snap-center h-96 w-96 m-2 flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web4}
                width={'100%'} 
                height={'100%'} 
                layout="responsive" 
                />  
            </div>

            <div className="snap-center h-96 w-96 m-2 flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web5} 
                width={'100%'} 
                height={'100%'} 
                layout="responsive" 
                />
            </div>

            <div className="snap-center h-96 w-96 m-2 flex-shrink-0 transition-all duration-300 hover:scale-95">
              <Image src={web6} 
                width={'100%'} 
                height={'100%'} 
                layout="responsive" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>       
    </div>
  
  
  );

};
