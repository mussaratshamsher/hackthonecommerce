 "use client"
import React from 'react';   
import Link from 'next/link';  
import useCart from '../productsdetail/hooks/useCart';
import Image from 'next/image';

const Checkout = () => {  
    const { cart } = useCart();  
    const [totalPrice, setTotalPrice] = React.useState(0);  

    React.useEffect(() => {  
        const total = cart.reduce((sum, product) => sum + product.price, 0);  
        setTotalPrice(total);  
    }, [cart]);  

    if (cart.length === 0) {  
        return (  
            <div className="flex flex-col justify-center items-center h-screen">  
                <h1 className="text-2xl font-bold">Your Cart is Empty</h1>  
                <Link href="/" className="mt-4 w-40 p-2 bg-blue-600 text-white rounded text-center">  
                    Back to Products  
                </Link>  
            </div>  
        );  
    }  

    return (  
        <div className="my-10 mx-4">  
            <h1 className="text-2xl font-bold">Checkout</h1>  
            <div className="mt-5">  
                {cart.map((product, index) => (  
                    <div key={index} className="flex items-center justify-between border-b py-4">  
                        <div className="flex items-center">  
                            <Image  
                                src={product.image}  
                                alt={product.title}  width={100} height={100}
                                className="w-20 h-20 object-cover rounded-md mr-4"  
                            />  
                            <div>  
                                <h2 className="font-semibold">{product.title}</h2>  
                                <p className="text-gray-600">Price: ${product.price}</p>  
                            </div>  
                        </div>  
                        <p>Quantity: 1</p>  
                    </div>  
                ))}  
                <div className="mt-6 flex justify-between text-xl font-bold">  
                    <span>Total:</span>  
                    <span>${totalPrice}</span>  
                </div>  
                <div className="mt-8">  
                    <button className="w-full p-2 bg-blue-600 text-white rounded text-center hover:bg-blue-500">  
                        Confirm Payment  
                    </button>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Checkout;