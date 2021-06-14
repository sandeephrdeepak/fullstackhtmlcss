import React from 'react'

function Registration() {
    return (
        <div class="reg-a">
            <div class="fff d-flex flex-row justify-content-center align-items-center ">
                <h1> Registration Form for Patient
                 </h1>
            </div>
            <div class="reg-b d-flex flex-row justify-content-center align-items-center">
                <div class=" d-flex flex-column justify-content-center align-items-center" style={{ width: '400px', height: '400px' }}>
                    <div class="reg-b">
                        <form class=" reg-b regform d-flex flex-column justify-content-around align-items-center">
                            <input class="p-1" type="text" name="name" id="name" placeholder="Enter Name" required />
                            <input class="p-1" type="number" name="age" id="age" min="0" max="150" placeholder="Age" required />
                            <input class="p-1" type="radio" name="gender" id="male" value="male" /><label for="male">Male</label>
                            <input class="p-1" type="radio" name="gender" id="female" value="female" /><label for="female">Female</label>
                            <input class="p-1" type="radio" name="gender" id="other" value="other" /><label for="other">Other</label>
                            <input class="p-1" type="tel" name="phone" id="phone" placeholder="Enter Phone Number" pattern="[0-9]{10}" required />
                            <input class="p-1" type="email" name="email" placeholder="Enter Email Addess" />
                            <input class="p-1" type="submit" onClick="alert('Registered Successfully')" value="submit" />
                        </form>
                    </div>

                </div>

            </div>
        </div>



    )
}

export default Registration
