import React from 'react';

const SuccessMessage = ({ success }) => {
  return (
    <div className="absolute bottom-5 right-[450px] ">
      {success && <p className="font-bold">YOU WON!!</p>}
    </div>
  );
};

export default SuccessMessage;