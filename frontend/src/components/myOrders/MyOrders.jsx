import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
    return (
        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Item Quantity</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#jljljll</td>
                            <td>Processing</td>
                            <td>23</td>
                            <td>₨{21312}</td>
                            <td>COD</td>
                            <td>
                                <Link to={`/order/${"lsdjfls"}`}><AiOutlineEye /></Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default MyOrders;