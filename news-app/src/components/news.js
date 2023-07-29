import React, { useState, useEffect } from 'react';
import Newsitem from './newsitem';

export default function News(props) {
  const [text, settext] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=92943a8fe7ce4050ade39cee0f50b3ef&page=${page}`;
      let response = await fetch(url);
      let data = await response.json();
      settext(data.articles);
    };

    fetchData();
  }, [page]); // Add 'page' as a dependency here, so it will refetch data when 'page' changes.

  const handlenextclick = async () => {
    setpage(page + 1);
  };
  const handleprevclick =async ()=>{
    setpage(page-1);
  }
  return (
    <>
      <h1>Top news of the day are</h1>
      <div className="container my-3">
        <div className="row">
          {text.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title ? element.title : ''}
                description={element.description ? element.description : ''}
                imgurl={element.urlToImage}
                newsurl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={handleprevclick}>
          prev
        </button>
        <button type="button" className="btn btn-dark" onClick={handlenextclick}>
          next
        </button>
      </div>
    </>
  );
}