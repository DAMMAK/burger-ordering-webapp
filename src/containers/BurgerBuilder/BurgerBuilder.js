import React,{Component} from 'react'
import Aux from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7 
}

class BurgerBuilder extends Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state ={...};
    // }
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
    }

    updatePurchaseState=(ingredients)=>
    {
        const sum = Object.keys(ingredients).map(iGKey=>
            {
                return ingredients[iGKey];
            }).reduce((sum,el)=>
            {
                return sum + el
            },0);

            this.setState({purchasable: sum > 0})
    }
   addIngredientHandler =(type)=>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount +1;
        const updatedIngredient ={...this.state.ingredients};
        updatedIngredient[type] =updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice +priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});

        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler =(type)=>
    {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0)
        {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredient ={...this.state.ingredients};
        updatedIngredient[type] =updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
        
    }

    purchasingHandler=()=>
    {
        this.setState({purchasing:true});
    }

    cancelPurchaseHandler =() =>
    {
        this.setState({purchasing:false});
    }

    

    render(){
        const disabledInfo={...this.state.ingredients}
        
        for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<= 0
        }
        return(
            <Aux>
            <Burger ingredients={this.state.ingredients} />
            <Modal show={this.state.purchasing} cancel ={this.cancelPurchaseHandler}>
            <OrderSummary ingredients={this.state.ingredients} />
            </Modal>

            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
             ingredientSub={this.removeIngredientHandler}
             disabled={disabledInfo}
             purchasable={this.state.purchasable}
             price={this.state.totalPrice}
             ordered ={this.purchasingHandler}
              />
            </Aux>
        );
    }

    
}

export default BurgerBuilder;