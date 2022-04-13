import React from 'react';
import { ImLocation2} from 'react-icons/im';
import {GoTriangleUp} from'react-icons/go'
import {RiSearchLine} from 'react-icons/ri'
import './Navbar.css'
export default function Navbar() {


  return (
    <>
    <div className = " -red-500 w-full h-48">
     <div className = "  border-blue-500 w-full h-16  ">
		 
	 <div className = "-black w-9/12 ml-36 mt-2 grid grid-cols-5  ">
	 <div className = " md:left-0">

		
<img className=" mt-1  w-3/4 p-2  lg:ml-10 md:-ml-96 sm:ml-96 " src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" />
 
 </div>

 <div className = " p-6  -gray-100 h-3/5 borderr flex">
 <ImLocation2 /> 
 <div className = "-mt-1 ml-2 text-gray-500">
 Home - Delhi Railway 
 </div>
 <div className=" pl-2">
	 <GoTriangleUp /> 

 </div>

 </div>

 <div className="flex p-1 mt-1 ml-4 w-96 ">
	 <div className="text-2xl mt-1 font-light text-gray-300">
		 |
	 </div>
 <div className="w-5 p-3">
	< RiSearchLine />
</div>
<div className="ml-3">
<input type="text" placeholder="Search for a restaurant cuisine or a dish " className="w-96  pl-4 h-10 rounded-2xl"/>
</div>

 </div>
 <div className="">
	<img className="ml-96 w-10" src="https://c8.alamy.com/compfr/2g2fc8f/icone-de-glyphe-blanc-vectoriel-en-forme-de-crepe-affiche-de-restauration-rapide-symbole-graphique-pour-le-site-web-de-cuisine-et-la-conception-d-applications-le-logo-l-application-l-interface-utilisateur-2g2fc8f.jpg" alt="" />
	<div className="w-10 ml-96 ">
		<div className="ml-12 -mt-7 font-sans font-medium text-lg">
		Mehtadk0
		</div>

	</div>
	
	</div>
	 </div>
	
	</div>
	
	<div className=" -blue-700 w-full h-10 ml-36 pl-5 p-2 flex mt-3">
		<div className="flex">
		<div className ="text-gray-500 text-xs ml-5 hover:text-red-400 cursor-pointer">
		Home 
		</div>
		<div className="text-gray-500 text-xs ml-3">
			/
		</div>
		</div>
		<div className="flex">
		<div className ="text-gray-500 text-xs ml-2 hover:text-red-400 cursor-pointer">
	   India
		</div>
		<div className="text-gray-500 text-xs ml-2">
			/
		</div>
		</div>
		<div className="flex">
		<div className ="text-gray-500 text-xs ml-2 hover:text-red-400 cursor-pointer">
		Delhi NCR
		</div>
		<div className="text-gray-500 text-xs ml-2">
			/
		</div>
		</div>
		<div className="flex">
		<div className ="text-gray-500 text-xs ml-2 hover:text-red-400 cursor-pointer">
		West Delhi
		</div>
		<div className="text-gray-500 text-xs ml-2">
			/
		</div>
		</div>
		<div className="flex">
		<div className ="text-gray-300 text-xs ml-2  cursor-pointer">
		Mayapuri Phase 2 Restaurants
		</div>
		<div className="text-gray-500 text-xs ml-2">
			/
		</div>
		</div>
	
		

	</div>
	</div>

	
    </>
  );
}
