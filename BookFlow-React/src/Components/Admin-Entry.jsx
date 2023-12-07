function AdminEntry(props) {
  const { UserID, Name, Username, PhoneNumber, Email, Status, Type } = props;

  return (
    <div className="relative">
    {Type === "User" && (
        <tr className="hover:cursor-pointer h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
        <>
          <td className="justify-center absolute mr-[78%]">{UserID}</td>
          <td className="justify-center absolute mr-[50%]">{Name}</td>
          <td className="justify-center absolute mr-[16%]">{Username}</td>
          <td className="justify-center absolute mr-[-16%]">{PhoneNumber}</td>
          <td className="justify-center absolute mr-[-47%]">{Email}</td>
          <td className="justify-center absolute mr-[-75%]">
            {Status === "verified" && (
              <button className="text-white justify-center rounded-xl w-[7rem] bg-green-800">
                {Status}
              </button>
            )}

            {Status === "blocked" && (
              <button className="text-white justify-center rounded-xl w-[7rem] bg-red-950">
                {Status}
              </button>
            )}

            {Status === "unverified" && (
              <button className="text-white justify-center rounded-xl w-[7rem] bg-yellow-700">
                {Status}
              </button>
            )}
          </td>
        </>
        </tr>
      )}

      {Type === "Staff" && (
        <tr className="h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
          <td className="justify-center absolute mr-[77%]">{UserID}</td>
          <td className="justify-center absolute mr-[50%]">{Name}</td>
          <td className="justify-center absolute mr-[16%]">{Username}</td>
          <td className="justify-center absolute mr-[-30%]">{PhoneNumber}</td>
          <td className="justify-center absolute mr-[-75%]">{Email}</td>
          </tr>
      )}
      </div>
  );
}

export default AdminEntry;
