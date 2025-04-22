import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import styles from "./DateRangeFilter.module.scss"
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import InputAdornment from '@mui/material/InputAdornment';


export default function DateRangerFilter() {

  const [value, setValue] = useState<Date | null>(new Date());
  return (
    <section className={styles.containerContent}>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <DatePicker
        label="Data"
        format="dd/MM/yyyy"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        slotProps={{
          textField: {
            fullWidth: false,
            variant: 'outlined',
            size: 'small',
            InputProps: {
              endAdornment: (
                <InputAdornment position="end">
                  <InsertInvitationOutlinedIcon className={styles.icon}  sx={{ fontSize: '30px' }}/>
                </InputAdornment>
              ),
            },
          },
        }}
      />
    </LocalizationProvider>
    </section>
  );
}