import { useState, useEffect } from 'react';  

interface IProducts{
    id: string, title: string, image:string, price: number,
    originalPrice: any, discount: any, quantity?: number,
   }  
   
   const product: IProducts[]=[  
       {  id:'1', title: 'The North Coat',  
           image: '/images/coat.png', price: 260,  
           originalPrice: 360, discount: 40, quantity: 20
            },  
   {  id:'2',  title: 'Gucci Duffle Bag',  
           image: '/images/bag.png', price: 960, 
           originalPrice: 1160, discount: 35, quantity: 20
       },  
   {  id:'3',  title: 'RGB CPU Cooler',  
           image: '/images/cooler.png', price: 960,  
           originalPrice: 1160, discount: 35, quantity: 20
       },  
   {  id: '4', title: 'Small Bookshelf',  
           image: '/images/table.png', price: 360,   
           originalPrice: 360, discount: 0, quantity: 20
       },  
   {  id:'5', title: 'Game Pad',  
           image: '/images/fsale1.png', price: 360,  
           originalPrice: 360, discount: 0, quantity: 20
       },
   {  id:'6', title: 'Small Bookshelf',  
           image: '/images/table.png', price: 360,  
           originalPrice: 360, discount: 0, quantity: 20
       }, 
    {  id:'7', title: "Breed Dry Dog Feed",  
       originalPrice: 260, image: '/images/dogfeed.png',
           discount: null, price: 200, quantity: 20
           },  
    {  id:'8', title: "CANON EOS DSLR Camera",  
       originalPrice: 260, image: '/images/digital.png',
               discount: null, price:400, quantity: 20
       },
    {  id:'9', title: "Gaming Laptop",  price: 200,
       originalPrice:230, image: '/images/laptop.png',
                   discount: null,  quantity: 20
               }, 
    {  id: '10', title: "Face Wash",  
       originalPrice:230, image: '/images/facewash.png',
               price:200 , discount: 30,  quantity: 20
           },          
    {  id: '11', title: "Racing Shoes",  
       originalPrice:230, image: '/images/sneakers.png',
           price:200 , discount: 30, quantity: 20
    }, 
    {  id: '12', title: "Toy Game",  
       originalPrice:330, image: '/images/toygame.png',
       price:300 , discount: 30, quantity: 20
   }, 
   {  id: '13', title: "Jacket",  
       originalPrice:500, image: '/images/jacket.png',
       price:450 , discount: 50, quantity: 20
   }, 
   {  id:'14', title: "Face Wash",  price: 200, discount: null,
       originalPrice:400, image: '/images/facewash.png', quantity: 20
   },     
   {  id: '15', title: "KeyBoard",  price: 200, discount: null,
       originalPrice:400, image: '/images/fsale2.png', quantity: 20
   },     
   {  id: '16', title: "Gaaming LCD Moniter", price: 200, discount:null,
       originalPrice:400, image: '/images/fsale3.png', quantity: 20
   },     
   
   ];

   const useCart = () => {
    const [cart, setCart] = useState<IProducts[]>(() => {
      // Check for localStorage availability before accessing it
      try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error('Error retrieving cart from localStorage:', error);
        // Handle potential errors gracefully (e.g., return an empty array)
        return [];
      }
    });
  
    useEffect(() => {
      // Update localStorage whenever cart state changes
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product: IProducts) => {
      setCart(prevCart => {
        const productExists = prevCart.find(item => item.id === product.id);
        if (productExists) {
          const updatedCart = prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          );
          return updatedCart;
        }
        const newCart = [...prevCart, { ...product, quantity: 1 }];
        return newCart;
      });
    };
  
    return { cart, addToCart };
  };
  
  export default useCart;

// const useCart = () => {  
//     const [cart, setCart] = useState<IProducts[]>(() => {  
//         const savedCart = localStorage.getItem('cart');  
//         return savedCart ? JSON.parse(savedCart) : [];  
//     });  

//     const addToCart = (product: IProducts) => {  
//         setCart(prevCart => {  
//             const productExists = prevCart.find(item => item.id === product.id);  
//             if (productExists) {  
//                 // If the product already exists, increase its quantity  
//                 const updatedCart = prevCart.map(item =>  
//                     item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item  
//                 );  
//                 localStorage.setItem('cart', JSON.stringify(updatedCart));  
//                 return updatedCart;  
//             }  
//             // If the product doesn't exist, add it with quantity 1  
//             const newCart = [...prevCart, { ...product, quantity: 1 }];  
//             localStorage.setItem('cart', JSON.stringify(newCart));  
//             return newCart;  
//         });  
//     };  

//     return { cart, addToCart };  
// };  

// export default useCart;

