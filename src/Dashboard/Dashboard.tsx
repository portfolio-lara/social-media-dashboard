// Dashboard.tsx
import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import BigCard from './BigCard';
import {CardProps} from './interfaces';
import data_bigcards from '../assets/data_bigcards';
import data_smallcards from '../assets/data_smallcards';
import SmallCard from './SmallCard';

const Dashboard: React.FC = () => {
  const [theme, setTheme] = useState<string>('light-theme');

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
  };

  const sum: number = data_bigcards.reduce((totalFollowers: number, object: CardProps): number => {
    return totalFollowers + object.total;
}, 0) + data_smallcards.reduce((totalFollowers: number, object: CardProps): number => {
  return totalFollowers + object.total;
}, 0);

  return (
    <div className={`w-100 px-3 py-4 ${theme}`}>
      
      <section className="w-100 flex flex-col md:flex-row md:justify-between toggle-bar">
        <div>
          <h2>Social Media Dashboard</h2>
          <p>Total Followers: {sum}</p>
        </div>
        <hr className="block lg:none my-4"/>
        <ThemeSwitcher theme={theme} onThemeChange={handleThemeChange} />
      </section>

    <section className='w-100'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          data_bigcards.map((dataObject: CardProps, index: number) => (
            <BigCard
              key = {index}
              platform={dataObject.platform}
              handle={dataObject.handle}
              total={dataObject.total > 10000? `${dataObject.total / 1000}k` : dataObject.total}
              change={dataObject.change}
            />
          ))        
      }
        </div>
        </section>

        <section className='w-100'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          data_smallcards.map((dataObject: CardProps, index: number) => (
            <SmallCard
              key = {index}
              platform={dataObject.platform}
              handle={dataObject.handle}
              metric={dataObject.metric}
              total={dataObject.total > 10000? `${dataObject.total / 1000}k` : dataObject.total}
              change={dataObject.change}
            />
          ))        
      }
        </div>
        </section>

    </div>
  );
};

export default Dashboard;