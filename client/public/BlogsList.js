
import { useEffect } from 'react';
import useAuth from '../auth/useAuth';
import './Blogs.css'; // Import the CSS file

import {useGetBlogsQuery,useDeleteBlogMutation} from "./blogApiSlice"

const BlogsList = () => {

    
    const { data:blogs=[],isError,isLoading,refetch}=useGetBlogsQuery('',
        {
        // skip:true,
        //   pollingInterval: 15000,
        //  refetchOnFocus: true,
        // refetchOnMountOrArgChange: false
        }
     );

     const [ obj]=useAuth()

     useEffect(()=>{
        console.log("obj",obj)
        // console.log("username",username)

     },[])

    const [deleteBlog]=useDeleteBlogMutation()
   
    const handleDelete=(id)=>{
        deleteBlog(id)
    }
    


    if(isLoading) return <p>loading....</p>
    if(isError) return <p>error</p>
 
    return (
        <div className="blogs-list">
            <h2>Blogs List - {blogs.length}</h2>
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                    <div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-content">{blog.content}</p>
                    </div>
                    <button className="delete-btn" onClick={()=>handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
            <button onClick={refetch}>refresh</button>
        </div>
    );
};

export default BlogsList;
