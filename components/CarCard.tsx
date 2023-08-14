"use client";
import { CarProps } from "@/types";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { calculateCarRent } from "@/utils";
import { CardDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card m-4 group">
      <div className="car-card__content flex-col">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>

        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semiblod">$</span>$
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/hero.png"
            alt="car-hero"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="relative flex  mt-2 w-full ">
          <div className="flex group-hover:invisible w-full justify-between text-gray-500">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                alt="steering"
                width={24}
                height={24}
                className="object-contain"
              />
              <p className="text-[14px] ">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/tire.svg"
                alt="tire"
                width={24}
                height={24}
                className="object-contain"
              />
              <p className="text-[14px] ">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/gas.svg"
                alt="gas"
                width={24}
                height={24}
                className="object-contain"
              />
              <p className="text-[14px] ">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="car-card__btn-container w-full">
            <CustomButton
              title="View More"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue "
              rightIcon="/right-arrow.svg"
              textStyle="text-white font-bold text-[17px] leading-[17px]"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
