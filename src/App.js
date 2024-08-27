import React, { useState } from 'react';
function App() {
  const [image, setImage] = useState('https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp');  // Initialize state with the word 'Hello'
  const [caption, setCaption] =  useState('Dog')
  const toggle = () => {
    // Use an if statement to toggle between the words 'dog' and 'rabbit'
    if (image === 'https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp') {
      setImage('https://hips.hearstapps.com/hmg-prod/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=980:*');
      setCaption('Rabbit')
    } else {
      setImage('https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-650-80.jpg.webp');
      setCaption('Dog')
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} style={{ width: '50%', maxWidth: '500px' }} />
      {/* Display the current caption */}
      <p>{caption}</p>
      {/* Button to toggle the image and caption */}
      <button onClick={toggle} style={{ marginTop: '20px' }}>button</button>
    </div>
  );
}

export default App;
