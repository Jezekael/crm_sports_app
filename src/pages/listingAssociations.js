import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import associations from "./../data/associationList.json";
import Button from "@mui/material/Button";
import "./asso.css";
import Grid from "@mui/material/Unstable_Grid2";
import SortByAlphaOutlinedIcon from "@mui/icons-material/SortByAlphaOutlined";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const ListingAssociations = () => {
  const [search, setSearch] = useState("");
  const [assos, setAssos] = useState(associations);
  const [aToZ, setaToZ] = useState(true);
  const [gridDisplay, setGridDisplay] = useState(true);
  const [type, setType] = React.useState("Tout");
  const searchChange = (e) => {
  const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };
  const handleTypeFilter = (event) => {
    setType(event.target.value);
  };
  const handleDisplay = (event) => {
    setGridDisplay(!gridDisplay);
  };
  const handleOrder = () => {
    setaToZ(!aToZ);
  };


  const filteredAssos = assos.filter((asso) => {
    if (type === "Tout") {
      return asso["nomAsso"].toLowerCase().includes(search);
    } else {
      return (
        asso["nomAsso"].toLowerCase().includes(search) &&
        asso["type"] === type
      );
    }
  }).sort((a, b) => {
    return aToZ
      ? a["nomAsso"].toLowerCase() > b["nomAsso"].toLowerCase()
        ? 1
        : -1
      : a["nomAsso"].toLowerCase() > b["nomAsso"].toLowerCase()
      ? -1
      : 1;
  });
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Chercher association"
          onChange={searchChange}
        />
        <Button onClick={handleOrder}>
          <SortByAlphaOutlinedIcon />
        </Button>
        <>
          <FilterListRoundedIcon />
          <Select value={type} label="Type" onChange={handleTypeFilter}>
            <MenuItem value={"Tout"}>Tout</MenuItem>
            <MenuItem value={"Sport de combat"}>Sport de combat</MenuItem>
            <MenuItem value={"Sport collectif"}>Sport collectif</MenuItem>
            <MenuItem value={"Sport individuel"}>Sport individuel</MenuItem>
            <MenuItem value={"Sport de raquette"}>Sport de raquette</MenuItem>
          </Select>
        </>
        <Button onClick={handleDisplay}>
          <FilterListRoundedIcon />
        </Button>
      </div>
      <div className={gridDisplay ? ("as-list-grid") : ("as-list")}>
        {filteredAssos.map((asso, index) => {
          return (
            <Box className="as-container">
              <Grid item xs={3}>
                <text className="as-title">{asso["nomAsso"]}</text>
                {asso["type"] !== "null" ? (
                  <Grid item xs={3}>
                    <Box className="type">
                      <p className="type-text">{asso["type"]}</p>
                    </Box>
                  </Grid>
                ) : null}
              </Grid>
              <p className="as-desc">{asso["description"]}</p>

              <p className="skills-container">
                <Button component={Link} to={asso["lien"]}>
                  {asso["nomAsso"]}
                </Button>
              </p>
            </Box>
          );
        })}
      </div>
    </>
  );
};
export default ListingAssociations;
