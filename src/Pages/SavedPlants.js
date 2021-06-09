import { useState, useEffect } from "react";
import SavedPlantList from "../component/savedPlants/SavedPlantList";

function SavedPlants() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPlants, setLoadedPlants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://plant-care-app-427d7-default-rtdb.firebaseio.com/plants.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const plants = [];

        for (const key in data) {
          const plant = {
            id: key,
            ...data[key],
          };

          plants.push(plant);
        }

        setIsLoading(false);
        setLoadedPlants(plants);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Saved Plants</h1>
      <SavedPlantList plants={loadedPlants} />
    </section>
  );
}

export default SavedPlants;
