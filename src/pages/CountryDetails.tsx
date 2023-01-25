import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { useCountries } from "../contexts/CountriesContext";
import { BsArrowLeft } from "react-icons/bs";
import ListItem from "../components/ListItem";

const CountryDetails = () => {
  const { cca3 } = useParams();
  const { getCountryByCode } = useCountries();
  const country = getCountryByCode(cca3!);
  const navigate = useNavigate();

  if (!country) {
    return <Navigate to="/" />;
  }

  return (
    <section className="container mt-8">
      <button
        className="bg-secondary flex items-center gap-2 px-6 py-1 rounded shadow-md"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft size={20} />
        <span className="font-semibold">Back</span>
      </button>
      <div className="grid gap-12 lg:grid-cols-2 my-14">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          className="w-full max-w-[700px] max-h-[400px]"
        />
        <div>
          <h2 className="text-2xl font-bold mb-6 md:text-3xl">
            {country.name.common}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 sm:text-xl">
            <ul>
              <ListItem label="Native Name">
                {Object.values(country.name.nativeName!)[0].common}
              </ListItem>
              <ListItem label="Population">
                {country.population.toLocaleString()}
              </ListItem>
              <ListItem label="Region">{country.region}</ListItem>
              <ListItem label="Sub Region">{country.subregion}</ListItem>
              <ListItem label="Capital">{country.capital}</ListItem>
            </ul>
            <ul>
              <ListItem label="Top Level Domain">{country.tld}</ListItem>
              <ListItem label="Currencies">
                {country.currencies &&
                  Object.values(country.currencies).map(
                    (currency) => currency.name
                  )}
              </ListItem>
              <ListItem label="Languages">
                {Object.values(country.languages!).join(", ")}
              </ListItem>
            </ul>
          </div>
          <div className="flex gap-4 mt-12 flex-col md:flex-row md:items-center">
            <h3 className="text-xl font-semibold">Border Countries:</h3>
            <ul className="flex items-center flex-wrap gap-2">
              {!country.borders && (
                <p className="text-lg">{country.name.common} has no borders</p>
              )}
              {country.borders?.map((border) => {
                const borderCountry = getCountryByCode(border);
                return (
                  <li
                    key={border}
                    className="bg-secondary px-6 py-1 shadow-md rounded"
                  >
                    <Link to={`/country/${border}`}>
                      {borderCountry.name.common}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
