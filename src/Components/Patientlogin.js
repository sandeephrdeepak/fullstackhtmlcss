import React from 'react'

function Patientlogin() {
    return (

        <div class="bbb">
            <div class="bbbh">
                <h1>Patient Login page </h1>
            </div>
            <div class=" aaaa">
                <div class="aa-a">
                    <form class="form-one">
                        <div class="aa">
                            <input class="p-1" style={{ width: '70%' }} type='tel' name="username" placeholder="  Enter Phone Number" />
                            <input class="p-1" style={{ width: '70%' }} type='password' name="password" placeholder="  Enter Password" />
                            <input class="p-1" style={{ width: '70%' }} type="checkbox" id="chbx" name="chbx" value="agree" />
                            <label for='chbx'>By logging in, i agree all terms of use and privacy policy</label>
                            <br>
                            </br>
                            <button id="btnborder" class="btn btn-primary" style={{ width: '70%' }} type="button">Login</button>
                            <button id="btnborder" class="btn btn-primary" style={{ width: '70%' }} type="button">Login via OTP</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Patientlogin
