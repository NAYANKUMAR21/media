import { useState } from 'react';
import Styles from './App.module.css';
import axios from 'axios';

import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {
  cloudName: 'dc3akfh6t',
}).resize(fill().width(100).height(150));

// Render the image in a React component.

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
    <>
      <div className={Styles.container}>
        <input type="file" onChange={(e) => setState(e.target.files[0])} />
        <button onClick={uploadImage}>Add To cloud</button>
      </div>
    </>
  );
}

export default App;
