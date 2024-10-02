import React from 'react';
import Image from "next/image";
import image from "../../../public/PROFILE.jpg"

function About() {
  return (
    <>

    <div className='border-BLUE-400 border-4 absolute flex'>
    <div className='w-70 h-50 p-10'>
    <h1 className='text-3xl font-bold m-10'>WELCOME</h1>
      <h2 className='text-8xl font-bold m-10'>UI/UX DEVELOPER</h2>
      <h3 className='text-3xl font-bold m-10'>"FAIZA ABDUL QADIR"</h3>
    <p className='text-2xl m-5'>"Hi, I'm FAIZA, a curious and creative UI/UX enthusiast with a passion for crafting intuitive and visually stunning digital experiences. As I venture into web development, I'm excited to merge my design skills with coding expertise to build user-centered and responsive interfaces. With a solid foundation in design principles, human-computer interaction, I'm now expanding my skills in HTML, CSS, JavaScript, and front-end frameworks like React and Next.js. I'm eager to learn, grow, and collaborate on projects that combine design thinking with technical expertise to deliver exceptional user experiences."
    </p></div>
 
    <div className=' w-30 h-200 justify-end items-center top-10 
     '>
    <Image src={'/PROFILE.jpg'} 
    width={2500}
    height={1000}
    alt="picture"   
    />

    </div>
    </div>
    
    </>
  )
}

export default About