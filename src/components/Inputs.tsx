import { HiOutlineSearch } from "react-icons/hi";
import { useCountries } from "../contexts/CountriesContext";

const SELECT_OPTIONS = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

const Inputs = () => {
  const { filter, updateFilter } = useCountries();

  return (
    <div className="container flex flex-col gap-8 justify-between my-8 md:flex-row">
      <div className="bg-secondary w-full max-w-[450px] h-14 relative shadow-md rounded-md">
        <HiOutlineSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-input"
          size={20}
        />
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full h-full bg-transparent pl-12 placeholder:text-sm placeholder:text-input"
          onChange={(e) => updateFilter("name", e.target.value)}
          value={filter.name}
        />
      </div>

      <select
        className="bg-secondary w-[200px] h-14 px-4 text-sm font-semibold shadow-md rounded-md"
        onChange={(e) => updateFilter("region", e.target.value)}
        value={filter.region}
      >
        {SELECT_OPTIONS.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Inputs;
