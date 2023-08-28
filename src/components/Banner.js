import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGihub, FaYoutube, FaDribbble } from 'react-icons/fa';
// type animations
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { FadeIn } from '../variants';

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        {/* text */}
        <div>
          <h1>
            TOMMY <span>TRAN</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">I am a</span>
            <TypeAnimation
              sequence={['Developer', 2000, 'Designer', 2000, 'Youtuber', 2000]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p>Landing page para treinamento de React JS e TailwindCSS executando boas praticas
          </p>
          <div>
            <button className='btn btn-lg'>Contact me</button>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
