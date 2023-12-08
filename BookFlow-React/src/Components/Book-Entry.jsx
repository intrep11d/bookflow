import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BookEntry(props) {
  const { BookID, Title, Author, Genre, ISBN, Status, Copies } = props;

  return (
    <tr className="relative mt-[0rem] h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
        <td className="justify-center absolute mr-[77%]">{BookID}</td>
        <td className="justify-center absolute mr-[50%]">{Title}</td>
        <td className="justify-center absolute mr-[16%]">{Author}</td>
        <td className="justify-center absolute mr-[-17%]">{Genre}</td>
        <td className="justify-center absolute mr-[-48.5%]">{ISBN}</td>
        <td className="absolute mr-[-80%] justify-center">
          {Status === "available" && (
            <button className="text-white justify-center rounded-xl w-[7rem] bg-[#3D6A2E]">
              {Status}
            </button>
          )}
          {Status === "not available" && (
            <button className="text-white justify-center rounded-xl w-[7rem] bg-[#7B2D2D]">
              {Status}
            </button>
          )}
        </td>
    </tr>
  );
}

export default BookEntry;
