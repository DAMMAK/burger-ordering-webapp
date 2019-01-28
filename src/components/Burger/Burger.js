
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient  from '../Burger/BurgerIngredients/BurgerIngredient';

const burger =(props)=>
{
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(ingredientKey=>{
                                        // console.log('Array Spread ', [...Array(props.ingredients[ingredientKey])]);
                                        return[...Array(props.ingredients[ingredientKey])]
                                        .map((_, i)=>
                                        {
                                            // console.log("The Array Key :", ingredientKey); 
                                           return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                                        });
                                    })
                                    .reduce((prevVal,currVal)=>
                                    {
                                        return prevVal.concat(currVal);
                                    }, []);
                                    if(transformedIngredients.length <= 0){
                                        transformedIngredients =<p>Please start adding ingredients!</p>
                                    }
                                //    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients} 
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

export default burger;