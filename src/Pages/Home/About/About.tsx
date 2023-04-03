import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import GlobalSlider from '../../GlobalSlaider/GlobalSlider';


const About = () => {
  return (
    <div>
      <div className='m-[80px]'>
        <div className='my-20 pt-20'>
          <h1 className='text-center mt-20 pt-10 text-black text-bold font-extrabold lg:text-3xl'>Welcome To HeartWix-Net</h1>
          <p className='text-slate-400 text-start	pt-10 font-medium'>HeartWix-Net is not simply another link in the chain of voice and data supply in the Bangladesh. Our pioneering spirit is evidenced by the creation of a national, fully resilient, MPLS network and the continuous testing and adoption of emerging communications platforms. As a result, we have earned the reputation of a communications provider whose focus is on solidly addressing businesses' communications requirements.</p>
        </div>

        <div className="lg:flex">
          <div className="w-2/3 mx-5">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQO9dTKdn6VoyDapagzBmt2rzbVdC4DGKUtzb5ZxNQ5HSRTizH" alt="" />
          </div>
          <div className="">
            <p className='text-justify text-slate-400 font-semibold tracking-wider  '>We are dedicated to serving customers. We achieve this not only through our extensive portfolio of internet/data connectivity, IP telephony and related services but also by simplifying the process of ordering, provisioning and supporting them. Amber IT is a concern of Amber Group, a conglomerate comprising 20 companies across diverse industries.</p>
            <div className='grid lg:grid-cols-2 mt-10'>
              <div className=''>
                <div className='flex'>
                  <div className='mt-1 text-red-700'><AiFillCaretRight /></div>
                  <div><p className='text-black text-x'>Corporate Internet & Data Connectivity</p></div>
                </div>
                <br />
                <div className='flex'>
                  <div className='mt-1 text-red-700'><AiFillCaretRight /></div>
                  <div><p className='text-black text-x'>Safe & Smarter Home Internet</p></div>
                </div>

              </div>
              <div className=''>
                <div className='flex'>
                  <div className='mt-1 text-red-700'><AiFillCaretRight /></div>
                  <div><p className='text-black text-x'>High Quality & Reliable IPTSP Service</p></div>
                </div>

                <br />
                <div className='flex'>
                  <div className='mt-1 text-red-700'><AiFillCaretRight /></div>
                  <div><p className='text-black text-x'>Secured Hosting & Web Development</p></div>
                </div>

              </div>

            </div>
            <button className=' bg-red-700 mt-10 rounded-lg hover:bg-black'><p className='text-white p-3 font-semibold'>Contact Us</p></button>
          </div>
        </div>

        <h1 className='mt-20 pt-20 text-center text-4xl font-semibold'>Our Guiding Principles</h1>

        <div className="grid lg:grid-cols-3 gap-5">

          <div className="p-7 text-center bg-white rounded-lg">

            <h2 className="text-xl font-semibold my-6">1</h2>
            <hr />
            <h3 className='font-semibold py-3'>Professional Approach</h3>
            <p className="text-sm leading-6 text-slate-400 font-semibold ">
              Keep It Simple! There's no reason why individuals who wish to be involved in the Internet, need to have sophisticated technical knowledge and the ability to write and understand HTML protocol.
            </p>

          </div>
          <div className="p-7 text-center bg-white rounded-lg">

            <h2 className="text-xl font-semibold my-6">2</h2>
            <hr />
            <h3 className='font-semibold py-3'>Technology Review</h3>
            <p className="text-sm leading-6 text-slate-400 font-semibold ">
              Provide the best technology available! Those who know technology or need the most from it will be suitably impressed with our high-tech equipment. If it's current, we have it; if it's new, we'll be one of the first to get it!
            </p>

          </div>
          <div className="p-7 text-center bg-white rounded-lg">

            <h2 className="text-xl font-semibold my-6">3</h2>
            <hr />
            <h3 className='font-semibold py-3'>Affordable Services</h3>
            <p className="text-sm text-slate-400 leading-6 font-semibold ">
              Make it affordable! Amber IT programs are almost always one third to one half the cost of comparable services. This supports our mission of creating greater access to a greater number of people.
            </p>

          </div>

        </div>

        <div className='grid lg:grid-cols-2 mt-20'>
          <div className='lg:m-[50px]'>
            <h2 className='text-3xl font-semibold pb-5'>Mission & vission</h2>
            <p className='text-slate-400 font-medium'>Amberit is set out to do the things our customers want in an Internet service providing company. Which is to provide the most reliable service, coupled with the most sophisticated and modern equipment available.
              We envision a world with ease of access and with hassle free service. We are striving to be an exceptional citizen in the virtual frontier.</p>
          </div>
          <div className=''>
            <img className='min-w-full max-h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQJWQOXiXuayGgHetDwmB7zPeG388yHYP6otcqdW3JjlDmUrS" alt="" />
          </div>
        </div>
        <button className='mx-10 bg-red-700 mt-5 rounded-lg hover:bg-black'><p className='text-white p-3 font-semibold'>Contact Us</p></button>


      </div>
      <div>
        <GlobalSlider></GlobalSlider>
      </div>
    </div>
  );
};

export default About;