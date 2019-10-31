import React, { useState } from "react"
import "./App.css"

function Profile(Props) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [Username, setUsername] = useState("")
  const [UsernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  function handleNameSubmit(e) {
    e.preventDefault()
    if (name === "") {
      setNameError("-  cannot be empty")
    } else {
      setNameError("")
    }
    if (email === "") {
      setEmailError("-  cannot be empty")
    } else {
      setEmailError("")
    }
    if (Username === "") {
      setUsernameError("-  cannot be empty")
    } else {
      setUsernameError("")
    }

    if (password === "") {
      setPasswordError("-  cannot be empty")
    } else {
      setPasswordError("")
    }
    if (confirm === "") {
      setConfirmError("-  cannot be empty")
    } else {
      setConfirmError("")
    }
    if (website === "") {
      setWebsiteError("-  cannot be empty")
    } else {
      setWebsiteError("")
    }
    if (password !== confirm) {
      setConfirmError("- password does not match")
    } else {
      setPasswordError("")
    }
  }

  return (
    <div className="Container1">
      <div className="Container2">
        <div className="Container3">
          <header>Profile Form - All Fields required</header>
          <form onSubmit={handleNameSubmit}>
            <div className="Name">
              <p className="Error" className={nameError === "" ? "" : "eee"}>
                Name {nameError}
              </p>
              <input
                className={nameError === "" ? "" : "redbox"}
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="Email">
              <p className="Error" className={emailError === "" ? "" : "eee"}>
                Email {emailError}
              </p>
              <input
                className={emailError === "" ? "" : "redbox"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="email@test.com"
              />
            </div>
            <div className="Username">
              <p
                className="Error"
                className={UsernameError === "" ? "" : "eee"}
              >
                Name {UsernameError}
              </p>
              <input
                className={UsernameError === "" ? "" : "redbox"}
                value={Username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="myusername"
              />
            </div>
            <div className="Password">
              <p
                className="Error"
                className={passwordError === "" ? "" : "eee"}
              >
                Password {passwordError}
              </p>
              <input
                className={passwordError === "" ? "" : "redbox"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="Confirm">
              <p className="Error" className={confirmError === "" ? "" : "eee"}>
                Confirm Password {confirmError}
              </p>
              <input
                className={confirmError === "" ? "" : "redbox"}
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="Website">
              <p className="Error" className={websiteError === "" ? "" : "eee"}>
                Website {websiteError}
              </p>
              <input
                className={websiteError === "" ? "" : "redbox"}
                value={website}
                onChange={e => setWebsite(e.target.value)}
                type="url"
                placeholder="website"
              />
            </div>

            <button id="submit" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Profile
