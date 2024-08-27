import React, { useState } from 'react';
function App() {
  const [image, setImage] = useState('https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp');  // Initialize state with the word 'Hello'

  const toggleImage = () => {
    // Use an if statement to toggle between the words 'dog' and 'rabbit'
    if (image === 'https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp') {
      setImage('https://hips.hearstapps.com/hmg-prod/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=980:*');
    } else {
      setImage('https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} alt="Toggle" style={{ width: '50%', maxWidth: '500px' }} />
      {/* Button to toggle the image */}
      <div>
        <button onClick={toggleImage} style={{ marginTop: '20px' }}>Toggle Image</button>
      </div>
    </div>
  );
  
}

export default App;
