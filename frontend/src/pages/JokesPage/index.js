import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

function Index() {

    const [memes, setMemes] = useState([]);

    useEffect(async () => {
        await fetch("https://www.reddit.com/r/memes.json")
            .then(res => res.json())
            .then((body) => setMemes(body.data.children))
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className=' py-10 px-20  bg-cover ' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'}}>
                <div className='text-white text-4xl font-semibold text-center pb-8'>A good laugh heals a lot of hurts</div>
                <div className='flex flex-wrap justify-center gap-10'>
                {
                    memes.map((meme, index) => {
                        if(meme.data.post_hint === "image" && index!=2 && index!=15){
                            return (
                                <div className=' flex justify-center items-center shadow-xl'>
                                    <div></div>
                                    <img className='w-96 h-96 flex items-center justify-center rounded-lg' src={meme.data.url_overridden_by_dest} />
                                </div>
                            )
                        }  
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Index