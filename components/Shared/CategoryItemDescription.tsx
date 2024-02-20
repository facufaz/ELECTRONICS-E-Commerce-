import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Button } from "../Button";
import React from "react";

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  id: number;
}

const CategoryItemDescription = ({ isNew, name, description, id }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        justifyContent: "center",
        width: "25vw",
      }}
    >
      {isNew ? (
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            color: "#d87d4a",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>
      ) : null}

      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          fontSize: "3.5rem",
          marginBottom: "2rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          letterSpacing: 1,
          fontSize: "1.25rem",
          marginBottom: "3rem",
          fontWeight: "800",
        }}
      >
        {description}
      </Typography>
      <Button color="#e47c52" variant="contained" sx={undefined}>
        <Link href={`/${id}`}>See Product</Link>
      </Button>
    </Box>
  );
};

export default CategoryItemDescription;
