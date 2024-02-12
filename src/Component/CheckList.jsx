import React from "react";
import { GiCheckMark } from "react-icons/gi";

const CheckList = () => {
  return (
    <div className=" flex flex-col items-center text-center">
      <h3 className="text-3xl pt-5 font-medium">
        Do any of these statements sound like you?
      </h3>
      <ul className="text-xl flex flex-col gap-5 pt-5 font-normal ">
        <li className="flex items-center gap-2 ">
          <GiCheckMark className="text-red-600 " />
          You’re frustrated and embarrassed by your dog’s behavior
        </li>
        <li className="flex items-center gap-2 ">
          <GiCheckMark className="text-red-600" />
          Your puppy is biting you, chewing everything and peeing everywhere
        </li>
        <li className="flex items-center gap-2 ">
          <GiCheckMark className="text-red-600" />
          It doesn’t feel like your dog ever listens to you
        </li>
        <li className="flex items-center gap-2 ">
          <GiCheckMark className="text-red-600" />
          You're happy with your dog's behavior but want to teach them new skills
        </li>
      </ul>
    </div>
  );
};

export default CheckList;
