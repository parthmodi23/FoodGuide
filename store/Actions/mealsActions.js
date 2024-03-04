export const ToogleFavoritebutton = 'ToogleFavoritebutton';

export const tooglefav = (id) => {
    return {
        type: ToogleFavoritebutton,
        payload:
        {
            mealId: id,
        }   
    }
}