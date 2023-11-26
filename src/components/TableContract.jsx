import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function TableContract() {
    const [contracts, setContracts] = useState([]);
    useEffect( ()=>{
        axios.get('http://localhost:4000/fullcontracts').then(response =>{
            setContracts(response.data);
        }).catch(error => console.error(error))
    },[]);
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">#</th>
                            <th scope="col" className="px-6 py-4">Customer Name</th>
                            <th scope="col" className="px-6 py-4">Year of Birth</th>
                            <th scope="col" className="px-6 py-4">SSN</th>
                            <th scope="col" className="px-6 py-4">Address</th>
                            <th scope="col" className="px-6 py-4">Order Code</th>
                            {/* Thêm các cột khác nếu cần */}
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((contract, index) => (
                            <tr className="border-b dark:border-neutral-500" key={contract._id}>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                <td className="whitespace-nowrap px-6 py-4">{contract.customerName}</td>
                                <td className="whitespace-nowrap px-6 py-4">{contract.yearOfBirth}</td>
                                <td className="whitespace-nowrap px-6 py-4">{contract.ssn}</td>
                                <td className="whitespace-nowrap px-6 py-4">{contract.address}</td>
                                <td className="whitespace-nowrap px-6 py-4">{contract.orderCode}</td>
                                {/* Hiển thị các trường khác tương tự */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


  )
}
