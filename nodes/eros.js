import React from "react";
import { SubPara } from "./black-moon-lilith-calculator";
import useLang from "../components/context/contexthook/languagexontexthook";
import Head from "next/head";
import Form from "../components/form/form";
import { GradientBorderCard } from "./big-3-calculator";

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
                    className="text-transparent pb-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 font-cera_bold md:text-5xl text-4xl text-center leading-norma bg-clip-text "
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
                        button: "Calculate Your Eros Now",
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



        

<div className="w-full max-w-6xl md:gap-36 space-y-10 gap-14 items-center mx-auto flex md:flex-row flex-col">
          
          <div className="w-full">
            <img src="/imgs/" className="w-full" />
          </div>
          <div className="w-full">
            <div className="max-w-4xl items-center mx-auto flex flex-col gap-6">
              <h2
                style={{ lineHeight: 1.1 }}
                className="md:text-4xl  font-cera_bold !leading-[1.3] dark:text-white text-zinc-800 text-3xl"
              >
                {staticData.section3.title}
              </h2>

              <div className="  max-w-3xl    flex flex-col gap-5">
                {staticData.section3.list.map((item, i) => (
                  <SubPara extra="dark:text-zinc-300 text-zinc-700" key={i}>
                    {item}
                  </SubPara>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl md:gap-20 mt-9 gap-14 items-center mx-auto flex md:flex-row flex-col">
          <div className="w-full">
            <div className="max-w-4xl  mx-auto flex flex-col gap-6">
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
                className="bg-fuchsia-400 text-center max-w-max self-start   px-10 py-3 rounded-md text-zinc-800 hover:bg-fuchsia-600 font-cera_medium md:text-lg"
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
                    bg="bg-gradient-to-br  from-fuchsia-300 dark:from-fuchsia-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[0]}
                  />
                  <GradientBorderCard
                    bg="bg-gradient-to-bl  from-fuchsia-300 dark:from-fuchsia-300/60 dark:to-zinc-900 to-transparent"
                    text={staticData.section4.list[1]}
                  />
               
                </div>
              </div>
              <p className="dark:text-zinc-200 mt-3 md:text-lg">
                {" "}
                {staticData.section4.desc2}
              </p>
              <a
                href="#"
                className="bg-fuchsia-400 text-center max-w-max self-start mx-auto  px-10 py-3 rounded-md text-zinc-800 hover:bg-fuchsia-600 font-cera_medium md:text-lg"
              >
                {staticData.section1.btntxt}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 from-zinc-100/80 to-white overflow-hidden items-center justify-center space-y-6  py-14 md:py-24 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 relative before:left-0 z-[2] before:z-[-1] after:z-[-1] before:top-[0px] before:opacity-60 before:w-[600px] before:h-[650px] md:before:h-full  before:rotate-180 before:absolute after:right-0 after:bottom-[0] dark:after:bottom-[-130px] after:opacity-80 after:w-[600px] after:h-[600px] md:after:h-full  after:absolute ">
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
                    className="h-7 w-7 fill-fuchsia-500"
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
        <div className=" md:text-2xl   rounded-[30px] p-7 md:p-14 max-w-4xl mx-auto bg-gradient-to-bl from-[#b6cee8] to-[#f578dc] mt-9  self-center flex flex-col gap-5">
          <p className=" ">
            {staticData.section6.title}
          </p>
         <p>{staticData.section6.desc[0]}</p>
         <p>{staticData.section6.desc[1]}</p>
         <p className="font-cera_bold text-3xl md:text-4xl">{staticData.section6.desc[2]}</p>
         <p>{staticData.section6.desc[3]}</p>
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
    title: "Your Sensual Personality: Find Your Hidden Desires",
    subtitle:
      "Dive into your intimate attractions and fire up your passion with our free Eros Calculator.",

    desc: [
      "Our Free Eros Calculator sheds light on the hidden desires and irresistible passions that drive your intimate connections.",
    ],
    btntxt: "Reveal Your Eros Sign Now",
  },
  section2: {
    title: "What is Eros in Astrology",
    list: [
      "Eros, the asteroid of desire, unveils the scorching truths about your sexual nature, intimate turn-ons, and even your most hidden fetishes. ",
      "Governed by Eros, the God of Desire in Greek mythology, this astrological body defines the essence of physical pleasure and steamiest encounters."
    ],
  },

  section3: {
    title: "Why is knowing my Eros Sign so important??",
     list: [
      "Tapping into your Eros Sign reveals your secret desires, fantasies, and susceptibilities, guiding you towards explosive chemistry with your romantic partners.",
      "Accuracy Matters: Ensure the correctness of your birth details.",
      "Inputting inaccurate birth details can hinder the discovery of your authentic Eros Sign, and ultimately, your pathway to untamed pleasure."

        ],
  },

  section4: {
    title: "What Can We Learn From Our Eros Sign? ",
    desc: [
      "Exploring your Eros Sign leads to an enveloping understanding of your intimate desires, cravings, and your creative prowess in bedroom adventures."
    ],
    list: [
      "<b class='bold'>Compatibility That Ignites</b>: Eros speaks to the spark in your relationships, igniting a magnetic connection that can leave you breathless.\n",
      "<b class='bold'>Monogamy or Polyamory</b>: Uncovering your Eros Sign helps you comprehend the nuances of your relationship desires and how to truly satisfy your sensuality."
    
    ],
    
  },

  section5: {
    list: [
    "A precise determination of your Eros Sign based on your accurate birth details. ",
    "An exploration of your most hidden desires and intimate attractions.",
    "A roadmap to reigniting passion and chemistry in your romantic relationships",
    "Compatibility revelations that ensure spine-tingling encounters between you and your partner.",
    "Insights into the relationship dynamics that truly fulfill your sensuality and unleash your deepest fantasies."                   
           ],

    desc: [
     "Our free Eros Calculator offers a detailed account of your Eros Sign, crafting an intimate journey of pleasure, bedroom creativity, and deep understanding of your own desires.",
      "Our Most Captivating Free Eros Calculator is designed to reveal the intricacies of your carnal connections with the following insights:"
    ],
    desc2: [
      "With this awakening, you can unleash your primal desires, opening you up to a realm of absolute pleasure.",
      "Because..",
      "Knowing your Eros Sign is the key to entering a world of exhilarating passion and insatiable yearning with your lover."
    ],
  },

  section6: {
    title:
      "Dive deep into your intimate potential and drown in a world of fiery desire by understanding your Eros Sign and its hidden cravings.",

    desc: [
     "Embrace the allure of Eros and let eroticism wash over you like a resplendent wave of ecstasy.",
     "After all...",
     " The key to scintillating intimacy lies in the understanding of your deepest desires.",
     "Calculate your Eros Sign now, and know your most intense desires, and let the raw power of passion sweep you off your feet."
    ],
   
  },
};
