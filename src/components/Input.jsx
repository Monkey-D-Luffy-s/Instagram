import React from "react";

function Input({ label, type, handleblur, ...props }) {
  return (
    <div className="relative w-full max-w-sm">
      {/* <input
        placeholder={label}
        className=" w-64 bg-[#121212] text-[12px] shadow-[0_0_0_0.5px_gray] rounded-sm outline-none "
      /> */}
      <input
        type={type}
        id="name"
        placeholder=""
        onBlur={(e) => handleblur(e)}
        {...props}
        className="peer bg-[#121212] px-4 py-2 h-10 mb-2 w-64 rounded-sm outline-none text-[10px] items-bottom text-start shadow-[0_0_0_0.5px_gray]"
      />
      <label
        htmlFor="name"
        className="absolute left-3 text-gray-400 text-[10px] transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-[11px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[10px] peer-hover:top-0 peer-hover:text-[10px]"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
