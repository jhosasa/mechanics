import { useState } from "react";

export function useSelectOptionButton(option: string) {
  const [selectOptionButton, setSelectOptionButton] = useState<string>(option);

  return {
    selectOptionButton,
    setSelectOptionButton,
  };
}
