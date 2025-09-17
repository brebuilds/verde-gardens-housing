
import React, { useState, useEffect } from 'react';
import Header from '@/components/verde/Header';
import Hero from '@/components/verde/Hero';
import VisualShowcase from '@/components/verde/VisualShowcase';
import KeyFeatures from '@/components/verde/KeyFeatures';
import IntroText from '@/components/verde/IntroText';
import LivingOptions from '@/components/verde/LivingOptions';
import CommunityBanner from '@/components/verde/CommunityBanner';
import CommunityCollage from '@/components/verde/CommunityCollage';
import RoommateMatching from '@/components/verde/RoommateMatching';
import Amenities from '@/components/verde/Amenities';
import BuildingBanner from '@/components/verde/BuildingBanner';
import EosSpotlight from '@/components/verde/EosSpotlight';
import Gallery from '@/components/verde/Gallery';
import FloorplanViewer from '@/components/verde/FloorplanViewer';
import StickyCTA from '@/components/verde/StickyCTA';
import Footer from '@/components/verde/Footer';
import VideoModal from '@/components/verde/VideoModal';

export default function VerdeGardensPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    // Video pop-up logic has been removed.
    // const hasSeenVideo = localStorage.getItem('verde-gardens-video-seen');
    // if (!hasSeenVideo) {
    //   const timer = setTimeout(() => {
    //     setShowVideoModal(true);
    //   }, 1000);
    //   return () => clearTimeout(timer);
    // }
  }, []);

  const handleCloseVideo = () => {
    setShowVideoModal(false);
    // Mark video as seen
    localStorage.setItem('verde-gardens-video-seen', 'true');
  };

  return (
    <main className="bg-white text-neutral-900 font-sans">
      <Header />
      <Hero />
      <KeyFeatures />
      <VisualShowcase />
      <IntroText />
      <LivingOptions />
      <Amenities />
      <BuildingBanner />
      <CommunityBanner />
      <CommunityCollage />
      <RoommateMatching />
      <EosSpotlight />
      <FloorplanViewer />
      <Gallery />
      <Footer />
      <StickyCTA />
      
      <VideoModal 
        isOpen={showVideoModal} 
        onClose={handleCloseVideo} 
      />
    </main>
  );
}
