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

export default fetchCars;
