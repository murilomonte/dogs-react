import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";

import UserContext from "../../UserContext";
import FeedIcon from "../../Assets/feed.svg?react";
import EstatisticasIcon from "../../Assets/estatisticas.svg?react";
import AdicionarIcon from "../../Assets/adicionar.svg?react";
import SairIcon from "../../Assets/sair.svg?react";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to={"/conta"} end>
        <FeedIcon />
        {mobile ? "Minhas fotos" : null}
      </NavLink>
      <NavLink to={"/conta/estatisticas"}>
        <EstatisticasIcon />
        {mobile ? "Estatística" : null}
      </NavLink>
      <NavLink to={"/conta/postar"}>
        <AdicionarIcon />
        {mobile ? "Adicionar foto" : null}
      </NavLink>
      <button onClick={handleLogout}>
        <SairIcon />
        {mobile ? "Sair" : null}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
