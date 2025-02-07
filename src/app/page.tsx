
import CarRecommendationPag from '@/components/CarRecommendationPage';
import Hero from '@/components/Hero';

import React from 'react';
import Filter from '@/components/Filter';

import About from '@/components/About';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';


const page = () => {
  return (
    <div>
     
      <Hero/>
    

      <Filter/>
      {/* <PopularCarPage/> */}
      <CarRecommendationPag/>
      <About/>
     <AnalyticsDashboard/>
      
     
    </div>
  );
}

export default page;
