import Head from 'next/head';
import logo from '../public/logo.jpg'
import { useState, useEffect } from 'react';
import ToolTip from './ToolTip';
import { BsFillMoonFill } from 'react-icons/bs';


export default function Home() {
    const [darkMode, setDarkMode] = useState("./index.js")
return (
    <div className={darkMode ? "dark": ""}>
        <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
        />

        <Head>
            <title>My Gear</title>
            <meta name="viewport" content="width=device-width, initial-scale=0.65"/>
            <link rel='icon' href='logo.jpg' />
        </Head>


        <main className='bg-white px-10 md:px-20 lg:px-14 transition-all duration-700 dark:bg-gray-900'>
            <section className='h-screen' >
                <nav className='py-10 mb-12 flex justify-between'>
                    <ToolTip tooltip={'Chiedozie Ehileme'}>
                        <h1 className="text-xl font-burtons "><a href="/">cheidozie ehileme</a>
                        </h1>
                    </ToolTip>
                    <ul className="flex items-center">
                        <li>
                            <ToolTip tooltip={ darkMode ? "Toggle Light Mode": "Toggle Dark"} >
                                <BsFillMoonFill  className="cursor-pointer text-xl dark:text-yellow-400" 
                                onClick={() => setDarkMode(!darkMode)}/>
                            </ToolTip>
                        </li>
                    </ul>
                </nav>
            </section>
            <h1>Start Web</h1>
        </main>
    </div>
    )
}