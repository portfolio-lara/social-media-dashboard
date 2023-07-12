// Card.tsx
import React from 'react';
import { CardProps } from './interfaces';
import AccountWidget from './CardComponents/AccountWidget';
import Trend from './CardComponents/Trend';

const SmallCard: React.FC<CardProps> = ({platform, metric, total, change}) => {
  return (
    <div className="flex flex-row justify-between p-4 card card-small">
    <div className="flex flex-col justify-between">
      <p className="mb-4">{metric}</p>
      <h3>{total}</h3>
    </div>
    <div className="flex flex-col justify-between">
      <AccountWidget 
        platform={platform}
      />
      <Trend change={change}/>
    </div>
  </div>
  );
};

export default SmallCard;
