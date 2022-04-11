import React from 'react';

const SignUp = ({formData, setFormData}) => {
  return (
    <div>
      <input
        type="Email"
        placeholder="Email"
        className="ml-96 border p-3 mt-12 w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
        value = {formData.Email}
		onChange={(e) => setFormData({...formData,Email:e.target.value})}
      />
      <input
        type="Password"
        placeholder="Password"
        className="ml-96 border mt-4 p-3  w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
        value = {formData.PassWord}
		onChange={(e) => setFormData({...formData,PassWord:e.target.value})}
      />
      <input
        type="Password"
        placeholder="Confirm Password"
        className="ml-96 mt-4 border p-3  w-1/4 border rounded-xl drop-shadow-sm hover:drop-shadow-md"
        value = {formData.ConfirmPassword}
		onChange={(e) => setFormData({...formData,ConfirmPassword:e.target.value})}
      />
    </div>
  );
};
export default SignUp;
