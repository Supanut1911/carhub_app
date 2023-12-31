import { CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps, FilterProps, SearchManufacturerProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const allcars: CarProps[] = await fetchCars({
    manufacturer: searchParams.manufacturer ?? "",
    year: searchParams.year ?? 2022,
    fule: searchParams.fule ?? "",
    limit: searchParams.limit ?? 10,
    model: searchParams.model ?? "",
  });
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allcars?.map((car: CarProps) => {
                return <CarCard key={car.city_mpg} car={car} />;
              })}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allcars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-blod">Oops, no results</h2>
            {/* <p>{allcars?.message ?? ""}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
