import React from 'react';

function Article({ title, date = "January 1, 1970", preview }) {
  // Calculate minutes to read
  const minutesToRead = Math.ceil(preview.length / 200); // Assuming 200 words per minute

  // Generate emojis based on reading time
  const emojis = minutesToRead < 30
    ? "☕️".repeat(Math.ceil(minutesToRead / 5))
    : "🍱".repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>{emojis} {minutesToRead} min read</span>
    </article>
  );
}

export default Article;
