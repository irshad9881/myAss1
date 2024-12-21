import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SearchFilter.css'
import {
  setSearchQuery,
  setFilterCriteria
} from '../../redux/reducers/profileSlice'

function SearchFilter () {
  const dispatch = useDispatch()
  const { searchQuery, filterCriteria } = useSelector(state => state.profiles)

  return (
    <div className='search-filter'>
      <input
        type='text'
        placeholder='Search by name...'
        value={searchQuery}
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />
      <select
        value={filterCriteria}
        onChange={e => dispatch(setFilterCriteria(e.target.value))}
      >
        <option value=''>Filter</option>
        <option value='Mumbai'>Mumbai</option>
        <option value='Lose angles'>Lose angles</option>
        <option value='New York'>New York</option>
        <option value='Delhi'>Delhi</option>
      </select>
    </div>
  )
}

export default SearchFilter
