import React, { useState } from 'react';
import Item from '../components/Item';

// --- Type Definitions ---
// Re-defining your item schema for clarity and type safety
interface ItemData {
    image_1: string;
    image_2: string;
    heading: string;
    subheading: string;
    price: number;
}

// Type for your dropdown options
type SortType = "relevance" | "lowtohigh" | "hightolow"; // Explicitly define possible values

interface Option<T> {
    label: string;
    value: T;
}

const AddItemDashboard: React.FC = () => {
    // --- State for New Item Data ---
    const [newItem, setNewItem] = useState<ItemData>({
        image_1: '',
        image_2: '',
        heading: '',
        subheading: '',
        price: 0,
    });

    // --- State for Sort Value (from your example) ---
    const [sortValue, setSortValue] = useState<SortType>("relevance"); // Initialize with a valid SortType

    // --- Dropdown Options (from your example) ---
    const dropdownOptions: Option<SortType>[] = [
        { label: "Relevance", value: "relevance" },
        { label: "Price: Low to High", value: "lowtohigh" },
        { label: "Price: High to Low", value: "hightolow" },
    ];

    // --- Form Field Change Handler ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: name === 'price' ? parseFloat(value) : value, // Convert price to number
        }));
    };

    // --- Dropdown Change Handler ---
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortValue(e.target.value as SortType); // Cast to SortType
    };

    // --- Form Submission Handler ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior

        console.log("New Item to Add:", newItem);
        console.log("Selected Sort Preference (not part of item data):", sortValue);

        // --- In a real application, you would send this 'newItem' data to your backend API ---
        // Example:
        try {
            const response = await fetch('http://127.0.0.1:5000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            if (response.ok) {
                console.log('Item added successfully!');
                // Optionally clear form or show success message
                setNewItem({ image_1: '', image_2: '', heading: '', subheading: '', price: 0 });
            } else {
                console.error('Failed to add item.');
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
        alert(`Attempting to add item: ${newItem.heading} with price ${newItem.price}. Check console for data.`);

        // Optionally clear the form after submission
        setNewItem({ image_1: '', image_2: '', heading: '', subheading: '', price: 0 });
    };

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Item</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Image 1 */}
                    <div>
                        <label htmlFor="image_1" className="block text-sm font-medium text-gray-700">
                            Image 1 URL
                        </label>
                        <input
                            type="text"
                            name="image_1"
                            id="image_1"
                            value={newItem.image_1}
                            onChange={handleInputChange}
                            placeholder="e.g., /images/product1.jpg"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Image 2 */}
                    <div>
                        <label htmlFor="image_2" className="block text-sm font-medium text-gray-700">
                            Image 2 URL
                        </label>
                        <input
                            type="text"
                            name="image_2"
                            id="image_2"
                            value={newItem.image_2}
                            onChange={handleInputChange}
                            placeholder="e.g., /images/product1_hover.jpg"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Heading */}
                    <div>
                        <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
                            Heading
                        </label>
                        <input
                            type="text"
                            name="heading"
                            id="heading"
                            value={newItem.heading}
                            onChange={handleInputChange}
                            placeholder="e.g., Luxury Watch"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Subheading */}
                    <div>
                        <label htmlFor="subheading" className="block text-sm font-medium text-gray-700">
                            Subheading
                        </label>
                        <input
                            type="text"
                            name="subheading"
                            id="subheading"
                            value={newItem.subheading}
                            onChange={handleInputChange}
                            placeholder="e.g., Elegant Collection"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={newItem.price}
                            onChange={handleInputChange}
                            placeholder="e.g., 299.99"
                            step="0.01" // Allows decimal values for price
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Sort Preference Dropdown */}
                    <div>
                        <label htmlFor="sort-dropdown" className="block text-sm font-medium text-gray-700">
                            Display Sort Preference (for context, not saved with item)
                        </label>
                        <select
                            id="sort-dropdown"
                            name="sort-dropdown"
                            value={sortValue}
                            onChange={handleSortChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            {dropdownOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Item
                    </button>
                </form>
            </div>
            <div className='grow w-full h-full grid grid-cols-2'>
                <div className='w-full h-full'>
                    <Item 
                          
                          heading={newItem.heading} 
                          subheading={newItem.subheading} 
                          price={newItem.price} 
                          className='!w-[300px] !max-w-[300px] h-[16rem] lg:h-[30rem]' />
                </div>
                <div className='w-full h-full'>
                    <Item 
                          
                          heading={newItem.heading} 
                          subheading={newItem.subheading} 
                          price={newItem.price} 
                          className='!w-[300px] !max-w-[300px] h-[256px]' />
                </div>
            </div>
        </div>
    );
};

export default AddItemDashboard;