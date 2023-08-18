"use client";

import { ShowmoreProps } from "@/types";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowmoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    console.log("new limit=>", newLimit);

    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full"
          textStyle="text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
