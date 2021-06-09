import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import SavedPlantList from "../component/savedPlants/SavedPlantList";

function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet! Start adding some....</p>;
  } else {
    content = <SavedPlantList plants={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>Favourites Plants</h1>
      {content}
    </section>
  );
}

export default Favourites;
