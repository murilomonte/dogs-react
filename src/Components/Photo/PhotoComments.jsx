import React from "react";
import UserContext from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentSection = React.useRef(null);

  React.useEffect(() => {
    const sectionHeight = commentSection.current.scrollHeight;
    commentSection.current.scrollTop = sectionHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className={` ${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
