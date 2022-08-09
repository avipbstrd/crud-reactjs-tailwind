import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

const [rentals, setRentals] = useState([]);

  const loadRentals = () => {
    axios.get("http://localhost:3005/rentals")
    .then((res)=> {
      setRentals(res.data.reverse());
    });
  };
 
  useEffect(() => {
    loadRentals()
}, []);

function Delete(id) {
  axios.delete(`http://localhost:3005/rentals/${id}` )
  .then(
    loadRentals()
  )

}

  return (
    <div className='w-full h-full felx flex-col px-10 py-8'>
        <h1 className='text-black text-3xl font-semibold font-montserrat'>Daftar sewa barang</h1>
       
        <div className="flex flex-col">
          
  <div className="overflow-x-auto sm:-mx-4 lg:-mx-3">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
    <div className=' text-left pl-14'>
        <Link to="adduser" type="button"  className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"> Tambah</Link>
        </div>
    <div className="w-full flex min-h-20vh] justify-center item-center">
        <table className="w-[90%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Nama
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Jenis Item
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                tanggal awal sewa
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                tanggal akhir sewa
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {rentals.map((data, index) => (

            
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.tenant_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.item_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.rental_start_date}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.lease_end_date}
              </td>
              <td className="flex-space-x-4 whitespace-nowrap">
              <Link to={`users/${data.id}`} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View</Link>
              &nbsp;
              <Link to={`/edituser/${data.id}`} type="button" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Edit</Link>
              &nbsp;
              <button onClick={()=>Delete(data.id)} type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Home
