import { useEffect, useState } from 'react';
import './App.css';
import A from './components/TestA';
import B from './components/TestB';

function App() {

  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div style={{padding : '1rem'}}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{display:'flex'}}>
        <A messages={value} posts={posts}/>
        <B messages={value} posts={posts}/>
      </div>
    </div>
  );
}

export default App;
