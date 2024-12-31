"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import useCart from '../productsdetail/hooks/useCart';
import Image from 'next/image';

const Cart = () => {
    const { cart } = useCart();
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {

        const total = cart.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(total);
        setLoading(false)
    }, [cart]);

    if (loading) {  
        return (  
            <div className="flex flex-col justify-center items-center h-screen">  
                <h1 className='animate-bounce'>
                    Loading ...
                </h1>
            </div>  
        );  
    }  

    return (
        (cart.length === 0 ?
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
                <Link href="/" className="mt-4 w-40 p-2 bg-blue-600 text-white rounded text-center">
                    Back to Products
                </Link>
            </div>
            : <div className="my-10 mx-4">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <div className="mt-5">
                    {cart.map((product) => (
                        <div key={product.id} className="flex items-center justify-between border-b py-4">
                            <div className="flex items-center">

                                <div>
                                    <Image src={product.image} alt={product.title} width='100' height='100'
                                        className="w-20 h-20 object-cover rounded-md mr-4" />
                                    <h2 className="font-semibold">{product.title}</h2>
                                    <p className="text-gray-600">Price: ${product.price}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div>Quantity: ${product.quantity}</div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-6 flex justify-between text-xl font-bold">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="mt-8">
                        <Link href="/checkout" className="w-full p-2 bg-green-600 text-white rounded text-center hover:bg-green-500">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>)
    );
};

export default Cart;

