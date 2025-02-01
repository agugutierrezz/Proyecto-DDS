import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent', left: '10px', zIndex: 2, fontSize: '60px' }} // Increased font size
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent', right: '10px', zIndex: 2, fontSize: '60px' }} // Increased font size
      onClick={onClick}
    />
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  appendDots: dots => (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px', // Moved to the right
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3
      }}
    >
      <ul style={{ margin: 0 }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: 'white'
      }}
    />
  ),
  dotsClass: 'slick-dots custom-dots'
};


const images = [
  { src: 'assets/halloween.png', caption: 'Cupones Terrorificos' },
  { src: 'assets/zodiaco.png', caption: 'Cupones Zodiacales' },
  { src: 'assets/viaje.png', caption: 'Cupones Viajeros' }
];

const Carousel = () => {
  return (
    <div className="w-screen overflow-hidden relative" style={{ left: '-152px', top: '-40px' }}> {/* Adjusted left and top position */}
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img src={img.src} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover" />
            <p className="font-poppins md:font-normal absolute bottom-0 right-3 w-full text-2xl text-right bg-opacity-50 text-white py-2" style={{ paddingLeft: '20px' }}>{img.caption}</p> {/* Added paddingLeft */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
