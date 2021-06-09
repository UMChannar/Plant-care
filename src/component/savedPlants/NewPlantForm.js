import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewPlantForm.module.css";

function NewPlantForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const scientificNameInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredScientificName = scientificNameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const plantData = {
      title: enteredTitle,
      image: enteredImage,
      scientificName: enteredScientificName,
      description: enteredDescription,
    };

    props.onAddPlant(plantData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Plant Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Plant Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="scientificName">Scientific Name</label>
          <input
            type="text"
            required
            id="scientificName"
            ref={scientificNameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Save Plant</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPlantForm;
