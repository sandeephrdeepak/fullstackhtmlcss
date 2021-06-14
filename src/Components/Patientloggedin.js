import React from 'react'

function Patientloggedin() {
    return (
        <div class="eee">
            <div class="ccc">
                <h1>Patient Name, age, sex</h1>
            </div>
            <div class="ddd" >
                <h2>Your Reports are here</h2>
                <table class ="table table-striped table-dark table-hover border:2">
                    <thead>
                        <th>Reports</th>
                        <th> Click to See</th>
                        <th> Click to Download</th>
                    </thead>
                    <tbody >
                        <tr>
                        <td>Report1</td>
                         <td><button class="btn btn-primary" style={{width:'70%' }} >See</button></td>
                         <td><button class="btn btn-primary" style={{width:'70%' }} >Download</button></td>
                        </tr>
                        <tr>
                        <td>Report2</td>
                         <td><button>See</button></td>
                         <td><button>Download</button></td>
                        </tr>
                        <tr>
                        <td>Report3</td>
                         <td><button>See</button></td>
                         <td><button>Download</button></td>
                        </tr>
                   

                    </tbody>
                   
                </table>
            </div>

        </div>
    )
}

export default Patientloggedin
