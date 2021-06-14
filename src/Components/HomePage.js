import React, {useState} from 'react'

function HomePage() {

    // const[num, setNum]=useState(null)
    // function getData()
    // {
    //     setData(val.target.value)
    //     console.warn(val.target.value);

    // }
    return (
        <div>
            <div class="fff  d-flex flex-column justify-content-center align-items-center ">
                <h1>Online Health Report</h1>
            </div>
            <div class="ggg">
                <p>navigation bar</p>
            </div>
            <div class="hhh">
                <div class="iii">
                    <form class="iiii">
                        <h4 class="heading4">Login for Check Report</h4>
                        <input class="p-1" style={{width:'70%' }} type="tel" name="phone"  placeholder="  Enter Phone Number" required/>
                        <input class="p-1" style={{width:'70%' }} type="password" name="password" placeholder="  Enter Password" required/>
                        <button id="btnborder" class="btn btn-primary" style={{width:'70%' }} type="submit">Login</button>
                        <button id="btnborder" class="btn btn-primary" style={{width:'70%' }}type="submit">Login via OTP</button>
                        <span>Forgot or generate password</span>
                    </form>
                </div>
            </div>
            <div class="jjj">
                <h4>Register for any Lab </h4>
            </div>
            
        </div>
    )
}

export default HomePage
