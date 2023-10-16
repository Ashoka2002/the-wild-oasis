import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParam, setSearchParam] = useSearchParams();

  function handleChange(e) {
    searchParam.set("sortBy", e.target.value);
    setSearchParam(searchParam);
  }

  const selectedValue = searchParam.get("sortBy") || "";

  return (
    <Select
      options={options}
      value={selectedValue}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SortBy;
