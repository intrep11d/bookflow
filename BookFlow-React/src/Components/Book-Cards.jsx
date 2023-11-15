import atomichabitsImage from "./atomic-habits.jpg";
import { useState } from "react";

function BookCards() {
  const [book1, setBook1] = useState("Atomic Habits");

  return (
    <div className="flex w-[19rem] mt-[1%] h-[12.5rem] mr-[1.5rem] border rounded-xl">
      {/* Use the imported image */}
      <img src={atomichabitsImage} alt="" className="flex ml-[1rem] mt-[1rem] shadow-xl w-[50%] h-[75%]"/>
      <p className="flex justify-center w-[100%] mt-[0.5rem]">{book1}</p>
    </div>
  );
}

export default BookCards;
