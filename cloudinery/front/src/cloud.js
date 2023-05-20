const uploadImage = (data) => {
  console.log(data);
  if (data) {
    const formData = new FormData();
    formData.append('file', state);
    formData.append('upload_preset', 'ukrr1ekh');
    axios
      .post('https://api.cloudinary.com/v1_1/dc3akfh6t/image/upload', formData)
      .then((res) => console.log(res));
  } else {
    alert('file not Uploaded');
  }
};
