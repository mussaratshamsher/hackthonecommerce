"use client"

import useCart from '../hooks/useCart';
import React, { useState } from 'react';
import AddQuantity from "@/components/theme/AddQuantity";
import SizeSelector from "@/components/theme/SizeSelector";
import { RefreshCcw, Truck } from "lucide-react";

import Image from "next/image";
import Link from "next/link";


interface IProducts {
    id: string, title: string, image: string, price: number,
    originalPrice: any, discount: any, rating: number,
    fullStars: number, halfStars: number, grayStars: number,
    features: string, quantity?: any,
}

const productsData: IProducts[] = [
    {
        id: '1', title: 'The North Coat',
        image: '/images/coat.png', price: 260,
        originalPrice: 360, discount: 40, rating: 3,
        fullStars: 4, halfStars: 0, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '2', title: 'Gucci Duffle Bag',
        image: '/images/bag.png', price: 960,
        originalPrice: 1160, discount: 35, rating: 4,
        fullStars: 3, halfStars: 0, grayStars: 2,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '3', title: 'RGB CPU Cooler',
        image: '/images/cooler.png', price: 960,
        originalPrice: 1160, discount: 35, rating: 5,
        fullStars: 5, halfStars: 0, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `

    },
    {
        id: '4', title: 'Small Bookshelf',
        image: '/images/table.png', price: 360,
        fullStars: 4, halfStars: 0, grayStars: 1,
        originalPrice: 360, discount: 0, rating: 65,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `

    },
    {
        id: '5', title: 'Game Pad',
        image: '/images/fsale1.png', price: 360,
        originalPrice: 360, discount: 0, rating: 65,
        fullStars: 3, halfStars: 1, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `

    },
    {
        id: '6', title: 'Small Bookshelf',
        image: '/images/table.png', price: 360,
        originalPrice: 360, discount: 0, rating: 65,
        fullStars: 4, halfStars: 0, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '7', title: "Breed Dry Dog Feed",
        originalPrice: 260, image: '/images/dogfeed.png',
        discount: null, rating: 40, price: 200,
        fullStars: 4, halfStars: 0, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '8', title: "CANON EOS DSLR Camera",
        originalPrice: 260, image: '/images/digital.png',
        discount: null, rating: 40, price: 400,
        fullStars: 5, halfStars: 0, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '9', title: "Gaming Laptop", price: 200,
        originalPrice: 230, image: '/images/laptop.png',
        discount: null, rating: 100,
        fullStars: 4, halfStars: 1, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '10', title: "Face Wash",
        originalPrice: 230, image: '/images/facewash.png',
        price: 200, discount: 30, rating: 80,
        fullStars: 4, halfStars: 0, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '11', title: "Racing Shoes",
        originalPrice: 230, image: '/images/sneakers.png',
        price: 200, discount: 30, rating: 80,
        fullStars: 5, halfStars: 0, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '12', title: "Toy Game",
        originalPrice: 330, image: '/images/toygame.png',
        price: 300, discount: 30, rating: 80,
        fullStars: 3, halfStars: 1, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '13', title: "Jacket",
        originalPrice: 500, image: '/images/jacket.png',
        price: 450, discount: 50, rating: 80,
        fullStars: 4, halfStars: 1, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '14', title: "Face Wash", price: 200, discount: null,
        originalPrice: 400, image: '/images/facewash.png', rating: 100,
        fullStars: 3, halfStars: 1, grayStars: 1,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '15', title: "KeyBoard", price: 200, discount: null,
        originalPrice: 400, image: '/images/fsale2.png', rating: 100,
        fullStars: 4, halfStars: 1, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },
    {
        id: '16', title: "Gaaming LCD Moniter", price: 200, discount: null,
        originalPrice: 400, image: '/images/fsale3.png', rating: 100,
        fullStars: 3, halfStars: 2, grayStars: 0,
        features: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500 `
    },

];
interface Prop {
    params: { id: string }
}
//main Fuction

