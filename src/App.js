import React, { useState } from "react";
import List from "./components/List";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.scss";

const API_KEY = process.env.REACT_APP_GOOD_DEADS_API_KEY

const App = () => {
  const [books, setbooks] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const fetchBooks = async () => {
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${API_KEY}&q=${document.getElementById("search-text").value}`;

    axios.get(requestUri).then(res => {
      parseXMLResponse(res.data);
    });
  };

  const parseXMLResponse = response => {
    const parser = new DOMParser();
    const XMLResponse = parser.parseFromString(response, "application/xml");
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    
    setbooks(searchResults);
    setCurrentPage(true)
  };

  const XMLToJson = XML => {
    const allNodes = new Array(...XML.children);
    const jsonResult = {};
    allNodes.forEach(node => {
      if (node.children.length) {
        jsonResult[node.nodeName] = XMLToJson(node);
      } else {
        jsonResult[node.nodeName] = node.innerHTML;
      }
    });
    return jsonResult;
  };

  const indexOfLastPost = currentPage * booksPerPage;
  const indexOfFirstPost = indexOfLastPost - booksPerPage;
  const booksList = books.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="good-deads">
      <h1 className="text-primary">Search here...</h1>
      <input type="text" id="search-text" onChange={() => fetchBooks()} />
      <List books={booksList} loading={isloading} />
      <Pagination
        booksPerPage={booksPerPage}
        totalbooks={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
