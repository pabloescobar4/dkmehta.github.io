import React from 'react';

const OtherInfo = ({formData, setFormData}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Address"
        className="ml-96 border p-3 mt-12 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value = {formData.Address}
		onChange={(e) => setFormData({...formData,Address:e.target.value})}
      />
      <input
        type="text"
        placeholder="State"
        className="ml-96 border p-3 mt-4 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value = {formData.State}
		onChange={(e) => setFormData({...formData,State:e.target.value})}
      />
      <input
        type="text"
        placeholder="Pincode"
        className="ml-96 border p-3 mt-4 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
		value = {formData.Pincode}
		onChange={(e) => setFormData({...formData,Pincode:e.target.value})}
      />
    </div>
  );
};
export default OtherInfo;
