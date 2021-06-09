import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouritePlant) => {},
  removeFavourite: (plantId) => {},
  itemIsFavourite: (plantId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouritePlant) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouritePlant);
    });
  }

  function removeFavouriteHandler(plantId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((plant) => plant.id !== plantId);
    });
  }

  function itemIsFavouriteHandler(plantId) {
    return userFavourites.some((plant) => plant.id === plantId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
