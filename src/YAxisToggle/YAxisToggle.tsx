import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface YAxisToggleProps {
  dynamicYAxis: boolean,
  onDynamicYAxisChange: Function
}

function YAxisToggle({ dynamicYAxis, onDynamicYAxisChange }: YAxisToggleProps ) {
  function handleDynamicYAxisChange(event: React.ChangeEvent<HTMLInputElement>) {
    onDynamicYAxisChange(event.target.checked);
  }

  return (
    <FormGroup>
      <FormControlLabel 
        control={
          <Switch checked={dynamicYAxis} onChange={handleDynamicYAxisChange} />
        } 
        label="Dynamic Domain (Y-Axis)" />
    </FormGroup>
  )
}


export default YAxisToggle;