const Details: React.FC<Prop> = ({ params }) => {
    const { id } = params;
    const pro = productsData.find((product) => product.id === id)
    const { addToCart } = useCart();

    if (!pro) {
        return (
            <div className="p-20 flex flex-col mt-20 justify-center items-center">
                <h1 className="text-2xl underline">404 Product Not Found </h1> <br />
                <div>
                    <button className="w-40 p-2 bg-black rounded-sm text-white hover:scale-95">
                        <Link href="/">Back to Home</Link></button>

                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(pro);
        window.location.href = '/cart';
    };
    if (pro)
        return (

            <div className="sm:my-10 sm:mx-14 md:my-10 md:mx-14 lg:my-5 lg:mx-5 xl:my-10 xl:mx-20 my-2 mx-2 2xl:mx-80 2xl:my-40">

                <p className="text-gray-400">Account / Category / {pro.title}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    {/* grid 1  */}
                    <div className=" flex flex-row md:grid md:col-span-1 md:mb-5 gap-2">
                        <Image src={pro.image} alt="" width={500} height={500} className="w-16 sm:w-32 md:w-36 2xl:w-48 2xl:h-32 h-28 p-2 bg-slate-100 mb-5 " />
                        <div className="bg-slate-100 w-20 sm:w-32 md:w-36 h-28 2xl:w-48 2xl:h-32 ">
                            <Image src={pro.image} alt="" width={500} height={500} className="w-24 sm:w-32 md:w-24 h-24 2xl:w-32 2xl:h-28 p-3 md:ml-5  mb-5 transform rotate-45" />
                        </div>
                        <div className="bg-slate-100 w-36 sm:w-32 md:w-36 h-28 2xl:w-48 2xl:h-32">
                            <Image src={pro.image} alt="" width={500} height={500} className="w-20 md:w-36 h-28 p-2 mb-5 transform rotate-180" />
                        </div>
                        <div className="bg-slate-100 w-36 h-28 2xl:w-48 2xl:h-32"><Image src={pro.image} alt="" width={500} height={500}
                            className="w-20 sm:w-28 md:w-32 2xl:w-28 2xl:h-36 md:h-28 p-2 2xl:ml-5 transform transition-transform rotate-90 " />
                        </div>
                    </div>
                    {/* grid 2  */}
                    <div className="col-span-2 bg-slate-100 w-[300px] h-48 lg:w-[370px] xl:w-[400px] 
2xl:w-[700px] sm:w-[550px] md:w-[400px] sm:h-[350px] md:h-[500px] 2xl:h-[550px]">
                        <Image src={pro.image} alt="" width={500} height={2000}
                            className="md:w-[400px] 2xl:w-[600px]sm:h-[300px] md:h-[400px] md:mt-10 md:py-10 px-20 md:px-10  hover:scale-110 transition-all ease-linear" />
                    </div>
                    {/* grid 3  */}
                    <div className="col-span-2 2xl:ml-28">
                        <h1 className="text-xl lg:text-2xl 2xl:text-4xl">{pro.title}</h1>
                        <h1 className='text-yellow-500 flex'>
                            {/* Render Stars */}
                            {[...Array(pro.fullStars)].map((_, index) => (
                                <i key={`full-${index}`} className='bx bxs-star text-yellow-500'></i>
                            ))}
                            {[...Array(pro.halfStars)].map((_, index) => (
                                <i key={`half-${index}`} className='bx bxs-star-half text-yellow-500'></i>
                            ))}
                            {[...Array(pro.grayStars)].map((_, index) => (
                                <i key={`gray-${index}`} className='bx bxs-star text-gray-400'></i>
                            ))}
                            <span className='text-gray-400'>({pro.rating})</span>
                        </h1>
                        <h2><b>{pro.originalPrice}$</b></h2>
                        <p>{pro.features}</p>
                        <hr className="border-gray-400 2xl:mb-5" />
                        {/* colours option  */}

                        {/* size selector  */}
                        <SizeSelector />

                        {/* Quatity Selector  */}
                        <AddQuantity />

                        {/* cart  */}
                        <button onClick={handleAddToCart}
                            className=" mb-5 w-full p-2 bg-red-600 text-white hover:bg-red-500 rounded">
                            Add to Cart </button>

                        <div className="grid grid-cols-1 border-2 border-gray-400 2xl:mt-10">

                            <div className="flex flex-row p-3 gap-5">
                                <Truck />
                                <h1 className="flex flex-col">
                                    <p>Free Delivery</p>
                                    <p className="text-xs"><u>Enter Your postal code for Delivery Availability</u></p>
                                </h1>
                            </div>
                            <hr className="border border-gray-400" />
                            <div className="flex flex-row p-3 gap-5">
                                <RefreshCcw />
                                <h1 className="flex flex-col">
                                    <p>Return Delivery</p>
                                    <p className="text-xs">Free 30 Days Delivery Returns. <u>Details</u></p>
                                </h1>


                            </div>


                        </div>
                    </div>

                </div>


            </div>
        )
}

export default Details;


