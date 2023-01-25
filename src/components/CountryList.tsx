import { useCountries } from "../contexts/CountriesContext";
import { TailSpin } from "react-loader-spinner";
import CountryCard from "./CountryCard";
import ErrorMessage from "./ErrorMessage";

const CountryList = () => {
  const { loading, error, countries } = useCountries();

  return (
    <>
      {loading && !error && (
        <div className="flex justify-center mt-8">
          <TailSpin />
        </div>
      )}
      {countries.length === 0 && !loading && !error && (
        <ErrorMessage message="No countries were found" />
      )}
      {error && <ErrorMessage message="Something went wrong" />}
      <div className="container grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default CountryList;
