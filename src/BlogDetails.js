import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blogs ,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ id  , {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
   
    console.log(blogs);
    return ( 
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs &&  (
                 <article> 
                    <h2>
                        {blogs.title}
                    </h2>
                    <p>Written By {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
             )} 
        </div>
     );
}
 
export default BlogDetails;