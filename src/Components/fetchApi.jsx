import { useState, useEffect } from 'react';
import React from 'react';
import '../App.css';
import axios from 'axios';



const FetchApi = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(9);
  const [sort, setSort] = useState('');
  const [sortValue, setSortValue] = useState('');

  const sortOptions = ['name', 'category', 'rating', 'Price'];
  // useEffect(() => {
  //   axios
  //     .get(' http://localhost:8002/blogs')
  //     .then((response) => {
  //     //  console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const fetchData = async (page, limit, filter) => {
    setLoading(true);
    return axios({
      url: 'https://my-json-server.typicode.com/pabloescobar4/database/blogs',
      method: 'GET',
      params: {
        _page: page,
        _limit: limit,
        _sort: sort,
      },
    })
      .then((response) => {
        setLoading(false);
        // const data =(response.data)
        setData(response.data);
      })

      .catch((error) => {
        setLoading(true);
        setError(true);
      });
  };

  const [value, setValue] = useState(data);

  const hTol = (m) => {
    if (m === 'h') {
      let res = value.sort((a, b) => {
        return b.rating - a.rating;
      });
      setValue([...res]);
    } else if (m === 'l') {
      let res = value.sort((a, b) => {
        return a.rating - b.rating;
      });
      console.log(res);
      setValue([...res]);
    }
  };

  hTol();

  const handleSort = async (e) => {
    // setLoading(true);
    let value = e.target.value;
    setSortValue(value);
    return axios({
      url: `https://my-json-server.typicode.com/pabloescobar4/database/blogs?_sort=${value}&_order=asc`,
      method: 'GET',
      params: {
        _page: page,
        _limit: limit,
      },
    })
      .then((response) => {
        //setLoading(false);

        setData(response.data);
      })

      .catch((error) => {
        setLoading(true);
        setError(true);
      });
  };

  useEffect(() => {
    fetchData(page, limit);
    handleSort(value);
    // setLow(low.sort((a, b) => (a.rating) - (b.rating)));
    //  console.log(low);
  }, [page, limit]);
  //console.log(data)
  const sortm = () => {
    var result = data.map((x) => x.rating);

    result = result.map(Number);
    // console.log(result)
    var ans = result.sort((a, b) => a - b);
    console.log(ans);
  };
  // sortm();
  // const filteredPosts = (a) => {
  //   const update = data.filter((x) => x.rating === a);

  // };

  return (
    <div>
      {/* <button onClick= {sortL}>sortLto H rating</button> */}
      <div className="ml-96 mb-1 flex mt-16">
        <h5 className="bg-white drop-shadow-lg rounded-xl p-3 h-10  ml-4 w-24">
          Sort By:
        </h5>
        <select
          value={sortValue}
          onChange={handleSort}
          className="bg-white drop-shadow-lg rounded-xl p-1 hover:bg-blue-300 ml-4 w-48 "
        >
          <option key="id_1" value={3}>
            Please Select Value
          </option>
          {sortOptions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="container">
        {/* <button onClick={sortm}>sortLtoH</button> */}
        {data.map((a) => {
          return (
            <>
              <div>
                <div className="one  p-5 rounded-xl h-full ">
                  <div classname="img">
                    <img src={a.image} alt="" />
                  </div>

                  <div className=" mt-1 mb-2  ">
                    <div className="d1">
                      <div className="text-lg font-semi-bold ">
                        <h1>{a.name}</h1>
                      </div>

                      <div className="d1 mb-5">
                        <h1>{a.category}</h1>
                      </div>
                    </div>
                    <div className="  d2">
                      <div className="bg-green-700 w-10 rounded-md text-white pl-2 font-bold ">
                        <p>{a.rating}</p>
                      </div>
                      <div className="text-gray-500 mt-2 d2">
                        <h1>Rs {a.Price}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex ml-80 mb-10">
        <div>
          {' '}
          <button
            className="ml-84 bg-blue-400 rounded-xl p-1 hover:bg-blue-300"
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>
        </div>

        <div>
          <button
            className="ml-10 mr-10  bg-blue-400 rounded-xl p-1 hover:bg-blue-300"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
        <div className=" mb-1 ">
          Per Page
          <select
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className=" bg-white drop-shadow-lg rounded-xl p-1 hover:bg-blue-300 ml-4 "
          >
            <option key="id_1" value={3}>
              3
            </option>
            <option key="id_2" value={6}>
              6
            </option>
            <option key="id_3" value={9}>
              9
            </option>
          </select>
        </div>
      </div>

      {/* <button className="ml-10" onClick={() => filteredPosts('4.2')}>
        Sort
      </button> */}
    </div>
  );
};

export default FetchApi;
