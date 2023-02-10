import "./css/Feed.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Mousewheel } from "swiper";
import Card from "./UI/Card";
import { useState, useCallback, useEffect } from "react";
import data from "../assets/slideDummy.json";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [slide, setSlide] = useState(data.dummy);

  const fetchPostData = useCallback(async () => {
    try {
      const response = await fetch("https://geckos-11-default-rtdb.firebaseio.com/feed.json");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedPost = [];
      for (const key in data) {
        loadedPost.push({
          id: key,
          userID: data[key].userID,
          cardImg: data[key].cardImg,
          contents: data[key].contents,
        });
      }
      setFeed(loadedPost);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPostData();
    setSlide(slide);
  }, [fetchPostData, slide]);

  const noPost = feed.length;

  const slides = slide.map((item) => (
    <SwiperSlide className="trendingBox">
      <div className="imgBox">
        <img src={item.img} alt="" />
      </div>
      <p className="tag">{item.tag}</p>
    </SwiperSlide>
  ));

  return (
    <section id="mainFeed" className="section">
      <Swiper className="trending" modules={[Navigation, Mousewheel]} spaceBetween={20} navigation mousewheel slidesPerView={"auto"}>
        {slides}
      </Swiper>

      <div className="container">
        {!noPost && <div className="noPost">No post</div>}
        {feed.map((item, idx) => {
          return <Card data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}
