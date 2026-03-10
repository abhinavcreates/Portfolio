import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    
    emailjs
      .sendForm(
        'service_4c89los',    // <--- Service ID 
        'template_dwi5zhr',   // <---  Template ID 
        form.current,
        {
          publicKey: 'p5CKHlA5N7oZTCEO8', // <---  Public Key 
        }
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset(); // Form clear 
          setTimeout(() => setStatus(null), 5000); // dissappear msg after 5 sec
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  return (
    <section className="py-20 px-4 text-white relative z-10 pb-40" id="contact">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
        Get In Touch
      </h2>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-md shadow-2xl relative"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 ml-1">Your Name</label>
              <input 
                type="text" 
                name="user_name" 
                required
                placeholder="Abhinav Singh" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 ml-1">Your Email</label>
              <input 
                type="email" 
                name="user_email" 
                required
                placeholder="Hello@gmail.com" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
          </div>
          
          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Your Message</label>
            <textarea 
              name="message" 
              rows="4" 
              required
              placeholder="Hey, I have a project for you..." 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-blue-500 transition-colors"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <motion.button 
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              status === 'success' 
                ? 'bg-green-600 text-white' 
                : status === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
            }`}
          >
            {status === 'sending' ? (
              "Sending..."
            ) : status === 'success' ? (
              <>Message Sent! <FaCheckCircle /></>
            ) : status === 'error' ? (
              <>Failed. Try Again <FaExclamationCircle /></>
            ) : (
              <>Send Message <FaPaperPlane /></>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;