import React, { useState } from 'react';

const AddBlogPage = () => {

  const [blogTitle, setBlogTitle] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [author, setAuthor] = useState('');
  const [domain, setDomain] = useState('');

  const handleSubmit = () => {

    console.log('Blog Title:', blogTitle);
    console.log('Photo URL:', photoURL);
    console.log('Blog Description:', blogDescription);
    console.log('Publish Date:', publishDate);
    console.log('Author:', author);
    console.log('Domain:', domain);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Add Blog</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Blog Title:</label>
          <input type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Photo URL:</label>
          <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Blog Description:</label>
          <textarea value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Publish Date:</label>
          <input type="text" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Domain:</label>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlogPage;
