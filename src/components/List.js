import React from 'react';

const List = ({ books, isloading }) => {
  if (isloading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-container'>
      {books.map(post => (
        <li key={post.id} className='list-item'>
          <p>{post.best_book.title}</p>
          <img src={post.best_book.image_url}></img>
        </li>
      ))}
    </ul>
  );
};

export default List;
