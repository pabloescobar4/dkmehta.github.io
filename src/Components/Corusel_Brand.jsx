import React from 'react'
import Carousel from 'react-elastic-carousel';
import '../App.css'


 const CoruselBrand= (props) => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 5 },
	  ];
	  
  return(

	       <div className="  pb-10 ">
           <h1 className="text-3xl ml-36 p-10">Top brands for you</h1>
        
          <Carousel itemsToShow={5}  itemsToScroll={5} breakPoints={breakPoints}>
            <div>
              <div className=" -red-100  ml-16  w-3/4 ">
           
                <div className=" ">
                  <div>
                    <img
                      className="rounded-full ml-10 w-4/5"
                      src="https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
                      alt=""
                    />
                  </div>
				  <h1 className="text-xl ml-12 mt-3">
					 McDonald's
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
                      src="https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp"
                      alt=""
                    />
                  </div>
				  <h1 className="text-xl ml-12 mt-3">
					  Subway
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
                      src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
                      alt=""
                    />
                  </div>

				  <h1 className="text-xl ml-12 mt-3">
					 Burger King
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
                      className="rounded-full ml-5 w-3/4"
                      src="https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"
                      alt=""
                    />
                  </div>
                 
				  <h1 className="text-xl ml-12 mt-3">
					Haldiram's
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
                      src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp"
                      alt=""
                    />
                  </div>

				  <h1 className="text-xl ml-7 mt-3">
					 KFC
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
export default CoruselBrand