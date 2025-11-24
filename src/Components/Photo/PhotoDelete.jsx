import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja apagar?");
    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(token, id);
      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
