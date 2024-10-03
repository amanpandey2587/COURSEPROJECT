import React from 'react';
import loading from './loading.gif'; // Adjust this if the file is elsewhere

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img src={loading} alt="Loading..." />
      <p className="text-bgDark text-lg font-semibold">Loading ...</p>
    </div>
  );
}

export default Spinner;
