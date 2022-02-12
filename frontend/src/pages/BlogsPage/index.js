import React, { useEffect, useState } from 'react'
import BlogContainer from './components/blogContainer'
import NewsContainer from './components/newsContainer'

function BlogsPage() {

  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=62912e6bd7394155b75d8c5eb5ccd8d8")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(async () => {
    await fetch("http://localhost:8000/blog/list/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='blogsPage container max-w-7xl mx-auto flex justify-center items-center' >
      <div className='w-2/3 bg-red-50 space-y-5 h-screen p-5 overflow-y-scroll'>
        <div className='text-3xl font-semibold pb-3'>Blogs...</div>
        <BlogContainer />
        <BlogContainer />
        <BlogContainer />
      </div>
      <div className='w-1/3 bg-orange-100 space-y-5 h-screen p-5 overflow-y-scroll'>
        <div className='text-3xl text-black font-semibold pb-3'>News...</div>
        {
          news.map((data, id) => {
            return <NewsContainer news={data} key={id} />
          })
        }
      </div>
    </div>
  )
}

export default BlogsPage