/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { 
  BsFillMoonStarsFill,
  BsArrowDownCircle,
  BsMoonStarsFill,
  BsSun,
  BsSunFill,
} from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub,
  AiFillInstagram,
  AiOutlineClose
  
} from 'react-icons/ai'

import Image  from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png'
import code from '../public/code.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState, useEffect, Fragment} from "react";
import { useRouter } from "next/router";
import headshot from "/public/headshot.jpg"
import ToolTip from "./ToolTip";
import DownloadButton from "./donwloadButton";
import ContactButton from "./Contact";
import React from "react";
import { Slide,Bounce,Flip,Fade } from "react-awesome-reveal";
import { Dialog, Transition, Menu} from "@headlessui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  dropdownMenu,
  useDisclosure
} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@nextui-org/react"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set());
  const [showDropdown, setShowDropdown] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const selectedValue = React.useMemo(
    () => [...selectedKeys].sort().join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleScrollToMiddle = () => {
    const middleOfPage = window.innerHeight / 0.992;
    
    window.scrollTo({
      top: middleOfPage,
      behavior: "smooth",
    });
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    
  }

  const toggleDarkMode = () => {
    if (!darkMode) {
      const newDarkMode =true;
      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    }
   
  }

  const toggleLightMode = () => {
    if (darkMode) {
      const newDarkMode = false;
      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    }
  }

  const toggleAutomaticDarkMode = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(prefersDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(prefersDarkMode));
  };


  useEffect(() => {
    const darkModeData = localStorage.getItem("darkMode");
    if (darkModeData  !== undefined) {
      setDarkMode(JSON.parse(darkModeData));
    } else {
      // Check if the user prefers dark or light mode based on system setting
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(prefersDarkMode));
    }
  
  }, []);

  useEffect(() => {
    setSelectedKeys(new Set([darkMode ? "Dark" : "Light"]));
  }, [darkMode]);

  
  return (
    
    <div className={`app-container ${darkMode ? "dark" : " "}`}>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
    

      
    
    <time datetime="2016-10-25" suppressHydrationWarning />
    
      <Head >
        <title>Chiedozie Ehileme | Computer Science Major </title>
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="logo.jpg" />
      </Head>

    
    <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} size="2xl"
     classNames={{
      backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
      base: `border-[#292f46] bg-[#ffffff] text-[#a8b0d3] rounded-2xl ${darkMode ? "bg-gradient-to-b from-gray-800 to-blue-500" : "dark: bg bg-gradient-to-t from-gray-300 to-blue-400 text-black"}`,
      closeButton: "hover:bg-white/5 active:bg-white/10 text-2xl",
    }} >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 mb-[-30px] text-2xl">My Gear</ModalHeader>
            <ModalHeader className="flex flex-col font-light "> Here is a list of the gear and tools that I use. </ModalHeader>
            <h1 className="text-center">WORK IN PROGRESS</h1>
            <ModalBody className="py-6">
   

            </ModalBody >
          </>
        )}
      </ModalContent>
    </Modal>

      {/* add fade in to dark mode feature */}
      <main className={"bg-[#fffffc] px-10 md:px-20 lg:px-14 transition-all duration-700  dark:bg-gray-900  "}> 
        
 
          <section className=" h-screen dark:dark-mode">
            <Slide direction="down" triggerOnce onVisibilityChange={false}>
              <nav className="py-10 mb-12 flex justify-between">
               
                  <Slide direction="down" triggerOnce onVisibilityChange={false}>
                    <h1 className="text-lg font-burtons dark:text-white sm:mt-2 " ><a>chiedozie ehileme</a></h1>

                  </Slide>
                
                    <ul className=" flex items-center">
                      <li >                  
                        
                      <div >
                      <Dropdown backdrop="opaque">
                        <DropdownTrigger>
                          <Button 
                            variant="bordered" 
                            className="capitalize"
                            isIconOnly
                          >
                            {darkMode ? (
                              <BsMoonStarsFill className="text-sm mt-2 text-white " />
                              ) : (
                              <BsSun className="text-lg mt-2 "/> )
                            }
                           
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                          aria-label="Single selection actions"
                          variant="faded"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={selectedKeys}
                          onSelectionChange={setSelectedKeys}
                          closeOnSelect={false}
                          className="bg-gradient-to-b from-blue-500 to-blue-300 rounded-xl w-24 text-xs dark:text-white"

                        >                        
                         <DropdownItem key="Light" onClick={(e) => { e.stopPropagation(); toggleLightMode(); }} className={` ${darkMode ? "text-white font-bold":""}`}>Light</DropdownItem>
                        <DropdownItem key="Dark" onClick={(e) => { e.stopPropagation(); toggleDarkMode(); }} className={darkMode ? "text-white font-bold":""} >Dark</DropdownItem>

                        </DropdownMenu>
                      </Dropdown>
                      </div>
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
          <Slide direction="down" triggerOnce onVisibilityChange={false}>
            <div className="text-center p-8 ">
              <h2 className="text-5xl py-2 text-blue-500 font-medium dark:text-blue-400">Chiedozie Ehileme</h2>
              <h4 className="text-2xl py-2 dark:text-white">Computer Science Major.</h4>
              <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto dark:text-white">Current Computer Science Major with the goal of becoming a software engineer; Future CEO of Cephrius Technologies</p>
            </div>
          </Slide>
          <section>
            <Bounce direction="top" triggerOnce onVisibilityChange={false}>
              <div className="flex justify-center">
                  <button className="bg bg-gradient-to-r from-blue-500 to-blue-400 rounded-md px-12 py-2 font-bold text-white duration-200 hover:scale-125 text-xs"
                    onClick={onOpen}
                    >
                      Check Out My Gear
                  </button>
              </div>
            </Bounce>
          </section>
          
          
            <div className="text-6xl flex justify-center gap-16 py-10 text-gray-600 dark:text-white ">
              
                <ToolTip textSize="sm" tooltip={"Linkedin"}  ><a href="https://www.linkedin.com/in/chiedozie-ehileme-529b6a25b/" target="_blank" rel="noreferrer">
                    <Slide direction="left" cascade={true} damping={20}> 
                      <AiFillLinkedin className="duration-300 hover:scale-125 " size={35} />
                    </Slide>
                  </a>
                </ToolTip>

                <ToolTip textSize="sm" tooltip={"GitHub"}  ><a href="https://github.com/Cephrius/" target="_blank" rel="noreferrer">
                  <Slide direction="left" cascade={true}>
                    <AiFillGithub className="duration-300 hover:scale-125" size={35} />
                  </Slide>
                  </a>
                </ToolTip>
                <ToolTip textSize="sm" tooltip={"Instagram"}><a href="https://www.instagram.com/chiedozie.py/" target="_blank" rel="noreferrer" >
                  <Slide direction="right" cascade={true}>
                      <AiFillInstagram className="duration-300 hover:scale-125" size={35}/> 
                  </Slide> 
                  </a> 
                </ToolTip>
                <ToolTip textSize="sm" tooltip={"Twitter"}><a href="https://twitter.com/CEhileme" target="_blank" rel="noreferrer">
                  <Slide direction="right" cascade={true}>
                    <AiFillTwitterCircle className="duration-300 hover:scale-125" size={35}/>
                  </Slide>
                  </a>
                </ToolTip>
             
            </div>
          <Slide direction="up" triggerOnce onVisibilityChange={false}>
            <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-[220px] h-[220px] mt-10 overflow-hidden ">
              <Image src={headshot} objectFit="cover" alt="Headshot of Chiedozie Ehileme " />
            </div>
          </Slide>
          <Fade  delay={1000} triggerOnce onVisibilityChange={false}>
            <div className= " relative mx-auto flex justify-center py-10 text-4xl animate-bounce-slow m-6 dark:text-white ">
              <BsArrowDownCircle className="hover:cursor-pointer"
                  onClick={handleScrollToMiddle}
              />
            </div>
          </Fade>
         </section>
         
         <section>
          <div className="">
            <h2 className="text-4xl py-10 text-center dark:text-white">About Me</h2>
            <p className="relative text-md py-2 leading-9 text-gray-800 text-center lg:mx-32 dark:text-white"  >
            Hey there! I'm Chiedozie, a Computer Science major hailing from Katy, Texas. Ever since I can remember, Ive had this burning passion for technology, especially when it comes to the world of development.
            Ive always been that kid who rocked it in the computer classes. Now, I want to take that passion to the next level and turn it into a full-blown career. So, I decided to dive into the exciting 
            world of software engineering. Im planning to start off as a backend developer, but my ultimate goal is to work my way up to a full stack developer and land a postion at either a major Tech Company or a FAANG. On the side, when I'm not buried in coursework, 
            Im working on some pretty awesome side projects. You should totally check them out on my <a className="font-bold" href="https://github.com/Cephrius/">GitHub Link.</a>
            
            <p className="text-base py-2 leading-8 text-gray-800 dark:text-white
            ">
             Thanks for taking the time to read my story. Lets rock the tech world together!
            </p>
            </p>
          </div>
          <div className="lg:flex gap-28 justify-center scale-90 ">
            <div class="text-center shadow-2xl p-10 rounded-xl my-10 border-black border-10 transition-all duration-400 hover:scale-110 " >
              <div className="flex justify-center items-center mb-6">
                <Image src={design} width={100} height={100} alt="image for project block" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Side Projects</h3>
              <p className="py-2 dark:text-white ">
                Majority of my side projects are apps and websites that I am working on.
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
              <div className="flex justify-center items-center mb-6">
                <Image src={code} width={100} height={100} alt="image for tools learned"/>
              </div>
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
          <div className={darkMode ? "text-white":"text-gray-800"}  >
            
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
