"use client";

import { CountryDropdown } from "react-country-dropdown";
import type { CountryData } from "react-country-dropdown";

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CountrySelect = ({ value, onChange }: CountrySelectProps) => (
  <CountryDropdown
    value={value}
    onChange={(country: CountryData) => onChange(country.iso2)}
    className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  />
);

export default CountrySelect;