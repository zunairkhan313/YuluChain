'use client'

import React, { useRef } from 'react'
import '../Components/hr.css'
import { FaFacebook, FaPhoneAlt, FaTiktok } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { useState } from 'react'
import { IoLogoWechat } from "react-icons/io5";
import Swal from 'sweetalert2'

export default function ContactUs () {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const form = useRef()

  async function handleSubmit (e) {
    e.preventDefault()
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: 'f5d5e31d-c6de-47c9-8c0b-4c8904d2d57e',
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      })
    })
    const result = await response.json()
    if (result.success) {
      Swal.fire({
        title: 'Send Message Successfully!',
        text: 'Your action was successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      if (form.current) {
        form.current.reset()
      }
    }
  }
  return (
    <>
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>

      <div className='bg-white'>
        <div className='bg-white mt-5 container p-3'>
          <div className=' flex'>
            <div className='text-5xl font-extrabold tracking-wider bgVideoText '>
              <h1 className='heading text-black font-bold'>Contact Us</h1>
            </div>
          </div>
          <div className='hr-contact'></div>
          <form ref={form} onSubmit={handleSubmit}>
            <div className='container my-5'>
              <div className='row'>
                <div className='col-md-8 p-5 shadow-2xl'>
                  <h1
                    style={{ color: '#ff3333' }}
                    className='text-2xl font-bold ml-[-5px]'
                  >
                    We Are Here to Assist You!
                  </h1>
                  <div className='row'>
                    <div className='col-md-6 p-2'>
                      <label>
                        <strong>Name:</strong>
                      </label>
                      <input
                        name='name'
                        className='form-control'
                        required
                        type='text'
                        placeholder='Name'
                      ></input>
                    </div>
                    <div className='col-md-6 p-2'>
                      <label>
                        <strong>Email:</strong>
                      </label>
                      <input
                        name='email'
                        className='form-control'
                        required
                        type='email'
                        placeholder='Email'
                      ></input>
                    </div>
                    <div className='col-md-6 p-2'>
                      <label>
                        <strong>Phone:</strong>
                      </label>
                      <input
                        name='phone'
                        className='form-control'
                        required
                        type='number'
                        placeholder='Phone Number'
                      ></input>
                    </div>
                    <div className='col-md-6 p-2'>
                      <label>
                        <strong>Subject:</strong>
                      </label>
                      <input
                        name='subject'
                        className='form-control'
                        required
                        type='text'
                        placeholder='Subject'
                      ></input>
                    </div>
                    <div className='col-md-12'>
                      <label>
                        <strong>Message:</strong>
                      </label>
                      <textarea
                        name='message'
                        className='form-control required'
                        rows='6'
                        required
                        placeholder='Your Message'
                      ></textarea>
                    </div>
                    <div className='p-2 flex items-center justify-center'>
                      <button
                        style={{ backgroundColor: '#ff3333' }}
                        type='submit'
                        className='w-full p-3 focus:outline-none rounded-[5px] text-white
                                        hover:bg-black text-center ease-linear duration-150'
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 p-5 shadow-2xl'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div>
                        <h2
                          style={{ color: '#ff3333' }}
                          className='text-2xl font-bold'
                        >
                          Our Address
                        </h2>
                        <hr />
                        <div className='p-2 mt-4'>
                          <h3>
                            <strong>Telephone:</strong>
                          </h3>
                          <p className='icon-hover mt-2 flex'>
                            <div className=' p-2 bg-[#ff3333] rounded-circle'>  

                            <FaPhoneAlt className=' text-white ' />
                            </div>
                            <a
                              href='tel:+923369533510'
                              className='hover:text-black text-black ml-2 mt-1'
                            >
                              +92 33 69533510
                            </a>
                          </p>
                          <p className='icon-hover mt-2 flex'>
                            <div className='p-2 bg-[#ff3333] rounded-circle'>

                            <IoLogoWechat
                            
                              className='text-white'
                              />
                              </div>
                            <a
                              href='tel:+8618553992709'
                              className='hover:text-black text-black ml-2 mt-1'
                            >
                            +86 185 5399 2709
                            </a>
                          </p>
                        </div>
                        <div className='p-2 mt-3'>
                          <h3>
                            <strong>Email Address:</strong>
                          </h3>
                          <p>Info@songchuantools.pk</p>
                          {/* <p>www.changlutools.com</p> */}
                        </div>
                      </div>
                      <h2
                        style={{ color: '#ff3333' }}
                        className='text-2xl font-bold mt-4'
                      >
                        Available On
                      </h2>
                      <hr />
                      <div className='flex mt-4'>
                        <a
                          href='https://www.facebook.com/songchuantools'
                          className='hover:text-blue-500'
                          onMouseEnter={() => setHoveredIcon('facebook')}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <FaFacebook
                            className={
                              hoveredIcon === 'facebook'
                                ? 'text-[#0866FF] mx-2'
                                : 'text-black mx-2'
                            }
                            size={24}
                          />
                        </a>
                        <a
                          href='https://www.tiktok.com/@songchuantools'
                          className='hover:text-blue-400'
                          onMouseEnter={() => setHoveredIcon('tiktok')}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <FaTiktok
                            className={
                              hoveredIcon === 'tiktok'
                                ? 'text-[#E62A5D] mx-2'
                                : 'text-black mx-2'
                            }
                            size={24}
                          />
                        </a>
                        <a
                          href='https://www.instagram.com/songchuantools/'
                          className='hover:text-pink-500'
                          onMouseEnter={() => setHoveredIcon('instagram')}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <FaInstagram
                            className={
                              hoveredIcon === 'instagram'
                                ? 'text-[#B606E7] mx-2'
                                : 'text-black mx-2'
                            }
                            size={24}
                          />
                        </a>
                        <a
                          href='https://www.linkedin.com/company/102889347/admin/dashboard/'
                          className='hover:text-blue-700'
                          onMouseEnter={() => setHoveredIcon('linkedin')}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <FaLinkedin
                            className={
                              hoveredIcon === 'linkedin'
                                ? 'text-[#0A66C2] mx-2'
                                : 'text-black mx-2'
                            }
                            size={24}
                          />
                        </a>
                        <a
                          href='https://www.youtube.com/channel/UC8CzedJLiiWPN10OfZ3eQ3g'
                          className='hover:text-blue-700'
                          onMouseEnter={() => setHoveredIcon('youtube')}
                          onMouseLeave={() => setHoveredIcon(null)}
                        >
                          <FaYoutube
                            className={
                              hoveredIcon === 'youtube'
                                ? 'text-[#FF0000] mx-2'
                                : 'text-black mx-2'
                            }
                            size={24}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
