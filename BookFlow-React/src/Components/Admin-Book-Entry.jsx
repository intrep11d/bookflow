function AdminBookEntry(props) {
  const { BorrowID, Book, DateBorrow, DateDue, DateReturn, Status } = props;
  return (
    <div className="bookEntry justify-around mb-[1rem] flex w-[100%] items-center border-red-600 h-[2rem]">
      <h1 className="pl-[3.5%] pr-[1%]">{BorrowID}</h1>
      <h1 className="pl-[3%] pr-[0.5%]">{Book}</h1>
      <h1 className="pl-[2%] pr-[4%]">{DateBorrow}</h1>
      <h1 className="pl-[2%] pr-[2%]">{DateDue}</h1>
      <h1 className="pl-[1%]">{DateReturn}</h1>
      {Status === "returned" && (
        <button className="text-white justify-center rounded-xl w-[7rem] bg-green-800">
          {Status}
        </button>
      )}

      {Status === "lost" && (
        <button className="text-white justify-center rounded-xl w-[7rem] bg-red-950">
          {Status}
        </button>
      )}

      {Status === "borrowed" && (
        <button className="text-white justify-center rounded-xl w-[7rem] bg-blue-950">
          {Status}
        </button>
      )}
    </div>
  );
}

export default AdminBookEntry;
