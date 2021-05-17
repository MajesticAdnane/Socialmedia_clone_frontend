import { Button, Col, Form, Row } from 'react-bootstrap';
import image from '../logo.svg';

const PostForm = () => {

    return (
        <div style={{marginTop: '2%', marginLeft: '25%'}}>
            <img src={image} alt="profil pic later" style={{height: '60px', width: '60px'}}/>    

            <form style={{marginLeft: '65px', marginTop: '-60px'}}>
                <textarea placeholder="Share your news" style={{resize: 'none', height: '100px', width: '60%'}}/>
                <Button  shape="round" type="primary" style={{marginBottom: '30px'}}> Post </Button>   
           </form>
        </div>
    );
};

export default PostForm;

/*<>
            <div className="d-flex justify-content-center" style={{marginTop: '2%', border: '2px solid'}}>
                <form style={{width: '50%', border: '2px solid', marginTop: '-20px'}}>
                    <img src={image} alt="profil pic later" style={{marginTop: '-70px', border: '2px solid', height: '60px', width: '60px'}}/>
                    <textarea placeholder="Share your news" style={{marginTop: '15px', border: '2px solid', resize: 'none', height: '80%', width: '80%'}}/>
                    <Button style={{border: '3px solid red', marginTop: '40px', marginRight: '30px'}} variant="primary">Post</Button> 
                </form>
            </div>
        </>*/