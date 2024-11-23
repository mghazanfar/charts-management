import { FormControl, FormLabel, Input } from "@mui/joy";

export const InputComponent = ({ label, ...others }) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...others} />
    </FormControl>
  );
};
