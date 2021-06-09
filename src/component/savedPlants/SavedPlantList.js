import SavedPlantItems from "./SavedPlantItems";
import classes from "./SavedPlantList.module.css";

function SavedPlantList(props) {
  return (
    <ul className={classes.list}>
      {props.plants.map((plant) => (
        <SavedPlantItems
          key={plant.id}
          id={plant.id}
          image={plant.image}
          title={plant.title}
          scientificName={plant.scientificName}
          description={plant.description}
        />
      ))}
    </ul>
  );
}

export default SavedPlantList;
