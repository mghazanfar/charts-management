import * as React from "react";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import { Typography } from "@mui/joy";
import { lineChartInitialConfigValues } from "../../constant";

const frequencies = ["Monthly", "Quarterly", "Annual"];

export function DataFrequencies({ handleChange }) {
  const [selectedValue, setSelectedValue] = React.useState(
    lineChartInitialConfigValues?.frequency
  );

  const handleChangeValue = (event) => {
    setSelectedValue(event.target.value);
    // handleChange(event.target.value);
    alert(
      "Frequncy change is not working on the API side currently. Once it starts working, we can make API call to get data for this frequency."
    );
  };

  return (
    <>
      <Typography level="title-sm" sx={{ fontWeight: "bold" }}>
        Frequency
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" mt={1} gap={2}>
        {frequencies?.map((type) => (
          <Radio
            checked={selectedValue === type}
            onChange={handleChangeValue}
            value={type}
            name="radio-buttons"
            slotProps={{ input: { "aria-label": type } }}
            label={type}
          />
        ))}
      </Box>
    </>
  );
}
