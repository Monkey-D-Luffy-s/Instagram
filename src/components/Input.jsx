import React from "react";

function Input({ label, type, handleblur, ...props }) {
  return (
    <div className="relative w-full max-w-sm ">
      {/* <input
        placeholder={label}
        className=" w-64 bg-[#121212] text-[12px] shadow-[0_0_0_0.5px_gray] rounded-sm outline-none "
      /> */}
      <input
        type={type}
        {...props}
        onBlur={(e) => handleblur(e)}
        className="peer bg-[#121212] text-[13px] overflow-hidden whitespace-nowrap py-2 text-ellipsis shadow-[0_0_0_0.5px_gray] min-w-64 max-w-70 rounded-[1px] px-3 py-3 pb-1 mt-2 outline-none"
        placeholder=" "
      />
      <label
        htmlFor="input"
        className="absolute left-3 text-[12px] top-1 justify-center overflow-hidden text-gray-500 transition-all peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-[10px] hover:text-[12px] peer-focus:text-blue-500"
      >
        <p className="">{label}</p>
      </label>
    </div>
  );
}

export default Input;
