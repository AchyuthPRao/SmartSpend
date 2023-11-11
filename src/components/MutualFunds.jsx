import React, { useState, useEffect } from 'react';
import "../App.css"

function MutualFundsDashboard() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f6230d41722f41b68e729884bfaa76b2')
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles));
  }, []);

  return (
    <div className='bottom-right'>
      <h1 id='k' className='d-flex justify-content-center' style={{fontWeight: '600'}}>Top Business News Headlines</h1>
      <ol>
        {newsData.map((article, index) => (
          <li key={index}>
            <a  href={article.url} target="_blank" rel="noopener noreferrer" >
              <img className='imgn' src={article.urlToImage} alt={article.title} />
            </a>
            <h2>
              <a style={{textDecoration:'none' , color:'white'}} href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
            <p>Published on: {new Date(article.publishedAt).toLocaleString()}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MutualFundsDashboard;
