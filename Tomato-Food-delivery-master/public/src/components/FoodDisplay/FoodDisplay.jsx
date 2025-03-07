import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import food_1 from '../../assets/food_1.png';
export const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [crossword, setCrossword] = useState(
        [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ]
    );

    const handleChange = (row, col, value) => {
        const newCrossword = [...crossword];
        newCrossword[row][col] = value.toUpperCase();
        setCrossword(newCrossword);
    };

    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id}
                            name={item.name}
                            description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
            
            {/* Crossword Puzzle */}
            <div className='crossword-container'>
                <h2>Fill the Crossword</h2>
                <table className='crossword'>
                    <tbody>
                        {crossword.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex}>
                                        <input 
                                            type="text" 
                                            maxLength={1} 
                                            value={cell} 
                                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)} 
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};