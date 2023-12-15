"use client";
import * as tmImage from "@teachablemachine/image";
import { useEffect, useRef, useState } from "react";

type UploadProps = {};

export default function Upload({}: UploadProps) {
  const URL = "https://teachablemachine.withgoogle.com/models/a1Yoyh_wR/";
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const imageUploadInput = useRef<HTMLInputElement>(null);
  const predictImg = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [prediction, setPrediction] = useState<
    | {
        className: string;
        probability: number;
      }[]
    | null
  >(null);
  async function init() {
    const model = await tmImage.load(modelURL, metadataURL);
    const predictImg = document.createElement("img");
    predictImg.src = "/images/default.png";
    await model?.predict(predictImg); // warm up
    setLoading(false);
    setModel(model);
  }

  async function predict() {
    if (!model) return;
    if (!predictImg || !predictImg.current) return;
    const prediction = await model?.predict(predictImg.current);
    setPrediction(prediction);
  }

  useEffect(() => {
    init();
  }, []);

  const fireProbabilty =
    prediction?.find((p) => p.className === "fire")?.probability || 0;
  const notFireProbabilty =
    prediction?.find((p) => p.className === "not fire")?.probability || 0;

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <h3 className="mb-5 text-3xl font-bold">Upload Threat</h3>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <div
            onClick={() => {
              if (!imageUploadInput || !imageUploadInput.current) return;
              imageUploadInput.current.click();
            }}
            className="group inline-block relative w-full h-[300px]"
          >
            <img
              ref={predictImg}
              id="image"
              src="/images/default.png"
              className="w-full h-full object-cover cursor-pointer hover:opacity-50 transition-opacity duration-300 ease-in-out"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-t-[-50%] pointer-events-none">
              <div className="text-xl text-gray-400">Click to upload image</div>
            </div>
          </div>
          <input
            ref={imageUploadInput}
            type="file"
            className="hidden"
            onChange={async (event) => {
              if (!event.target.files) return;
              const image = event.target.files[0];
              const reader = new FileReader();
              reader.onload = (e) => {
                if (!e.target) return;
                const img = document.getElementById("image");
                if (!img) return;
                img.setAttribute("src", e.target.result as string);
              };
              reader.readAsDataURL(image);
              predict();
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="text-md font-bold text-[#E67701] w-24">Fire</div>
            <div className="text-md w-full text-white bg-[#ffb668] ">
              <div
                style={{
                  width: `${fireProbabilty * 100}%`,
                }}
                className="h-full p-2 bg-[#E67701] flex justify-end items-center overflow-hidden"
              >
                <span>{(fireProbabilty * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-md font-bold text-[#D84C6F] w-24">
              Not Fire
            </div>
            <div className="text-md w-full text-white bg-[#ff7d9d] ">
              <div
                style={{
                  width: `${notFireProbabilty * 100}%`,
                }}
                className="h-full p-2 bg-[#D84C6F] flex justify-end items-center overflow-hidden"
              >
                <span>{(notFireProbabilty * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
          {/* add message panel */}
          <textarea
            name=""
            id=""
            rows={7}
            className="border  border-black outline-none p-3"
            placeholder="Add message here..."
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="px-5 py-2 bg-primary text-white">Submit</button>
      </div>
    </>
  );
}
