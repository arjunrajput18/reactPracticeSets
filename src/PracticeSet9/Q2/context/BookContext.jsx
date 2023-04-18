import React, { createContext, useEffect, useState } from "react";
import { fakeFetch2 } from "../../Data";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [favListData, setFavListData] = useState([]);
  const [userData, setUserData] = useState({});
  const [favBookId, setFavBookId] = useState([]);
const [readId,setReadId]=useState([]) 
const [readList,setReadList]=useState([])
  console.log("ff", favListData);
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { books, user },
      } = await fakeFetch2(url);
      if (status === 200) {
        setBookData(books);
        setUserData(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/books");
  }, []);
  const addedToFav = (book) => {
    setFavListData([...favListData, book]);
    setFavBookId([...favBookId, book.id]);
  };
const addtoRead =(read)=>{
    setReadList([...readList,read])
    setReadId([...readId,read.id])
}


  return (
    <BookContext.Provider
      value={{ bookData, userData, addedToFav, favListData, favBookId,readId,addtoRead,readList }}
    >
      {children}
    </BookContext.Provider>
  );
};
