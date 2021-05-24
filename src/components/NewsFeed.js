import PostForm from './PostForm';
import Posts from './Posts';

const NewsFeed = (props) => {
    //console.log('these are props: ' + Object.keys(props))
    return (
        <>
            <PostForm/>
            <Posts/>
        </>
    );
};

export default NewsFeed;