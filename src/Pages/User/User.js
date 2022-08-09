import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function User() {

const [rental, setRental] = useState();

useEffect(() => {
    axios.get(`http://localhost:3005/rentals/${id}`).then((res) => {
        setRental(res.data);
    })
  }, [])

  const {id} = useParams()


  return (<div>
    <Link to="/" type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out mt-8">Home Page</Link>
    <div className='w-full h-full flex  justify-center item-center'>
        {rental && (
            <>
                <div className='w-[700px] h-[350px] flex px-6 py-4 border border-black mt-8 justify-center items-center '>
                    <div className='w-5/12 flex flex-col space-y-4'>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>Nama </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>Jenis Item </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>tanggal awal sewa </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>tanggal akhir sewa </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>Nomor KTP </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>nomor HP </h2>
                    </div>
                    <div className='w-7/12 flex flex-col space-y-4'>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.tenant_name} </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.item_name} </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.rental_start_date} </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.lease_end_date} </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.id_number} </h2>
                        <h2 className='text-black font-semibold font-inter text-2xl border-b border-black text-left'>:  {rental.phone_number} </h2>
                    </div>
                   
                </div>
            </>
        )}

    </div>
    </div>
  )
}

export default User
