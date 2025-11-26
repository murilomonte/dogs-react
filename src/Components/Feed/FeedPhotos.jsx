import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({
        page: page,
        total: total,
        user: user
      });
      const { response, json } = await request(url, options);
      console.log('request');
      
      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
        <ul className={`${styles.feed} animLeft`}>
          {data.map(photo => {
            return <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
          })}
        </ul>
    );
  }
  return null
};

export default FeedPhotos;
