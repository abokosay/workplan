import React from 'react';

function Roadmap({ pageName }) {
  return (
    <div className="p-4 bg-gray-800 text-white text-center">
      <h2 className="text-xl font-bold">Roadmap</h2>
      <p>You are here: {pageName}</p>
    </div>
  );
}

export default Roadmap;
