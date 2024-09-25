import NavBarComponent from "./NavBarComponent";


function Holidays() {
    const user = localStorage.getItem("user")
    return (
        <>
        <NavBarComponent user={user} />
        <div className="common-form">
            <h2 style={{textAlign:"center", marginBottom:"30px"}}>Leave Calender!</h2>
            <div class="holidays">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Holiday Name</th>
                            <th>Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jan 1, 2024</td>
                            <td>New Year Day</td>
                            <td>Monday</td>
                        </tr>
                        <tr>
                            <td>Jan 15, 2024</td>
                            <td>Makar Sankranthi</td>
                            <td>Monday</td>
                        </tr>
                        <tr>
                            <td>Jan 26, 2024</td>
                            <td>Republic Day</td>
                            <td>Friday</td>
                        </tr>
                        <tr>
                            <td>Jan 1, 2024</td>
                            <td>New Year Day</td>
                            <td>Monday</td>
                        </tr>
                        <tr>
                            <td>Apr 9, 2024</td>
                            <td>Ugadi/Gudi Padwa</td>
                            <td>Tuesday</td>
                        </tr>
                        <tr>
                            <td>Apr 11, 2024</td>
                            <td>Ramzan/Id-ul-Fitr</td>
                            <td>Thursday</td>
                        </tr>
                        <tr>
                            <td>May 1, 2024</td>
                            <td>Maharashtra Day/Labour Day</td>
                            <td>Wednesday</td>
                        </tr>
                        <tr>
                            <td>Aug 15, 2024</td>
                            <td>Independence Day</td>
                            <td>Thursday</td>
                        </tr>
                        <tr>
                            <td>Oct 2, 2024</td>
                            <td>Gandhi Jayanthi</td>
                            <td>Wednesday</td>
                        </tr>
                        <tr>
                            <td>Oct 31, 2024</td>
                            <td>Diwali</td>
                            <td>Thursday</td>
                        </tr>
                        <tr>
                            <td>Dec 25, 2024</td>
                            <td>Christmas</td>
                            <td>Wednesday</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>

        </>
    );
}

export default Holidays;