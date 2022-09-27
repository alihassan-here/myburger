import React from 'react';
import me from "../../assets/me.png";

const Users = () => {
    return (
        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#jljljll</td>
                            <td>Ali</td>
                            <td>
                                <img src={me} alt="user" />
                            </td>
                            <td>Admin</td>
                            <td>{"24-03-2023"}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Users;