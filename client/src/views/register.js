import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Register() {

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birth: "",
    username: ""
  })

  const changeInput = (evt) => {
    // console.log(evt.target.value)
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

  }
  const regis = (e) => {
    e.preventDefault()
    // console.log(formData.email)
    axios({
      url:'/users/register',
      method: 'POST',
      data: {
        email: formData.email,
        password: formData.password,
        username: formData.username,
        birth: formData.birth
      }
    }).then((response) => {
      console.log(response.data)
      history.push('/')
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <form onSubmit={regis}>
      <div className="container-fluid">
        <div className="row no-gutter">

          <div className="col-md-6 d-none d-md-flex bg-image"></div>



          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h6 className="display-6">Welcome To vOffice Indonesia</h6>
                    <h6 className="text-muted mb-4">Please Register here</h6>
                    <form>
                      <div className="form-group mb-3">
                        <input  type="text" placeholder="Name Company" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" name="username" onChange={changeInput}/>
                      </div>
                      <div className="form-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Email address" required autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" name="email" onChange={changeInput}/>
                      </div>
                      <div className="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Password" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" name="password" onChange={changeInput} />
                      </div>
                      <div className="form-group mb-3">
                        <input  type="date" placeholder="Since at" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" name="birth" onChange={changeInput} />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register</button>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </form>
  )
}


export default Register