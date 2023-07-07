import React from 'react'
import CommonInput from '../components/Inputbox/CommonInput'

const data = {
    "section1": {
        "title": "Do You Know When Is Your True Birthday?",
        "subtitle" : "Spoiler Alert: It’s Not The Day That Is Written On Your Birth Certificate. ",
        "desc": [
            "Sure, that is your birthdate, but definitely not your true birthday as per ancient vedic tradition In fact, contrary to popular belief, your birthday is not even on the same day every year. ",
            "Yes, that’s true.",
            "Every Year Your Birthday Comes On A Different Date."
        ],
        "subtitle2": "So Then When Is Your Birthday This Year? ",
        "desc2" : "Find Out From Here"
    },
    "section2": {
      "title": "Why Is Tithi Pravesh So Important?",
      "desc" : [
        "So, now that we know that your true birthday is your Vedic birthday. Let’s understand why it is so important.",
        "Your Tithi Pravesh holds the key to your destiny, your personality, your strengths, and your weaknesses for the next one year.",
        "It reveals the opportunities of your present, and the potential of your future.",
        "Knowing your Vedic birthday is not just a matter of curiosity; it is a matter of self-discovery, personal growth, and spiritual awakening.",
        "By understanding the significance of your Janma Tithi Pravesh, you can unlock the secrets of your soul, connect with your higher self, and align with your true purpose.",
        "Now, would you not want to know the secrets of your future and embark on the path to success?",
        "If Yes Then…"
      ]
    },
    "section3": {
      "title": "Did You Know That You Can Transform Your Life in the Tithi Pravesh Year?",
      "desc": [
        "You can find out the secrets of your future and have the tools to thrive by understanding the energy and influence of the celestial event of your tithi pravesh - That is when the  Sun and Moon returns to the same position as it was at the time of your birth.",
        "It sets the tone for the next 12 months, and by understanding its energy and influence, you can align yourself with the natural rhythms of the universe and make informed decisions to thrive and transform your life.",
        "With the help of our Tithi Pravesh calculator, you can navigate the ups and downs of the upcoming year with confidence.",
        "With this vedic birthday calculator, you can also find out your exact Tithi Pravesh date and time and prepare for the upcoming year with confidence. This knowledge can empower you to make positive changes in your life and create a future that is in alignment with your true purpose.",
        "Our calculator provides personalized insights into the challenges and opportunities that await and offers powerful remedies to help you overcome any obstacles that come your way. Plus, we'll even suggest auspicious places to visit for blessings throughout the upcoming year."
      ]
     
    },
    "section4": {
      "title" : "Leverage the magic and potential of your tithi pravesh",
      "desc": [
        "But, first know the importance of different aspects of Janma Tithi Pravesh ",
        "With Lagna Lord placements and its aspect houses, you can know how and when the major events are going to unfold for you. ",
        "So, you be ready for what’s about to come for you.",
        "By knowing your Vaara Lord or Weekday Lord of the Tithi Pravesh Chart, you get to know the type of energy you are going to experience in the upcoming year. ",
        "So, by knowing the benefic and malefic energies and timings of their influence, you can always head to the right direction and be prepared for the best and the worst.",
        "Finally, knowing the most important lord, the Hora Lord, you can know how tremendously lucky you are in life and how the events in your life will play out in your favour.",
        "It sets the milestone for the events and make them turning points in your life in the upcoming year."
      ]
    },
    "section5": {
      "title": "When you have the right information about your life, you have the key to your fortunes and avoid unwanted misfortunes",
      "subtitle" : "Get the key to your life with the Janma Tithi Pravesh and make the upcoming year the most magical of your life.",
      "desc": [
        "Just enter your birth details, and our calculator will determine your exact Tithi Pravesh date and time. This momentous occasion, which occurs when the Moon returns to the same position as it was at the time of your birth, holds great importance in Vedic astrology. ",
        "When You Get The Results, Hold For A Bit… ",
        "As you will also be getting remedies based on your tithi chart, your vaaresh and the hora lord",
        "Don’t Miss It..."
      ]
    }
  
}

