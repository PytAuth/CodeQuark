import React, { useState } from 'react';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard/PostCard';
import './Feed.css';
import avatar1 from '../../assets/avatars/1var.jpg';
import avatar2 from '../../assets/avatars/2var.jpg';
import avatar3 from '../../assets/avatars/3var.jpg';
const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postCode, setPostCode] = useState('');
  // const [post, setPost] = useState([]);
  const initialPosts = [
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: 'https://i.pravatar.cc/150?img=1',
      date: '2 часа назад',
      content: 'Сегодня завершила работу над новым алгоритмом машинного обучения. Удалось повысить точность на 15%. Код выложу на GitHub в ближайшее время!',
      likes: 24,
      comments: 5
    },
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: 'https://i.pravatar.cc/150?img=1',
      date: '2 часа назад',
      content: 'Сегодня завершила работу над новым алгоритмом машинного обучения. Удалось повысить точность на 15%. Код выложу на GitHub в ближайшее время!',
      likes: 24,
      comments: 5,
      code: `
      print("Hello, World!")
      `
    },
    {
      id: 2,
      author: 'Максим Иванов',
      avatar: 'https://i.pravatar.cc/150?img=2',
      date: '6 часов назад',
      content: 'Разработал новый подход к оптимизации SQL-запросов для больших объемов данных. В некоторых случаях скорость выполнения увеличилась в 3 раза!',
      code: `SELECT t1.column1, t2.column2 
FROM table1 t1
INNER JOIN table2 t2 ON t1.id = t2.id
WHERE t1.column1 > 100
ORDER BY t1.column1 DESC
LIMIT 10;`,
      likes: 42,
      comments: 12
    },
    {
      id: 3,
      author: 'Елена Петрова',
      avatar: 'https://i.pravatar.cc/150?img=5',
      date: 'Вчера',
      content: 'Поделитесь опытом, как вы организуете структуру React-проекта? Особенно интересуют подходы к организации компонентов и хуков.',
      likes: 18,
      comments: 32
    }
  ];
  const [posts, setPosts] = useState(initialPosts);
  const addNewPost = (newPost) => {
    // Создаем новый пост с уникальным ID и текущей датой
    const postToAdd = {
      ...newPost,
      id: Date.now(), // Уникальный ID на основе текущего времени
      date: 'Только что',
      likes: 0,
      comments: 0
    };
    
    // Добавляем пост в начало списка (новые посты показываются первыми)
    setPosts([postToAdd, ...posts]);
  };
  return (
    <div>
      <Header />
      <div className='feed-container'>
        <div className='feed-header'>
          <h1 className='feed-title'>Лента публикаций</h1>
          <>
            <button className='create-post-button' onClick={() => setIsModalOpen(true)}>
              <span className='plus-icon'>+</span>
              <span>Создать публикацию</span>
            </button>

            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <h2>Создать публикацию</h2>
                  <textarea 
                    placeholder="О чем вы хотите рассказать?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="post-textarea"
                  />
                  <textarea 
                    placeholder="Добавьте код (необязательно)"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    className="code-textarea"
                  />
                  <div className="modal-buttons">
                    <button className="cancel-button" onClick={() => setIsModalOpen(false)}>
                      Отмена
                    </button>
                    <button 
                      className="publish-button"
                      onClick={() => {
                        const newPost = {
                          id: posts.length,
                          author: "Текущий пользователь",
                          avatar: [avatar1, avatar2, avatar3][Math.floor(Math.random() * 3)],
                          date: "Только что", 
                          content: postContent,
                          code: postCode,
                          likes: 0,
                          comments: 0
                        };
                        setPosts([newPost, ...posts]);
                        setIsModalOpen(false);
                        setPostContent("");
                        setPostCode("");
                      }}
                    >
                      Опубликовать
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>

        
        <div className='posts-container'>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;

