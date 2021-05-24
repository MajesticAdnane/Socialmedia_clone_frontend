import { Modal, Button } from 'react-bootstrap';
import { addComment } from '../fllux/actions/postActions';
import { connect } from 'react-redux';
import { useState } from 'react';

const PostDetails = ({addComment, comments, postID, posts}) => {
    const [newComment, setnewComment] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        addComment(postID, newComment);
        setnewComment('');
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Comments Section</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    comments.map((comment) => <p> {comment} </p>)
                }
            </Modal.Body>

            <Modal.Footer>
                <form onSubmit={handleSubmit}>
                    <textarea value={newComment} placeholder="add a new comment"  style={{resize: 'none', marginRight: '300px', width: '80%'}}
                        onChange={(e) => setnewComment(e.target.value)}
                    />
                    <Button variant="primary" type="submit">Send it</Button>    
                </form>
                
            </Modal.Footer>
        </>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

const mapActionsToProps = {
    addComment
};

export default connect(mapStateToProps, mapActionsToProps)(PostDetails);