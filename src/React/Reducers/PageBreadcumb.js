const initialState = 'PageBreadcumb__';

export const PageBreadcumb = (state=initialState,action)=>{
    switch (action){
        case 'setPageBreadcumbTitle':
            return action.title;

        default:
            return state;
    }
}