import React from "react";
import bg from "./bg2.jpg";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div className='hero2'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Contact Us</h1>
      </div>
      <div className="page">
        <div className="background-wrapper">
          <div className="background-image"></div>
        </div>
      <div className="box h-min w-[80%]">
        <div className="container border border-gray-200 rounded-xl overflow-hidden">
          <div
          >
            <div className="flex justify-between">
              <div className="w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.698868352063!2d77.0342411732628!3d28.45949682438397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e99c8b4e59d%3A0x7a64779c31d49e0a!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1687451404232!5m2!1sen!2sin"
                  width="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full"
                ></iframe>
              </div>

              <div className="w-1/2 bg-white p-6">
                <h1 className="text-3xl font-bold mt-4 mb-2 text-center">
                  Get in
                  <span className="text-primary"> Touch</span>
                </h1>
                <p className="text-lg font-normal mb-4">
                  Whether you're a current student with questions, a prospective
                  student seeking information, a parent looking for guidance, or
                  simply curious about our institution, we are here to help.
                </p>

                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input bg-white input-bordered w-full"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input bg-white input-bordered w-full"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="input bg-white input-bordered w-full"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="textarea textarea-bordered form-textarea h-20 bg-white w-full"
                      placeholder="Leave a Message here"
                    ></textarea>
                  </div>

                  <div className='container text-center my-6'>
                        <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>Submit</div>
                    </div>
                </form>

                <div className="mt-3 flex justify-center items-center">
                  <div className="mr-8">
                  <i class="fa-solid fa-envelope mr-2"></i>
                    hea@gmail.com
                  </div>
                  <div className="mr-8">
                    <i class="fa-solid fa-phone mr-2"></i>
                    123432583
                  </div>
                  <div>
                    <i class="fa-solid fa-globe mr-2"></i>
                    www.hea.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default ContactUs;