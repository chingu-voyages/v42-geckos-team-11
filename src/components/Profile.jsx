import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="wrapper">
      <main>
        <div className="cover">
          <img src="/public/images/icons/profile.jpg" alt="" />
        </div>
        <div className="profile-info">
          <h3>Evelyn Jonas</h3>
          <p className="handle">@Angelevie</p>
          <p className="city">Los Angeles</p>
          <p className="about">A n artist by day and a content creator by night. I love arts and anything filled with nature</p>
          <button>Edit Profile</button>
        </div>
        <div className="detail">
          <div className="profile-summery">
            <div className="icon"></div>
            <div className="summery">
              <span>2</span>
              <span>Posts</span>
            </div>
          </div>
          <div className="profile-summery">
            <div className="icon"></div>
            <div className="summery">
              <span>20</span>
              <span>followers</span>
            </div>
          </div>
          <div className="profile-summery">
            <div className="icon"></div>
            <div className="summery">
              <span>50</span>
              <span>following</span>
            </div>
          </div>
        </div>
        <div className="posts">
          <img src="public/images/post1.png" alt="post1" />
          <img src="public/images/post2.png" alt="post2" />
        </div>
      </main>
    </div>
  );
}
