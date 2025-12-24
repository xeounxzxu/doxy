import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading service data...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => (res.ok ? res.text() : Promise.reject(res.statusText)))
      .then((text) => setMessage(text))
      .catch(() => setMessage('Deliverus service is reachable. Customize this page.'));
  }, []);

  return (
    <main className="container">
      <h1>Deliverus Web</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;
