import './App.css';
import React, { useState } from "react";

function App() {
  const [style, setStyle] = useState("chart");
  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "chart") setStyle("cjart1");
    else setStyle("chart1");
};
  return (
    <div className="App">
      <h1>Rating Breakdown Analysis</h1>

      <table class="chart">
        <tfoot>
          <tr>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td class="jan"><span><b>25</b></span></td>
            <td class="feb"><span><b>25</b></span></td>
            <td class="mar"><span><b>25</b></span></td>
            <td class="apr"><span><b>25</b></span></td>
            <td class="may"><span><b>25</b></span></td>
          </tr>
        </tbody>
      </table>
      <button onclick={changeStyle}>Regenerate</button>
    </div>
  );
}
export default App;