const TithiPravesh = () => {

    const handle = (e) => {
        if (e) {
          const data = localStorage.getItem("user");
          if (JSON.parse(data) !== null) {
            this.setState({ userdata: JSON.parse(data) });
          }
        }
      };
  return (
    <div>

<div className="bg-gradient-to-br px-4 from-fuchsia-100 via-pink-50 to-white overflow-x-hidden  min-h-screen 2xl:min-h-max "> 
      <div className="">
<div className=" flex pt-12 pb-20 md:py-14 max-w-6xl mx-auto items-center">
<div className="w-full items-center text-center flex flex-col gap-6 md:gap-10 ">
<div className=" flex flex-col gap-10 max-w-4xl w-full mx-auto md:px-10">
<div className="flex flex-col gap-6 px-5">
<h1  className=" font-bold md:text-5xl text-4xl text-center leading-norma bg-clip-text ">{data.section1.title}</h1>
<p className=" text-gray-600 text-2xl   font-semibold  max-w-sm sm:max-w-2xl mx-auto  leading-7 text-center">{data.section1.subtitle}</p>
</div>
 
</div>
<div className="text-center space-y-3 max-w-3xl">
{data.section1.desc.map((item, i) => (
                <p key={i} className="  text-center  ">
              {item}
                </p>
              ))}
</div>
<div>
  <h1 className='text-2xl font-bold'>{data.section1.subtitle2}</h1>
  <p className="text-gray-600">{data.section1.desc2}</p>
</div>
<div className="bg-gradient-to-r from-purple-600  via-rose-500 to-yellow-400 p-[3px] w-full max-w-max rounded-md">
                <div
                  className="shadow-md   flex rounded-md   px-0 pb-3 sm:pb-8 max-w-xl bg-white"
                  id="kundliform"
                >
                  <CommonInput
                    nakshatra={true}
                    data={{button: "Know Your True Birthday Now "}}
                    padding={"sm:px-8"}
                    text={"Know Your True Birthday Now "}
                    passdata={handle}
                    display={true}
                  />
                </div>
              </div>
</div>


</div>

</div>

<div>


</div>
        </div>




        <div class=" py-14 md:py-24 flex flex-col gap-20 bg-opacity-50 w-full">
<div class="flex md:flex-row flex-col-reverse gap-14 md:gap-20 justify-center items-center px-5 max-w-6xl mx-auto ">
<div class="flex flex-col gap-5 w-full md:w-1/2">
<div class="max-w-3xl flex flex-col gap-6 mx-auto rounded-md">
<h2 class="text-xl font-semibold md:text-3xl">Give us a minute and read this page until the end.</h2>
<p>Everything will be clear after that </p>
<p>The Sun and the Moon were at a certain position when you were born.</p>
<p>Every year, Sun and Moon come back to the same position, just like on the tithi you were born.
And that tithi is your True birthday. This is also called Tithi Pravesh, or Vedic birthday. 
</p>
<p>This is the same reason, days like Ram Navami, Janmashtami, Diwali and other auspicious days occur on different days each year. </p>

</div>
</div>
<div class="md:w-1/2 flex justify-center items-center">
<img src="/kundli/tithi.png" class="w-full md:w-11/12" loading="lazy" alt="nakshatra"/>
</div>
</div>
</div>


<div className=" bg-gradient-to-t from-fuchsia-100 via-violet-50 to-slate-50 overflow-x-hidden  min-h-screen 2xl:min-h-max "> 
    
<div class="px-5 max-w-4xl mx-auto flex items-center flex-col gap-10 md:py-20 py-10 rounded-[30px]">
<h4 class=" text-3xl max-w-3xl sm:text-4xl font-semibold md:text-4xl">{data.section2.title}</h4>
<div className="text-start space-y-3 max-w-2xl">
{data.section2.desc.map((item, i) => (
                <p key={i} className="">
              {item}
                </p>
              ))}
</div>
<a href="#kundliform" class="my-5 text-center cursor-pointer duration-100 ease-in hover:bg-[#9575DE] bg-[#9575DE] text-white mx-auto max-w-max font-cera_bold rounded py-3 px-10">Know Your True Birthday Now</a>
</div>
    
    </div>


    <div className=" overflow-x-hidden  min-h-screen 2xl:min-h-max "> 
    
<div class="px-5 max-w-4xl mx-auto flex items-center flex-col gap-10 md:py-20 py-10 rounded-[30px]">
<h4 style={{lineHeight:1.2}} class=" text-3xl max-w-3xl text-center sm:text-4xl font-semibold md:text-4xl">{data.section3.title}</h4>
<div className="text-start space-y-3 max-w-2xl">
{data.section3.desc.map((item, i) => (
                <p key={i} className="  text-start  ">
              {item}
                </p>
              ))}
</div>
<a href="#kundliform" class="my-5 text-center cursor-pointer duration-100 ease-in hover:bg-[#9575DE] bg-[#9575DE] text-white mx-auto max-w-max font-cera_bold rounded py-3 px-10">Know Your True Birthday Now</a>
</div>
    
    </div>
    <div className="bg-gradient-to-t from-fuchsia-100 via-violet-50 to-slate-50 overflow-x-hidden  min-h-screen 2xl:min-h-max "> 
    
    <div class="px-5 max-w-4xl mx-auto flex items-center flex-col gap-10 md:py-20 py-10 rounded-[30px]">
    <h4 class=" text-3xl max-w-3xl text-center sm:text-4xl font-semibold md:text-4xl">{data.section4.title}</h4>
    <div className="text-center space-y-3 max-w-2xl">
    {data.section4.desc.map((item, i) => (
                    <p key={i} className="text-center">
                  {item}
                    </p>
                  ))}
    </div>
    <h2 class=" text-2xl max-w-3xl text-center text-gray-800  font-semibold ">{data.section5.title}</h2>

    <div className='bg-purple-300 md:p-8 py-6 md:px-10 px-2 items-center  rounded-xl'>
        <h4 class=" text-2xl max-w-3xl p-3 text-slate-700 text-center   ">{data.section5.subtitle}</h4>

    <div className="text-center space-y-4 max-w-3xl">
    {data.section5.desc.map((item, i) => (
                    <p key={i} className="text-center pt-2 ">
                  {item}
                    </p>
                    
                  ))}

    </div>
    <button className='md:mt-5  mt-5 ml-6 md:ml-56'>
<a href="" className=" text-center cursor-pointer  duration-100 ease-in hover:bg-[#9575DE] bg-[#9575DE] text-white mx-auto max-w-max font-cera_bold rounded py-3 px-4  md:px-10">Know Your True Birthday Now </a>

    </button>

    </div>

    </div>
        
        </div>

  

    </div>
  )
}

export default TithiPravesh