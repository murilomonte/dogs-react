import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";

import UserContext from "../../UserContext";
import FeedIcon from "../../Assets/feed.svg?react";
import EstatisticasIcon from "../../Assets/estatisticas.svg?react";
import AdicionarIcon from "../../Assets/adicionar.svg?react";
import SairIcon from "../../Assets/sair.svg?react";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const {pathname} = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }
  return (
    <>
      {mobile ? (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      ) : null}
      <nav className={`${mobile ? styles.navMobile :styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
    </>
  );
};

export default UserHeaderNav;
