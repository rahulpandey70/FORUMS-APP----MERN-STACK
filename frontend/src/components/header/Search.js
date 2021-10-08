import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAPI } from '../../utils/fetchData';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import UserCard from '../../components/UserCard';
import LoadIcon from '../../images/loading.gif'

const Search = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSearch = async (e) => {
        e.preventDefault()
        if(!search) return;

        try {
            setLoad(true)
            const res = await getDataAPI(`search?username=${search}`, auth.token)
            setUsers(res.data.users)
            setLoad(false)
        } catch (err) {
            dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}})
        }
    }

    const handleClose = () => {
        setSearch('')
        setUsers([])
    }

    return (
        <form className="form" id ="search-form" onSubmit={handleSearch}>
            <i className="fas fa-search" id="search-icon"></i>
            <input type="text" name="search" value={search} id="search-input" placeholder="Search" 
                onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
            />

            <div className="close_search" onClick={handleClose}
            style={{opacity: users.length === 0 ? 0 : 1, cursor: 'pointer'}}>
                &times;
            </div>

            <button type="submit" style={{display: 'none'}}>Submit</button>
            { load && <img className="loading" src={LoadIcon} alt="Loading" /> }
            
            
            <div className="users">
                {
                    search && users.map(user => (
                        <UserCard 
                        key = {user._id}
                        user = {user} 
                        border = "border" 
                        handleClose = {handleClose}
                        />
                      
                    ))
                }
            </div>

        </form>
    )
}

export default Search;
