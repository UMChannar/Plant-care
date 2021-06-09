import {
  useHistory
} from "react-router-dom";
import NewPlantForm from "../component/savedPlants/NewPlantForm";

function AddPlant() {
  const history = useHistory();

  function addPlantHandler(plantData) {
    fetch(
      "https://plant-care-app-427d7-default-rtdb.firebaseio.com/plants.json", {
      method: "POST",
      body: JSON.stringify(plantData),
      headers: {
        "Content-Type": "application/json",
      },
    }
    ).then(() => {
      history.replace("/");
    });
  }

  return (< section >
    <h1> Add New Plant </h1> <
      NewPlantForm onAddPlant={
        addPlantHandler
      }
    /> </section >
  );
}

export default AddPlant;