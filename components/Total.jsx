import { useSelector } from 'react-redux'
import styles from '../styles/Total.module.css'
import { useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import { clearCart } from '@/redux/features/cartSlice';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";


export const Total = ({ page }) => {

    const router = useRouter()
    const total = useSelector(store => store.total)


    const createOrder = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/api/orders/', data)
            res.status === 201 && router.push(`/orders/${res.data._id}`)
            dispatch(clearCart())
        } catch (err) {
            console.error(err)
        }
    }


    // --------------- PAYPAL FUNC BEGIN ---------------

    //// This values are the props in the UI
    const amount = total;
    const currency = "EUR";
    const style = { "layout": "vertical" };

    //// Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        //// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        //// This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        const shipping = details.purchase_units[0].shipping
                        console.log(shipping)
                        createOrder({
                            customer: shipping.name.full_name,
                            address: shipping.address_line_1,
                            total: total,
                            paymentMethod: 1,
                        })
                    });
                }}
            />
        </>
        );
    }

    // --------------- PAYPAL FUNC END ---------------


    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>€ {total.toFixed(2)}
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>€ 0.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>€ {total.toFixed(2)}
            </div>
            {
                page == 'cart'
                    ? (
                        <div className={styles.paymentMethods}>
                            <button className={styles.cashBtn}>CASH ON DELIVERY</button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": 'AWwDDCIBgWa2GikpHKoZD2MulJO5nfdvqyDhiKkG893HPWIBZT7Y8F-45SkV_oN37S2S2HCtITnsyjLy',
                                    components: "buttons",
                                    currency: "EUR",
                                    "disable-funding": "card,mybank"
                                }}
                            >
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                            </PayPalScriptProvider>
                        </div>
                    )
                    : (
                        <button disabled={true} className={`${styles.button} ${styles.orderBtn}`}>
                            PAID
                        </button>
                    )
            }
        </div >
    )
}
