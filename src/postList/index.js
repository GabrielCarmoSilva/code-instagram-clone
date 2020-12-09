import Post from '../post';
import styles from './styles.module.css';

const PostList = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.list}>
        {props.posts.map((post) => (
          <Post
            key={post.id}
            userName={post.user.name}
            imageUrl={post.imageUrl}
            imageTitle={post.title}
            imageDescription={post.description}
          />
        ))}
      </div>
    </main>
  );
};

export default PostList;
