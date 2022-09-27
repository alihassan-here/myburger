import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"sddf slsdfj sdfl"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Ali"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {923001122333}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-2020"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"23-02-2021"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        #{"slkdkjfs"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2021"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ₨{2123}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        ₨{212}
                    </p>
                    <p>
                        <b>Tax</b>
                        ₨{210}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        ₨{210 + 212 + 2123}
                    </p>
                </div>
                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span>x<span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span>x<span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
                        <div style={{ fontWeight: 800 }}>₨{2123}</div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails;