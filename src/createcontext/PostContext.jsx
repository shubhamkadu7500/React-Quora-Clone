import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { UserData } from "../data/UserData";


const PostContext = createContext();

function PostDataProvider ({ children}) {
  let [postData,setPostData] = useState([...UserData]);
  // console.log(postData)
  return(
      <PostContext.Provider value={{postData,setPostData}}>
          {children}
      </PostContext.Provider>
  )
}

PostDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


let usePostData = () => useContext(PostContext);

export { usePostData,PostDataProvider}
