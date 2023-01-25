export type Country = {
  cca3: string;
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion?: string;
  flags: { svg: string };
  capital?: string[];
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
};
