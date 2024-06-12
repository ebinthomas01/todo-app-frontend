import React from 'react'

const login = () => {
  return (
    <div>
        <div className="container1-fluid">
            <h2>Todo App</h2>
                
            <img  class="img"
          src="https://cdn.prod.website-files.com/60d5fccd073e736650e22809/662acde422a29dec9106c7f8_639b2e8c421020ae7d453c29_pexels-miguel-a%25CC%2581-padrin%25CC%2583a%25CC%2581n-1111369_%25281%2529.jpeg"/>
          
       <div className="container1">
            <div className="row g-3">
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 ">
                    <label htmlFor="" className="label form-label">Enter Email Id</label>
                    <input type="text" className="form-control" placeholder='email-id' />
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="label form-label">Enter Password</label>
                    <input type="text" className="form-control" placeholder='password'/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                   <a href='/AddUser'> Sign Up</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login