
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

const ALL_IMGS = [
  { src: 'https://picsum.photos/800/600?random=1', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=2', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=3', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=4', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=5', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=6', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=7', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=8', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=9', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=10', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=11', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=12', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=13', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=14', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=15', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=16', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=17', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=18', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=19', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=20', category: 'Community', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=21', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=22', category: 'Community', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=23', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=24', category: 'Community', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=25', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=26', category: 'Community', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=27', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=28', category: 'Community', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=29', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=30', category: 'Community', orientation: 'portrait' },
  
  // Additional photos
  { src: 'https://picsum.photos/800/600?random=31', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=32', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=33', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=34', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=35', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=36', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=37', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=38', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=39', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=40', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=41', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=42', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=43', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=44', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=45', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://picsum.photos/600/800?random=46', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=47', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=48', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/600/800?random=49', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://picsum.photos/800/600?random=50', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=51', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=52', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=53', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=54', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=55', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=56', category: 'Community', orientation: 'landscape' },
  { src: 'https://picsum.photos/800/600?random=57', category: 'Community', orientation: 'landscape' },
];

const categories = ['All', 'Living Area', 'Bedrooms', 'Kitchen', 'Bathrooms', 'Community'];

export default function Gallery() {
  const [openImg, setOpenImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? ALL_IMGS
    : ALL_IMGS.filter(img => img.category === activeCategory);

  // Show all images
  const displayedImages = filteredImages;

  // Create columns for masonry layout
  const createMasonryColumns = (images, columnCount = 4) => {
    const columns = Array.from({ length: columnCount }, () => []);
    
    images.forEach((img, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(img);
    });
    
    return columns;
  };

  const columns = createMasonryColumns(displayedImages);

  return (
    <section id="gallery" className="bg-neutral-50 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">See Yourself Here</h2>
            <p className="mt-4 text-lg text-neutral-600">A glimpse into life at Verde Gardens.</p>
        </motion.div>
        
        <div className="my-8 flex justify-center flex-wrap gap-2">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCategory === cat ? 'bg-red-600 text-white shadow' : 'bg-white text-neutral-700 hover:bg-neutral-100'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((img, imgIndex) => (
                <motion.div
                  key={img.src + imgIndex}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl cursor-zoom-in group"
                  onClick={() => setOpenImg(img.src)}
                >
                  <img
                    src={img.src}
                    alt={`${img.category} image`}
                    className={`w-full object-cover border border-neutral-200 group-hover:opacity-80 transition-opacity ${
                      img.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenImg(null)}
          >
            <motion.img
              layoutId={openImg}
              src={openImg}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
            <button className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full">
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
