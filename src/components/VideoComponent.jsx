const VideoComponent = () => {
    return (
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Offseason Dashboard Tutorial</h2>
        <video controls width="800">
          <source 
            src="/assets/Offseason Dashboard Tutorial 3-9-25 2.mov" 
            type="video/quicktime" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoComponent;
  