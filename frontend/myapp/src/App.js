import logo from "./logo.svg";
import react from "react";
import { useState } from "react";
import "./App.css";
import { Table } from "./Components/table";

function App() {
  let [getdata11, setgetdata] = useState([]);
  let [userdata, setuserdata] = useState({ name: "", phonenumber: "" });
  let [newdata2, setnewdata2] = useState({ name: "", phonenumber: "" });
  let getuserdata = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };
  const btn = async () => {
    const data = await fetch("http://192.168.18.37:5500/mango/array1", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    const result = await data.json();
    console.log(result);
    setgetdata(result);
    console.log(userdata);
  };
  const getdata = async () => {
    let { name, phonenumber } = userdata;
    const data1 = await fetch("http://192.168.18.37:5500/mango/array1", {
      method: "post",
      body: JSON.stringify({
        name: name,
        phonenumber: phonenumber,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  const getdata1 = async () => {
    const data2 = await fetch("http://192.168.18.37:5500/mango/array1", {
      method: "post",
      body: JSON.stringify({
        name: "manak",
        phonenumber: 9879678797,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  const ondelete = async () => {
    const deletedata = await fetch(
      "http://192.168.18.37:5500/mango/array1/67d28542817e814f211163fb",
      { method: "delete", headers: { "Content-Type": "application/json" } }
    );
  };
  const onupdate = async () => {
    const updatedata = await fetch(
      "http://192.168.18.37:5500/mango/array1/67d28a17601198f42ea4c403",
      {
        method: "put",
        body: JSON.stringify({
          name: "param",
          phonenumber: 98798687,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  const newdata = (e) => {
    setnewdata2({ ...newdata2, [e.target.name]: e.target.value });
  };
  const newdata3 = async () => {
    let { name, phonenumber } = newdata2;
    console.log(name);
    console.log(phonenumber);
    console.log(newdata2);
    const newdata4 = await fetch("http://192.168.18.37:5500/mango/array1", {
      method: "post",
      body: JSON.stringify({
        name: name,
        phonenumber: phonenumber,
      }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <>
      <div>
        <div>
          <input type="text" name="name" onChange={getuserdata}></input>
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            onChange={getuserdata}
          ></input>
        </div>
      </div>
      <button onClick={btn}>Get data</button>

      <button onClick={getdata}>add data</button>

      <button onClick={getdata1}>Add Data</button>

      <button onClick={ondelete}>delete</button>

      <button onClick={onupdate}>update</button>

      <div>
        <input
          placeholder="input"
          type="text"
          name="name"
          onChange={newdata}
        ></input>
      </div>
      <div>
        <input
          placeholder="input"
          type="number"
          name="phonenumber"
          onChange={newdata}
        ></input>
      </div>
      <div>
        <button onClick={newdata3}>add data</button>
      </div>
      {/* 
  {
    getdata11.map((element)=>
    {
         return element.name
    })
  } */}

  <Table></Table>
    </>
  );
}

export default App;
