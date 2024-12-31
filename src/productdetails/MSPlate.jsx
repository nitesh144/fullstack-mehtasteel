import React, { useState } from 'react';
import {
  FileSpreadsheet,
  FlaskConical,
  Layers,
  Settings2,
  ChevronRight,
} from 'lucide-react';
import msplate1 from '../assets/mild-steel-plates.png';
import msplate2 from '../assets/mild-steel-plate-for-industry.png';
import msplate3 from '../assets/ms-plate.png';
import msplate4 from '../assets/mild-steel-plate-for-plant.png';

const MSPlate = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [hoveredSpec, setHoveredSpec] = useState(null);

  const specifications = [
    { label: 'Thickness', value: '5 mm to 160 mm' },
    { label: 'Width', value: '820 mm to 3300 mm' },
    { label: 'Length', value: '1000 mm to 140000 mm' },
    { label: 'Material Grades', value: 'As per all national & international standards' },
  ];

  const facilities = [
    { icon: <FileSpreadsheet className="w-6 h-6" />, name: 'Third-party inspection' },
    { icon: <Settings2 className="w-6 h-6" />, name: 'Ultrasonic testing' },
    { icon: <FlaskConical className="w-6 h-6" />, name: 'Spectrochemical testing' },
    { icon: <Layers className="w-6 h-6" />, name: 'Mechanical testing' },
  ];

  const applications = [
    'General structural',
    'Flanging & forming',
    'Atmospheric corrosion resistance',
    'Boilers & pressure vessels',
    'Shipbuilding',
    'Oil & gas equipment',
    'Pipeline manufacturing',
    'Industrial flooring',
    'Galvanizing pots',
    'Engineering applications',
    'Fabrication of various types',
  ];

  const images = [msplate1, msplate2, msplate3, msplate4];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <head>
        <title>Mild Steel Plate | MS Plate - Mehta Steels</title>
        <meta
          name="description"
          content="Mehta Steels offers a complete range of mild steel plates, including structural, high tensile, boiler quality, and shipbuilding plates, suitable for diverse industrial applications."
        />
        <meta
          name="keywords"
          content="Mild Steel Plates, Structural Steel Plates, Boiler Quality Plates, Shipbuilding Plates, High Tensile Plates, Mehta Steels, Premium Steel Solutions"
        />
        <meta property="og:title" content="Mild Steel Plates - Mehta Steels" />
        <meta property="og:description" content="Explore our range of mild steel plates for structural, high tensile, and shipbuilding applications." />
      </head>

      <div className="max-w-7xl mx-auto p-6 font-proxima">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 mb-12">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
          <div className="relative z-10 p-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Mild Steel Plates
              <span className="block text-2xl mt-2 text-white font-normal">
                Complete Range of MS Plates at Mehta Steel
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-lg">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed">
              At Mehta Steels, inspired by the Bhagavad Gita's principles of duty and excellence, we offer versatile mild steel plates that serve a wide range of industries. From general structural applications, flanging, and forming to atmospheric corrosion resistance, boilers, pressure vessels, shipbuilding, oil and gas equipment, pipelines, and engineering fabrication, our solutions embody reliability, quality, and performance.
            </p>
            <p className="mt-6">
              Mehta Steels offers a comprehensive range of structural steel plates, high tensile steel plates, pressure vessel quality plates, and shipbuilding plates. Whether you need steel plates for pipeline manufacturing, oil and gas equipment, or engineering fabrication, Mehta Steels stands as your trusted partner for premium-grade, reliable, and high-performance steel products.
            </p>
            <p className="mt-6">
              Driven by our commitment to quality and guided by the Bhagavad Gita's principles of excellence, Mehta Steels is the top choice for industries seeking construction steel plates, boiler steel plates, or pressure vessel steel plates. Trust Mehta Steels as your one-stop destination for all premium-grade steel plate solutions!
            </p>
          </div>
        </div>

        {/* Specifications and Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Specifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Specifications</h2>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-blue-50 p-4 transition-all duration-300 hover:bg-blue-100"
                  onMouseEnter={() => setHoveredSpec(index)}
                  onMouseLeave={() => setHoveredSpec(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blue-900">{spec.label}</span>
                    <span className="text-blue-700">{spec.value}</span>
                  </div>
                  <div className={`absolute inset-y-0 right-0 w-1 bg-blue-500 transition-all duration-300 ${hoveredSpec === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Facilities</h2>
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                >
                  <div className="mr-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <span className="text-blue-900 group-hover:font-medium transition-all duration-300">
                    {facility.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="text-blue-900">{app}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Product Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-blue-50"
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`Mild steel plate ${index + 1}`}
                  loading='lazy'
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSPlate;