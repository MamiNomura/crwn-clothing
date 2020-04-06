import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const dataArray = await response.json();
      setData(dataArray[0]);
    };
    fetchData();
  });
};
