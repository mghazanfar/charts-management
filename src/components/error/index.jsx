import { ErrorOutline, Warning } from "@mui/icons-material";
import { Alert, Box } from "@mui/joy";

export const Error = ({ error }) => {
  debugger;
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Alert
        startDecorator={<Warning />}
        variant="soft"
        color="danger"
        sx={{ width: "30%" }}
      >
        {error}
      </Alert>
    </Box>
  );
};
