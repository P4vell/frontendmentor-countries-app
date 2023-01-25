import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Country } from "../types/country";

type CountriesProviderProps = {
  children: ReactNode;
};

type Filter = {
  name: string;
  region: string;
};

type CountriesContext = {
  countries: Country[];
  filter: Filter;
  loading: boolean;
  error: boolean;
  getCountryByCode: (cca3: string) => Country;
  updateFilter: (key: "name" | "region", value: string) => void;
};

const CountriesContext = createContext({} as CountriesContext);

export const useCountries = () => useContext(CountriesContext);

const API_URL = "https://restcountries.com/v3.1/all";

export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState<Filter>({ name: "", region: "All" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCountryByCode = (cca3: string) => {
    return countries.find((country) => country.cca3 === cca3)!;
  };

  const updateFilter = (key: "name" | "region", value: string) => {
    setFilter((prevFilter) => {
      return { ...prevFilter, [key]: value };
    });
  };

  useEffect(() => {
    const getCountriesData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = (await response.json()) as Country[];
        setCountries(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    getCountriesData();
  }, []);

  useEffect(() => {
    const updateFilteredCountries = () => {
      setFilteredCountries(
        countries.filter((country) => {
          if (filter.region === "All") {
            return country.name.common
              .toLowerCase()
              .includes(filter.name.toLowerCase());
          }
          return (
            country.name.common
              .toLowerCase()
              .includes(filter.name.toLowerCase()) &&
            country.region === filter.region
          );
        })
      );
    };
    updateFilteredCountries();
  }, [countries, filter]);

  return (
    <CountriesContext.Provider
      value={{
        countries: filteredCountries,
        filter,
        loading,
        error,
        getCountryByCode,
        updateFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
