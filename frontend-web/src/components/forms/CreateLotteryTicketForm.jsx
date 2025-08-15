import * as React from 'react';
import {Box,Button, Grid,TextField} from '@mui/material';
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
const divStyle = {
    width:'30px',
    height:'30px',
    backgroundColor:'rgb(255, 234, 196)',
    flexShrink: 0,
};
const circleStyle = {
    width: '30px',      
    height: '30px',
    backgroundColor: '#e9b13aff',
    borderRadius: '50%',   
    display: 'flex',              
    alignItems: 'center',          
    justifyContent: 'center',     
    fontWeight: 'bold',            
    color: '#003366',    
};
const textfieldStyle = {
    width:'45px',
    flexShrink: 0,
    color:'#003366',
    '& input[type=number]': {
      MozAppearance: 'textfield',  
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
      },
    },
}


export const CreateLotteryTicketForm = (props) => {
   
    return (
        <Box style={boxStyle}>
        <h2 style={{textAlign:'left',color:'#003366', marginLeft:'10%'}}>Add Lottery Ticket</h2>
        <h4 style={{textAlign:'left',color:'#003366', marginLeft:'10%'}}>Pick your numbers</h4>
            <Grid marginLeft={'10%'} marginRight={'10%'} sx={{ display: 'flex', flexWrap: 'wrap', gap: 2}}> 
                {Array(49).fill().map((_, i) => (
                    <div style={{
                        ...circleStyle,
                        backgroundColor: props.selectedNumbers.includes(i + 1) ? '#ff7b00ff' : '#e9b13aff',
                        color: props.selectedNumbers.includes(i + 1) ? '#1e2086ff' : '#003366'
                        }}
                        onClick={() => props.handleClickNumber(i + 1)}>
                        {i+1}
                    </div>
                ))}
            </Grid>
            <Grid marginLeft={'10%'} sx={{mt: 2}}>
                <label style={{color:'#003366',fontWeight:'bolder'}}>Lotto plus</label>
                    <Checkbox
                        onChange={
                            (e)=> props.setInputData({...props.inputData,lottoPlusIsTrue:e.target.checked})
                        }
                    />
            </Grid>
            <Grid marginLeft={'10%'} sx={{mt: 2}}>
                <Button variant="contained" type="submit"  onClick={props.handleSubmit} sx={{ width: '70%', bgcolor:'#003366' }}>Add</Button>
            </Grid>
            <div id="error" style={{color: '#a30404ff', marginTop: '10px'}}></div>
        </Box>
       
    );
  };
  