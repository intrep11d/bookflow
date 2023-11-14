import atomichabitsImage from "./atomic-habits.jpg";

function BookCards() {
  return (
    <div className="flex w-[20rem] mt-[1%] h-[12.5rem] mr-[1.5rem]">
      {/* Use the imported image */}
      <img src={atomichabitsImage} alt="" className="shadow-xl"/>
      <p className="flex justify-center w-[100%]">Atomic Habits Blood!</p>
    </div>
  );
}

export default BookCards;
