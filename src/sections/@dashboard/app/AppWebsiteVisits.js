import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Government',
    type: 'column',
    data: [14, 25, 36, 30, 34, 45, 65, 88, 111, 122, 168]
  },
  {
    name: 'Private',
    type: 'area',
    data: [17, 35, 41, 57, 35, 53, 61, 93, 125, 142, 175]
  },
  {
    name: 'Public',
    type: 'line',
    data: [12, 21, 28, 34, 29, 32, 67, 82, 112, 130, 190]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: ['0.0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0'],
    xaxis: { type: 'number' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} K`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Average Salary" subheader="with respect to Rating of the Organization" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
