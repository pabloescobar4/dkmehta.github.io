import React from 'react'
import Carousel from 'react-elastic-carousel';
import '../App.css'


 const Corusel = (props) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 5 },
	  ];
	  
  return(

	       <div className="  pb-10 bg-gray-100">
           <h1 className="text-3xl ml-36 p-10">Eat What makes you happy</h1>
        
          <Carousel itemsToShow={5}  itemsToScroll={5} breakPoints={breakPoints}>
            <div>
              <div className=" border border-red-100  ml-16  w-3/4 ">
           
                <div className=" ">
                  <div>
                    <img
                      className="rounded-full ml-12 w-4/5"
                      src="https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
                      alt=""
                    />
                  </div>
				  <h1 className="text-xl ml-12 mt-3">
					  Home Style
				  </h1>

                 
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className=" -red-100  ml-16 w-3/4 ">
               
                <div className=" m-1">
                  <div>
                    <img
                      className="rounded-full ml-5 w-4/5"
                      src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
                      alt=""
                    />
                  </div>
				  <h1 className="text-xl ml-12 mt-3">
					  Chicken
				  </h1>
                 
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className=" -red-100  ml-10 w-3/4 ">
              
                <div className=" m-1">
                  <div>
                    <img
                      className="rounded-full  ml-5 w-4/5"
                      src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                      alt=""
                    />
                  </div>

				  <h1 className="text-xl ml-12 mt-3">
					  Chinese
				  </h1>
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className=" -red-100   w-3/4 ">
                
                <div className=" m-1">
                  <div>
                    <img
                      className="rounded-full ml-5 w-4/5"
                      src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
                      alt=""
                    />
                  </div>
                 
				  <h1 className="text-xl ml-12 mt-3">
					 Momos
				  </h1>
                 
                </div>
              </div>
            </div>
            <div>
              {' '}
              <div className=" -red-100    w-3/4 ">
               
                <div className="rounded-full   w-4/5">
                  <div>
                    <img
                      className=""
                      src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                      alt=""
                    />
                  </div>

				  <h1 className="text-xl ml-7 mt-3">
					  Mexican
				  </h1>
                </div>
              </div>
            </div>

			<div>
              {' '}
              <div className=" -red-100   w-3/4">
               
                <div className="rounded-full w-4/5">
                  <div>
                    <img
                      className=""
                      src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
                      alt=""
                    />
                  </div>

				  <h1 className="text-xl ml-7 mt-3">
					  Home Style
				  </h1>
                </div>
              </div>
            </div>

			
           
		 </Carousel>
           
     </div>
   )
  }
export default Corusel