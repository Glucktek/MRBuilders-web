import React, { useState } from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-24 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Get in Touch
            </h2>
            <p className="mb-6 text-center lg:text-left">
              Have questions about your next project? Need a quote? Fill out the
              form, and we'll get back to you soon.
            </p>
            <ul className="space-y-4 text-center lg:text-left">
              <li className="flex items-center justify-center lg:justify-start">
                <i class="fa-solid fa-envelope mr-2"></i>
                <span>info@mr-builders.com</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>(502) 445-6451</span>
              </li>
            </ul>
          </div>
          {/* Right Section */}
          <div className="p-8 sm:p-12">
            <form name="contact" netlify>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
