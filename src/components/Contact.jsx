"use client";
import React from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const form = event.target;

    formData.append("access_key", "a40712a6-d583-429d-95dd-5978dd370f40");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      toast.success('Successfully toasted!')
form.reset();
        console.log(result);
    }
  }

  return (
    <div id='contact' className='mb-8 text-white'>
         <h1 className='text-center font-bold text-4xl mt-10 mb-10'>Contact me</h1>
         <div className="flex items-center justify-center p-6 md:p-0">
                <div className="flex w-full flex-col justify-center lg:w-[80%]">
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center space-y-2">

                       <input className="w-[80%] rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email"  required/>

                       <input className="w-[80%] rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Name" name="name" required/>


                       <textarea className="w-[80%] rounded-lg px-4 pt-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] text-black" placeholder="Message" name="message" required/>

                       <button className='border px-8 rounded-md py-1 mt-6' type="submit">Send</button>
                    </form>
                </div>
            </div>
     </div>
  );
};

export default Contact;
