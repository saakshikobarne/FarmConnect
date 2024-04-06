import React from 'react';

const Card = ({ image, title, description }) => {

  const [isZoomed, setIsZoomed] = React.useState(false); 

  const handleHover = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  return (
    <div
      className={`mb-2 card relative overflow-hidden rounded-2xl shadow-md hover:shadow-black transition duration-300 ease-in-out ${
        isZoomed ? 'transform scale-110' : ''
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="w-full h-48 object-cover rounded-t-lg transition duration-300 ease-in-out"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
