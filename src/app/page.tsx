import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si';
import { RiShareBoxLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import Image from 'next/image';
import rekodev from '../../public/rekodev.png';
import web1 from '../../public/projects/champselect.png';
import web2 from '../../public/projects/antiaging.png';
import web3 from '../../public/projects/final-task.png';
import web4 from '../../public/projects/react-team-task.png';
import web5 from '../../public/projects/spacex-rockets.png';
import web6 from '../../public/projects/portfolio.png';
import nodejsLogo from '../../public/stack/nodejs-logo.png';
import htmlLogo from '../../public/stack/HTML-logo.png';
import cssLogo from '../../public/stack/CSS-logo.png';
import javaScriptLogo from '../../public/stack/javascript-logo.png';
import reactLogo from '../../public/stack/react-logo.png';
import nextjsLogo from '../../public/stack/nextjs.svg';
import expressjsLogo from '../../public/stack/expressjs-logo.png';
import mongoDBLogo from '../../public/stack/mongodb-logo.png';
import tailwindLogo from '../../public/stack/Tailwind-logo.png';
import gitLogo from '../../public/stack/git-logo.png';
import styledComponentsLogo from '../../public/stack/styled-components-logo.png';
import typeScriptLogo from '../../public/stack/Typescript-logo.png';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className='bg-transparent max-w-7xl mx-auto px-10 md:px-20 lg:px-40 '>
        <section className='min-h-screen'>
          <nav className='py-8 flex justify-between items-center'>
            <h1 className='text-lg font-sharpGrotesk dark:text-white'>
              rekodev
            </h1>
            <ul className='flex items-center'>
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <a
                  className='flex items-center gap-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-md ml-6'
                  href='/arturas-tyskevicius.pdf'
                  download='arturas-tyskevicius.pdf'
                >
                  <FiDownload className='text-lg' />
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-8'>
            <h2 className='text-4xl md:text-5xl py-2 text-red-500 font-medium'>
              Artūras Tyškevičius
            </h2>
            <h3 className='text-2xl py-2 dark:text-white'>
              Front-end Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-xs m-auto dark:text-gray-200'>
              Turning lines of code into solutions. Join the journey, let&apos;s
              build your vision together!
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 lg:py-3'>
            <a href='https://linkedin.com/in/arturas-tyskevicius'>
              <AiFillLinkedin className='dark:text-white' />
            </a>
            <a href='https://github.com/rekodev'>
              <AiFillGithub className='dark:text-white' />
            </a>
          </div>
          <div className='relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full w-full h-80 mt-20 mx-auto overflow-hidden max-w-xs'>
            <Image
              src={rekodev}
              alt={'rekodev'}
              placeholder='blur'
              blurDataURL={`${rekodev}`}
              fill
              className=' object-cover'
            />
          </div>
        </section>

        <section className='xl:flex xl:gap-12 lg:mt-8'>
          <div className='xl:w-1/2'>
            <h3 className='text-3xl py-1 mt-10 dark:text-white'>About Me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I started my journey in programming in 2022, diving into a 9-month{' '}
              <span className='text-red-500'>CodeAcademy</span> bootcamp focused
              on frontend web development. It taught me not just the{' '}
              <span className='text-red-500'>code</span>, but how to tackle
              complex tasks effectively.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since then, I&apos;ve had the chance to work on a real-world
              project, developing a{' '}
              <span className='text-red-500'>full-stack</span> website for a{' '}
              <span className='text-red-500'>client</span>. This practical
              experience reaffirmed my passion for programming and
              problem-solving. I&apos;m in this field for the long run, always
              ready to learn something new and take on the next challenge.
            </p>
          </div>

          <div>
            <h3 className='text-3xl py-1 mt-10 dark:text-white'>Skills</h3>
            <div className='mt-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 grid grid-cols-2 gap-8 margin-auto shadow-lg rounded-lg p-8 items-center sm:grid-cols-3 lg:grid-cols-4'>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={htmlLogo} alt={'HTML'} height={40} />
                <h6 className='text-white text-sm'>HTML</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={cssLogo} alt={'CSS'} height={40} />
                <h6 className='text-white text-sm'>CSS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={javaScriptLogo} alt={'JavaScript'} height={40} />
                <h6 className='text-white text-sm'>JAVASCRIPT</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={typeScriptLogo} alt={'TypeScript'} height={40} />
                <h6 className='text-white text-sm'>TYPESCRIPT</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={nodejsLogo} alt={'Node.js'} height={40} />
                <h6 className='text-white text-sm'>NODE.JS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={expressjsLogo} alt={'Express.js'} height={40} />
                <h6 className='text-white text-sm'>EXPRESS.JS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={mongoDBLogo} alt={'MongoDB'} height={40} />
                <h6 className='text-white text-sm'>MONGODB</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={reactLogo} alt={'React'} height={40} />
                <h6 className='text-white text-sm'>REACT</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={nextjsLogo} alt={'Next.js'} height={40} />
                <h6 className='text-white text-sm'>NEXT.JS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image
                  src={styledComponentsLogo}
                  alt={'Styled Components'}
                  height={40}
                />
                <h6 className='text-white text-sm'>STYLED COMPONENTS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={tailwindLogo} alt={'Tailwind CSS'} height={40} />
                <h6 className='text-white text-sm'>TAILWIND CSS</h6>
              </div>
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                <Image src={gitLogo} alt={'Git'} height={40} />
                <h6 className='text-white text-sm'>GIT</h6>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a frontend developer,
              I&apos;ve been creating personal and hobby projects, as well as
              building a real project for a{' '}
              <span className='text-red-500'>business</span>. You can examine
              some of my work below.
            </p>
          </div>

          <div className='grid gap-10 py-10 grid-cols-1  lg:grid-cols-2'>
            <div className='flex flex-col justify-between shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web1} alt={''} className='object-cover' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>
                    ChampSelect
                  </h4>
                  <SiHtml5 className='text-orange-600 text-lg' />
                  <SiCss3 className='text-blue-400 text-lg' />
                  <SiJavascript className='text-yellow-300 bg-black text-lg' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  An application that was developed using the official Riot
                  Games API. It allows you to look up champions, filter through
                  them and get basic information about the specific
                  champion&apos;s lore and abilities.
                </p>
                <div className='flex'>
                  <a
                    href='https://rekodev.github.io/ChampSelect'
                    className='flex items-center gap-1 justify-start text-sm text-gray-800 border border-gray-800 border-solid py-1 px-2 rounded-md mr-2  dark:text-gray-200 dark:border-gray-200'
                  >
                    Live{' '}
                    <RiShareBoxLine className='text-lg dark:text-gray-200' />
                  </a>
                  <a
                    href='https://github.com/rekodev/ChampSelect'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className='shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web2} alt={''} className='object-cover' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>
                    Antiaging School
                  </h4>
                  <SiMongodb className='text-green-600 text-lg' />
                  <SiExpress className='dark:text-white text-lg' />
                  <SiReact className=' text-cyan-300 text-lg' />
                  <SiNodedotjs className='text-lg text-green-600' />
                  <BiLogoTypescript className='text-xl text-sky-600' />
                  <SiStyledcomponents className='text-2xl dark:text-white' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  A combination of a landing page and an e-commerce platform
                  that was built for a real business. It allows users to
                  purchase a course and access it under the same domain. Payment
                  handling is integrated with Montonio.
                </p>
                <div className='flex'>
                  <a
                    href='https://antiagingschool.lt'
                    className='flex items-center gap-1 justify-start text-sm text-gray-800 border border-gray-800 border-solid py-1 px-2 rounded-md mr-2  dark:text-gray-200 dark:border-gray-200'
                  >
                    Live{' '}
                    <RiShareBoxLine className='text-lg dark:text-gray-200' />
                  </a>
                  <a
                    href='https://github.com/rekodev/ChampSelect'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className='shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web3} alt={''} className='object-cover' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>
                    CA Final Project
                  </h4>
                  <SiMongodb className='text-green-600 text-lg' />
                  <SiExpress className='text-lg dark:text-white' />
                  <SiReact className='text-cyan-300 text-lg' />
                  <SiNodedotjs className='text-green-600 text-lg' />
                  <SiStyledcomponents className='text-2xl dark:text-white' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  An app that fetches data from the database and displays users.
                  It allows you to interact by adding new users, editing and
                  deleting existing ones. The app also includes pagination and a
                  search tool. Instructions on how to launch the application are
                  within the README.md file on GitHub.
                </p>
                <div className='flex'>
                  <a
                    href='https://github.com/rekodev/baigiamasis-darbas'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className='shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web4} alt={''} className='object-cover ' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>
                    CA4 Team Task
                  </h4>
                  <SiReact className='text-cyan-300 text-lg' />
                  <BiLogoTypescript className='text-xl text-sky-600' />
                  <SiStyledcomponents className='text-2xl dark:text-white' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  In collaboration with my team at CodeAcademy, we developed an
                  application that integrates a suite of tools including salary
                  and tax calculators, an individual activity tax calculator, a
                  VAT calculator, a currency converter, and a
                  &apos;sum-to-words&apos; display feature.
                </p>
                <div className='flex'>
                  <a
                    href='https://64a7f2d505790660ccadee35--verdant-alfajores-f4c0cf.netlify.app/'
                    className='flex items-center gap-1 justify-start text-sm text-gray-800 border border-gray-800 border-solid py-1 px-2 rounded-md mr-2  dark:text-gray-200 dark:border-gray-200'
                  >
                    Live{' '}
                    <RiShareBoxLine className='text-lg dark:text-gray-200' />
                  </a>
                  <a
                    href='https://github.com/rekodev/react-team-task'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className='shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web5} alt={''} className='object-cover' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>
                    SpaceX Rockets
                  </h4>
                  <SiReact className='text-cyan-300 text-lg' />
                  <BiLogoTypescript className='text-xl text-sky-600' />
                  <SiStyledcomponents className='text-2xl dark:text-white' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  A simple tool that retrieves and displays SpaceX rocket data
                  via their official API. The application features a search
                  function to find rockets based on specific attributes, and a
                  separate filter option to sort the results alphabetically and
                  numerically.
                </p>
                <div className='flex'>
                  <a
                    href='https://zippy-begonia-3c7ed9.netlify.app/'
                    className='flex items-center gap-1 justify-start text-sm text-gray-800 border border-gray-800 border-solid py-1 px-2 rounded-md mr-2  dark:text-gray-200 dark:border-gray-200'
                  >
                    Live{' '}
                    <RiShareBoxLine className='text-lg dark:text-gray-200' />
                  </a>
                  <a
                    href='https://github.com/rekodev/spacex_rockets'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className='shadow-lg rounded-lg overflow-hidden  dark:shadow-gray-800'>
              <Image src={web6} alt={''} className='object-cover' />
              <div className='flex flex-col h-full  p-4 bg-white dark:bg-gray-800 dark:text-white'>
                <div className='flex items-center gap-1'>
                  <h4 className='font-medium inline mr-1 text-lg'>Portfolio</h4>
                  <SiReact className='text-cyan-300 text-lg' />
                  <TbBrandNextjs className=' text-xl dark:text-white' />
                  <SiTailwindcss className='text-l text-cyan-500' />
                </div>
                <p className='leading-6 text-sm dark:text-gray-200 text-gray-800 mt-3 mb-4'>
                  My portfolio website was built using Next.js and Tailwind CSS.
                  In case you missed it, you&apos;re able to switch between
                  light and dark modes, by clicking on the sun/moon icon within
                  the nav bar. All of the code is available on GitHub.
                </p>
                <div className='flex'>
                  <a
                    href='https://rekodev.github.io/ChampSelect'
                    className='flex items-center gap-1 justify-start text-sm text-gray-800 border border-gray-800 border-solid py-1 px-2 rounded-md mr-2  dark:text-gray-200 dark:border-gray-200'
                  >
                    Live{' '}
                    <RiShareBoxLine className='text-lg dark:text-gray-200' />
                  </a>
                  <a
                    href='https://github.com/rekodev/ChampSelect'
                    className='py-1 px-2 rounded-md text-sm text-white border border-solid border-transparent bg-gray-800 dark:text-gray-800 dark:bg-white'
                  >
                    <AiFillGithub className='inline text-lg mb-1 mr-1' />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='p-8 flex items-center justify-center dark:text-white'>
        rekodev &copy; {currentYear}
      </footer>
    </>
  );
}
