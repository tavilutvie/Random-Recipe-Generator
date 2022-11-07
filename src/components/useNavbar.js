import React from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/SearchName/${searchValue}`);
    setSearchValue("");
  };

  return {
    searchValue,
    setSearchValue,
    handleSubmit,
  };
};
