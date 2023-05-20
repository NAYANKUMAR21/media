import { useState } from 'react';
import Styles from './App.module.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState([]);
  console.log(state);

  const handleChange = async (e) => {
    const { files } = e.target;
    const copy = [...files];
    let x = copy?.map(async (item, index) => {
      let formData = new FormData();
      formData.append('file', item);
      formData.append('upload_preset', 'ukrr1ekh');
      return await axios
        .post(
          'https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload',
          formData
        )
        .then((res) => console.log(index, res.data.url));
    });
    console.log(x);

    // for (let key in files) {
    //   setState([...state, files[key]]);
    // }

    // return uploadImage(formData);
    /*
    const formData = new FormData();
      formData.append('file', files[key]);
      formData.append('upload_preset', 'ukrr1ekh');
      console.log(key, files[key]);
      let x = await axios.post(
        'https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload',
        formData
      );
      console.log(x);
    */
  };
  return (
    <div>
      <div className={Styles.container}>
        <input type="file" multiple onChange={handleChange} />
        {/* <button onClick={uploadImage}>Add To cloud</button> */}
      </div>
    </div>
  );
}

export default App;


