import '../style/add-products.css';
import { useState } from 'react';
import { storage, db } from '../config/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/png', 'image/jpg'];

  const imageHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImage(selectedFile);
      setError('');
    } else {
      setProductImage(null);
      setError('Please select a JPG or PNG image');
    }
  };

  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productName, productPrice, productImage);
    const upload = uploadBytesResumable(
      ref(storage, `product-images/${productImage.name}`),
      productImage
    );

    upload.on(
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
    <div className='container'>
      <br />
      <h2>Add Products</h2>
      <hr />
      <form className='form-group' onSubmit={addProduct}>
        <label htmlFor='productName'>Name</label>
        <br />
        <input
          type='text'
          className='form-control'
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor='productPrice'>Price</label>
        <br />
        <input
          type='number'
          className='form-control'
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor='image'>Select Image</label>
        <br />
        <input type='file' onChange={imageHandler} id='file' />
        <button className='btn btn-success btn-md mybtn'>Add</button>
      </form>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};
export default AddProduct;
