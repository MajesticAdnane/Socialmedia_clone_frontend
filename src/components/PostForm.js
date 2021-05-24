import { Button } from 'react-bootstrap';
import image from '../logo.svg';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../fllux/actions/postActions';

const PostForm = ({addPost}) => {
    const [post, setPost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            content: post,
            postDate: Date.now()
        };
        addPost(newPost);

        setPost('');
    };

    return (
        <div style={{marginTop: '2%', marginLeft: '25%'}}>
            <img src={image} alt="profil pic later" style={{height: '60px', width: '60px'}}/>    

            <form style={{marginLeft: '65px', marginTop: '-60px'}} onSubmit={handleSubmit}>
                <textarea value={post} placeholder="Share your news" style={{resize: 'none', height: '100px', width: '60%'}}
                    onChange={(e) => setPost(e.target.value)}/>
                <Button shape="round" type="submit" variant="primary" style={{marginBottom: '30px'}}> Post </Button>   
           </form>
        </div>
    );
};

const mapActionsToProps = { addPost };

export default connect(null, mapActionsToProps)(PostForm);
