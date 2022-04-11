import React from 'react';
// import {formData,setFormData} from './Form'

const FormDetails = ({formData, setFormData}) => {
  return (
    <div className=" grid">
      <input
        type="text"
        placeholder="First Name"
        className="ml-96 border p-3 mt-12 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value={formData.firstName}
		onChange={(e) => setFormData({...formData,firstName:e.target.value})
		}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="ml-96 border p-3 mt-4 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value={formData.lastName}
		onChange={(e) => setFormData({...formData,lastName:e.target.value})}
      />
      <input
        type="text"
        placeholder="Username"
        className="ml-96 border p-3 mt-4 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value={formData.UserName}
		onChange={(e) => setFormData({...formData,UserName:e.target.value})}
      />
    </div>
  );
};
export default FormDetails;
