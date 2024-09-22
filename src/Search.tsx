import { useState } from "react";

interface FormData {
  setCityName: (name: string) => void;
}

function Search({ setCityName }: FormData) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCityName(inputValue);
    setInputValue("");
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        name="name"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a city..."
        className="form-control"
      />
    </form>
  );
}

export default Search;
