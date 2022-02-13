import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'

function Index() {

    const [jokes, setJokes] = useState([]);
    const [joke, setJoke] = useState("");

    useEffect(async () => {
        await fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "8a5e65ef93msh9024850259194abp14860djsn8271bc22a1dc"
            }
        })
            .then(res => res.json())
            .then((data) => setJokes(data.jokes))
            .catch(err => {
                console.error(err);
            });
    }, [])

    useEffect(async () => {
        await fetch("https://api.chucknorris.io/jokes/random", {
            "method": "GET"
        })
            .then(res => res.json())
            .then((data) => setJoke(data.value))
            .catch(err => {
                console.error(err);
            });
    }, [])


    return (
        <>
            <Navbar />
            <div className=' py-10 px-20 flex flex-wrap justify-center gap-10 '>
                <div className='p-10 text-xl mx-24 shadow-xl w-full bg-orange-100 flex justify-center items-center'>
                    {joke}
                </div>
                {
                    jokes.map((joke, index) => {
                        return (
                            <div className='p-5 shadow-xl w-2/5 bg-orange-100 flex justify-center items-center'>
                                {joke.joke}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Index