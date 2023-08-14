const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

const fetchCars = async () => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;
  const headers = {
    "X-RapidAPI-Key": process.env["X-RapidAPI-Key"] ?? "",
    "X-RapidAPI-Host": process.env["X-RapidAPI-Host"] ?? "",
  };

  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export default fetchCars;
