import { useState } from 'react';
import Styles from './App.module.css';
import axios from 'axios';
function App() {
  const [state, setState] = useState('');
  console.log(state);
  const uploadImage = () => {
    console.log(state);
    if (state) {
      const formData = new FormData();
      formData.append('file', state);
      formData.append('upload_preset', 'ukrr1ekh');
      axios
        .post(
          'https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload',
          formData
        )
        .then((res) => console.log(res));
    } else {
      alert('file not Uploaded');
    }
  };
  return (
    <div className={Styles.container}>
      <input type="file" onChange={(e) => setState(e.target.files[0])} />
      <button onClick={uploadImage}>Add To cloud</button>
    </div>
  );
}

export default App;
