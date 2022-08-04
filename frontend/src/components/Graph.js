import {Area, Brush, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import React from 'react';
import * as PropTypes from "prop-types";

const data03 = [{
  "order_id": 37,
  "number": 1915966,
  "price_usd": 154,
  "delivery_date": "2022-05-04",
  "price_rub": 9276.5596
}, {
  "order_id": 38,
  "number": 1287751,
  "price_usd": 1891,
  "delivery_date": "2022-05-17",
  "price_rub": 113908.9234
}, {
  "order_id": 39,
  "number": 1498932,
  "price_usd": 1162,
  "delivery_date": "2022-05-21",
  "price_rub": 69995.8588
}, {
  "order_id": 40,
  "number": 1897398,
  "price_usd": 414,
  "delivery_date": "2022-06-01",
  "price_rub": 24938.2836
}, {
  "order_id": 41,
  "number": 1810448,
  "price_usd": 1668,
  "delivery_date": "2022-05-11",
  "price_rub": 100475.9832
}, {
  "order_id": 42,
  "number": 1168728,
  "price_usd": 658,
  "delivery_date": "2022-05-03",
  "price_rub": 39636.2092
}, {
  "order_id": 43,
  "number": 1560222,
  "price_usd": 1587,
  "delivery_date": "2022-05-11",
  "price_rub": 95596.7538
}, {
  "order_id": 44,
  "number": 1592686,
  "price_usd": 514,
  "delivery_date": "2022-05-23",
  "price_rub": 30962.0236
}, {
  "order_id": 45,
  "number": 1786437,
  "price_usd": 618,
  "delivery_date": "2022-05-28",
  "price_rub": 37226.7132
}, {
  "order_id": 46,
  "number": 1485012,
  "price_usd": 1124,
  "delivery_date": "2022-05-09",
  "price_rub": 67706.8376
}, {
  "order_id": 47,
  "number": 1741017,
  "price_usd": 514,
  "delivery_date": "2022-05-16",
  "price_rub": 30962.0236
}, {
  "order_id": 48,
  "number": 1497493,
  "price_usd": 1198,
  "delivery_date": "2022-05-30",
  "price_rub": 72164.4052
}, {
  "order_id": 49,
  "number": 1877503,
  "price_usd": 1204,
  "delivery_date": "2022-05-29",
  "price_rub": 72525.8296
}, {
  "order_id": 50,
  "number": 1426726,
  "price_usd": 1997,
  "delivery_date": "2022-05-20",
  "price_rub": 120294.0878
}, {
  "order_id": 51,
  "number": 1426727,
  "price_usd": 888,
  "delivery_date": "2022-05-20",
  "price_rub": 53490.8112
}, {
  "order_id": 1,
  "number": 1249708,
  "price_usd": 777,
  "delivery_date": "2022-05-24",
  "price_rub": 46804.4598
}, {
  "order_id": 2,
  "number": 1182407,
  "price_usd": 214,
  "delivery_date": "2022-05-13",
  "price_rub": 12890.8036
}, {
  "order_id": 3,
  "number": 1120833,
  "price_usd": 610,
  "delivery_date": "2022-05-05",
  "price_rub": 36744.814
}, {
  "order_id": 4,
  "number": 1060503,
  "price_usd": 1804,
  "delivery_date": "2022-05-29",
  "price_rub": 108668.2696
}, {
  "order_id": 5,
  "number": 1617397,
  "price_usd": 423,
  "delivery_date": "2022-05-26",
  "price_rub": 25480.4202
}, {
  "order_id": 6,
  "number": 1135907,
  "price_usd": 682,
  "delivery_date": "2022-05-02",
  "price_rub": 41081.9068
}, {
  "order_id": 7,
  "number": 1235370,
  "price_usd": 1330,
  "delivery_date": "2022-05-05",
  "price_rub": 80115.742
}, {
  "order_id": 8,
  "number": 1329994,
  "price_usd": 646,
  "delivery_date": "2022-05-12",
  "price_rub": 38913.3604
}, {
  "order_id": 9,
  "number": 1876515,
  "price_usd": 1335,
  "delivery_date": "2022-05-15",
  "price_rub": 80416.929
}, {
  "order_id": 10,
  "number": 1835607,
  "price_usd": 1227,
  "delivery_date": "2022-05-05",
  "price_rub": 73911.2898
}, {
  "order_id": 11,
  "number": 1465034,
  "price_usd": 719,
  "delivery_date": "2022-05-12",
  "price_rub": 43310.6906
}, {
  "order_id": 12,
  "number": 1077923,
  "price_usd": 508,
  "delivery_date": "2022-06-01",
  "price_rub": 30600.5992
}, {
  "order_id": 13,
  "number": 1968041,
  "price_usd": 1600,
  "delivery_date": "2022-05-21",
  "price_rub": 96379.84
}, {
  "order_id": 14,
  "number": 1682035,
  "price_usd": 1867,
  "delivery_date": "2022-05-09",
  "price_rub": 112463.2258
}, {
  "order_id": 15,
  "number": 1911795,
  "price_usd": 1585,
  "delivery_date": "2022-05-25",
  "price_rub": 95476.279
}, {
  "order_id": 16,
  "number": 1028782,
  "price_usd": 1377,
  "delivery_date": "2022-05-19",
  "price_rub": 82946.8998
}, {
  "order_id": 17,
  "number": 1686040,
  "price_usd": 129,
  "delivery_date": "2022-06-01",
  "price_rub": 7770.6246
}, {
  "order_id": 18,
  "number": 1917698,
  "price_usd": 1322,
  "delivery_date": "2022-05-25",
  "price_rub": 79633.8428
}, {
  "order_id": 19,
  "number": 1888432,
  "price_usd": 388,
  "delivery_date": "2022-05-11",
  "price_rub": 23372.1112
}, {
  "order_id": 20,
  "number": 1430015,
  "price_usd": 814,
  "delivery_date": "2022-05-28",
  "price_rub": 49033.2436
}, {
  "order_id": 21,
  "number": 1938886,
  "price_usd": 1021,
  "delivery_date": "2022-05-03",
  "price_rub": 61502.3854
}, {
  "order_id": 22,
  "number": 1968437,
  "price_usd": 1911,
  "delivery_date": "2022-05-20",
  "price_rub": 115113.6714
}, {
  "order_id": 23,
  "number": 1339024,
  "price_usd": 341,
  "delivery_date": "2022-05-12",
  "price_rub": 20540.9534
}, {
  "order_id": 24,
  "number": 1832176,
  "price_usd": 1331,
  "delivery_date": "2022-05-06",
  "price_rub": 80175.9794
}, {
  "order_id": 25,
  "number": 1554847,
  "price_usd": 1755,
  "delivery_date": "2022-05-20",
  "price_rub": 105716.637
}, {
  "order_id": 26,
  "number": 1519872,
  "price_usd": 1349,
  "delivery_date": "2022-06-01",
  "price_rub": 81260.2526
}, {
  "order_id": 27,
  "number": 1241924,
  "price_usd": 1319,
  "delivery_date": "2022-05-16",
  "price_rub": 79453.1306
}, {
  "order_id": 28,
  "number": 1208915,
  "price_usd": 168,
  "delivery_date": "2022-05-01",
  "price_rub": 10119.8832
}, {
  "order_id": 29,
  "number": 1733144,
  "price_usd": 392,
  "delivery_date": "2022-05-22",
  "price_rub": 23613.0608
}, {
  "order_id": 30,
  "number": 1773045,
  "price_usd": 977,
  "delivery_date": "2022-05-27",
  "price_rub": 58851.9398
}, {
  "order_id": 31,
  "number": 1581192,
  "price_usd": 1474,
  "delivery_date": "2022-05-17",
  "price_rub": 88789.9276
}, {
  "order_id": 32,
  "number": 1021563,
  "price_usd": 145,
  "delivery_date": "2022-05-08",
  "price_rub": 8734.423
}, {
  "order_id": 33,
  "number": 1844121,
  "price_usd": 770,
  "delivery_date": "2022-05-08",
  "price_rub": 46382.798
}, {
  "order_id": 34,
  "number": 1089979,
  "price_usd": 1392,
  "delivery_date": "2022-05-14",
  "price_rub": 83850.4608
}, {
  "order_id": 35,
  "number": 1465628,
  "price_usd": 1808,
  "delivery_date": "2022-06-01",
  "price_rub": 108909.2192
}, {"order_id": 36, "number": 1615303, "price_usd": 1242, "delivery_date": "2022-05-22", "price_rub": 74814.8508}];


function AreaChart(props) {
  return null;
}

AreaChart.propTypes = {children: PropTypes.node};
export default class Graph extends React.Component {
  render() {
    return (
      <LineChart
        width={1000} height={400} data={data03}
        margin={{top: 40, right: 40, bottom: 20, left: 20}}
      >
        <CartesianGrid vertical={false}/>
        <XAxis dataKey="delivery_date" label=""/>
        <YAxis domain={['auto', 'auto']} label=""/>
        <Tooltip
          wrapperStyle={{
            borderColor: 'white',
            boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
          }}
          contentStyle={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
          labelStyle={{fontWeight: 'bold', color: '#666666'}}
        />
        <Line dataKey="price_rub" stroke="#ff7300" dot={false}/>
        <Brush dataKey="delivery_date" startIndex={data03.length - 40}>
          <AreaChart>
            <CartesianGrid/>
            <YAxis hide domain={['auto', 'auto']}/>
            <Area dataKey="price_rub" stroke="#ff7300" fill="#ff7300" dot={false}/>
          </AreaChart>
        </Brush>
      </LineChart>);
  }
}
