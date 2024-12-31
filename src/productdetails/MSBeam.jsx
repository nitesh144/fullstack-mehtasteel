import { Info, TableIcon, Construction, Building, Factory, Truck, Building2} from "lucide-react";
import MSBeam1 from '../assets/ms-beam1.png'
import MSBeam2 from '../assets/ms-beam2.png'
import MSBeam3 from '../assets/ms-beam3.png'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import IPN from '../assets/ipn-sample.png'
import IPE from '../assets/ipe-sample.png'
import HP from '../assets/hp-sample.png'
import ACB from '../assets/acb-sample.png'
import IFB from '../assets/ifb-sample.png'
import SFB from '../assets/sfb-sample.png'
import React, { useState } from "react";


const MSBeams = () => {
  const [expandedProfile, setExpandedProfile] = useState(null);
  const productImages = [MSBeam1, MSBeam2, MSBeam3];

  const ismbData = [
    { srNo: 1, description: 'ISMB 125', size: '125 X 70', weight: 13.3 },
    { srNo: 2, description: 'ISMB 150', size: '150 X 75', weight: 15 },
    { srNo: 3, description: 'ISMB 200', size: '200 X 100', weight: 24.2 },
    { srNo: 4, description: 'ISMB 250', size: '250 X 125', weight: 37.3 },
    { srNo: 5, description: 'ISMB 300', size: '300 X 140', weight: 46 },
    { srNo: 6, description: 'ISMB 350', size: '350 X 140', weight: 52.4 },
    { srNo: 7, description: 'ISMB 400', size: '400 X 140', weight: 61.5 },
    { srNo: 8, description: 'ISMB 450', size: '450 X 150', weight: 72.4 },
    { srNo: 9, description: 'ISMB 500', size: '500 x 180', weight: 86.9 },
    { srNo: 10, description: 'ISMB 600', size: '600 x 210', weight: 123 }
  ];

  const beamProfiles = [
    { id: 'ipe', image: IPE, },
    { id: 'ipn', image: IPN, },
    { id: 'hp', image: HP, },
    { id: 'acb', image: ACB, },
    { id: 'ifb', image: IFB, },
    { id: 'sfb', image: SFB, }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Beams',
      icon: Construction
    },
    {
      id: 'ishb',
      name: 'ISHB Beams',
      icon: Building
    },
    {
      id: 'ismb',
      name: 'ISMB Beams',
      icon: Factory
    },
    {
      id: 'imported',
      name: 'Imported Sections',
      icon: Building2
    }
  ];

  const specifications = [
    {
      category: ['all', 'ismb'],
      code: 'ISMB 100',
      size: '100 × 75 mm',
      weight: 10.4,
      thickness: 5.5
    },
    {
      category: ['all', 'ishb'],
      code: 'ISHB 150',
      size: '150 × 100 mm',
      weight: 15.7,
      thickness: 6.2
    },
    {
      category: ['all', 'imported'],
      code: 'HEB 200',
      size: '200 × 150 mm',
      weight: 22.3,
      thickness: 7.5
    }
  ];

  const importedSections = [
    {
      name: 'IPE',
      description: 'IPE'
    },
    {
      name: 'IPN',
      description: 'IPN'
    },
    {
      name: 'HE',
      description: 'HE'
    },
    {
      name: 'HL',
      description: 'HL'
    },
    {
      name: 'HD',
      description: 'HD'
    },
    {
      name: 'HP',
      description: 'HP'
    },
    {
      name: 'ACB â€" CASTELLATED BEAMS WITH CIRCULAR OPENINGS',
      description: 'ACB â€" CASTELLATED BEAMS WITH CIRCULAR OPENINGS'
    },
    {
      name: 'CASTELLATED BEAMS WITH HEXAGONAL OPENINGS',
      description: 'CASTELLATED BEAMS WITH HEXAGONAL OPENINGS'
    },
    {
      name: 'ACB â€" CASTELLATED BEAMS WITH SINUSOIDAL OPENINGS',
      description: 'ACB â€" CASTELLATED BEAMS WITH SINUSOIDAL OPENINGS'
    },
    {
      name: 'AEGEAN/SELINIAE',
      description: 'AEGEAN/SELINIAE'
    },
    {
      name: 'IFB',
      description: 'IFB'
    },
    {
      name: 'SFB',
      description: 'SFB'
    },
    {
      name: 'UB',
      description: 'UB'
    },
    {
      name: 'J',
      description: 'J'
    },
    {
      name: 'UC',
      description: 'UC'
    },
    {
      name: 'UBP',
      description: 'UBP'
    },
    {
      name: 'WIDE FLANGE BEAMS',
      description: 'WIDE FLANGE BEAMS'
    },
    {
      name: 'S',
      description: 'S'
    },
    {
      name: 'HG',
      description: 'HG'
    },
    {
      name: 'JAPANESE H SECTIONS',
      description: 'JAPANESE H SECTIONS'
    }
  ];

  const BeamSpecification = ({ code, size, weight, thickness }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-blue-700">{code}</span>
        <span className="text-sm text-gray-500">{size}</span>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-gray-600">Weight: {weight} kg/m</div>
        <div className="text-sm text-gray-600">Thickness: {thickness} mm</div>
      </div>
    </div>
  );

  return (

    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="relative rounded-2xl max-w-7xl mt-10 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 p-12 mb-8 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">MS Beams</h1>
          <p className="text-blue-100 text-xl max-w-2xl">
            Mehta Steels is a Stockholder and supplier of mild steel beams
          </p>
        </div>
        {/* <div className="absolute -right-20 -bottom-20 opacity-10">
          <Package className="w-96 h-96" />
        </div> */}
      </div>

      <div className="container mx-auto px-4 py-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Mehta Steels: MS Beams & Joists
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of high-quality mild steel beams for industrial,
            commercial, and infrastructure projects.
          </p><br />
          <p className='justify-normal text-lg text-gray-500'>Mehta Steels is a trusted supplier and trader of MS Beams, also known as ISMB (Indian Standard Medium Beams) or joists. As a leading name in the steel industry, Mehta Steels provides premium-quality mild steel beams sourced from renowned manufacturers like SAIL, reputed re-rolling mills, and other globally recognized steel mills.</p>
        </motion.div>

        {/* Beam Category Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
              flex items-center space-x-2 px-4 py-2 rounded-full transition-all
              ${activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-50'}
            `}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Beam Specifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {specifications
            .filter(spec => spec.category.includes(activeCategory))
            .map((spec, index) => (
              <motion.div
                key={spec.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <BeamSpecification {...spec} />
              </motion.div>
            ))
          }
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - ISMB Table */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Common dimensions of ms beams (ISMB) of Indian origin available in ready stocks are:</h2>
            <TableIcon className="text-blue-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left">Sr.No</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Size</th>
                  <th className="py-3 px-4 text-left">Weight (KG/Mtrs)</th>
                </tr>
              </thead>
              <tbody>
                {ismbData.map((item, index) => (
                  <tr
                    key={item.srNo}
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors
                      ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                  >
                    <td className="py-3 px-4">{item.srNo}</td>
                    <td className="py-3 px-4 font-medium">{item.description}</td>
                    <td className="py-3 px-4">{item.size}</td>
                    <td className="py-3 px-4">{item.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Technical Profiles */}
        <div className="space-y-6">
          {/* Profile Types */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Beam Profiles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {beamProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className={`p-4 rounded-lg border-2 transition-all cursor-pointer
                    ${expandedProfile === profile.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => setExpandedProfile(expandedProfile === profile.id ? null : profile.id)}
                >

                  {/* Render the profile image */}
                  <div className="mt-2 h-[100px] flex items-center justify-center">
                    <img
                      src={profile.image}
                      alt={`${profile.id} beam profile`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-blue-50 rounded-xl shadow-lg p-6">
            <div className="flex gap-3">
              <Info className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Technical Specifications</h3>
                <p className="text-gray-600">
                  Mehta Steels specializes in supplying special profile imported sections of beams
                  as per international standards. Available in mild steel grade and high tensile grade.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['IPE', 'NPB', 'WPB', 'HEA', 'HEB', 'UC', 'UB'].map((type) => (
                    <span key={type} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Mehta Steels: Details of Imported Steel Beams
          </h1>
          <p className="text-gray-600 mx-auto text-lg">
            Mehta Steels is one of the very few companies in India having expertise in supplying special profile imported sections of beams as per international standards. Mehta steels sources this sections from renowned mills around the world and ensures the supply of right quality material, prompt delivery at competitive prices.
          </p>
        </motion.div>

        <div className='m-3'>
          <p className='text-gray-700 text-lg'>Mehta Steels can supply following imported sections: The commonly used names of international standard steel profiles are</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {importedSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800">{section.name}</h3>
              </div>
              {/* <p className="text-gray-600 text-sm">{section.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Product Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {productImages.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <img
                src={image}
                loading="lazy"
                alt={`Mild Steel Angle ${index + 1}`}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};


const Beam = () => {
  return (
    <>
      <Helmet>
        <title>MS Beams - Mehta Steels</title>
        <meta name="description" content="Discover a wide range of MS Beams at Mehta Steels, including ISMB and Imported Sections with detailed specifications and pricing." />
        <meta name="keywords" content="MS Beams, ISMB, Imported Sections, Mild Steel Beams, Mehta Steels" />
        <meta property="og:title" content="MS Beams - Mehta Steels" />
        <meta property="og:description" content="Browse MS Beams at Mehta Steels, your trusted supplier of ISMB and Imported Sections with detailed specifications." />
        <meta property="og:image" content={MSBeam1} />
        <meta property="og:url" content="https://www.mehtasteels.com/ms-beams" />
      </Helmet>
      <MSBeams />
      {/* <BeamComponent /> */}
    </>
  )
}
export default Beam;
