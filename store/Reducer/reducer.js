import { MEALS } from "../../data/dummy-data"
import { ToogleFavoritebutton, FilterMeal} from "../Actions/mealsActions"

const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]

}
 
const mealReducer = (state=initialState,action)=>{
    switch(action.type){
        case ToogleFavoritebutton:
            console.log("Filter Meals: ", state.favoriteMeals);
            console.log("Action Payload MealId: ", action.payload.mealId);
            const mealIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload.mealId.id);
            console.log("Meal Index: ", mealIndex);
        //   const mealIndex = state.filterMeals.findIndex(meal=>meal.id===action.payload.mealId);
          console.log("index"+mealIndex)
          if(mealIndex>=0){
            //this operation is for remove the meal items if already exist
            // firstly extract all the states as it is and 
            // then add this in to one array then upadte it 
            // with splice means delete that perticular index 
            // and pass the new array with updated value
            const updatedFavMeals=[...state.favoriteMeals]
            updatedFavMeals.splice(mealIndex,1)
            console.log("new data is here"+updatedFavMeals)
            return {...state,favoriteMeals:updatedFavMeals}
          }else{
            //if index is not find in that array then add means concate that id
            //with our existing array of fav meals
            const addintoFavMeal=[...state.favoriteMeals.concat(action.payload.mealId)]
            // console.log(addintoFavMeal)
            return {...state,favoriteMeals:addintoFavMeal}
          }  

          case 'FilterMeal':
            const appliedfilterdata=action.payload.filterData
            console.log(appliedfilterdata)
            const updatedfiltermeal=state.meals.filter(meal=>{
              if(appliedfilterdata.glutenfree && !meal.isGlutenFree){
                return false;
              }
              if(appliedfilterdata.lactosfree && !meal.isLactoseFree){
                return false;
              }
              if(appliedfilterdata.vegenfree && !meal.isVegan){
                return false;
              }
              if(appliedfilterdata.vegetarian && !meal.isVegetarian){
                return false;
              }
              return true;
            });
            return {...state,filterMeals:updatedfiltermeal}

        default:
            return state
    }
}

export default mealReducer

