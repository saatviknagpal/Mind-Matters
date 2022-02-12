import React, {useState} from 'react'

const BlogContainer = ({blogs}) => {
    const [truncate, settruncate] = useState(true);
    return (
        <div className='blogContainer flex flex-col gap-3 p-5 bg-white shadow-md rounded-md'>
            <div className='blogTitle text-xl font-medium'>{blogs.title}
            </div>
            <div className='flex gap-10 items-center'>
                <div className='blogAuthor text-md opacity-80'>By: {blogs.author}</div>
                <div className='blogCreated text-sm opacity-60'>Date: {blogs.created_on}</div>
            </div>
            <div><img className='w-full rounded-lg' src={blogs.image_url} /></div>
            <div className={(truncate ? "line-clamp-5":" ")}>
                {blogs.description}
            </div>
            <div className='text-right text-blue-600 underline cursor-pointer' onClick={()=> settruncate(!truncate)}>Read More...</div>
        </div>
    )
}

export default BlogContainer