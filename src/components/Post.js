import { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import image from '../logo.svg';
import { connect } from 'react-redux';
import { deletePost, addComment } from '../fllux/actions/postActions';
import PostDetails from './PostDetails';

const Post = ({post, deletePost, addComment, firstName, lastName}) => {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
            >
                <PostDetails postID={post._id} comments={post.comments}/>
            </Modal>

            <div style={{width: '40%'}}>
                <img alt="avatar" src={image} style={{width: '60px', height: '60px'}}/>
                <span style={{}}>
                    <b style={{}}> {[firstName, lastName].join('  ')} </b>
                    <br/>
                    <i>Posted -{post.post_date}</i>
                    <textarea style={{resize: 'none', width: '80%', height: '5em', border: 'none', outline: 'none'}} readOnly> 
                        {post.content}
                    </textarea>
                    <Button style={{marginTop: '-200px'}} variant="danger" onClick={() => deletePost(post._id)}>Delete</Button> 
                </span>
                <br/>

                <Button variant="light">Like</Button>
                <Button variant="primary" onClick={() => setShow(true)}>Comment</Button>
            </div>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        firstName: state.auth.user.firstName,
        lastName: state.auth.user.lastName
    };
};

const mapActionsToProps = { deletePost, addComment };

export default connect(mapStateToProps, mapActionsToProps)(Post);
