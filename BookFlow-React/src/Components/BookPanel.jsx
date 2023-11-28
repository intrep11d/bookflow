import atomBook from "./atomic-habits.jpg";

//THIS IF OR NEW RELEASES IN THE FRONT LANDINGPAGE

function BookPanel(props) {
  const { image, author, title, Synopsis } = props;
  return (
    <div className="flex BookPanel w-[90%] h-[12rem] items-center bg-[url('/atomic-habits.jpg')] pt-[1rem] pb-[1rem] pl-[1rem] pr-[1rem] shadow-2xl rounded-xl bg-red-400">
      <img
        src={atomBook}
        alt=""
        className=" w-[9rem] h-[8rem] mt-[rem] rounded-xl shadow-[6px_6px_7px_2px_rgba(0,0,0,0.3)]"
      />
      <div className="bookPanelInfo flex flex-col ml-[1rem]">
        <h1 className="text-[1rem]">Atomic Habits</h1>
        <div className="author flex text-[0.7rem]">
          <h1>By</h1>
          <h1 className="ml-[0.3rem]">{props.author} James clear</h1>
        </div>
        <h1 className="text-[0.6rem]">rating</h1>
        <p className="mt-[0.2rem] text-[58%]">
          Lorem ipsum dolor sit amet cosectetur adipisicing elit. Nam
          consequuntur rem tenetur numquam, reiciendis similique reprehenderit
          quos rerum expedita dolorem.
        </p>
      </div>
    </div>
  );
}

export default BookPanel;
