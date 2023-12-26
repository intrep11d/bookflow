import React, { useState } from 'react';

function AdminEntry(props) {
  // const { UserID, Name, Username, PhoneNumber, Email, Status, Type } = props;
  const { id, firstName, lastName, username, phoneNumber, email, status, Type, UserID, Status, Profile} = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleBlock = async (event) => { // Linked with the Block button and updateUser in userController.js
    event.stopPropagation();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/users/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'Blocked' }),
      });

      if (response.ok) {
        // Update the UI to reflect the new status
      } else {
        console.error('Error blocking user:', response);
      }
    } catch (error) {
      console.error('Error blocking user:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative">
    {Type === "Patron" && (
        <tr className="hover:cursor-pointer h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
        <>
        <td className="justify-center absolute mr-[77%]">{id}</td>
          <td className="justify-center absolute mr-[50%]">{firstName + " " + lastName}</td>
          <td className="justify-center absolute mr-[16%]">{username}</td>
          <td className="justify-center absolute mr-[-16%]">{phoneNumber}</td>
          <td className="justify-center absolute mr-[-50%]">{email}</td>
          <td className="justify-center absolute mr-[-75%]">
          <button className={`text-white justify-center rounded-xl w-[7rem] ${status === "Verified" ? 'bg-green-800' : status === "Blocked" ? 'bg-red-950' : 'bg-yellow-700'}`}>
            {status}
          </button>
          </td>
        </>
        </tr>
      )}

      {Type === "Staff" && (
        <tr className="h-[3rem] flex items-center w-[100%] justify-around pl-[2rem] pr-[2rem]">
          <td className="justify-center absolute mr-[77%]">{id}</td>
          <td className="justify-center absolute mr-[50%]">{firstName + " " + lastName}</td>
          <td className="justify-center absolute mr-[16%]">{username}</td>
          <td className="justify-center absolute mr-[-30%]">{phoneNumber}</td>
          <td className="justify-center absolute mr-[-75%]">{email}</td>
          </tr>
      )}
      </div>
  );
}

export default AdminEntry;
