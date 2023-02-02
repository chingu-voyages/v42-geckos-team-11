import "./Card.css";

export default function Card(props) {
  const { profileImg, userID, cardImg, contents } = props.data;

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="profile">
          <img src={profileImg} alt="profileImg" />
        </div>
        <div className="userID">{userID}</div>
      </div>
      <div className="cardBody">
        <div className="reactions">
          <img src="./images/dislike.svg" alt="dislike button" className="dislike" />
          <img src="./images/bookmark.svg" alt="bookmark button" className="bookmark" />
        </div>
        <div className="cardImg">
          <img src={cardImg} alt="cardImg" />
        </div>
        <div className="reactions">
          <img src="./images/like.svg" alt="like button" className="like" />
          <img src="./images/comment.svg" alt="comment button" className="comment" />
        </div>
      </div>
      <div className="contents">{contents}</div>
    </div>
  );
}
