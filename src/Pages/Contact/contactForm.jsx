import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';
import emailjs from 'emailjs-com';
import WhiteLogoIcon from '../../assets/logoIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Required';
    if (!formData.subject.trim()) newErrors.subject = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Prepare data for your email template
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        })
      };
      
      await emailjs.send('service_7u5v6yc', 'template_fpz0n3g', templateParams, 'WF_NPWTsEY5mvzadB');
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phoneNumber: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
       <div className="fixed top-0 left-0 right-0 z-50">
        {/* Mobile Header - Logo centered */}
       

        {/* Desktop Header - Logo positioned top-right */}
        <div className="hidden md:block absolute top-6 right-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-50">
         <div className="md:hidden flex justify-center pt-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-white mb-2">Get in Touch</h1>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">Message sent successfully!</span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm">Failed to send. Please try again.</span>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name & Email Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.fullName ? 'border-red-500/50' : 'border-white/10'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300`}
              />
              {errors.fullName && <span className="text-red-400 text-xs mt-1 block">{errors.fullName}</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.email ? 'border-red-500/50' : 'border-white/10'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300`}
              />
              {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email}</span>}
            </div>
          </div>

          {/* Phone & Subject Row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone"
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.phoneNumber ? 'border-red-500/50' : 'border-white/10'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300`}
              />
              {errors.phoneNumber && <span className="text-red-400 text-xs mt-1 block">{errors.phoneNumber}</span>}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.subject ? 'border-red-500/50' : 'border-white/10'
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300`}
              />
              {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject}</span>}
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
              rows="4"
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.message ? 'border-red-500/50' : 'border-white/10'
              } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300 resize-none`}
            />
            {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;