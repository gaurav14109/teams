import {DATAFETCH, DATAFETCHERROR,DELETE,SUCCESSFULADD} from '../consts/const'
import Firebase from '../components/Firebase'

export const fetchData = () => {

    return async (dispatch) => {
        try {
            const data = await Firebase.getDashBoardData()
            dispatch({type: DATAFETCH, data: data.docs})

        } catch (err) {

            dispatch({type: DATAFETCHERROR, message: err.message})
        }

    }

}

export const addMember = (data) => {

    return async (dispatch) => {
        try {
            await Firebase.addMember(data)
            dispatch({type:SUCCESSFULADD})
            dispatch(fetchData())
        } catch (err) {
            console.log(err)
        }
    }

}

export const deleteMember = (id) => {

    return async (dispatch) => {
        try {
            await Firebase.deleteDoc(id)
            dispatch({type:DELETE})
            dispatch(fetchData())

        } catch (err) {
            console.log(err)
        }

    }

}