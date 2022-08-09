import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Adduser() {

const [tenant_name, setTenant_name] = useState("");
const [item_name, setItem_name] = useState("");
const [rental_start_date, setRental_start_date] = useState("");
const [lease_end_date, setLease_end_date] = useState("");
const [id_number, setId_number] = useState("");
const [phone_number, setPhone_number] = useState("");

const navigate = useNavigate()

const data = {
  tenant_name:tenant_name,
  item_name:item_name,
  rental_start_date:rental_start_date,
  lease_end_date:lease_end_date,
  id_number:id_number,
  phone_number:phone_number
}

function Submit(e) {
  e.preventDefault();

  axios.post("http://localhost:3005/rentals", data)
.then(
    navigate('/')
  )
}

  return (
    <div>
       <h1 className='text-black text-3xl font-semibold font-montserrat overflow-hidden overflow-y-scroll mt-8'>Add user</h1>
       <div className="flex justify-center overflow-hidden overflow-y-scroll mt-8">
  <div className="mb-2 xl:w-96">
    <form className='w-[100%] h-full flex flex-col justify-center item-center '>
    <input
    value={tenant_name}
    onChange={e => setTenant_name(e.target.value)}
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-2
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Masukan Nama"
    />
     <input
     value={item_name}
    onChange={e => setItem_name(e.target.value)}
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="masukan nama item"
    />
     <input
     value={rental_start_date}
    onChange={e => setRental_start_date(e.target.value)}
      type="date"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Masukan tanggal awal"
    />
     <input
     value={lease_end_date}
    onChange={e => setLease_end_date(e.target.value)}
      type="date"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Masukan tanggal akhir"
    />
     <input
     value={id_number}
    onChange={e => setId_number(e.target.value)}
      type="number"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Masukan nomor KTP"
    />
     <input
     value={phone_number}
    onChange={e => setPhone_number(e.target.value)}
      type="phone"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mt-5
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Masukan nomor HP"
    />
   <button onClick={Submit} type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou mt-5">Add User</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Adduser
