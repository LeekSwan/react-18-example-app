import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        axios.get("https://waifu.it/api/v4/quote", { 
            headers: {
            Authorization: "MjEyNzkzNDUzMDI3OTE3ODI0.MTcxMTk4MDg1NA--.ae0643b18"
          } 
        })
        .then(function (response){
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        })
        .catch(function (err) {
            setError(err)
            setLoading(false)
        }) 
    }

    if (!data) {
        fetchData();
    }

  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <p>{data.anime}</p>
      <p>{data.author}</p>
      <p>{data.quote}</p>
    </div>
  );
};

export default MyComponent;
