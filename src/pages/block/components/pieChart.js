// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactApexChart from 'react-apexcharts';

// const PieChart = () => {
//   const [state, setState] = useState({
//     series: [44, 55, 41],
//     options: {
//       chart: {
//         type: 'donut',
//       },
//       legend: {
//         position: 'top',
//         horizontalAlign: 'left',
//         offsetX: -10,
//         show: false,
//       },
//       // responsive: [
//       //   {
//       //     breakpoint: 480,
//       //     options: {
//       //       chart: {
//       //         width: 200,
//       //       },
//       //       legend: {
//       //         position: 'bottom',
//       //       },
//       //     },
//       //   },
//       // ],
//     },
//   });

//   return (
//     <div id="chart">
//       <ReactApexChart
//         options={state.options}
//         series={state.series}
//         type="donut"
//         width={179}
//         height={179}
//       />
//     </div>
//   );
// };

// export default PieChart


import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = () => {

  useEffect(() => {

    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 160, endAngle: 380
      })
    );

    // Create series

    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "litres",
        categoryField: "country",
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(70),
        innerRadius: am5.percent(65)
      })
    );

    let colorSet = am5.ColorSet.new(root, {
      colors: [series0.get("colors").getIndex(0)],
      passOptions: {
        lightness: -0.05,
        hue: 0
      }
    });

    series0.set("colors", colorSet);

    series0.ticks.template.set("forceHidden", true);
    series0.labels.template.set("forceHidden", true);

    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 160,
        endAngle: 380,
        valueField: "bottles",
        innerRadius: am5.percent(80),
        categoryField: "country"
      })
    );

    series1.ticks.template.set("forceHidden", true);
    series1.labels.template.set("forceHidden", true);

    let label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: "center",
        centerY: am5.p100,
        centerX: am5.p50,
        text: "\n[bold fontSize:30px]85.4[/]"
      })
    );

    let data = [
      {
        country: "Lithuania",
        litres: 501.9,
        bottles: 1500
      },
      {
        country: "Czech Republic",
        litres: 301.9,
        bottles: 990
      },
      {
        country: "Ireland",
        litres: 201.1,
        bottles: 785
      },
      {
        country: "Germany",
        litres: 165.8,
        bottles: 255
      },
      {
        country: "Australia",
        litres: 139.9,
        bottles: 452
      },
      {
        country: "Austria",
        litres: 128.3,
        bottles: 332
      },
      {
        country: "UK",
        litres: 99,
        bottles: 150
      },
      {
        country: "Belgium",
        litres: 60,
        bottles: 178
      },
      {
        country: "The Netherlands",
        litres: 50,
        bottles: 50
      }
    ];

    // Set data
    series1.data.setAll(data);

    return () => {
      root.dispose();
    };

  }, []);

  return (
    <div id="chartdiv" style={{ width: "179px", height: "179px" }}>
    </div>
  );
};

export default PieChart;