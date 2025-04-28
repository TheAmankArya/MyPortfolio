
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, send data to backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-purple">Touch</span></h2>
          <div className="w-20 h-1 bg-orange mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to new opportunities and connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300">amankarya59@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-300">+91-6204560544</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-300">Jalandhar, Punjab</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/TheAmankArya" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple/20 transition-colors duration-300">
                  <Github size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/amank-arya/" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple/20 transition-colors duration-300">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="https://x.com/arya_amank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple/20 transition-colors duration-300">
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple/50"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
