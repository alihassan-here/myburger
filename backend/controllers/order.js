import { asyncHandler } from "../middlewares/errorMiddleware.js";
import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const placeOrder = asyncHandler(
    async (req, res, next) => {
        const {
            shippingInfo,
            orderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount,

        } = req.body;

        const user = req.user._id;
        const orderOptions = {
            shippingInfo,
            orderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount,
            user
        }

        await Order.create(orderOptions);
        res.status(201).json({
            success: true,
            message: "Order Placed Successfully via Cash On Delivery",
        })
    }
)

export const MyOrders = asyncHandler(
    async (req, res, next) => {
        const orders = await Order.find({
            user: req.user._id,
        }).populate("user", "name");
        res.status(200).json({
            success: true,
            orders
        })
    }

)

export const getOrderDetails = asyncHandler(
    async (req, res, next) => {
        const order = await Order.findById(req.params.id).populate("user", "name");
        if (!order) {
            return next(new ErrorHandler("No Order Found with this ID", 404));
        }
        res.status(200).json({
            success: true,
            order
        })
    }
);

export const getAdminOrders = asyncHandler(
    async (req, res, next) => {
        const order = await Order.find({}).populate("user", "name");
        if (!order) {
            return next(new ErrorHandler("No Order Found with this ID", 404));
        }
        res.status(200).json({
            success: true,
            order
        })
    }
);

export const processOrder = asyncHandler(
    async (req, res, next) => {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return next(new ErrorHandler("No Order Found with this ID", 404));
        }
        if (order.orderStatus === "Preparing") order.orderStatus = "Shipped";
        else if (order.orderStatus === "Shipped") {
            order.orderStatus = "Delivered";
            order.deliveredAt = Date.now();
        } else if (order.orderStatus === "Delivered") {
            return next(new ErrorHandler("Order Already Delivered", 400));
        }
        await order.save();
        res.status(200).json({
            success: true,
            message: "status Updated Successfully",
        })
    }
);