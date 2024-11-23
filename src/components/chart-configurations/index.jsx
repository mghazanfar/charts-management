import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import FormControl from "@mui/joy/FormControl";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Typography from "@mui/joy/Typography";
import { BarChart, LineAxis, PieChart, Timer } from "@mui/icons-material";
import { LineChartConfigs } from "./line-chart-configs";
import { Button, Tooltip } from "@mui/joy";
import { BarChartConfigs } from "./bar-chart-configs";

export function ChartConfigurations({ handleChange, handleChartConfigChange }) {
  const [type, setType] = React.useState("");

  return (
    <Box
      sx={{
        borderRadius: "md",
        p: 2,
        pr: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <DialogTitle>Select Chart</DialogTitle>
        {type === "" ? (
          ""
        ) : (
          <Button
            onClick={() => {
              setType("");
              handleChange("");
            }}
            color="danger"
            variant="soft"
          >
            Remove {type}
          </Button>
        )}
      </Box>

      <DialogContent sx={{ gap: 2, pr: 2, overflowX: "hidden" }}>
        <FormControl>
          <RadioGroup
            value={type || ""}
            onChange={(event) => {
              setType(event.target.value);
              handleChange(event.target.value);
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 1.5,
              }}
            >
              {[
                {
                  name: "Line Chart",
                  icon: <LineAxis />,
                },
                {
                  name: "Bar Chart",
                  icon: <BarChart />,
                },
                {
                  name: "Pie Chart",
                  icon: <PieChart />,
                  disabled: true,
                },
                {
                  name: "Guage",
                  icon: <Timer />,
                  disabled: true,
                },
              ].map((item) => (
                <Tooltip title={item?.disabled ? "Coming soon!" : ""}>
                  <Card
                    key={item.name}
                    sx={{
                      boxShadow: "none",
                      backgroundColor: item?.disabled ? "#dbd9d9" : "",
                      "&:hover": {
                        bgcolor: item?.disabled ? "" : "background.level1",
                      },
                    }}
                  >
                    <CardContent>
                      {item.icon}
                      <Typography level="title-md">{item.name}</Typography>
                    </CardContent>
                    <Radio
                      disableIcon
                      overlay
                      checked={type === item.name}
                      variant="outlined"
                      color="neutral"
                      value={item.name}
                      disabled={item?.disabled}
                      sx={{ mt: -2 }}
                      slotProps={{
                        action: {
                          sx: {
                            ...(type === item.name && {
                              borderWidth: 2,
                              borderColor:
                                "var(--joy-palette-primary-outlinedBorder)",
                            }),
                            "&:hover": {
                              bgcolor: "transparent",
                            },
                          },
                        },
                      }}
                    />
                  </Card>
                </Tooltip>
              ))}
            </Box>
          </RadioGroup>
        </FormControl>

        {type === "Line Chart" && (
          <LineChartConfigs handleChartConfigChange={handleChartConfigChange} />
        )}

        {type === "Bar Chart" && (
          <BarChartConfigs handleChartConfigChange={handleChartConfigChange} />
        )}
      </DialogContent>
    </Box>
  );
}
