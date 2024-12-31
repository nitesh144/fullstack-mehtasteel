import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Users,
  Globe,
  Clock,
  Building2,
  Award,
  LineChart,
  Shield,
  Heart,
  Zap,
  Target,
} from 'lucide-react';
import sir from '../assets/sir.jpg';
import WhoWeAreSection from '../component/Who';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "We uphold honesty, practice transparency, and show respect in all our dealings, understanding that our actions should align with truth, integrity, and the greater good." },
    { icon: Heart, title: "Understanding", description: "We listen to our customers' needs with empathy and respect, recognizing that each interaction is an opportunity to serve with compassion and uphold our duty to the greater good." },
    { icon: Award, title: "Excellence", description: "We strive to deliver the highest standards of quality, service, and efficiency with dedication and excellence, recognizing that true success lies in performing our duties with integrity." },
    // { icon: Users, title: "Unity", description: "Drawing inspiration from the Bhagavad Gita, we foster teamwork and build lasting relationships by embracing unity, mutual respect, and collaboration, recognizing that collective strength and harmony lead to greater success and fulfillment." },
    { icon: Target, title: "Responsibility", description: "We are committed to giving back to our communities and the environment, recognizing our responsibility to serve the greater good." },
  ];

  const features = [
    { icon: Globe, title: "Global Reach", description: "Driven by the teachings of the Bhagavad Gita, we have built a robust worldwide delivery network, ensuring seamless supply through dedication and efficient action, recognizing that our duty is to serve with unwavering commitment and provide for the needs of all, without attachment to the results." },
    { icon: Clock, title: "Timely Delivery", description: "Guided by the teachings of the Bhagavad Gita, our efficient logistics ensure punctual deliveries, as we perform our duties with precision and commitment, recognizing that timeliness and responsibility are key to fulfilling our obligations with integrity." },
    { icon: LineChart, title: "Order Flexibility", description: "Following the teachings of the Bhagavad Gita, we accommodate orders ranging from 100 kg to 15,000 MT, with unwavering dedication and attention to every need, recognizing that each order, regardless of size, deserves our full commitment and responsibility." },
    // { icon: Building2, title: "Infrastructure", description: "Guided by the teachings of the Bhagavad Gita, we maintain a 50,000 sq. ft. equipped stockyard to support large-scale operations, performing our duties with precision and responsibility, ensuring that every operation is carried out with efficiency and care for the greater good." },
    { icon: Zap, title: "Quality Assurance", description: "Guided by the wisdom of the Bhagavad Gita, we employ advanced testing and certifications to ensure excellence, performing each task with dedication and attention to detail, recognizing that true success lies in upholding the highest standards with integrity and commitment." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden text-justify font-proxima">
      

      {/* Who We Are Section */}
      <WhoWeAreSection />

      {/* Journey Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-justify">
          <h2 className="text-4xl font-bold mb-5 text-center text-blue-900">Mehta Steels Journey</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">Mehta Steels, inspired by the Bhagavad Gita’s principle of 'Karma Yoga' (excellence in action), is a forward-thinking steel trading company focused on innovation and ease of doing business. We strive to serve our customers by analyzing their needs and educating them on cost-saving steel solutions, ensuring that project costs are minimized without compromising quality. With a strong commitment to integrity and selfless service, Mehta Steels has gained global recognition in the steel trading industry for supplying premium mild steel products, including flat steel, long steel, and rail products.</p>
              <p className="text-lg text-gray-700 leading-relaxed">
              "Mehta Steels is founded in 1992 by the visionary Mr. K.B. Mehta, who began his journey in 1969 with M/s D.K. Traders in Bhilai, Mehta Steels reflects his unwavering dedication, hard work, and deep understanding of the steel industry. Guided by strong values and a network of trusted global suppliers and customers, Mehta Steels has grown to be a premier stockist and trader of high-quality mild steel plates and other products."              </p>
            </div>
            <div>
              <img
                src={sir}
                alt="Mr. K.B. Mehta"
                className="w-full rounded-2xl h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
        className="py-24 bg-gray-50 text-lg"
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold mb-10 text-center text-blue-900"> Core Values at Mehta Steels</h2>
          <p className='mb-8 text-center text-xl'>At Mehta Steels, we believe that our strength lies not only in our products but also in the values that guide us. Inspired by the timeless wisdom of the Bhagavad Gita, we uphold principles that shape our work culture and drive us toward excellence</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
        className="py-20 bg-white"
      > 
        <div className="max-w-7xl mx-auto px-4 text-justify">
          <h2 className="text-4xl font-bold mb-16 text-center text-blue-900">Why Choose Mehta Steels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mt-4 text-gray-900 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2 group-hover:text-blue-100 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
