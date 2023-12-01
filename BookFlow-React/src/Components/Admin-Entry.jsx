function AdminEntry(props) {
  const { UserID, Name, Username, PhoneNumber, Email, Status } = props;
  return (
    <div className="adminEntry justify-around mb-[1rem] flex w-[100%] items-center border-red-600 h-[2rem]">
      <h1 className="pl-[3.5%] pr-[1%]">{UserID}</h1>
      <h1 className="pl-[3%] pr-[0.5%]">{Name}</h1>
      <h1 className="pl-[2%] pr-[4%]">{Username}</h1>
      <h1 className="pl-[2%] pr-[2%]">{PhoneNumber}</h1>
      <h1 className="pl-[1%]">{Email}</h1>
      {Status === "active" && (
        <button className="text-white justify-center rounded-xl w-[7rem] bg-green-800">
          {Status}
        </button>
      )}

      {Status === "blocked" && (
        <button className="text-white justify-center rounded-xl w-[7rem] bg-red-950">
          {Status}
        </button>
      )}
    </div>
  );
}

export default AdminEntry;
