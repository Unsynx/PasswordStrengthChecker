import { useState } from "react"
import { COMMON_PASSWORDS } from "./common_passwords"
import Condition from "./Condition";

function App() {
  const [newPassword, setNewPassword] = useState("");
  const MIN_PASS_LENGTH = 16;
  const SPECIAL_CHARS = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  return (
    <>
      <img src="./src/assets/backdrop.png" className="absolute top-0 left-0 brightness-120"></img>

      <div className="h-screen flex justify-center items-center">
        <div className="box-border h-1/2 w-1/2 border-4 rounded-2xl bg-yellow-100 border-black drop-shadow-[0_4px_0_rgb(0,0,0)]">

          <h1 className="text-5xl font-bold text-center pt-2">Nik's Password Strength Checker</h1>

          <form onSubmit={e => e.preventDefault()} className="flex justify-center items-center mt-8">
            <input className="accent-slate-100 rounded-2xl bg-white border-4 border-black h-12 w-10/12 pl-2"
              type="text"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
            <input type="button" value="Clear" className="border-4 bg-white hover:bg-slate-200 rounded-2xl h-12 w-24 ml-2 border-black text-3xl font-semibold" onClick={() => setNewPassword("")}/>
          </form>
          
          <Condition condition={newPassword.length > MIN_PASS_LENGTH} conditionText={"Your password is at least " + MIN_PASS_LENGTH + " characters long"}/>
          <Condition condition={newPassword.toUpperCase() != newPassword && newPassword.toLowerCase() != newPassword} conditionText="Your password contains capital and lowercase letters"/>
          <Condition condition={/\d/.test(newPassword)} conditionText="Your password contains at least 1 number"/>
          <Condition condition={SPECIAL_CHARS.test(newPassword)} conditionText="Your password contains at least 1 special characters"/>
          <Condition condition={!COMMON_PASSWORDS.includes(newPassword) && newPassword != ""} conditionText="Your password is not commonly used"/>
        </div>
      </div>
    </>
  )
}

export default App
