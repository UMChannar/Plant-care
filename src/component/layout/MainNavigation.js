import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourite-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Plants</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Saved Plants</Link>
          </li>
          <li>
            <Link to="/AddPlant">Add Plants</Link>
          </li>
          <li>
            <Link to="/Favourites">
              My Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
