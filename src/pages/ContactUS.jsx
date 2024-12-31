import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS parameters
    const serviceId = 'service_2v93lhc';
    const templateId = 'template_qmyu07b';
    const publicKey = 'xyN26aeOUPYEV-Apz';

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 font-proxima">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700 mb-10">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Guided by the principles of service and dedication, we’re here to assist you with all your steel needs.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 ">
          {[
            {
              icon: <Phone className="h-8 w-8 text-blue-600" />,
              // title: "Call Us",
              content: "+91-7880105811",
              subContent: "Mon-Sat 9:30 AM - 7:00 PM",
              subIcon: <Clock className="h-4 w-4 mr-2 text-blue-800" />,
            },
            {
              icon: <Mail className="h-8 w-8 text-blue-600" />,
              // title: "Email Us",
              content: "mehta_steels@rediffmail.com",
            },
            {
              icon: <MapPin className="h-8 w-8 text-blue-600" />,
              content: "137-Light Industrial Area Bhilai, Chhattisgarh Pin:490026, INDIA",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 "
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-xl">{item.content}</p>
                  {item.subContent && (
                    <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                      {item.subIcon}
                      <span>{item.subContent}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-5xl text-blue-700 font-bold mb-8 text-center">Have Some Questions?</h2>

          {submitted && (
            <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-green-800">
                Thank you for reaching out! Our team will respond to your inquiry within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "John Doe", required: true },
                { label: "Email *", name: "email", type: "email", placeholder: "john@company.com", required: true },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { label: "Company Name", name: "company", type: "text", placeholder: "Your Company Ltd." },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-lg font-medium text-gray-700">{field.label}</label>
                  <input
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Message *</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                placeholder="How can we help you?"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center h-[35px] w-[70px] border border-transparent shadow-sm text-lg rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

