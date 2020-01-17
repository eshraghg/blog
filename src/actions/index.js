import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts =  () => async dispatch => {
            const response = await jsonPlaceHolder.get('/posts');
            dispatch({type:'FETCH_POSTS', payload:response.data})
};

// ****** OLD SYNTAX  *******
// export const fetchPosts =  () => {
//     return (
//         async function (dispatch) {
//             const response = await jsonPlaceHolder.get('/posts');
//             dispatch({type:'FETCH_POSTS', payload:response})
//         }
//     )    
// }