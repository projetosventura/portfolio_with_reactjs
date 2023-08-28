import React from 'react';

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className="section" id="work">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            { /*TEXT */ }
            <div className='flex'>
              <h2 className='h2 leading-tight text-accent'>My Latest <br/>
              Work
              </h2>
              <p className='max-w-sm mb-16'>
                paragrafo para preenchimento de espaços no site para nao deixar
                nada vago e fique bonito, rsrsrsr
              </p>
              <button className='btn btn-sm'>View all Projects</button>
            </div>
            { /*imagem */ }
            <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
            { /*overlay */ }
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              
              </div>
              { /*imagem */ }
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              { /*pretitulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spam className='text-gradient'>UI/UX Design</spam>
                </div>
              { /*titulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>
                  </div>
          </div>
          <div className='flex-1'>
          { /*imagem */ }
          <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
            { /*overlay */ }
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              
              </div>
              { /*imagem */ }
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              { /*pretitulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spam className='text-gradient'>UI/UX Design</spam>
                </div>
              { /*titulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>
                  </div>
                  { /*imagem */ }
          <div className='group relative overflow-hidden border-2
            border-white/50 rounded-x1'>
            { /*overlay */ }
              <div className='group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300'>
              
              </div>
              { /*imagem */ }
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              { /*pretitulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-24 transition-all duration-500 z-50'>
                <spam className='text-gradient'>UI/UX Design</spam>
                </div>
              { /*titulo */ }
              <div className='absolute -bottom-full left-0
              group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Project Title</span>
              </div>
                  </div>
                  
          </div>
        </div>
        
        
         </div>
    </section>
  );
};

export default Work;
