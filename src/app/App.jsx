import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState(null);

  const getHello = async () => {
    const response = await axios.get('/api/hello');
    setMessage(response.data.message);
  };

  return (
    <div>
      <header>
        <p>
          <button onClick={getHello}>Message is: {message}</button>
        </p>
      </header>
    </div>
  );
}

export default App;
