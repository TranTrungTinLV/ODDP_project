import axios from "axios";
import { useState } from "react";

// FormInput.js - Component cho mỗi input trong form
const FormInput = ({ label, ...rest }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...rest}
        />
      </div>
    );
  };
  
  // ContractForm.js - Component cho form thêm mới hợp đồng
  const ContractForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        yearOfBirth: '',
        address: '',
        ssn: '',
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(prevState =>({
            ...prevState,
            [name] : value
        }))
    };

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:4000/fullcontracts', formData);
        console.log('Success:', response.data);
        // Chuyển đến trang bảng sau khi thêm mới thành công
        window.location.href = '/table-contract';
      } catch (error) {
        console.error('Error:', error);
        // Xử lý lỗi
      }
    }
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="text-lg font-bold text-gray-700">Thêm mới</h1>
        </div>
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <FormInput label="Họ tên người mua:" type="text" name="customerName" value={formData.customerName} onChange={handleChange}/>
            <FormInput label="Sinh năm:" type="number" name="yearOfBirth" value={formData.yearOfBirth} onChange={handleChange}/>
            <FormInput label="CMND:" type="text" name="ssn" value={formData.ssn} onChange={handleChange}/>
            <FormInput label="address:" type="text" name="address" value={formData.address}  onChange={handleChange}/>
 <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Lưu
        </button>
       </form>
        {/* ...các input khác */}
       
      </div>
    );
  };
  
  // ContractManagementPage.js - Trang quản lý hợp đồng
  const ContractManagementPage = () => {
    return (
      <div className="container mx-auto px-4">
        <nav className="bg-green-500 p-3">
          {/* Nội dung thanh điều hướng */}
        </nav>
        <div className="flex justify-between items-center my-4">
          <div className="flex-1">
            {/* Nội dung tìm kiếm */}
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Thêm mới
          </button>
        </div>
        <ContractForm />
      </div>
    );
  };
  
  export default ContractManagementPage;
  