"use client";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Nav = () => {
  return (
    <header className="w-full  absolute z-10 ">
      <nav className=" flex max-w-[1440px] mx-auto  justify-between items-center sm:px-16 px-4 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car-logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full min-w-[130px] bg-white"
          handleClick={() => {}}
        />
      </nav>
    </header>
  );
};

export default Nav;
