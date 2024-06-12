import axios from 'axios'
import React, { useState } from 'react'


const AddUser = () => {
    const [data,setData] =useState(
        {
          "name":"",
            "dob":"",
            "blood":"",
            "mobile":"",
            "address":"",
            "pincode":"",
            "district":"",
            "place":"",
            "email":"",
            "username":"",
            "password":"",
            "confirmpass":""
       
        }
    )
   


    const inputHandler = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }


    const readValue = () => {
        if(data.password != data.confirmpass)
            {
              alert("Password does't Match")
            }
        else  
        {
        axios.post("http://localhost:8081/add",data).then(
        (response) => {
            console.log(response.data)
            if(response.data.status=="success")
                {
                    alert("Successfully Registered")
                }
            else
                {
                    alert("Error")
                    
                }      
        } 
    ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  }
      return (
        <div>
           
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label fomr-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Date</label>
                  <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label form-label">Blood Group</label>
                  <select name="blood" id="" className="form-control">
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Mobile</label>
                  <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Address</label>
                  <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler} ></textarea>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Pincode</label>
                  <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label form-label">District</label>
                  <select name="blood" id="" className="form-control">
                    <option value="	Alappuzha">	Alappuzha</option>
                    <option value="Ernakulam">Ernakulam</option>
                    <option value="Idukki">Idukki</option>
                    <option value="Kannur">Kannur</option>
                    <option value="Kasaragod">	Kasaragod</option>
                    <option value="Kollam">Kollam</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    <option value="Malappuram">Malappuram</option>
                    <option value="Palakkad">Palakkad</option>
                    <option value="Pathanamthitta">Pathanamthitta</option>
                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="Thrissur">Thrissur</option>
                    <option value="Wayanad">Wayanad</option>
                  </select>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Place</label>
                  <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Email</label>
                  <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">User Name</label>
                  <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Password</label>
                  <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="label fomr-label">Confirm Password</label>
                  <input type="text" className="form-control" name='confirmpass' value={data.confirmpass} onChange={inputHandler} />
                  </div>
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-warning"  onClick={readValue} > CREATE ACCOUNT</button>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <a href='/'> Go Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default AddUser