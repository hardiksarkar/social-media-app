import React, { useEffect } from "react";
import "../styleSheets/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { getPosts } from "../redux/feature/AllPosts/AllPostsSlice";
import { fetchPostDetails } from "../redux/feature/PostDetailsSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,allPostsData,error} = useSelector(state=>state.AllPosts);
  if(error){
    console.log("Error : ",error);
  }
  useEffect(()=>{
    dispatch(getPosts());
  },[])

  function toPostDetails(item){
    dispatch(fetchPostDetails(item));
    navigate("/item/"+item.id);
  }

  return (
    <div className="home">
      <h1>Social Media For Travellers</h1>
      <input
        type="text"
        name="search"
        placeholder="Search here..."
        className="search-input"
      />
      <div className="all-posts-container">
        {
          allPostsData && allPostsData.map((item)=>{
            return <div className="post-div" key={item.id}>
            <img
              src={"https://picsum.photos/200?random="+item.id}
              alt={item.title}
              className="post-image"
            />
            <div className="post-body-div">
              <div>
                <h3 className="post-title">{item.title}</h3>
                <p className="post-desc">
                  {item.body} <span className="post-read-more" onClick={()=>toPostDetails(item)}>Read More</span>
                </p>
              </div>
              <div className="post-right-icon" onClick={()=>toPostDetails(item)}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
          })
        }
      </div>
    </div>
  );
}
