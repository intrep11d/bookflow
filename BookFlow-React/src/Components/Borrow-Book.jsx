import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BorrowBook(props) {
  const { BorrowID, Book, Name, DateBorrow, DateDue} = props;

  return (
    <tr className="relative mt-[0rem] h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
        <td className="justify-center absolute mr-[80%]">{BorrowID}</td>
        <td className="justify-center absolute mr-[55%]">{Book}</td>
        <td className="justify-center absolute mr-[20%]">{Name}</td>
        <td className="justify-center absolute mr-[-10%]">{DateBorrow}</td>
        <td className="justify-center absolute mr-[-38%]">{DateDue}</td>
        <td className="absolute mr-[-72%]  justify-evenly flex w-[20rem] border-black">
          <button className="text-white justify-center rounded-md mr-[1rem] w-[7rem] bg-[#7B6F2D] hover:bg-[#544C1F]">
              Overdue
            </button>
            
            <button className="text-white justify-center rounded-md mr-[1rem] w-[7rem] bg-[#7B2D2D] hover:bg-[#572121]">
              lost
            </button>
        
            <button className="text-white justify-center rounded-md w-[7rem] mr-[1rem] bg-[#3D6A2E] hover:bg-[#1F4812]">
              returned
            </button>
        </td>
    </tr>
  );
}

export default BorrowBook;
