import React from "react";
import { SubPara } from "../black-moon-lilith-calculator";
import useLang from "../../components/context/contexthook/languagexontexthook";
import Head from "next/head";
import Form from "../../components/form/form";
import { GradientBorderCard } from "../big-3-calculator";

const Chiron = () => {
  const { formdata } = useLang();
  return (
    <div>
      <Head>
        <title>
          Discover your Chiron placement and start your healing journey today |
          UpAstrology
        </title>
        <meta
          name="description"
          content=" Chiron represents our deepest wounds and our greatest potential for healing. Calculate your Chiron placement to start your healing journey today with our free Chiron Calculator"
        />
        <meta
          name="keywords"
          content="Chiron Calculator,Chiron,Chiron placement "
        />
      </Head>
      <div className="dark:bg-[#2F2F31]   bg-white">
        <div className="">
          <div className=" flex pt-12 pb-20 md:py-14 max-w-6xl mx-auto items-center">
            <div className="w-full items-center text-center flex flex-col gap-6 md:gap-10 ">
              <div className=" flex flex-col gap-10 max-w-4xl w-full mx-auto md:px-10">
                <div className="flex flex-col gap-6 px-5">
                  <h2
                    style={{ lineHeight: 1.1 }}
                    className="text-transparent pb-1 bg-gradient-to-r from-[#4C6E82] to-[#8badb5] font-cera_bold md:text-5xl text-4xl text-center leading-norma bg-clip-text "
                  >
                    {staticData.section1.title}
                  </h2>
                  <p className="dark:text-zinc-300 text-base max-w-sm sm:max-w-2xl mx-auto sm:text-lg leading-7 text-center">
                    {staticData.section1.subtitle}
                  </p>
                </div>
                <div>
                  <Form
                    withoutText={true}
                    data={{
                      ...formdata.en,
                      key: {
                        ...formdata.en.key,
                        button: "Calculate Your Lunar Nodes Now",
                      },
                    }}
                    id="chiron-calculator"
                    url="/chiron-placement-calculator/report"
                  />
                </div>
              </div>
              <p className="text-zinc-700 px-5 dark:text-zinc-300 max-w-xl mx-auto  md:text-lg">
                {staticData.section1.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100/80 items-center dark:bg-zinc-800  py-14 px-5 ">



         <div className=" flex flex-col  gap-5 w-full  max-w-4xl mx-auto">
        
            <div className=" md:p-14 p-10 flex flex-col gap-5  rounded-[30px] bg- dark:bg-zinc-800">
              <h3 className="md:text-4xl  dark:text-white text-zinc-800 font-cera_bold text-3xl">
                {staticData.section3.title}
              </h3>
              <div className=" md:text-lg dark:text-zinc-300 text-zinc-700 ,max-w-3xl flex flex-col gap-5">
                {staticData.section3.list.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          
        </div>
        <div className="w-full max-w-6xl md:gap-20 gap-14 items-center mx-auto flex md:flex-row flex-col">
          <div className="w-full">
            <div className="max-w-4xl items-center mx-auto flex flex-col gap-6">
              <h2
                style={{ lineHeight: 1.1 }}
                className="md:text-4xl  font-cera_bold !leading-[1.3] dark:text-white text-zinc-800 text-3xl"
              >
                {staticData.section2.title}
              </h2>

              <div className="  max-w-3xl    flex flex-col gap-5">
                {staticData.section2.list.slice(0, 4).map((item, i) => (
                  <SubPara extra="dark:text-zinc-300 text-zinc-700" key={i}>
                    {item}
                  </SubPara>
                ))}
              </div>

              <a
                href="#chiron-calculator"
                className="bg-violet-500 text-center max-w-max self-start   px-10 py-3 rounded-md text-zinc-800 hover:bg-violet-600 font-cera_medium md:text-lg"
              >
                {staticData.section1.btntxt}
              </a>
            </div>
          </div>
          <div className="w-full">
            <img src="/imgs/" className="w-full" />
          </div>
        </div>

       
      </div>

      <div className=" overflow-hidden md:py-24 py-14  dark:bg-zinc-900 relative px-5 ">
        <div className="">
          <div className="max-w-5xl flex flex-col md:gap-14 w-full mx-auto">
            <div className="max-w-3xl items-center mx-auto flex flex-col gap-6">
              <h3 className="font-cera_bold text-center  md:text-4xl text-3xl dark:text-white text-zinc-800">
                {staticData.section4.title}
              </h3>
              <div className=" md:text-lg dark:text-zinc-300 text-zinc-700 flex flex-col gap-5">
                {staticData.section4.desc.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
              <div className=" md:text-xl self-center dark:text-zinc-300 flex flex-col gap-3">
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-5">
                  <GradientBorderCard
                    bg="bg-gradient-to-tl  from-purple-300 dark:from-purple-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[0]}
                  />
                  <GradientBorderCard
                    bg="bg-gradient-to-tr  from-lime-purple dark:from-purple-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[1]}
                  />
                  <GradientBorderCard
                    bg="bg-gradient-to-bl  from-purple-300 dark:from-purple-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[2]}
                  />
                  <GradientBorderCard
                    bg="bg-gradient-to-br  from-purple-300 dark:from-purple-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[3]}
                  />
                </div>
              </div>
              <p className="dark:text-zinc-200 mt-3 md:text-lg">
                {" "}
                {staticData.section4.desc2}
              </p>
              <a
                href="#"
                className="bg-violet-500 text-center max-w-max self-start mx-auto  px-10 py-3 rounded-md text-zinc-800 hover:bg-violet-600 font-cera_medium md:text-lg"
              >
                {staticData.section1.btntxt}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 from-zinc-100/80 to-white overflow-hidden items-center justify-center space-y-6  py-14 md:py-24 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 relative before:left-0 z-[2] before:z-[-1] after:z-[-1] before:top-[0px] before:opacity-60 before:w-[600px] before:h-[650px] md:before:h-full before:bg-[url('/background/back5.png')] before:rotate-180 before:absolute after:right-0 after:bottom-[0] dark:after:bottom-[-130px] after:opacity-80 after:w-[600px] after:h-[600px] md:after:h-full  after:absolute ">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className=" md:text-lg dark:text-zinc-300 text-zinc-700 flex flex-col gap-5">
            {staticData.section5.desc.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <ul className=" md:text-xl items-start  dark:text-zinc-300 !list-none md:ml-10 flex flex-col gap-5">
            {staticData.section5.list.map((item, i) => (
              <li key={i} className=" flex gap-2 items-start">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 fill-violet-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.41421 17C7.63316 17.7811 6.36683 17.781 5.58579 17L6.29289 16.2929L5.58579 17L2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929C2.68342 11.9024 3.31658 11.9024 3.70711 12.2929L7 15.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289ZM21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071C10.9024 17.3166 10.9024 16.6834 11.2929 16.2929L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289Z"
                    />
                  </svg>
                </span>
                <p
                  className="md:text-lg text-zinc-800 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              </li>
            ))}
          </ul>

          <div className=" md:text-lg dark:text-zinc-300 text-zinc-700 flex flex-col gap-5">
            {staticData.section5.desc2.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
        <div className=" md:text-2xl   rounded-[30px] p-7 md:p-14 max-w-4xl mx-auto bg-gradient-to-tr from-[#4C6E82] to-[#8294a8] mt-9  self-center flex flex-col gap-5">
          <h3 className="font-cera_medium   md:text-3xl text-2xl  text-zinc-800">
            {staticData.section6.title}
          </h3>
          {staticData.section6.desc.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <h3
            style={{ lineHeight: 1.3 }}
            className="font-cera_bold  max-w-xl  md:text-4xl text-3xl  text-zinc-800"
          >
            {staticData.section6.subtitle}
          </h3>
          <p>{staticData.section6.desc2}</p>
          <a
            href="#chiron-calculator"
            className="bg-white text-center md:mt-5 max-w-max mx-auto self-start  px-10 py-3 rounded-md text-zinc-800 hover:bg-lime-600 hover:text-white font-cera_medium md:text-lg"
          >
            {staticData.section1.btntxt}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chiron;

const staticData = {
  section1: {
    title: "What Are My North and South Nodes? What is my True Calling?",
    subtitle:
      "Sub: Learn about your past life karma, future spiritual growth, and the challenges and obstacles you face with our free Lunar Nodes Calculator",

    desc: [
      "Our free Lunar Nodes calculator is your compass for spiritual progression and karmic growth.",
    ],
    btntxt: "Discover Your Lunar Nodes Now",
  },
  section2: {
    title: "What are Lunar Node",
    list: [
      " Lunar Nodes, often referred to as the \"Nodes of Fate,\" are mathematical points in your natal chart that mark where the Moon's orbit crosses the ecliptic.",
      "They signify your soul's journey, symbolizing past life karma (South Node) and future spiritual growth (North Node)"
    ],
  },

  section3: {
    title: "What does it mean to have specific Lunar Nodes in my natal chart?",
     list: [
        "Every individual has North and South Lunar Nodes in their natal chart, representing their soul's journey through past life karma and future spiritual growth.",
        "The nature of these karmic patterns can vary immensely, reflecting in both our spiritual and worldly experiences.",
        "The great part is, understanding your Lunar Nodes can set you on the path to personal and spiritual evolution. ",
        "By pinpointing your Lunar Nodes in your chart, you can decipher your past-life lessons and your soul's purpose in this lifetime.",
        "Ensure the precision of your birth details. An inaccurate Node placement can divert you from your true karmic path."
        ],
  },

  section4: {
    title: "Why are Lunar Nodes Significant In Astrology? ",
    desc: [
      "Lunar Nodes’ placement in your chart determines the karmic lessons you carry from past lives and what your soul is striving to achieve in this one.",
      "Here are some common experiences that may relate to Lunar Nodes in our natal chart",
    ],
    list: [
      "<b class='bold'>Past Experiences</b>: Recurring patterns, habits or tendencies that seem ingrained and difficult to break can be associated with the South Node.\n",
      "<b class='bold'></b>: Your inherent desires, passions, and the journey you feel compelled to undertake are linked with the North Node.",
      "<b class='bold'> Life Lessons</b>: The challenges and obstacles you face, and how you overcome them, are key indicators of your Lunar Nodes.",
      "<b class='bold'>Soul's Evolution</b>: Your spiritual growth, personal development, and how you evolve as an individual tie back to your Lunar Nodes. Acknowledging and understanding your Lunar Nodes can set you on the right path to personal evolution.",
    ],
    desc2:
      "Recognizing and understanding your Chiron sign can lead you on a path to healing. ",
  },

  section5: {
    list: [
      "Accurate determination of your Lunar Nodes based on your precise birth details.",
      "Comprehensive understanding of the karmic lessons associated with your Lunar Nodes.",
      "Practical guidance on how to navigate your path towards spiritual growth.",
      "A clear picture of how these karmic experiences have shaped your identity and personality.",
      "An understanding of how your past and future are interwoven in your spiritual journey.",
      "A chance to embrace spiritual evolution and personal development."                     
           ],

    desc: [
     "Our Lunar Nodes calculator provides a detailed report, pinpointing your Lunar Nodes and offering insights into your past karmic experiences and future spiritual growth.",
      "Our Lunar Nodes calculator is designed to offer"
    ],
    desc2: [
      "With this knowledge, you start the process of conscious evolution.",
      "Because..",
      "Every step towards understanding your past is a step towards defining your future."
    ],
  },

  section6: {
    title:
      "Authentic enlightenment is rooted in self-awareness, in acknowledging our karmic past and striving towards our spiritual future. Understand your capability to evolve, to grow, and to walk your destined path with strength and conviction. Remember…\n",

    desc: [
      "From understanding where you've been to where you're heading, our Lunar Nodes calculator serves as your spiritual compass.",
      "Set your course for destiny today and embark on a journey of self-discovery and profound personal growth.",
     "After all, you are the author of your destiny - make your story worth telling."
    ],
    subtitle: '" Your past is a chapter, not the whole book. Turn the page and write your story"',
   
  },
};
