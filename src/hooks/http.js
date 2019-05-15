import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setFetchedData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch.');
          }
          return response.json();
        })
        .then(data => {
          setFetchedData(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
  }, dependencies);

  return [isLoading, data];
};

