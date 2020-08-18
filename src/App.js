import React, { useEffect, useState } from "react";

function RandomBeer() {
  const [name, setName] = useState();
  const [volumeValue, setVolumeValue] = useState();
  const [volumeUnit, setVolumeUnit] = useState();

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((results) => results.json())
      .then((data) => {
        setName(data[0].name);
        const { volume } = data[0];
        setVolumeValue(volume.value);
        setVolumeUnit(volume.unit);
      });
    // the [] makes sure the data only gets fetched once
  }, []);

  return (
    <div>
      {name}: {volumeValue} {volumeUnit}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>
        React Beer Api learned from https://www.youtube.com/watch?v=Edw1Bq59VwU
      </h1>
      <RandomBeer />
    </div>
  );
}

export default App;
