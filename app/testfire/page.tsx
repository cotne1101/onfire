"use client";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import { useEffect, useState } from "react";

type pageProps = {};

export default function page({}: pageProps) {
  const URL = "https://teachablemachine.withgoogle.com/models/a1Yoyh_wR/";
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);

  async function init() {
    const model = await tmImage.load(modelURL, metadataURL);
    setModel(model);
    console.log(model);
  }

  async function predict() {
    const image = document.getElementById("image") as HTMLImageElement;
    const prediction = await model?.predict(image);
    console.log(prediction);
  }

  useEffect(() => {
    init();
  }, []);

  const maxPredictions = 3;

  return (
    <>
      <h1>Testfire</h1>
      <button onClick={predict}>Predict</button>
      {/* here some file upload thing */}
      {/* to upload photo */}
      <div>
        <img
          id="image"
          src="https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg"
          width="227"
          height="227"
        />
      </div>
      <div id="label-container"></div>
    </>
  );
}
