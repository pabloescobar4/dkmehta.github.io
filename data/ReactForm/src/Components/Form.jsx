
import React ,{useState} from 'react'
import FormDetails from './FormDetails'
import OtherInfo from './Otherinfo'
import SignUp from './SignUp'
import '../App.css'





 const Form = () => {
	 const [page,setPage] =useState(0)
	 const FormTitles = ["FormDetails","SignUp","Otherinfo"]
     const [formData ,setFormData] =useState({
		 firstName:"",
		 LastName:"",
		 UserName:"",
		 Address:"",
		 State:"",
		 Pincode:0,
		 Email:"",
		 PassWord:"",
		 ConfirmPassword:"",
	 })
	 console.log(formData)
	 const PageDisplay = () => {
		
		 if(page===0){
         return <FormDetails formData={formData} setFormData={setFormData} />
		 } else if(page===1){
			 return <SignUp formData={formData} setFormData={setFormData} />
		 }else{
			 return <OtherInfo formData={formData} setFormData={setFormData} />
		 }
	 }
  return(
	  <>
	  <div className=" border-red-400 text-2xl ml-96 pt-10 pl-24">
			<div className="ml-5">
			{FormTitles[page]}
			</div>
	  
		</div>
	<div>
			
		<div>
			<div className=" progress ">
              <div style= {{width: page ===0 ? "33.3%" : page===1 ? "66.6%" : "100%" }}>

			  </div>
			</div>
		</div>
	
		<div className="">
		<h1>{PageDisplay()}</h1>
		</div>
		<div className="pl-36">
<button disabled={page == 0} onClick={() =>{
	setPage((currPage=>currPage-1))
}} className="border p-1.5 ml-80 bg-red-200 w-24 mt-10 p-2 rounded-xl hover:bg-red-300">
	Prev
</button>
<button onClick={() =>{
	if((page === FormTitles.length -1 )&& (formData !== {})){
		alert("Submission is recorded")
		console.log(formData)
	}else if ( formData === {}){
	   alert ("Fill all the")
	}else{
		setPage((c)=>c+1)
	}
}} className="border p-1.5 ml-6 bg-red-200 p-2 w-24 rounded-xl hover:bg-red-300">
{page===FormTitles.length -1 ?"Submit":"Next"}

</button>
		</div>
	
	</div>
	</>
   )
  }
export default Form




