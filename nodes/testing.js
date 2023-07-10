// import React from 'react'



        
const data = {
    "aries": {
        "north": " North Node is in Aries",
        "south": " South Node is in Libra",
        "list": {
            "first": {
                "title_head": "Your Past Life Comfort",
                "title": "Libra Superpowers 🌺",
                "desc": " You've been playing the perfect peace-maker and diplomatic darling. With your South Node in Libra, you were all about creating harmony and making everyone happy. And boy, were you good at it!",
                
            },
            "second": {
                "title_head": "Your Current Struggle",
                "title": "Too Much of a Good Thing 😅",
                "desc": " Always thinking about others is tiring, right? You've been giving so much, it's left you feeling a little drained. And being uncomfortable with conflict? That's left you stepping back when you should have stepped up.",
                
            },
            "third": {
                "title_head": "Your Current Calling",

                "title": "Embrace Aries ♈ ",
                "desc": "  It's time to prioritize you! Your North Node in Aries is all about discovering self-love, setting boundaries, and going after what you want. Embrace your individuality and learn to say 'No' when you need to."
            },
            "fourth": {
                "title_head": "Your Life's Balance",
                
                "title": "Justice and Courage ⚖️",
                "desc": "⚖️ Don't worry, your love for justice won't disappear. But now, it's about striking a balance. Face conflicts, stand your ground, and remember, it's okay to choose yourself."
            },
            "fifth" : {
                "title_head": "Your Growth Journey",
                "title" : "From Libra to Aries 🌱",
                "desc" : " This is not about saying goodbye to Libra, but about welcoming Aries into the mix. Blend the grace of Libra with the boldness of Aries. Create your unique cosmic cocktail!"
            },
            "sixth": {
                "title_head" : " Your Soul's Reward ",
                "title" :"More to Share 💖",
                "desc" : " The more you care for yourself, the more you can give to others. So, don't shy away from self-care. After all, your soul's journey is about to get even more exciting!"
            }
        }
    }
}




import React from "react";

