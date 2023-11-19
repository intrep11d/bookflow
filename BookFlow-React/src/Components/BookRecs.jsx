function BookRec(props) {
  const { image, author, title, new: isNew } = props;
  return (
    <div className="relative recCardContainer" style={{ height: "13rem" }}>
      <div className="recCards flex w-[100%] justify-center items-center h-[100%] mt-[0rem] relative">
        {isNew && (
          <span className="absolute top-[1rem] right-[13.5rem] -mt-4 -mr-4 rounded-xl bg-[#076527] text-white w-[3rem] h-[1.5rem] flex items-center justify-center text-sm">
            <h1 className="font-bold">New</h1>
          </span>
        )}
        <img
          src={image}
          alt=""
          className="w-[25%] h-[80%] shadow-[0.6em_0.7rem_0.7rem_-1px_rgba(0,0,0,0.3)]"
        />
        <div className="flex font-bold flex-col ml-[1.1rem] h-[10rem] w-[9rem]">
          <h1 className="text-[#3D3D3D] text-[1rem] mt-[1rem]">{title}</h1>
          <h1 className="text-[#828282] text-[0.695rem] mt-[0.5rem]">
            {author}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BookRec;
