import React from 'react'

const NewsContainer = ({news}) => {

    return (
        <div className='newsContainer flex flex-col gap-3 p-5 bg-orange-100 shadow-md rounded-md'>
            <div className='newsTitle text-lg font-medium'>{news.title}
            </div>
            <div className='newsAuthor text-md opacity-60'>Author: {news.author}</div>
            <div><img className='w-full rounded-lg' src={news.urlToImage} /></div>
            <div>
                {news.description}
            </div>
            <a className='text-blue-600 underline' target='_blank' href={news.url}>Read More..</a>
        </div>
    )
}

export default NewsContainer