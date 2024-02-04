import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "../styleSheets/postDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { fetchPostDetails } from "../redux/feature/PostDetailsSlice";

export default function PostDetails() {
  const [detailClicked,setDetailClicked] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.PostDetails);
  const {loading,allPostsData,error} = useSelector(state=>state.AllPosts);
  const [morePost,setMorePost] = useState();
  useEffect(()=>{
    setMorePost(allPostsData.filter((item)=>item.id!=postDetails.id))
  },[])


 const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); 
  };

  function toPostDetails(item){
    dispatch(fetchPostDetails(item));
    navigate("/item/"+item.id);
    scrollToTop()
  }

  return (
    <div className="postDetails-container">
    <div className="post-details">
      <div className="post-title-div">
        <div onClick={()=>navigate("/")}>
      <FontAwesomeIcon icon={faArrowLeftLong} />
        </div>
      <h2>Post Number {postDetails.id}</h2>
      </div>
      <div className="post-details-div">
      <img src={"https://picsum.photos/200?random="+postDetails.id} alt={postDetails.title} />
      <div className="post-button-div">
        <button onClick={()=>setDetailClicked(true)}>Detail</button>
        <button onClick={()=>setDetailClicked(false)}>User Info</button>
        <p>{detailClicked?postDetails.body:`Post was Posted By ${postDetails.id}`}</p>
      </div>
      </div>
    </div>
    <div className="more-posts-container">
      <h2>More Posts</h2>
      <div className="all-posts-container">
        {
          morePost && morePost.map((item)=>{
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
    </div>
  );
}
