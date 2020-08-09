import React from "react";

const Directory = ({onClick, allEmployees}) => {

        let index = 0;
        const listedEmployees = allEmployees.map((employee) => 

            <tr key={index++}>
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
                        <th>Name<span className="sort-by-name" onClick={onClick}><i className="fas fa-angle-down"></i></span></th>
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