export default function Response() {
    

    return (
        <div className="dark:bg-[#2F2F31] bg-white overflow-x-hidden  min-h-screen 2xl:min-h-max pb-24">
            <div>
               
                <div className="dark:bg-[#2F2F31] px-5  py-14">
                <h1 className="text-center  pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#67B26F] to-[#4ca2cd] font-cera_bold">
                Your Lunar Nodes Report
                </h1>
                    <div className="flex max-w-4xl mx-auto border-b border-zinc-300 dark:border-zinc-600 pb-10 gap-6 justify-between items-start">
                        <div className="flex flex-col gap-4">
                            <div className="flex">
                            <h6 className="dark:text-white text-zinc-800">Pratik Gade</h6>

                            <button className=" pl-6 hover:bg-zinc-800 dark:hover:bg-white hover:text-white dark:hover:text-zinc-800 text-zinc-800 dark:text-white p-1 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                        </button>
                            </div>
                            <p className="dark:text-zinc-200 flex items-center gap-3 text-zinc-700">
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 dark:fill-zinc-100 fill-zinc-800"
                                    viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g
                                        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        stroke="none"
                                    >
                                        <path d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122 -121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86 l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84 58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2 1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5 33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81 -67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19 19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13 70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20 33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4 c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5 -38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0 55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54 l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48 4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5 -39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55 -3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7 -27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43 -5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25 20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15 -33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"></path>
                                    </g>
                                </svg>
                                August 15, 1999 at 11:50 PM

                            </p>
                            <p className="dark:text-zinc-200 flex gap-3 items-start text-zinc-700">
                                <svg
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 mt-[6px] dark:fill-zinc-100 fill-zinc-800"
                                    viewBox="0 0 64.000000 64.000000"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g
                                        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                        stroke="none"
                                    >
                                        <path d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0 -246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13 14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25 l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100 c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30 -25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271 0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0 -3 173 -2 172 270 0 270 0 -2 -172z"></path>
                                        <path d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                        <path d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27 0 -31 -3 -28 -22z"></path>
                                    </g>
                                </svg>
                                Mumbai, Maharashtra,India
                            </p>
                        </div>
                     
                    </div>

                    

                    <div className="max-w-4xl  items-start mx-auto flex flex-col gap-6">
                       <div className="pt-6 space-y-6">
                        <h1 className="font_cera-bold text-3xl dark:text-white">
                        What are the Lunar Nodes?
                        </h1>
                        <p className="text-lg dark:text-zinc-200 text-zinc-800">
                        Meet the lunar nodes: North and South, your life's navigators. These ever-retrograding points are a crossroads between the Moon’s orbit and the ecliptic, making an orbit every 18.6 years. They hint at the purpose of your life journey, revealing past experiences and future growth. Think of them as your soul's timeline, valuable for both personal evolution and relationship dynamics.
                        </p>
                       </div>
                        <div className="space-y-16" >
                        {/* <h1 className="text-3xl font-cera_medium text-white"> YOUR NODE INSIGHTS </h1>
                            <div className="mt-5  max-w-4xl grid grid-cols-1 md:grid-cols-2  md:gap-7 gap-5">
                            <p className=" p-2 items-end gap-2 text-white text-2xl rounded-md flex font-cera_medium">
                            <span>
                             <svg height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g id="_102_Ascending_Node" data-name="102 Ascending Node"><path d="m436.9 334.65a208.22 208.22 0 0 0 27.76-104.11c0-115.06-93.6-208.66-208.66-208.66s-208.66 93.6-208.66 208.66a208.22 208.22 0 0 0 27.76 104.11 78.46 78.46 0 1 0 80.22 34.7 20.14 20.14 0 0 0 -6.24-9l-2.2-1.87a79.27 79.27 0 0 0 -9.25-8.5 167.62 167.62 0 0 1 -49.8-119.44c0-92.73 75.44-168.17 168.17-168.17s168.17 75.44 168.17 168.17a167.62 167.62 0 0 1 -49.8 119.46 79.27 79.27 0 0 0 -9.25 8.5l-2.2 1.87a20.14 20.14 0 0 0 -6.24 9 78.38 78.38 0 1 0 80.22-34.7zm-347.5 115a37.91 37.91 0 1 1 21.68-69q3.66 3.54 7.51 6.91a37.89 37.89 0 0 1 -29.19 62.07zm333.2 0a37.89 37.89 0 0 1 -29.19-62.07q3.85-3.36 7.51-6.91a37.9 37.9 0 1 1 21.68 69z" fill="#FF5733"/><path d="m422.6 496.13a84.34 84.34 0 0 1 -71.33-129.44 26.15 26.15 0 0 1 7.84-11l1.56-1.32.29-.25a84 84 0 0 1 9.43-8.66 160.91 160.91 0 0 0 47.78-114.93c0-89.43-72.75-162.17-162.17-162.17s-162.17 72.76-162.17 162.19a160.91 160.91 0 0 0 47.78 114.93 84 84 0 0 1 9.43 8.66l.29.25c.52.45 1 .89 1.57 1.32a26.22 26.22 0 0 1 7.83 11 84.37 84.37 0 1 1 -94.73-36.08 215 215 0 0 1 -24.66-100.08c0-2.82.06-5.75.17-8.7a6 6 0 0 1 12 .47c-.11 2.8-.17 5.56-.17 8.23a202.76 202.76 0 0 0 27 101.11 6 6 0 0 1 -4.11 8.89 72.47 72.47 0 1 0 74.09 32.06 6.42 6.42 0 0 1 -.63-1.29 14.27 14.27 0 0 0 -4.38-6.34l-1.73-1.46-.54-.46a4.93 4.93 0 0 1 -.52-.5 72.83 72.83 0 0 0 -8.54-7.84 5.93 5.93 0 0 1 -.53-.47 172.87 172.87 0 0 1 -51.58-123.7c0-96 78.13-174.17 174.17-174.17s174.17 78.13 174.17 174.17a172.87 172.87 0 0 1 -51.58 123.7 5.93 5.93 0 0 1 -.53.47 72.83 72.83 0 0 0 -8.54 7.84 4.93 4.93 0 0 1 -.52.5l-.54.46-1.76 1.48a14.21 14.21 0 0 0 -4.39 6.34 6.42 6.42 0 0 1 -.63 1.29 72.38 72.38 0 1 0 74.09-32.06 6 6 0 0 1 -4.11-8.89 202.76 202.76 0 0 0 27-101.11c0-111.76-90.91-202.67-202.66-202.67-91 0-171.33 61.27-195.44 149a6 6 0 0 1 -11.6-3.21c25.53-92.92 110.65-157.81 207-157.81 118.36 0 214.66 96.3 214.66 214.67a215 215 0 0 1 -24.66 100.08 84.4 84.4 0 0 1 -23.37 165.5zm0-40.5a43.88 43.88 0 0 1 -33.8-71.9 6 6 0 0 1 .66-.68c2.4-2.1 4.86-4.36 7.3-6.71a5.87 5.87 0 0 1 .72-.6 43.9 43.9 0 1 1 25.12 79.89zm-24.85-63.88a32 32 0 1 0 7-6.43c-2.35 2.24-4.7 4.4-7 6.43zm-308.35 63.88a43.91 43.91 0 1 1 25.12-79.89 5.87 5.87 0 0 1 .72.6c2.44 2.35 4.9 4.61 7.3 6.71a6 6 0 0 1 .66.68 43.88 43.88 0 0 1 -33.8 71.9zm0-75.81a32 32 0 1 0 24.85 11.93c-2.3-2-4.65-4.19-7-6.43a31.66 31.66 0 0 0 -17.85-5.5zm-40.26-170.63a6.81 6.81 0 0 1 -.78-.05 6 6 0 0 1 -5.18-6.72c.37-2.91.84-5.94 1.42-9.27a6 6 0 1 1 11.82 2.07c-.55 3.14-1 6-1.34 8.73a6 6 0 0 1 -5.94 5.24z" fill="#ff0000"/></g></svg>
                             </span>
                                
                                 {data.aries.north}</p>
                            <p className="text-white p-2 items-end text-2xl gap-2 flex rounded-md font-cera_medium">
                            <span className="rotate-180">
                             <svg height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g id="_102_Ascending_Node" data-name="102 Ascending Node"><path d="m436.9 334.65a208.22 208.22 0 0 0 27.76-104.11c0-115.06-93.6-208.66-208.66-208.66s-208.66 93.6-208.66 208.66a208.22 208.22 0 0 0 27.76 104.11 78.46 78.46 0 1 0 80.22 34.7 20.14 20.14 0 0 0 -6.24-9l-2.2-1.87a79.27 79.27 0 0 0 -9.25-8.5 167.62 167.62 0 0 1 -49.8-119.44c0-92.73 75.44-168.17 168.17-168.17s168.17 75.44 168.17 168.17a167.62 167.62 0 0 1 -49.8 119.46 79.27 79.27 0 0 0 -9.25 8.5l-2.2 1.87a20.14 20.14 0 0 0 -6.24 9 78.38 78.38 0 1 0 80.22-34.7zm-347.5 115a37.91 37.91 0 1 1 21.68-69q3.66 3.54 7.51 6.91a37.89 37.89 0 0 1 -29.19 62.07zm333.2 0a37.89 37.89 0 0 1 -29.19-62.07q3.85-3.36 7.51-6.91a37.9 37.9 0 1 1 21.68 69z" fill="#8bd5ef"/><path d="m422.6 496.13a84.34 84.34 0 0 1 -71.33-129.44 26.15 26.15 0 0 1 7.84-11l1.56-1.32.29-.25a84 84 0 0 1 9.43-8.66 160.91 160.91 0 0 0 47.78-114.93c0-89.43-72.75-162.17-162.17-162.17s-162.17 72.76-162.17 162.19a160.91 160.91 0 0 0 47.78 114.93 84 84 0 0 1 9.43 8.66l.29.25c.52.45 1 .89 1.57 1.32a26.22 26.22 0 0 1 7.83 11 84.37 84.37 0 1 1 -94.73-36.08 215 215 0 0 1 -24.66-100.08c0-2.82.06-5.75.17-8.7a6 6 0 0 1 12 .47c-.11 2.8-.17 5.56-.17 8.23a202.76 202.76 0 0 0 27 101.11 6 6 0 0 1 -4.11 8.89 72.47 72.47 0 1 0 74.09 32.06 6.42 6.42 0 0 1 -.63-1.29 14.27 14.27 0 0 0 -4.38-6.34l-1.73-1.46-.54-.46a4.93 4.93 0 0 1 -.52-.5 72.83 72.83 0 0 0 -8.54-7.84 5.93 5.93 0 0 1 -.53-.47 172.87 172.87 0 0 1 -51.58-123.7c0-96 78.13-174.17 174.17-174.17s174.17 78.13 174.17 174.17a172.87 172.87 0 0 1 -51.58 123.7 5.93 5.93 0 0 1 -.53.47 72.83 72.83 0 0 0 -8.54 7.84 4.93 4.93 0 0 1 -.52.5l-.54.46-1.76 1.48a14.21 14.21 0 0 0 -4.39 6.34 6.42 6.42 0 0 1 -.63 1.29 72.38 72.38 0 1 0 74.09-32.06 6 6 0 0 1 -4.11-8.89 202.76 202.76 0 0 0 27-101.11c0-111.76-90.91-202.67-202.66-202.67-91 0-171.33 61.27-195.44 149a6 6 0 0 1 -11.6-3.21c25.53-92.92 110.65-157.81 207-157.81 118.36 0 214.66 96.3 214.66 214.67a215 215 0 0 1 -24.66 100.08 84.4 84.4 0 0 1 -23.37 165.5zm0-40.5a43.88 43.88 0 0 1 -33.8-71.9 6 6 0 0 1 .66-.68c2.4-2.1 4.86-4.36 7.3-6.71a5.87 5.87 0 0 1 .72-.6 43.9 43.9 0 1 1 25.12 79.89zm-24.85-63.88a32 32 0 1 0 7-6.43c-2.35 2.24-4.7 4.4-7 6.43zm-308.35 63.88a43.91 43.91 0 1 1 25.12-79.89 5.87 5.87 0 0 1 .72.6c2.44 2.35 4.9 4.61 7.3 6.71a6 6 0 0 1 .66.68 43.88 43.88 0 0 1 -33.8 71.9zm0-75.81a32 32 0 1 0 24.85 11.93c-2.3-2-4.65-4.19-7-6.43a31.66 31.66 0 0 0 -17.85-5.5zm-40.26-170.63a6.81 6.81 0 0 1 -.78-.05 6 6 0 0 1 -5.18-6.72c.37-2.91.84-5.94 1.42-9.27a6 6 0 1 1 11.82 2.07c-.55 3.14-1 6-1.34 8.73a6 6 0 0 1 -5.94 5.24z" fill="#1d71a0"/></g></svg>
                             </span>
                                {data.aries.south}</p>
                            
                      
                   
                              
                            </div> */}



                            <div class={`  p-[1px] rounded-md  bg-gradient-to-t to-transparen from-blue-300 dark:from-blue-300/50  ` }>
<div className="bg-white dark:bg-[#2F2F31] flex rounded-md flex-col relative ">
<h2 class={`text-center bg-gradient-to-b from-blue-300 to-indigo-200  md:px-7 px-5 py-3 md:py-2 rounded-t-md  md:text-2xl text-2xl font-cera_medium text-zinc-800`}> YOUR NODE INSIGHTS</h2>
<div className="mt-5 pb-4  max-w-4xl grid grid-cols-1 md:grid-cols-2  md:gap-7 gap-5">
                            <p className=" justify-center p-2 items-end text-center gap-2 dark:text-white text-2xl rounded-md flex font-cera_medium">
                            <span>
                             <svg height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g id="_102_Ascending_Node" data-name="102 Ascending Node"><path d="m436.9 334.65a208.22 208.22 0 0 0 27.76-104.11c0-115.06-93.6-208.66-208.66-208.66s-208.66 93.6-208.66 208.66a208.22 208.22 0 0 0 27.76 104.11 78.46 78.46 0 1 0 80.22 34.7 20.14 20.14 0 0 0 -6.24-9l-2.2-1.87a79.27 79.27 0 0 0 -9.25-8.5 167.62 167.62 0 0 1 -49.8-119.44c0-92.73 75.44-168.17 168.17-168.17s168.17 75.44 168.17 168.17a167.62 167.62 0 0 1 -49.8 119.46 79.27 79.27 0 0 0 -9.25 8.5l-2.2 1.87a20.14 20.14 0 0 0 -6.24 9 78.38 78.38 0 1 0 80.22-34.7zm-347.5 115a37.91 37.91 0 1 1 21.68-69q3.66 3.54 7.51 6.91a37.89 37.89 0 0 1 -29.19 62.07zm333.2 0a37.89 37.89 0 0 1 -29.19-62.07q3.85-3.36 7.51-6.91a37.9 37.9 0 1 1 21.68 69z" fill="#FF5733"/><path d="m422.6 496.13a84.34 84.34 0 0 1 -71.33-129.44 26.15 26.15 0 0 1 7.84-11l1.56-1.32.29-.25a84 84 0 0 1 9.43-8.66 160.91 160.91 0 0 0 47.78-114.93c0-89.43-72.75-162.17-162.17-162.17s-162.17 72.76-162.17 162.19a160.91 160.91 0 0 0 47.78 114.93 84 84 0 0 1 9.43 8.66l.29.25c.52.45 1 .89 1.57 1.32a26.22 26.22 0 0 1 7.83 11 84.37 84.37 0 1 1 -94.73-36.08 215 215 0 0 1 -24.66-100.08c0-2.82.06-5.75.17-8.7a6 6 0 0 1 12 .47c-.11 2.8-.17 5.56-.17 8.23a202.76 202.76 0 0 0 27 101.11 6 6 0 0 1 -4.11 8.89 72.47 72.47 0 1 0 74.09 32.06 6.42 6.42 0 0 1 -.63-1.29 14.27 14.27 0 0 0 -4.38-6.34l-1.73-1.46-.54-.46a4.93 4.93 0 0 1 -.52-.5 72.83 72.83 0 0 0 -8.54-7.84 5.93 5.93 0 0 1 -.53-.47 172.87 172.87 0 0 1 -51.58-123.7c0-96 78.13-174.17 174.17-174.17s174.17 78.13 174.17 174.17a172.87 172.87 0 0 1 -51.58 123.7 5.93 5.93 0 0 1 -.53.47 72.83 72.83 0 0 0 -8.54 7.84 4.93 4.93 0 0 1 -.52.5l-.54.46-1.76 1.48a14.21 14.21 0 0 0 -4.39 6.34 6.42 6.42 0 0 1 -.63 1.29 72.38 72.38 0 1 0 74.09-32.06 6 6 0 0 1 -4.11-8.89 202.76 202.76 0 0 0 27-101.11c0-111.76-90.91-202.67-202.66-202.67-91 0-171.33 61.27-195.44 149a6 6 0 0 1 -11.6-3.21c25.53-92.92 110.65-157.81 207-157.81 118.36 0 214.66 96.3 214.66 214.67a215 215 0 0 1 -24.66 100.08 84.4 84.4 0 0 1 -23.37 165.5zm0-40.5a43.88 43.88 0 0 1 -33.8-71.9 6 6 0 0 1 .66-.68c2.4-2.1 4.86-4.36 7.3-6.71a5.87 5.87 0 0 1 .72-.6 43.9 43.9 0 1 1 25.12 79.89zm-24.85-63.88a32 32 0 1 0 7-6.43c-2.35 2.24-4.7 4.4-7 6.43zm-308.35 63.88a43.91 43.91 0 1 1 25.12-79.89 5.87 5.87 0 0 1 .72.6c2.44 2.35 4.9 4.61 7.3 6.71a6 6 0 0 1 .66.68 43.88 43.88 0 0 1 -33.8 71.9zm0-75.81a32 32 0 1 0 24.85 11.93c-2.3-2-4.65-4.19-7-6.43a31.66 31.66 0 0 0 -17.85-5.5zm-40.26-170.63a6.81 6.81 0 0 1 -.78-.05 6 6 0 0 1 -5.18-6.72c.37-2.91.84-5.94 1.42-9.27a6 6 0 1 1 11.82 2.07c-.55 3.14-1 6-1.34 8.73a6 6 0 0 1 -5.94 5.24z" fill="#ff0000"/></g></svg>
                             </span>
                                
                                 {data.aries.north}</p>
                            <p className=" justify-center dark:text-white p-2 items-end text-2xl gap-2 flex rounded-md font-cera_medium">
                            <span className="rotate-180">
                             <svg height="45" viewBox="0 0 512 512" width="45" xmlns="http://www.w3.org/2000/svg"><g id="_102_Ascending_Node" data-name="102 Ascending Node"><path d="m436.9 334.65a208.22 208.22 0 0 0 27.76-104.11c0-115.06-93.6-208.66-208.66-208.66s-208.66 93.6-208.66 208.66a208.22 208.22 0 0 0 27.76 104.11 78.46 78.46 0 1 0 80.22 34.7 20.14 20.14 0 0 0 -6.24-9l-2.2-1.87a79.27 79.27 0 0 0 -9.25-8.5 167.62 167.62 0 0 1 -49.8-119.44c0-92.73 75.44-168.17 168.17-168.17s168.17 75.44 168.17 168.17a167.62 167.62 0 0 1 -49.8 119.46 79.27 79.27 0 0 0 -9.25 8.5l-2.2 1.87a20.14 20.14 0 0 0 -6.24 9 78.38 78.38 0 1 0 80.22-34.7zm-347.5 115a37.91 37.91 0 1 1 21.68-69q3.66 3.54 7.51 6.91a37.89 37.89 0 0 1 -29.19 62.07zm333.2 0a37.89 37.89 0 0 1 -29.19-62.07q3.85-3.36 7.51-6.91a37.9 37.9 0 1 1 21.68 69z" fill="#8bd5ef"/><path d="m422.6 496.13a84.34 84.34 0 0 1 -71.33-129.44 26.15 26.15 0 0 1 7.84-11l1.56-1.32.29-.25a84 84 0 0 1 9.43-8.66 160.91 160.91 0 0 0 47.78-114.93c0-89.43-72.75-162.17-162.17-162.17s-162.17 72.76-162.17 162.19a160.91 160.91 0 0 0 47.78 114.93 84 84 0 0 1 9.43 8.66l.29.25c.52.45 1 .89 1.57 1.32a26.22 26.22 0 0 1 7.83 11 84.37 84.37 0 1 1 -94.73-36.08 215 215 0 0 1 -24.66-100.08c0-2.82.06-5.75.17-8.7a6 6 0 0 1 12 .47c-.11 2.8-.17 5.56-.17 8.23a202.76 202.76 0 0 0 27 101.11 6 6 0 0 1 -4.11 8.89 72.47 72.47 0 1 0 74.09 32.06 6.42 6.42 0 0 1 -.63-1.29 14.27 14.27 0 0 0 -4.38-6.34l-1.73-1.46-.54-.46a4.93 4.93 0 0 1 -.52-.5 72.83 72.83 0 0 0 -8.54-7.84 5.93 5.93 0 0 1 -.53-.47 172.87 172.87 0 0 1 -51.58-123.7c0-96 78.13-174.17 174.17-174.17s174.17 78.13 174.17 174.17a172.87 172.87 0 0 1 -51.58 123.7 5.93 5.93 0 0 1 -.53.47 72.83 72.83 0 0 0 -8.54 7.84 4.93 4.93 0 0 1 -.52.5l-.54.46-1.76 1.48a14.21 14.21 0 0 0 -4.39 6.34 6.42 6.42 0 0 1 -.63 1.29 72.38 72.38 0 1 0 74.09-32.06 6 6 0 0 1 -4.11-8.89 202.76 202.76 0 0 0 27-101.11c0-111.76-90.91-202.67-202.66-202.67-91 0-171.33 61.27-195.44 149a6 6 0 0 1 -11.6-3.21c25.53-92.92 110.65-157.81 207-157.81 118.36 0 214.66 96.3 214.66 214.67a215 215 0 0 1 -24.66 100.08 84.4 84.4 0 0 1 -23.37 165.5zm0-40.5a43.88 43.88 0 0 1 -33.8-71.9 6 6 0 0 1 .66-.68c2.4-2.1 4.86-4.36 7.3-6.71a5.87 5.87 0 0 1 .72-.6 43.9 43.9 0 1 1 25.12 79.89zm-24.85-63.88a32 32 0 1 0 7-6.43c-2.35 2.24-4.7 4.4-7 6.43zm-308.35 63.88a43.91 43.91 0 1 1 25.12-79.89 5.87 5.87 0 0 1 .72.6c2.44 2.35 4.9 4.61 7.3 6.71a6 6 0 0 1 .66.68 43.88 43.88 0 0 1 -33.8 71.9zm0-75.81a32 32 0 1 0 24.85 11.93c-2.3-2-4.65-4.19-7-6.43a31.66 31.66 0 0 0 -17.85-5.5zm-40.26-170.63a6.81 6.81 0 0 1 -.78-.05 6 6 0 0 1 -5.18-6.72c.37-2.91.84-5.94 1.42-9.27a6 6 0 1 1 11.82 2.07c-.55 3.14-1 6-1.34 8.73a6 6 0 0 1 -5.94 5.24z" fill="#1d71a0"/></g></svg>
                             </span>
                                {data.aries.south}</p>
                            
                      
                   
                              
                            </div>
</div>
</div>





                                  <BigCard
                                  titlehead={data.aries.list.first.title_head}
                             title={data.aries.list.first.title}
                           bg1={"bg-gradient-to-b to-transparen from-yellow-300 dark:from-yellow-300/50"}
                           bg={"bg-gradient-to-b from-yellow-300 to-amber-300"}
                             desc={data.aries.list.first.desc}
                            />
               <BigCard
               titlehead={data.aries.list.second.title_head}
               title={data.aries.list.second.title}
               desc={data.aries.list.second.desc}
               bg={"bg-gradient-to-b from-green-200 to-green-300"}
               bg1={"bg-gradient-to-b  from-green-300 dark:from-green-300/50"}

               />
                <BigCard
                titlehead={data.aries.list.third.title_head}
               title={data.aries.list.third.title}
               desc={data.aries.list.third.desc}
               bg={"bg-gradient-to-b from-sky-200 to-cyan-300"}
               bg1={"bg-gradient-to-b to-transparent from-cyan-300 dark:from-cyan-300/50"}

               />
                 <BigCard
                 titlehead={data.aries.list.fourth.title_head}
               title={data.aries.list.fourth.title}
               desc={data.aries.list.fourth.desc}
               bg={"bg-gradient-to-b from-rose-200 to-pink-300"}
               bg1={"bg-gradient-to-b to-transparen from-pink-300 dark:from-rose-300/50"}

               />
               <BigCard
               titlehead={data.aries.list.fifth.title_head}
               title={data.aries.list.fifth.title}
               desc={data.aries.list.fifth.desc}
               bg1={"bg-gradient-to-b to-transparen from-emerald-300 dark:from-emerald-300/50"}
               bg={"bg-gradient-to-b from-teal-200 to-emerald-300"}


               />
                <BigCard
                titlehead={data.aries.list.sixth.title_head}
               title={data.aries.list.sixth.title}
               desc={data.aries.list.sixth.desc}
               bg={"bg-gradient-to-b from-pink-200 to-purple-300"}
               bg1={"bg-gradient-to-b to-transparen from-purple-300 dark:from-purple-300/50"}


               />

               

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}








export function BigCard (props, bg){
    return (

        <div>
                        <div class={`${props.bg1} p-[1px] rounded-md    ` }>
<div className="  flex rounded-md flex-col relative ">
<h2 class={`${props.bg}   md:px-7 px-5 py-3 md:py-2 rounded-t-md uppercase  md:text-2xl text-2xl font-cera_medium text-zinc-800`}>{props.titlehead}</h2>
<div class="md:px-7 md:py-5 p-5 dark:text-white flex flex-col gap-2">
<h3 className="text-xl font-cera_medium">{props?.title}</h3>
<p>{props.desc}</p>
</div>
</div>
</div>
        </div>
    )

}
