import React from 'react';
import Mainbanner from '../Components/Mainbanner/Mainbanner';
import Categories from '../Components/Categories';
import BestSeller from '../Components/BestSeller';
import BottomBanner from '../Components/BottomBanner';
import NewsLetter from '../Components/NewsLetter';




const Home = () => {
  return (
    <div className='mt-10'>
      <Mainbanner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLetter/>
      
    
      
    </div>
  );
}

export default Home;

