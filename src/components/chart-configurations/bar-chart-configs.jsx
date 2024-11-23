import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import { Done, Restore } from "@mui/icons-material";
import { barChartInitialConfigValues } from "../../constant";
import { InputComponent } from "../input";
import { AspectRatio, Checkbox, List, ListItem } from "@mui/joy";
import { useDebounce } from "../../utils";
import { LineTypes } from "./line-type";
import { DataFrequencies } from "./frequency";

const dataSources = ["Observations", "Releases", "Search", "Series"];

export const BarChartConfigs = ({ handleChartConfigChange }) => {
  const [config, setConfig] = React.useState(barChartInitialConfigValues);
  const [amenities, setAmenities] = React.useState(0);

  const [searchText, setSearchText] = React.useState(
    config?.dataSourceSearchText
  );
  const searchValue = useDebounce(searchText, 500);

  React.useEffect(() => {
    handleChartConfigChange({
      ...config,
      dataSourceSearchText: searchValue,
      dataSource: "search",
    });
  }, [searchValue]);

  React.useEffect(() => {
    handleChartConfigChange({
      ...config,
      dataSourceSearchText: searchValue,
      dataSource: dataSources[amenities]?.toLowerCase(),
    });
  }, [config]);

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between">
        <Typography level="title-md" sx={{ fontWeight: "bold", mt: 1 }}>
          Chart Configurations
        </Typography>
      </Box>
      <div role="group" aria-labelledby="rank">
        <Typography level="title-sm" sx={{ fontWeight: "bold", mt: 1 }}>
          Data source
        </Typography>
        <List
          orientation="horizontal"
          size="sm"
          sx={{
            "--List-gap": "12px",
            "--ListItem-radius": "20px",
            py: 2,
            overflowX: "auto",
          }}
        >
          {dataSources.map((item, index) => {
            const selected = amenities === index;
            return (
              <ListItem key={item}>
                <AspectRatio
                  variant={selected ? "solid" : "outlined"}
                  color={selected ? "primary" : "neutral"}
                  ratio={1}
                  sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                >
                  <div>{selected && <Done fontSize="md" />}</div>
                </AspectRatio>
                <Checkbox
                  size="sm"
                  color="neutral"
                  disableIcon
                  overlay
                  label={item}
                  variant="outlined"
                  checked={selected}
                  onChange={(event) => {
                    setAmenities(index);
                    if (item !== "Search") {
                      setConfig({
                        ...config,
                        dataSource: item?.toLowerCase(),
                      });
                    }
                  }}
                  slotProps={{
                    action: {
                      sx: {
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                      },
                    },
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
      {amenities === 2 && (
        <InputComponent
          placeholder="Type money for suggested results"
          label="Search Series"
          value={searchText}
          onChange={(e) => setSearchText(e?.target?.value)}
          autoFocus
        />
      )}
      <DataFrequencies
        handleChange={(value) =>
          setConfig({
            ...config,
            frequency: value,
          })
        }
      />

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <Box>
          <InputComponent
            placeholder="Bars color"
            label="Bars color"
            value={config?.color}
            onChange={(e) =>
              setConfig({
                ...config,
                color: e?.target?.value,
              })
            }
            type="color"
          />
        </Box>
        <Box>
          <InputComponent
            placeholder="x Axis Label"
            label="x Axis Label"
            value={config?.xLabel}
            onChange={(e) =>
              setConfig({
                ...config,
                xLabel: e?.target?.value,
              })
            }
          />
        </Box>
      </Box>

      <InputComponent
        placeholder="Border Radius"
        label="Bars Border Radius(px)"
        value={config?.borderRadius || ""}
        onChange={(e) =>
          setConfig({
            ...config,
            borderRadius:
              e?.target?.value === "" ? undefined : e?.target?.value,
          })
        }
        type="number"
      />
      <InputComponent
        placeholder="Width(px)"
        label="Width(px)"
        value={config?.width || ""}
        onChange={(e) =>
          setConfig({
            ...config,
            width: e?.target?.value === "" ? undefined : e?.target?.value,
          })
        }
        type="number"
      />
      <InputComponent
        placeholder="Height(px)"
        label="Height(px)"
        value={config?.height || ""}
        onChange={(e) =>
          setConfig({
            ...config,
            height: e?.target?.value === "" ? undefined : e?.target?.value,
          })
        }
        type="number"
      />

      <Typography level="title-md" sx={{ fontWeight: "bold", mt: 2 }}>
        Boolean options
      </Typography>

      <FormControl orientation="horizontal">
        <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
          <FormLabel sx={{ typography: "title-sm" }}>Skip animation</FormLabel>
          <FormHelperText sx={{ typography: "body-sm" }}>
            Chart will not have animation on any value change or its rendering
          </FormHelperText>
        </Box>
        <Switch
          checked={config?.skipAnimation}
          onChange={(e) =>
            setConfig({
              ...config,
              skipAnimation: e?.target?.checked,
            })
          }
        />
      </FormControl>
    </React.Fragment>
  );
};
