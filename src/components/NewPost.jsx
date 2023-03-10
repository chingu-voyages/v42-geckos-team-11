import { useState } from "react";
import "./css/NewPost.css";
import Image from "./Image";
import { createContext } from "react";

export const FilterContext = createContext();

function NewPost() {
  const [filterType, setFilterType] = useState("");

  const value = {
    filterType,
    setFilterType,
  };

  return (
    <FilterContext.Provider value={value}>
      <div className="newpost-container">
        <h2 className="post-title">Create New Post</h2>
        <div className="postData">
          <Image />
        </div>
      </div>
    </FilterContext.Provider>
  );
}

export default NewPost;
