import * as React from 'react';
import {Box,Button, Grid,Paper,TextField} from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Checkbox from '@mui/material/Checkbox';



const boxStyle = {
    padding: 20,
    height: "auto",
    width: "30%",
    margin: "auto ",
    marginTop: "5%",
    border: '1px solid #003366',
    bgcolor: '#fff8e1',
    borderColor: 'grey.300',
    p: 1,
    m: 1,
    borderRadius: 30,
};
const textfieldStyle = {
    width:'40px',
    flexShrink: 0,
    color:'#003366',
    '& input[type=number]': {
      '-moz-appearance': 'textfield',  // Firefox
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
}


export const CreateLotteryTicketForm = () => {
    
    return (
       
        <Box style={boxStyle}>
        <h2 style={{textAlign:'left',color:'#003366', marginLeft:'10%'}}>Add Lottery Ticket</h2>
            <Grid marginLeft={'10%'}> 
                {Array(6).fill().map((_, i) => (
                    <TextField key={i} sx={textfieldStyle} type="number" />
                ))}
            </Grid>
            <Grid marginLeft={'10%'} sx={{ mt: 2 }}>
                <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <Box sx={{ width: '200px' }}>
                        <DatePicker label="draw date" defaultValue={dayjs()}
                        //value={value}
                        //onChange={(newValue) => setValue(newValue)}
                        />
                    </Box>
                </LocalizationProvider>
            </Grid>
            <Grid marginLeft={'10%'} sx={{mt: 2}}>
                <label style={{color:'#003366',fontWeight:'bolder'}}>Lotto plus</label>
                    <Checkbox
                        //checked={checked}
                        //onChange={handleChange}
                        //inputProps={{ 'aria-label': 'controlled' }}
                    />
            </Grid>
            <Grid marginLeft={'10%'} sx={{mt: 2}}>
                <Button variant="contained" sx={{ width: '70%', bgcolor:'#003366' }}>Add</Button>
            </Grid>
        </Box>
       
    );
  };
  