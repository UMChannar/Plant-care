import { Route, Switch } from "react-router-dom";
import SavedPlants from "./Pages/SavedPlants";
import AddPlant from "./Pages/AddPlant";
import Favourites from "./Pages/Favourites";
import Layout from "./component/layout/Layout";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <SavedPlants />
        </Route>
        <Route path="/AddPlant">
          <AddPlant />
        </Route>
        <Route path="/Favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
