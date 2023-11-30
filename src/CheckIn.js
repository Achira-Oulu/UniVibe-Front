import React, { useRef } from 'react';
import Webcam from "react-webcam";

// const webcamStyle = {
//   width: '100%',
//   height: 'auto', // Adjust height based on aspect ratio or leave it auto
// };

const webcamStyle = {
  position: 'relative',  // Relative positioning for absolute children
  width: '100%',
  paddingBottom: '56.25%', // Maintain aspect ratio
  marginTop: '10px',
  border: '5px solid black',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  overflow: 'hidden',
};


const buttonStyle = {
  position: 'absolute',  // Position it over the webcam view
  bottom: '20px',       // Distance from the bottom of the container
  left: '50%',          // Center horizontally
  transform: 'translate(-50%, -60%)', // Adjust for exact centering
  width: '80px',        // Increased size
  height: '80px',       // Same as width for circle
  borderRadius: '50%',  // Circular shape
  border: '2px solid black',
  background: '#fff',
  color: 'black',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',   // Center content vertically
  justifyContent: 'center', // Center content horizontally
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
};





const WebcamCapture = () => {
  const webcamRef = useRef(null);

  // Specify the video constraints
  const videoConstraints = {
    facingMode: 'environment', // Use 'environment' for the rear camera
  };

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      sendImageToServer(imageSrc);
    },
    [webcamRef]
  );

  // Function to send the captured image to the server
  const sendImageToServer = async (imageSrc) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      });

      if (response.ok) {
        console.log('Image successfully sent to the server');
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Failed to send image to server:', error);
    }
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={webcamStyle}
      />
      <button onClick={capture} style={buttonStyle}> Capture </button>
    </>
  );
};

export default WebcamCapture;
