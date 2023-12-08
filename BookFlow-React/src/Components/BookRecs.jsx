import { useState } from "react";
import Select from "react-select";

function BookRec(props) {
  const { image, author, title, genre } = props;
  const [hovered, setHovered] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genreOptions = [
    { label: "Science Fiction", value: "Science Fiction" },
    { label: "Mystery", value: "Mystery" },
    { label: "Romance", value: "Romance" },
    // Add more genres as needed
  ];

  const handleGenreChange = (selectedOption) => {
    setSelectedGenre(selectedOption);
  };

  return (
    <div className="recCardContainer h-[13rem] w-[22.3rem] ">
      <div
        className="recCards flex w-[95%] mr-[0rem] rounded-xl items-center h-[12rem] mt-[1rem] relative p-[2rem] hover:bg-[#D8CCBE]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt=""
          className={`w-[6rem] h-[8.6rem] shadow-[0.6em_0.7rem_0.7rem_-1px_rgba(0,0,0,0.3)] hover:cursor-pointer transition-all ${
            hovered ? "w-[7rem] h-[9.6rem]" : ""
          }`}
        />

        <div className="flex font-semibold flex-col ml-[1.1rem] h-[10rem] w-[9rem]">
          <h1 className="text-[#3D3D3D] text-[1rem] mt-[1rem] font-bold">
            {title}
          </h1>
          <h1 className="text-[#828282] text-[0.695rem] mt-[0.5rem]">
            {author}
          </h1>
          <div className="flex mt-2">
            {genre.map((genre, index) => (
              <span
                key={index}
                className="bg-[#392E05] bg-opacity-20 text-black rounded-full px-2 py-1 mr-2 text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookRec;
