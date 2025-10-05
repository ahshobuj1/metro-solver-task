import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <section>
      <div className="contain py-5 lg:py-20">
        <div className="mt-5 rounded-xl overflow-hidden shadow-lg">
          <ReactPlayer
            src="https://youtu.be/xyQY8a-ng6g?si=CVosRnjOVrhj3m3U"
            controls
            width="100%"
            height="650px"
            style={{borderRadius: '12px'}}
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
