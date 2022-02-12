import React from 'react'
import BlogContainer from './components/blogContainer'
import NewsContainer from './components/newsContainer'

function BlogsPage() {
  return (
    <div className='blogsPage container max-w-7xlxl mx-auto flex justify-center items-center'>
      <div className='w-2/3 bg-red-50 space-y-5 h-screen p-5 overflow-scroll'>
        <div className='text-3xl font-semibold pb-3'>Blogs...</div>
        <BlogContainer />
        <BlogContainer />
        <BlogContainer />
      </div>
      <div className='w-1/3 bg-neutral-900 space-y-5 h-screen p-5 overflow-scroll'>
        <div className='text-3xl text-white font-semibold pb-3'>News...</div>
        <NewsContainer />
        <NewsContainer />
        <NewsContainer />
      </div>
    </div>
  )
}

export default BlogsPage