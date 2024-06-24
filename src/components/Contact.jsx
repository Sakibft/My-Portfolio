import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='mb-8'>
         
         <h1 className='text-center font-bold text-4xl mt-10 mb-10'>Contact me</h1>
         <div className="flex items-center justify-center   p-6 md:p-0">
                {/* input side  */}
                <div className="flex w-full flex-col justify-center  lg:w-[80%]">
                  
                    <form className="flex  w-full flex-col items-center justify-center space-y-2">
                      
                       
                       <input className="w-[80%] rounded-lg  px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Name" name="email"/>
                   
                        <input className="w-[80%] rounded-lg  px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email"/>
                    
                        <textarea className="w-[80%] rounded-lg   px-4 pt-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Message" name="email"/>
                    

                        
                    </form>
                    <div className='flex justify-center items-center'>

                         <button className='border px-8 rounded-md py-1 '>Send</button>
                   
                    </div>
                </div>
            </div>
        
     </div>
  );
};

export default Contact;