import React from 'react';
import Article from './Article'; // Assuming you have an Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
