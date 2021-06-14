import React from 'react'

function Loggedin() {
    return (
        <div class="bbb">
            <div class="bbbh">
                <h1>Lab logged in  </h1>
            </div>

            <div class=" aaaa">
                <div class="aa-a">
                    <form class="form-one">
                        <div class="aa-aa">
                            <input class="p-1" style={{ width: '70%' }} type='tel' name="username" placeholder="  Enter Patient Phone Number" required />
                            <input class="p-1" style={{ width: '70%' }} type='text' name="" placeholder="  Enter Name" required />
                            <textarea type="textarea" placehoder="  Enter Report" />
                            <input class="p-1" type="file" id="report" name="report" />
                            <button id="btnborder" class="btn btn-primary" style={{ width: '70%' }} type="button">Send Report</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Loggedin
