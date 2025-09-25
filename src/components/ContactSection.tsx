import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DraggableIDCard from './DraggableIDCard';
import TypingAnimation from './TypingAnimation';

const skills = [
  { text: "3D Visualization", color: "from-[#9747FF] to-[#00A5CA]" },
  { text: "Interior Design", color: "from-[#00A5CA] to-[#B3F2FF]" },
  { text: "Architectural Design", color: "from-[#B3F2FF] to-[#9747FF]" },
  { text: "Graphic Design", color: "from-[#6362EE] to-[#0BA7D0]" },
  { text: "UI/UX Design", color: "from-[#AFECF9] to-[#0BA7D0]" },
];

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const socialLinks = [
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@artdyas' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/artdyas' },
    { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/@artdyas' },
    { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com/artdyas' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/artdyas' }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6283103604872";
    const whatsappMessage = `Halo Artdyas, saya *${name}*.%0A%0A*Subjek:* ${subject}%0A%0A*Pesan:*%0A${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative min-h-screen px-6 py-20 bg-[#070A13] flex items-center">
      {/* Background Orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.55) 0%, transparent 70%)', filter: 'blur(30px)', top: '10%', left: '10%' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(145, 94, 208, 0.3) 0%, transparent 70%)', filter: 'blur(30px)', top: '20%', right: '15%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.15, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text and Form */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Let's Collaborate
            </h2>
            <div className="text-3xl md:text-4xl font-bold mb-8 h-12 flex items-center">
              <span className="text-white mr-3">I'm ready for</span>
              <TypingAnimation texts={skills} />
            </div>
            <p className="text-white/80 text-lg mb-12">
              Ready to bring your imagine design to realized? Let's discuss your project and explore the possibilities together. Fill out the form below to get started.
            </p>

            {/* WhatsApp Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="absolute -top-2 left-4 px-1 bg-[#0d101a] text-sm text-[#00A5CA]">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00A5CA] focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="subject" className="absolute -top-2 left-4 px-1 bg-[#0d101a] text-sm text-[#00A5CA]">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Idea"
                    required
                    className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00A5CA] focus:ring-0 transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="message" className="absolute -top-2 left-4 px-1 bg-[#0d101a] text-sm text-[#00A5CA]">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full bg-transparent border-2 border-gray-700 rounded-xl px-4 py-3 text-white focus:border-[#00A5CA] focus:ring-0 transition-colors duration-300 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9747FF] to-[#00A5CA] text-white px-12 py-4 rounded-2xl font-bold text-xl hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(151, 71, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: ID Card */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <DraggableIDCard />
          </motion.div>
        </div>

        {/* Social Media Icons and Footer */}
        <div className="text-center mt-20">
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.button
                key={social.name}
                className="w-14 h-14 rounded-xl bg-white/10 p-0.5 hover:scale-110 transition-all duration-300 group"
                onClick={() => handleSocialClick(social.url)}
                whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 10px 25px rgba(151, 71, 255, 0.2)" }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="w-full h-full bg-[#070A13] rounded-lg flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                  <span className="text-xl text-white/50 group-hover:text-white transition-all duration-300">
                    {social.icon}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            className="text-[#119BD0] text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            created by Artdyas © 2024
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
