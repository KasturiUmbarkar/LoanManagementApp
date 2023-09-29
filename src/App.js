import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LoanDetails from "./components/LoanDetails";
import ProductData from "./data/data";

import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [finalArr, setFinalArr] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = ProductData;
      let updatedData = [];
      for (let i in data) {
        if (data[i].id) {
          const updatedField = { ...data[i], amount: "", checked: false };
          updatedData = [...updatedData, updatedField];
        }
      }
      setJsonData(updatedData);
    };
    getData();
  }, []);

  return (
    <div className="app">
      <div className="app-content">
        <div className="app-content-bold">
          <CloseIcon sx={{ color: "blue" }} />
          <h3>Add Proposed Products and Payout</h3>
        </div>
        <div className="container">
          <select className="app-dropdown">
            <option>OneAndro Manager</option>
          </select>
          <h2 className="app-header">LOAN</h2>
          <hr />
          <LoanDetails
            jsonData={jsonData}
            setJsonData={setJsonData}
            setFinalArr={setFinalArr}
            finalArr={finalArr}
          />
        </div>
        <Button
          variant="contained"
          sx={{ margin: "1rem", width: "95%", borderRadius: "20px" }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
