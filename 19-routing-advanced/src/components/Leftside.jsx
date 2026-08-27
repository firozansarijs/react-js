import React from 'react'

const Leftside = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl h-120  p-8">
    <h2 className="text-4xl font-bold underline">
        Get In Touch
    </h2>
    <h3 className='mt-10'>📍Address</h3>
  <a
  className="text-white! hover:text-blue-400! ml-2"
  href="https://search.brave.com/maps/search?q=mumbai+location&bbox=72.619%2C18.922%2C73.207%2C19.176"
  target="_blank"
  rel="noopener noreferrer"
   >
    Mumbai, India
   </a>
   <h3 className='mt-4'>📧 Email</h3>
   <a 
   className="text-white! hover:text-blue-400! ml-2"
   href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcSKjgLBNdXTXBrtpqsxmSBxBxJksTnbtqkhkqGLMKRVDxLjfWtfjXFcHHQCKzsbSQXSPKlbg"
   target="_blank"
   rel="noopener noreferrer"
   >papiv97630@dnsink.com
   </a>
   <h3 className='mt-4'>📞 Phone</h3>
   <a
  href="tel:+919876543210"
  className="text-white hover:text-blue-400 ml-2"
   >
  +91 98765 43210
   </a>
   <h3 className='mt-4'>📱 WhatsApp</h3>
  <a
     href="https://wa.me/919876543210"
     className="text-white hover:text-green-400 ml-2"
     target="_blank"
     rel="noopener noreferrer"
   >
   WhatsApp
   </a>
   <h3 className='mt-4'>📸 Instagram</h3>
   <a
  href="https://www.instagram.com/yourusername/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-pink-500 ml-2"
   >
  Instagram
   </a>
   </div>
  )
}

export default Leftside