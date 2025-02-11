import { useState } from 'react';

export function useDropdown() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [closingDropdown, setClosingDropdown] = useState<string | null>(null);

  const onDropdownChange = (name: string, opened: boolean) => {
    console.log(`onDropdownChange to be active ${name} ${opened}, last active ${activeDropdown}`);
    if (opened) {
      setActiveDropdown(name);
      // setClosingDropdown(null);
    }
    // else {
    //   setClosingDropdown(name);
    //   setActiveDropdown(null);
    // }
  };

  return {
    activeDropdown,
    // closingDropdown,
    onDropdownChange,
  };
}
