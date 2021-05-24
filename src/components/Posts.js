import Post from "./Post";
import { useEffect } from 'react';
import { connect } from "react-redux";
import { getPosts } from '../fllux/actions/postActions';

const Posts = ({posts, getPosts, user}) => {
    useEffect(() => {
        getPosts(false);
    }, [user]);
    
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            { posts.map((post) => <Post key={post._id} post={post}/>) }
        </div>
        
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        user: state.auth.user
    };
};

const mapActionsToProps = { getPosts };

export default connect(mapStateToProps, mapActionsToProps)(Posts);