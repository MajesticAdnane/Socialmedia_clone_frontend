import { useState } from 'react';

import { Modal, Card } from 'react-bootstrap';
import PostDetails from './PostDetails';
import image from '../logo.svg';

const Post = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <PostDetails/>
            </Modal>

            <div style={{width: '40%'}}>
                <img alt="avatar" src={image} style={{width: '60px', height: '60px'}}/>
                <span style={{}}>
                    <b style={{}}> UserName </b>
                    <br/>
                    <textarea style={{resize: 'none', width: '90%', height: '5em', border: 'none', outline: 'none'}} readOnly> Hunter X Hunter have reached 900 days without a new chapter!
Hunter X Hunter is on Hiatus since issue 1 (2019) of Weekly Shonen Jump, making this the longest Hiatus streak in manga history.
Fans aren't sure the comeback will ever happen given Yoshihiro's health. The beloved creator has famously grappled with severe back pain, and Yoshihiro admits the injury is aggravated when drawing. </textarea>
                </span> <br/>
                <button>Like</button>
                <button>Comment</button>
            </div>
        </>
    );
};

export default Post;
/*<Card style={{marginLeft: '30%', marginRight: '35%'}}>
                <Card.Body>
                    <Card.Img variant="top" src={image} style={{height: '60px', width: '60px'}}/>
                    <Card.Title> User </Card.Title>
                </Card.Body>
            </Card>*/
