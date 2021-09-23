import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  let expenseValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMax = Math.max(...expenseValue);
  console.log("totol max = " + totalMax);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;
