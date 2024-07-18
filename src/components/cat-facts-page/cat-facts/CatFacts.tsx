import * as React from "react";
import "./CatFacts.css";
import { getCatFact, getCatGif } from "../../../services/api";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

export function CatFacts() {
  const [catFact, setCatFact] = React.useState<string | null>(null);

  const [catGif, setCatGif] = React.useState<string | null>(null);

  const [factLoading, setFactLoading] = React.useState<boolean>(false);
  const [gifLoading, setGifLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  const fetchData = () => {
    setFactLoading(true);
    setGifLoading(true);

    getCatFact()
      .then((catFact) => {
        setCatFact(catFact);
        setFactLoading(false);
      })
      .catch(() => {
        setFactLoading(false);
      });

    getCatGif()
      .then((catGif) => {
        setCatGif(catGif);
        setGifLoading(false);
      })
      .catch(() => {
        setGifLoading(false);
      });
  };

  return (
    <div className="cat-facts-body">
      <h1 className="cat-fact-heading">Cat Facts Generator</h1>
      <button className="cat-fact-button" type="button" onClick={handleClick}>
        ⬇ Give me a random cat fact! ⬇
      </button>
      <div className="loading-wrapper">
        {(factLoading || gifLoading) && <LoadingScreen />}
      </div>

      {catGif && <img className="cat-fact-image" src={catGif}></img>}
      <div className="cat-fact-text">
        <p>{catFact}</p>
      </div>
    </div>
  );
}
