import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../config/config.js';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/jpg', 'image/png'];

  const imageHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImage(selectedFile);
      setError('');
    } else {
      setProductImage(null);
      setError('Please select JPG or PNG image');
    }
  };

  const addProduct = (e) => {
    e.preventDefault();

    const uploadTask = uploadBytesResumable(
      ref(storage, `product-images/${productImage.name}`),
      productImage
    );

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        setError(error.message);
      },
      async () => {
        try {
          const url = await getDownloadURL(
            ref(storage, `product-images/${productImage.name}`)
          );

          await addDoc(collection(db, 'Products'), {
            ProductName: productName,
            ProductPrice: Number(productPrice),
            ProductImage: url,
          });

          setProductName('');
          setProductPrice(0);
          setProductImage(null);
          document.getElementById('file').value = '';
        } catch (err) {
          setError(err.message);
        }
      }
    );
  };

  return (
    <div className='container' style={{ width: '70vw' }}>
      <br />
      <h2>Add Products</h2>
      <hr />
      <form className='form-group' onSubmit={addProduct}>
        <label htmlFor='productName'>Product Name</label>
        <br />
        <input
          type='text'
          className='form-control'
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />

        <label htmlFor='productPrice'>Product Price</label>
        <br />
        <input
          type='Number'
          className='form-control'
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />

        <label htmlFor='productImage'>Select Image</label>
        <br />
        <input
          type='file'
          className='form-control'
          required
          onChange={imageHandler}
          id='file'
        />
        <br />
        <button className='btn btn-success btn-md'>ADD</button>
      </form>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};
export default AddProduct;
