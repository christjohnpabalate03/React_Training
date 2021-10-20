import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import Navbar from "./components/Navbar/Navbar";
//import "./App.css";

function App() {
  const [output1, setOutput1] = useState("");
  const [input1, setInput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [input2, setInput2] = useState("");
  const [output3, setOutput3] = useState("");
  const [input3, setInput3] = useState("");
  const [output4, setOutput4] = useState("");
  const [input4, setInput4] = useState("");

  return (
    <div>
      2022 National and Local Elections
      <div style={{ Height: "100vh", display: "flex" }}>
        <div
          style={{
            width: "25vw",
            backgroundColor: "navajowhite",
            height: "50vh",
            margin: 5,
          }}
        >
          Please Enter The Candidate
          <TextField
            id="outlined-basic"
            label="President"
            variant="outlined"
            onChange={(e) => {
              console.log(e.target.value);
              setInput1(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setOutput1(input1);
            }}
            variant="contained"
          >
            Input
          </Button>
        </div>
        <div style={{ width: "25vw", backgroundColor: "indigo", margin: 5 }}>
          Please Enter The Candidate
          <TextField
            id="outlined-basic"
            label="Vice-President"
            variant="outlined"
            onChange={(e) => {
              console.log(e.target.value);
              setInput2(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setOutput2(input2);
            }}
          >
            Input
          </Button>
        </div>
        <div style={{ width: "25vw", backgroundColor: "magenta", margin: 5 }}>
          Please Enter The Candidate
          <TextField
            id="outlined-basic"
            label="Senators"
            variant="outlined"
            onChange={(e) => {
              console.log(e.target.value);
              setInput3(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setOutput3(input3);
            }}
          >
            Input
          </Button>
        </div>
        <div style={{ width: "25vw", backgroundColor: "lightblue", margin: 5 }}>
          Please Enter The Candidate
          <TextField
            id="outlined-basic"
            label="Party-list"
            variant="outlined"
            onChange={(e) => {
              console.log(e.target.value);
              setInput4(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setOutput4(input4);
            }}
          >
            Input
          </Button>
        </div>
      </div>
      <div>
        <div style={{ Height: "100vh", display: "flex" }}>
          <div
            style={{
              width: "25vw",
              backgroundColor: "navajowhite",
              height: "50vh",
              margin: 5,
            }}
          >
            One vote for {output1}
          </div>
          <div
            style={{
              width: "25vw",
              backgroundColor: "indigo",
              margin: 5,
            }}
          >
            One vote for {output2}
          </div>
          <div
            style={{
              width: "25vw",
              backgroundColor: "magenta",
              margin: 5,
            }}
          >
            One vote for {output3}
          </div>
          <div
            style={{
              width: "25vw",
              backgroundColor: "lightblue",
              margin: 5,
            }}
          >
            One vote for
            {output4}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
