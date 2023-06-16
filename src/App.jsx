import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [rng, setRng] = useState(Math.floor(Math.random() * 101));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRng(Math.floor(Math.random() * 101));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const color = rng > 70
  ? 'green' : rng > 45
  ? 'yellow' : rng > 25
  ? 'orange' : 'red';

  return (
    <div className="main">
      <h1 style={{ fontWeight: 900, color, margin: 0, fontSize: 120}}>{rng}</h1>
    </div>
  )
}

export default App
