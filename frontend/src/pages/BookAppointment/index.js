import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function index() {
    return (
        <>
            <Navbar />
            <div className='container max-w-7xl mx-auto flex flex-col p-5'>
                <div className='flex justify-start items-center p-10'>
                    <img className='w-48 h-48 mr-20 border-white border-4 rounded-full' src='https://clinicalnotebook.com/wp-content/uploads/2015/04/Doctor-Profile-Pic-Example.png' />
                    <div className='text-xl flex flex-col gap-2 '>
                        <div>Name: Dr. Rajib Mondal</div>
                        <div>Qualification: PhD Neurology</div>
                        <div>Contact: +91 9958XXXXXX</div>
                        <div>Email: mondalrajib1910@gmail.com</div>
                    </div>
                    <div className='ml-auto text-2xl bg-orange-200 p-5 rounded-2xl'>Session Fees: 800/hr</div>
                </div>
            </div>
            <div className='p-10 bg-orange-100 w-screen'>
                <div className='max-w-7xl mx-auto text-2xl pb-5'>Slots Available:</div>
                <div className='max-w-7xl mx-auto text-xl flex items-center gap-10'>
                    <div className='bg-green-300 text-black py-2 px-5 rounded-lg'>1pm - 2pm</div>
                    <div>3pm - 4pm</div>
                    <div className='bg-green-300 text-black py-2 px-5 rounded-lg'>6pm - 7pm</div>
                </div>
                <div className='max-w-7xl mx-auto text-md pt-6 opacity-50'>*Select available slot and click on BOOK SLOT</div>
            </div>
            <div className='max-w-7xl mx-auto gap-5 flex items-center text-xl pt-10 text-white'>
                <label className='text-black' for="availability">Choose your slot:</label>
                <select className='rounded-lg w-56 h-10 text-black p-1' required name="availability" id="availability">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                <div className='w-max py-2 px-5 text-white bg-green-600 rounded-lg cursor-pointer'>Book Slot</div>
            </div>
        </>
    )
}

export default index