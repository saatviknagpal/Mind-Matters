import React from 'react'

function newsContainer() {
    return (
        <div className='newsContainer flex flex-col gap-3 p-5 bg-white shadow-md rounded-md'>
            <div className='newsTitle text-lg font-medium'>Cancer warning: White bread could boost your risk of cancer – expert - Verve times
            </div>
            <div className='newsAuthor text-md opacity-60'>Author: Rajib Mondal</div>
            <div><img className='w-full rounded-lg' src='https://cdn.images.express.co.uk/img/dynamic/11/750x445/1564244.jpg' /></div>
            <div>
                Hussain Abdeh, superintendent pharmacist from Medicine Direct, named the everyday food which could cause bowel cancer. Bowel cancer is one of the most common types of cancer diagnosed in the UK. Depe… [+2799 chars]
            </div>
            <a className='text-blue-600 underline' target='_blank' href='https://vervetimes.com/cancer-warning-white-bread-could-boost-your-risk-of-cancer-expert/'>Read More..</a>    
        </div>
    )
}

export default newsContainer