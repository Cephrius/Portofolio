import Head from 'next/head';
import logo from '../public/logo.jpg'
import { useState, useEffect } from 'react';
import ToolTip from './ToolTip';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';



export default function Home() {
    // Retrieve the darkMode value from local storage (returns "true" or "false")
    const [darkMode, setDarkMode] = useState();
    

return (
    <div className={darkMode ? "dark": ""}>
        <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
        />

        <Head>
            <title>Gear</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.65"/>
            <link rel='icon' href='logo.jpg' />
        </Head>


        <main className='bg-white px-10 md:px-20 lg:px-14 transition-all duration-700 dark:bg-gray-900'>
            <Slide top>
                <section className='h-screen' >
                    <nav className='py-10 mb-12 flex justify-between'>
                        <ToolTip tooltip={'Chiedozie Ehileme'}>
                            <h1 className='font-burtons dark:text-white text-xl '>
                                <a href='/'> 
                                chiedozie ehileme
                                </a>
                            </h1>
                            
                        </ToolTip>
                        <ul className="flex items-center">
                            <li>
                                <ToolTip tooltip={ darkMode ? "Toggle Light Mode": "Toggle Dark Mode"} >
                                    <BsFillMoonStarsFill  className="cursor-pointer text-xl dark:text-yellow-400 mx-10" 
                                    onClick={() => setDarkMode(!darkMode)}/>
                                </ToolTip>
                            </li>
                        </ul>
                    </nav>
                </section>
            
            </Slide>
        </main>

    </div>
    )
}