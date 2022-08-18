import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

interface YAxisToggleProps {
  normalizeYAxis: boolean;
  onNormalizeYAxisChange: (newValue: boolean) => void;
}

function YAxisToggle({
  normalizeYAxis,
  onNormalizeYAxisChange,
}: YAxisToggleProps) {
  function ormalizeYAxisChange(event: React.ChangeEvent<HTMLInputElement>) {
    onNormalizeYAxisChange(event.target.checked);
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={normalizeYAxis} onChange={ormalizeYAxisChange} />
        }
        label="Normalize Domain (Y-Axis)"
      />
    </FormGroup>
  );
}

export default YAxisToggle;
