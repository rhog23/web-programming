"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-7 h-7">
          <Image
            className="rounded-full"
            src={rightIcon}
            fill
            alt="right arrow"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
