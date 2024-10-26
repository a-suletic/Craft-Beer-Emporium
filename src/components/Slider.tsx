// import React, { useEffect, useState } from 'react';
// import IMAGE from '../images/beer_image_1.jpg';
// import IMAGE2 from '../images/beer_image_2.jpg';
// import IMAGE3 from '../images/beer_image_3.jpg';

// function Slider() {
//   const [activeImage, setActiveImage] = useState(0);
//   const imagesArray = [IMAGE, IMAGE2, IMAGE3];

//   const createImagesArray = (
//     images: string[]
//   ): { id: number; link: string }[] => {
//     return images.map((str, index) => ({
//       id: index + 1,
//       link: str,
//     }));
//   };
//   const sliderImages = createImagesArray(imagesArray);

//   const nextImage = () => {
//     activeImage === imagesArray.length - 1
//       ? setActiveImage(0)
//       : setActiveImage(activeImage + 1);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       nextImage();
//     }, 10000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [activeImage]);

//   return (
//     <main className="top-slider grid place-items-center grid-cols-1 w-full mx-auto shadow-2xl ">
//       <div
//         className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 p-6 md:p-0`}
//       >
//         {sliderImages.length > 0
//           ? sliderImages.map((image, idx) => (
//               <div
//                 key={image.id}
//                 className={`${
//                   idx === activeImage
//                     ? 'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out'
//                     : 'hidden'
//                 }`}
//               >
//                 <div>
//                   <img
//                     src={image.link}
//                     alt="Beer Image"
//                     width={1920}
//                     height={1080}
//                     className="w-full h-full object-cover absolute inset-0 "
//                   />
//                 </div>
//                 <div className="absolute fading-gradient w-full h-full"></div>
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-1"></div>
//               </div>
//             ))
//           : 'No image found'}
//       </div>
//     </main>
//   );
// }

// export default Slider;
import React, { useState, useEffect } from 'react';
import IMAGE from '../images/beer_image_1.jpg';
import IMAGE2 from '../images/beer_image_2.jpg';
import IMAGE3 from '../images/beer_image_3.jpg';

const imagesArray = [IMAGE, IMAGE2, IMAGE3];

const Slider: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImage((prev) => (prev + 1) % imagesArray.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {imagesArray.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Slider Image ${idx + 1}`}
          className={`${
            idx === activeImage ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Slider;
