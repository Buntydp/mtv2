import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

// const CHART_DATA = [{ data: [40, 42, 43, 51, 55, 57, 62, 82, 84, 116, 118, 140, 144, 148, 496] }];
const CHART_DATA = [
  { data: [40, 44, 49, 57, 69, 81, 88, 97, 112, 138, 181, 218, 264, 292, 321, 345, 461] }
];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '38%', borderRadius: 2 }
    },
    xaxis: {
      categories: [
        'OR',
        'OH',
        'AZ',
        'MI',
        'GA',
        'WA',
        'NC',
        'CO',
        'PA',
        'FL',
        'MD',
        'TX',
        'IL',
        'VA',
        'NY',
        'MA',
        'CA'
      ]
    }
  });

  return (
    <Card>
      <CardHeader
        title="Number of Companies per State"
        subheader="Only top 17 states are displayed here"
      />
      <Box sx={{ mx: 3, my: 2 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
