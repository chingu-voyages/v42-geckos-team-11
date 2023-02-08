import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/upload.svg";
import { FilterContext } from "../components/NewPost";
import "../Styles/instagram.css";

function Image(props) {
  const uploadInputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const { filterType } = useContext(FilterContext);

  function handleClick() {
    uploadInputRef.current && uploadInputRef.current.click();
  }

  const handleChange = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };
  console.log(imageFile);

  const renderImage = () => {
    return (
      <div className="uploaded-image">
        <img src={imageFile} alt="" className={`newImage ${filterType}`} />
      </div>
    );
  };

  async function addPostHandler(post) {
    const response = await fetch("https://geckos-11-default-rtdb.firebaseio.com/feed.json", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const contentsRef = useRef("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const post = {
      cardImg: imageFile,
      contents: contentsRef.current.value,
      userID: "anonymous",
    };

    addPostHandler(post);
    navigate("/feed", { replace: true });
  }

  return (
    <div className="imageData">
      <form action="" className="upload-form">
        <div className="image-box" onClick={handleClick}>
          <input type="file" accept="image/*" onChange={handleChange} ref={uploadInputRef} />
          {imageFile ? (
            renderImage()
          ) : (
            <p className="fileLabel">
              <img src={logo} alt="" />
              Choose a file
            </p>
          )}
        </div>
        <p>Accepted files are: png, jpeg, svg</p>
        <textarea name="" placeholder="Description" id="" cols="10" rows="3" ref={contentsRef} />
        <button className="postBtn" onClick={submitHandler}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Image;
