import "./Card.css";

export default function Card(props) {
  const { userID, cardImg, contents } = props.data;

  const randomColor = Math.floor(Math.random() * 256 * 256 * 256)
    .toString(16)
    .padStart(6, 0);

  const profileColor = {
    backgroundColor: `#${randomColor}`,
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <div className="profile" style={profileColor}></div>
        <div className="userID">{userID}</div>
      </div>
      <div className="cardBody">
        <div className="cardImg">
          <img src={cardImg} alt="cardImg" />
        </div>
      </div>
      {contents && <div className="contents">{contents}</div>}
    </div>
  );
}
