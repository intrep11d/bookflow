function Borrowed(props) {
  const { BorrowID, Book, Name, DateReq, Status } = props;

  return (
    <tr className="hover:cursor-pointer mt-[1rem] h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
      <td className="justify-center flex">{BorrowID}</td>
      <td className="w-[15rem] justify-center flex">{Book}</td>
      <td className="">{Name}</td>
      <td className="">{DateReq}</td>
      <td className="w-[5rem]">
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

        {Status === "pending" && (
          <button className="text-white justify-center rounded-xl w-[7rem] bg-blue-700">
            {Status}
          </button>
        )}
      </td>
    </tr>
  );
}

export default Borrowed;
