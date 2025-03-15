import React, { useEffect } from 'react'
import { useState } from "react";
export const Table = () => {
    let [userdata, setuserdata] = useState({ name: "", phonenumber: "" });
    let [mongodata, setmongodata]=useState([])

    let getuserdata = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
      };

      let add_data=async()=>
        {
            let { name, phonenumber } = userdata;
        console.log(name);
        console.log(phonenumber);
        const newdata4 = await fetch("http://192.168.18.37:5500/mango/array1", {
          method: "post",
          body: JSON.stringify({
            name: name,
            phonenumber: phonenumber,
          }),
          headers: { "Content-Type": "application/json" },
        });
        }

      const alldata = async () => {
        const data = await fetch("http://192.168.18.37:5500/mango/array1", {
          method: "get",
          headers: { "Content-Type": "application/json" },
        });
        const result = await data.json();
        // console.log(result);
        setmongodata(result)
      };

      useEffect(()=>
    {
        alldata()
    },[add_data])

    const ondelete=async(element)=>{
        console.log(element)
        const ondelete1= await fetch(`http://192.168.18.37:5500/mango/array1/${element}`,
            {method:'delete',
                headers:{'Content-type':'application/json'}
            }
        )
    }
    const onUpdate = async (element) => {
        const updatedata = await fetch(
          `http://192.168.18.37:5500/mango/array1/${element._id}`,
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
 
  return <>
  
  <hr></hr>
  <div>
    <div>
         <div> name </div>
         <input placeholder='Enter name' name='name' onChange={getuserdata}></input>
    </div>
   
    <div>
           <div> phone</div>
            <input placeholder='Enter name' name='phonenumber' onChange={getuserdata}></input>
    </div>

   <div>
    <button onClick={add_data}>Add Data</button>
   </div>
  </div>

  <div className=''>
    {
        mongodata.map((element)=>
        {
            return <>
            <div  className='d-flex justify-content-evenly' style={{}}>
            <div>
               
                <div>{element.name}</div>
            </div>
                <div>
                   
                    <div>{element.phonenumber}</div>
                </div>
                <div>
                  
                    <div>{element.date}</div>
                </div>

                <div>
                <button onClick={()=>{ondelete(element._id)}}>Delete Data</button>
                </div>

                <div>
                <button onClick={()=>{onUpdate(element)}}>update Data</button>
                </div>

           
            </div>
            </>
        })
    }
  </div>


  </>
}
