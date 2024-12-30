
"use client"  
 
import React, { useState } from 'react';  

const SizeSelector: React.FC = () => {  

    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);  
    const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];  

    // Handle changes to the checkbox  
    const handleSizeChange = (size: string) => {  
        setSelectedSizes((prevSizes) => {  
            // Check if size is already selected  
            if (prevSizes.includes(size)) {  
                // If yes, remove it  
                return prevSizes.filter((s) => s !== size);  
            } else {  
                // If no, add it  
                return [...prevSizes, size];  
            }  
        });  
    };  

    return (  
        <div>  
             
            <div className="flex flex-row space-x-2 py-4"> {/* Change to space-x-4 for horizontal spacing */}  
            <h1 className="text-lg font-bold">Size:</h1> {sizes.map((size) => (  
                    <label key={size} className="flex items-center relative">  
                        <input  
                            type="checkbox"  
                            value={size}  
                            onChange={() => handleSizeChange(size)}  
                            className="hidden" /> 
                        <span className={`flex items-center justify-center w-7 h-7 border rounded-md cursor-pointer
                        
                        hover:bg-red-500 hover:text-white transition   
                            ${selectedSizes.includes(size) ? 'bg-red-500 text-white' : 'text-black'}`}  
                        >  
                            {size}  
                        </span>  
                    </label>  
                ))}  
            </div>  
            <div className="mt-4">  
                <h2 className="text-md">Selected Sizes:</h2>  
                <p className="text-sm">{selectedSizes.length > 0 ? selectedSizes.join(', ') : 'None selected'}</p>  
            </div>  
        </div>  
    );  
};  

export default SizeSelector;

