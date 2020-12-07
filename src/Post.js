import Comment from './Comment';
import Avatar from './Avatar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <Row>
            <Col>
                <article className={styles.post}>
                    <header className={styles.header}>
                        <img src={props.profilePic} className={styles.avatar} />
                        <strong>{props.userName}</strong>
                    </header>
                    <img 
                    className={styles.image}
                    src={props.image} />
                    <p style={{float: 'left', padding: 5}}>
                        {props.message}
                    </p>
                    <footer className={styles.footer}>

                    </footer>
                    <Comment />
                </article>
            </Col>
        </Row> 
    );
}


export default Post;