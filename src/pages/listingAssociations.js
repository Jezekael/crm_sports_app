import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { associations } from "./../data/associationList";
import Button from "@mui/material/Button";
import "./asso.css";
import Grid from "@mui/material/Unstable_Grid2";

const ListingAssociations = () => {
  const [search, setSearch] = useState("");
  const [assos, setAssos] = useState(associations);
  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
  };
  const filteredAssos = assos.filter((asso) => {
    return asso["nomAsso"].toLowerCase().includes(search);
  });
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Chercher association"
          onChange={searchChange}
        />
      </div>
      <div className="as-list">
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
