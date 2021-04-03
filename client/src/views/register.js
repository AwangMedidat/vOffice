import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

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
  
  function regis  (e) {
    e.preventDefault()
    // console.log(formData.email)
  
    fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          username: formData.username,
          birth: formData.birth
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
        Swal.fire({
          icon: 'success',
          title: "Thanks for Register",
          text: `With Email ${data.email}`,
          showConfirmButton: true
        })
        history.push('/')
      })
      .catch(err => console.error('Error: ', err))
  }


  return (
    <form>
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
                      <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={regis}>Register</button>
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