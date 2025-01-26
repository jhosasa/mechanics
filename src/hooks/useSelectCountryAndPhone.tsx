import { useCallback, useState, useEffect } from "react";
import { countries } from "@/const/Countries";
import { Country } from "@/types/Countries";

interface UseSelectCountryAndPhone {
  isOpen: boolean;
  selectedCountry: Country;
  isOpenPhone: boolean;
  selectedNumber: string;
  suffixesPhone: string[];
  isSelectedNumber: boolean;
  handleSelectPhone: (phone: string) => void;
  handleTogglePhone: () => void;
  toggleDropdown: () => void;
  handleSelect: (countryName: string) => void;
  countries: Country[];
}

export function useSelectCountryAndPhone(): UseSelectCountryAndPhone {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isSelectedNumber, setIsSelectedNumber] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [suffixesPhone, setSuffixesPhone] = useState<string[]>([]);
  const [isOpenPhone, setIsOpenPhone] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (countryName: string) => {
    const country = countries.find((c) => c.name === countryName);
    if (country) {
      setSelectedCountry(country);
      setIsOpen(false);
    }
  };

  const handleSelectNumber = useCallback(() => {
    const { idd } = selectedCountry;
    const { root, suffixes } = idd;

    if (suffixes.length === 1) {
      setSuffixesPhone([]);
      setIsSelectedNumber(true);
      setSelectedNumber(`${root}${suffixes[0]}`);
    } else {
      setIsSelectedNumber(false);
      const formattedSuffixes = suffixes.map((suffix) => `${root}${suffix}`);
      setSuffixesPhone(formattedSuffixes);
      setSelectedNumber(`${root}${suffixes[0]}`);
    }
  }, [selectedCountry]);

  const handleTogglePhone = () => {
    setIsOpenPhone((prev) => !prev);
  };

  const handleSelectPhone = (phone: string) => {
    setSelectedNumber(phone);
    setIsOpenPhone(false);
  };

  useEffect(() => {
    handleSelectNumber();
  }, [selectedCountry, handleSelectNumber]);

  return {
    isSelectedNumber,
    selectedNumber,
    suffixesPhone,
    isOpenPhone,
    handleSelectPhone,
    handleTogglePhone,
    toggleDropdown,
    isOpen,
    selectedCountry,
    countries,
    handleSelect,
  }
}
