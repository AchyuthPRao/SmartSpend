// // // import { Pie } from "@nivo/pie";
// // // import { ThemeProvider, SvgWrapper } from "@nivo/core";
// // // import React from "react";


// // // const data = [
// // //  {
// // //   id: "Essentials",
// // //   value: 410,
// // //   color: "hsl(29, 90%, 80%)"
// // //  },
// // //  {
// // //   id: "Loans",
// // //   value: 175,
// // //   color: "hsl(213, 70%, 50%)"
// // //  },
// // //  {
// // //   id: "Misc",
// // //   value: 128,
// // //   color: "hsl(58, 70%, 50%)"
// // //  },
// // //  {
// // //   id: "Misc",
// // //   value: 168,
// // //   color: "hsl(210, 60%, 50%)"
// // //  }
// // // ];

// // // const Graph = () => (
// // //  <div>
// // //   <Pie
// // //    width={500}
// // //    height={500}
// // //    data={data}
// // //    margin={{
// // //     top: 40,
// // //     right: 80,
// // //     bottom: 20,
// // //     left: 80
// // //    }}
// // //    innerRadius={0.5}
// // //    padAngle={0.7}
// // //    cornerRadius={3}
// // //    borderColor="inherit:darker(0.6)"
// // //   />
// // //   <ThemeProvider>
// // //    <SvgWrapper
// // //     height={100}
// // //     width={400}
// // //     margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
// // //    >
// // //    </SvgWrapper>
// // //   </ThemeProvider>
// // //  </div>
// // // );

// // export default Graph;
import React from "react";
import { Pie } from "@nivo/pie";
// import { ThemeProvider, SvgWrapper } from "@nivo/core";

const data = [
  {
    id: "Essentials",
    value: 410,
    color: "hsl(29, 90%, 80%)",
  },
  {
    id: "Loans",
    value: 175,
    color: "hsl(213, 70%, 50%)",
  },
  {
    id: "Misc",
    value: 128,
    color: "hsl(58, 70%, 50%)",
  },
  {
    id: "Investments",
    value: 168,
    color: "hsl(210, 60%, 50%)",
  },
];

const Graph = () => (
  <div>
    <Pie
      width={500}
      height={500}
      data={data}
      margin={{
        top: 40,
        right: 80,
        bottom: 20,
        left: 80,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
    />
  </div>
);

export default Graph;

