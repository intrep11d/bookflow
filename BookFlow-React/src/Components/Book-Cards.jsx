import atomichabitsImage from "./atomic-habits.jpg";
import { useState } from "react";

function BookCards() {
  const [book1, setBook1] = useState("Atomic Habits");

  const data = [
    {
      title: `Atomic Habits`,
      img: atomichabitsImage,
      synopsis: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, tenetur.`,
    },
    {
      title: `Michael Jordan`,
      img: atomichabitsImage,
      synopsis: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, officia?`,
    },
    {
      title: `Dave Michael`,
      img: atomichabitsImage,
      synopsis: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, exercitationem!`,
    },
  ];

  return (
    <div className="flex">
      {data.map((data) => (
        <div className="Carousel flex w-[19rem] mt-[1%] h-[12.5rem] mr-[1.5rem] border rounded-xl">
          <div className="imgParent flex">
            <div className="imgDiv flex w-[70%]">
              <img src={data.img} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="synopsisDiv flex w-[100%]">
                  <h1>{data.title}</h1>
                </div>
                <div className="bookTitle flex text-[0.2rem]">
                <p>{data.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCards;
