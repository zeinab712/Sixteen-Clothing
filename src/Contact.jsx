import React from 'react'

const Contact = () => {
  return (
<div>
  <div className="m-20 mt-40 w-[80%] mx-auto">
    <div className="border-b border-gray-200 pb-4 mb-4 w-full">
      <h2 className="text-2xl sm:text-3xl">Send us a Message</h2>
    </div>
    <div className="flex flex-col lg:flex-row justify-between mt-20 gap-10">
      <form className="flex flex-col gap-4 w-full lg:w-[60%]">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-200 p-5 rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="E-Mail Address"
          className="border border-gray-200 p-5 rounded-lg outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-200 p-5 rounded-lg outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="h-[180px] border border-gray-200 p-5 rounded-lg outline-none"
        ></textarea>
        <input
          type="submit"
          className="p-3 w-40 rounded-lg bg-orange-600 hover:bg-neutral-800 transition duration-300 cursor-pointer text-white"
        />
      </form>

      <div className="border-t border-gray-200 pb-4 w-full lg:w-[30%] flex flex-col gap-4">
        <h2 className="text-orange-600 text-lg pt-5">Contact Information</h2>
        <p className="text-gray-500 text-sm">
          Have a question or need help? Our team is always here to assist you.
          Reach out to us anytime and we’ll get back to you as soon as possible.
        </p>
        <p className="text-gray-500 text-sm">
          You can contact us via email, phone, or through our social media
          channels. We value your feedback and look forward to hearing from you!
        </p>
        <div>
          <h3 className="text-xl text-cyan-700 border-y border-gray-200 py-5">
            Our Address
          </h3>
          <h3 className="text-xl text-cyan-700 border-b border-gray-200 py-5">
            Email & Phone
          </h3>
          <h3 className="text-xl text-cyan-700 border-b border-gray-200 py-5">
            Follow Us on Social Media
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact