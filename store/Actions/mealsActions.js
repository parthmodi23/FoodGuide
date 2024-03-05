export const ToogleFavoritebutton = 'ToogleFavoritebutton';
export const FilterMeal = 'FilterMeal'
export const tooglefav = (id) => {
    return {
        type: ToogleFavoritebutton,
        payload:
        {
            mealId: id,
        }
    }
}

export const setfilterData = (FilterMealData) => {
    return {
        type: FilterMeal,
        payload:
        {
            filterData: FilterMealData,
        }
    }
}