import React from 'react';
import Grid from '@mui/material/Grid';

const tableData = [
  { position: 4, points: 2, events: 'test' },
  { position: 5, points: 2, events: 'hb' },
  { position: 6, points: 2, events: 'indhumathy' },
  { position: 7, points: 1, events: 'Nandhini G' },
  { position: 8, points: 0, events: 'kanuru vamsi krishna' },
  { position: 9, points: 0, events: 'Khushboo Sethiya' },
  { position: 10, points: 0, events: 'Nandhini G' },
];

const boxStyle = {
  border: '1px solid #000',
  marginBottom: '10px',
};

const headerStyle = {
  backgroundColor: '#f0e1a6',
  fontWeight: 'bold',
  padding: '10px',
};

const App = () => {
  return (
    <Grid container spacing={3} style={boxStyle}>
      <Grid item xs={12} style={headerStyle}>
        Event
      </Grid>
      <Grid item xs={4}>
        <div>
          <table>
            <thead>
              <tr>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <table>
            <thead>
              <tr>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <table>
            <thead>
              <tr>
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.events}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
