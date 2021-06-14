import React from 'react'

function Lablogin() {
    return (
        <div class="bbb">
            <div class="bbbh">
                <h1>Login by Lab </h1>
            </div>

            <div class=" aaaa">
                <div class="aa-a">
                    <form class="form-one">
                        <div class="aa">
                            <input class="p-1" style={{ width: '70%' }} type='tel' name="username" placeholder="  Enter Phone Number" required />
                            <input class="p-1" style={{ width: '70%' }} type='password' name="password" placeholder="  Enter Password" />
                            <button id="btnborder" class="btn btn-primary" style={{ width: '70%' }} type="button">Login</button>
                            <button id="btnborder" class="btn btn-primary" style={{ width: '70%' }} type="button">Login via OTP</button>

                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Lablogin