import Comment from './Comment';
import Avatar from './Avatar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Post = (props) => {
    return (
        <Row>
            <Col>
                <div style={{maxWidth: 700, marginTop: 10, boxShadow: '0px 0px 4px black', marginBottom: 10, padding: 5, borderRadius: '5%', marginLeft: '25%'}}>
                    <Avatar userName={props.userName} profilePic={props.profilePic} />
                    <img 
                    style={{maxWidth: '100%'}}
                    src={props.image} />
                    <p style={{float: 'left', padding: 5}}>
                        {props.message}
                    </p>
                    <Comment />
                </div>
            </Col>
        </Row> 
    );
}


export default Post;