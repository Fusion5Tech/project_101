const ColorfulAccents = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Red curved element */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent-red/20 rounded-full blur-xl animate-float" />
      
      {/* Blue curved element */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-accent-blue/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Yellow curved element */}
      <div className="absolute bottom-40 left-32 w-20 h-20 bg-accent-yellow/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange/10 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default ColorfulAccents;