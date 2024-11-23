import * as React from "react";
import Box from "@mui/joy/Box";
import Radio from "@mui/joy/Radio";
import { Typography } from "@mui/joy";
import { lineChartInitialConfigValues } from "../../constant";

const lineTypes = ["linear", "sqrt", "utc", "band"];

export function LineTypes({ handleChange }) {
  const [selectedValue, setSelectedValue] = React.useState(
    lineChartInitialConfigValues?.lineType
  );

  const handleChangeValue = (event) => {
    setSelectedValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <>
      <Typography level="title-sm" sx={{ fontWeight: "bold", mt: 1 }}>
        Line types
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" mt={1} gap={2}>
        {lineTypes?.map((type) => (
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
