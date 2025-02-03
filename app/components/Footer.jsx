import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'
import QR from '../../public/images/QR.png'
import './style/style.css'
import logo from '../../public/images/Logo2.png'
import tool1 from '../../public/images/tool1.JPG'
import tool2 from '../../public/images/tool2.JPG'
import tool3 from '../../public/images/tool3.JPG'
import tool4 from '../../public/images/tool4.JPG'



export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      `}</style>
    <footer className='bg-[#248ccb]'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <div className='grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4'>
          <div>
            <Image
              // className=''
              style={{ width: '180px', marginTop: '-13px' }}
              src={logo}
              alt='logo'
              id='logo'
            />
            <p className='text-sm text-white text-justify mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem minima eum vel molestiae recusandae modi exercitationem dolore, sapiente praesentium voluptas itaque mollitia totam cupiditate! Ullam quam officia accusamus minus!
            </p>
            <div
              id='sociall'
              className='flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse'
            >
              <a
                className='text-white hover:text-blue-800 dark:hover:text-white bg-[#dab66a] p-3 rounded-circle'
                href='https://www.facebook.com/cappello.pk'
                target='_blank'
              >
                <FaFacebookF size={17} />
              </a>

              <a
                className='text-white hover:text-pink-800 dark:hover:text-white bg-[#dab66a] p-3 rounded-circle'
                href='https://www.instagram.com/cappello.pk/'
                target='_blank'
              >
                <FaInstagram size={17} />
              </a>
              <a
                className='text-white hover:text-pink-600 dark:hover:text-white bg-[#dab66a] p-3 rounded-circle'
                href='https://www.tiktok.com/@cappello.pk'
                target='_blank'
              >
                <FaTiktok size={17} />
              </a>
              <a
                className='text-white hover:text-[#dab66a] dark:hover:text-white bg-[#dab66a] p-3 rounded-circle'
                href='https://www.youtube.com/@cappello-pk'
                target='_blank'
              >
                <FaYoutube size={17} />
              </a>
            </div>
          </div>
          <center>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-white font-text'>
                Company
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <Link href={'/'}>
                  <li className='mb-4'>
                    <p
                   
                      className=' hover:underline no-underline text-white'
                    >
                      Home
                    </p>
                  </li>
                </Link>
                <Link href={'/about'}>
                  <li className='mb-4'>
                    <p
                
                      className='hover:underline no-underline text-white'
                    >
                      About
                    </p>
                  </li>
                </Link>
                <Link href={'/#Products'}>
                  <li className='mb-4'>
                    <p
                    
                      className='hover:underline no-underline text-white'
                    >
                      Product
                    </p>
                  </li>
                </Link>
                <Link href={'/contact'}>
                  <li className='mb-4'>
                    <p
                      
                      className='hover:underline no-underline text-white'
                    >
                      Contact
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </center>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-white uppercase dark:text-white font-text'>
              Instagram
            </h2>
            <div className='grid grid-cols-2 gap-1'>
              <a href='https://www.instagram.com/cappello.pk/' target='_blank'>
                <Image
                  src={tool1}
                  alt='Instagram Post 1'
                  style={{ width: '100%', height: '80px' }}
                  className='rounded-lg object-cover'
                />
              </a>
              <a href='https://www.instagram.com/cappello.pk/' target='_blank'>
                <Image
                  src={tool2}
                  alt='Instagram Post 2'
                  style={{ width: '100%', height: '80px' }}
                  className='rounded-lg object-cover'
                />
              </a>
              <a href='https://www.instagram.com/cappello.pk/' target='_blank'>
                <Image
                  src={tool3}
                  alt='Instagram Post 3'
                  style={{ width: '100%', height: '80px' }}
                  className='rounded-lg object-cover'
                />
              </a>
              <a href='https://www.instagram.com/cappello.pk/' target='_blank'>
                <Image
                  src={tool4}
                  alt='Instagram Post 4'
                  style={{ width: '100%', height: '80px' }}
                  className='rounded-lg object-cover'
                />
              </a>
            </div>
          </div>
          <center>
            <div>
              <div className='w-100 p-2 mt-4'>
                <Image
                  src={QR}
                  alt=''
                  style={{ height: '170px', width: '170px' }}
                />
              </div>
            </div>
          </center>
        </div>
        <center>
          <div className='px-4 py-6 bg-[#248ccb] md:flex md:items-center md:justify-center border-t'>
            <span className='text-sm text-center text-white dark:text-white sm:text-center'>
              © 2025{' '}
              <a
                style={{ textDecoration: 'none' }}
                href='https://www.instagram.com/cappello.pk/'
              >
                Yulu Supply Chain
              </a>
              . All Rights Reserved Web Design & Developed by{' '}
              <a
                style={{ textDecoration: 'none' }}
                href='https://www.aeonsoft.com.pk/'
              >
                <span className='text-white' style={{ fontWeight: 'bold' }}>
                  Aeonsoft & Marketing.
                </span>
              </a>
            </span>
          </div>
        </center>
      </div>
    </footer>
    </>
  )
}
