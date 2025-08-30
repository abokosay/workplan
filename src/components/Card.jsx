import React from 'react';

const Card = ({ title, icon, color }) => {
  return (
    <div className="scene w-[200px] h-[300px]">
      <div className="card">
        <div className={`card__face card__face--front ${color}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-6xl">{icon}</div>
            <h2 className="text-xl font-bold mt-4 text-white">{title}</h2>
          </div>
        </div>
        <div className="card__face card__face--back">
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-white">Enter Now</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
