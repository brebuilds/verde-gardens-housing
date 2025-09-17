
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

const ALL_IMGS = [
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/db32f5c1e_VG-LivingArea-Wide.png', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ce5055f9f_VG-SingleRoom.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e3d410142_VG-KitchenCloseUp.png', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78f987c6e_VG-Bunks.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a063fd0b0_VG-LivingRoom.png', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cc471a565_Hero.jpg', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0bc41e612_VG-Bathroom.png', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/389de54de_VG-SharedBedroom-Left.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1ba916c2c_VG-KitchenAfar.png', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e0300f4c3_VG-ConsoleTable.png', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b27c6d2c_VG-Outdoors.png', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/550899f6f_VG-BunkRight.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d765a28bd_VG-Laundry.png', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3f8dfcb47_VG-ClosetUnit.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6a9ffebaf_VG-Dining.png', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c927243d6_VG-Outdoors2.png', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/09346965e_VG-DiningLayout.png', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/59f76c944_VG-SharedfromRight.png', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4b07f7366_VG-SharedRoomZoom.png', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/fff3e5818_verdegardens00001.jpg', category: 'Community', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/d38d4105c_verdegardens00002.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/be4c9a7ba_verdegardens00003.jpg', category: 'Community', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/e8abf721c_verdegardens00004.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/4b10e9cfc_verdegardens00005.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/375634d31_verdegardens00006.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/f4d70dd8d_verdegardens00007.jpg', category: 'Community', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/1c987031b_verdegardens00008.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/596e6520b_verdegardens00009.jpg', category: 'Community', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b202a5aaa3ba0b9af4ec94/ddd7f178b_verdegardens00010.jpg', category: 'Community', orientation: 'portrait' },
  
  // New photos
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/489885092_DormChurch.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/1d208516e_DSC00856.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/461f9988c_DSC07665.jpg', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/80c8ae896_DSC07670.jpg', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/47268c48b_DSC07676.jpg', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/83f564774_DSC07677.jpg', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/b162ddfd3_DSC07682.jpg', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/6b193ffce_DSC07685.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/77baaf2f0_DSC07688.jpg', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/96eae94b1_DSC07694.jpg', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/559ee1b53_DSC07702.jpg', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/fdca958fc_DSC07704.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/67727a11d_DSC07706.jpg', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/b6728cb06_DSC07710.jpg', category: 'Bedrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/3a848ba50_DSC07715.jpg', category: 'Living Area', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/46235fdda_DSC07717.jpg', category: 'Kitchen', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/3172e95ee_DSC07725.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/672f12933_DSC07730.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/e266155e9_DSC07737.jpg', category: 'Bathrooms', orientation: 'portrait' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/9be1b09ad_DSC07743.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/41424e20a_DSC07750.jpg', category: 'Living Area', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/f340c2a87_DSC07753.jpg', category: 'Bedrooms', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/a82d508e0_DSC07758.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/b31a26e42_DSC07760.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/c776b8c8f_DSC07770.jpg', category: 'Kitchen', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/5c4b22080_DSC07778.jpg', category: 'Community', orientation: 'landscape' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb02eeec03a977caa9230c/96c764da5_SEUDorms.jpg', category: 'Community', orientation: 'landscape' },
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
