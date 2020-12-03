import Post from './Post';
import Container from 'react-bootstrap/Container';


const PostList = (props) => {
    return (
        <Container>
            {props.posts.map(post => {
                return (
                    <Post
                        userName={post.userName}
                        image={post.image} 
                        message={post.message}
                        profilePic={post.profilePic}
                    />
                );
            })}
        </Container>
    );
}

export default PostList;