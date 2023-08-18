"use client";

import Image from "next/image";
import { SearchManufacturer } from ".";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifyglass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = ({
  setManufacturer,
  setModel,
}: {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel.toLocaleLowerCase());
    setManufacturer(searchManufacturer.toLocaleLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          alt="modelIcon"
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
