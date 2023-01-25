import { Link } from "react-router-dom";
import { Country } from "../types/country";
import ListItem from "./ListItem";

type CountryCardProps = {
  country: Country;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="w-full max-w-[400px] bg-secondary rounded-md shadow-md overflow-hidden"
    >
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-full h-[200px] object-cover"
      />
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold">{country.name.common}</h2>
        <ul className="py-4">
          <ListItem label="Population">
            {country.population.toLocaleString()}
          </ListItem>
          <ListItem label="Region">{country.region}</ListItem>
          <ListItem label="Capital">{country.capital}</ListItem>
        </ul>
      </div>
    </Link>
  );
};

export default CountryCard;
