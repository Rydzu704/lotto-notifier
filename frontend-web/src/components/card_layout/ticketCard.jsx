import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TicketCard = ({ data }) => {
  const Rows = data || [];
  //console.log(Rows[0].draw_date)
  return (
    <>
    <Typography sx={{textAlign:'center',color:'#003366',fontWeight: 'bold',margin: '10px'}}>Tickets waiting for results</Typography>
      {Rows.map((row, index) => (
        <Card key={row.id || index} sx={{ margin: '5px auto', width: '30%', backgroundColor: '#fff8dc', borderRadius: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ fontWeight: 'bold' }}>{row.created_at.slice(0, 10)}</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Draw Date: {row.draw_date.slice(0, 10)}</Typography>
            </Box>
            <Typography>
              Your picked numbers: {row.ticket_numbers}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TicketCard;
