import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className='post-card'>
      <div className='post-header'>
        <img className='avatar' src={post.avatar} alt={post.author} />
        <div className='post-info'>
          <h3 className='post-author'>{post.author}</h3>
          <span className='post-date'>{post.date}</span>
        </div>
      </div>
      
      <div className='post-content'>
        <p>{post.content}</p>
        {post.code && (
          <div className='code-block'>
            <pre><code>{post.code}</code></pre>
          </div>
        )}
      </div>
      
      <div className='post-actions'>
        <button className='action-button'>
          <span className='like-icon'>♥</span> {post.likes}
        </button>
        <button className='action-button'>
          <span className='comment-icon'>💬</span> {post.comments}
        </button>
      </div>
    </div>
  );
};

export default PostCard; 