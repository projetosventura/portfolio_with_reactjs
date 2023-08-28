import React from 'react';
//icone
import { BsArrowUpRight } from 'react-icons/bs'
//movimentacao
import {motion} from 'framer-motion'
//variantes
import { fadeIn } from '../variants';

//servicos data

const services = [

  {
    name: 'UI/UX Design',
    description: 'Design de front-end de sites e aplicaçoes utilizando o figma de forma mais profissional possivel',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: 'Desenvolvendo aplicaçoes de forma Full Stack tanto back-end quanto front-end em diversas tecnologias',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description: 'Trafego pago, venda de cursos e afiliados',
    link: 'Learn more',
  },
  {
    name: 'Produtor de Branding',
    description: 'Design de front-end de sites e aplicaçoes utilizando o figma de forma mais profissional possivel',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className="section" id="services">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          { /* TEXTOS E IMAGENS */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What i Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I'm FreeLance Developer with over 5 years of 
            experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          { /* SERVICOS */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
          { /* LISTA DE SERVICO */}
            <div>
              {services.map((service, index) => {
                const {name, description, link} = service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>
                      {name}
                      </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                      </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-sm'>
                      {link}
                      </a>
                  </div>
                </div>
                )
              })}
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;