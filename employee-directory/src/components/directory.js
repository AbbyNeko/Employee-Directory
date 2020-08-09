import React from "react";

const Directory = ({onClick, allEmployees}) => {

        const listedEmployees = allEmployees.map((employee) => 

            <tr>
                <td>{employee.name}</td>
                <td>{employee.title}</td>
                <td>{employee.department}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
            </tr>
        
        );
  
        return (
            <table>
                <tbody>

                    <tr>
                        <th>Name<span class="sort-by-name" onClick={onClick}><i class="fas fa-angle-down"></i></span></th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Phone Number</th>
                        <th>Email Address</th>
                    </tr>

                    {listedEmployees}

                </tbody>
            </table>
        )

}

export default Directory;