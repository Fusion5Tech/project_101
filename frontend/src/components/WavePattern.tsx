const WavePattern = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-24 fill-orange"
      >
        <path d="M0,40 C150,100 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};

export default WavePattern;