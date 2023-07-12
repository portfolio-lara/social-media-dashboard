// Card.tsx
import React from 'react';
import { CardProps } from './interfaces';
import AccountWidget from './CardComponents/AccountWidget';
import Trend from './CardComponents/Trend';

const BigCard: React.FC<CardProps> = ({ platform, handle, total, change}) => {
  return (
    <div className="flex flex-col items-center p-4 card card-big">
      <div className={`border-ribbon ${platform}`}></div>
      <AccountWidget 
      platform={platform}
      accountName={handle} 
    /> 
    <h1 className="mt-4 mb-0">{total}</h1>
    <p className="followers mb-4">FOLLOWERS</p>
    <Trend change={change}/>
  </div>
  );
};

export default BigCard;
