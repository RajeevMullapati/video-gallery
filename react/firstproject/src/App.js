import React, { useState, useEffect } from 'react';

const App = () => {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  const handleFileClick = (file) => {
    setFile(file);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://rajeevmullapati.pythonanywhere.com/');
        const data = await response.json();
        setMedia(data.payload);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleVideoLoad = () => {
    setLoading(false); // Set loading to false when video is loaded
  };

  return (
    <div className="container">
      <h1>VIDEO GALLERY</h1>
      <div className="media-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          media.map((file) => (
            <div className="media" key={file.id} onClick={() => handleFileClick(file)}>
              {file.videofile && (
                <video src={file.videofile} muted preload="metadata" onLoad={handleVideoLoad} />
              )}
            </div>
          ))
        )}
      </div>

      <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {file?.videofile && (
          <video src={file?.videofile} autoPlay controls onLoad={handleVideoLoad} />
        )}
      </div>
    </div>
  );
};

export default App;
