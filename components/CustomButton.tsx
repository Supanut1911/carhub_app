"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyle,
  isDisabled,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles} `}
      disabled={isDisabled}
      type={"button" || "submit"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            alt="right-icon"
            className="object-contiane"
            fill
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
