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

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload:response.data});
}