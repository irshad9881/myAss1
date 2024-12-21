import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProfile,
  editProfile,
  deleteProfile
} from '../../redux/reducers/profileSlice'
import './AdminPanel.css'
function AdminPanel () {
  const dispatch = useDispatch()
  const profiles = useSelector(state => state.profiles.profiles)
  const emptyobj = {
    id: '',
    name: '',
    location: '',
    description: '',
    address: '',
    photo: '',
    contact: ''
  }
  const [profile, setProfile] = useState(emptyobj)
  console.log(profile)

  const handleSubmit = e => {
    console.log(profile)
    e.preventDefault()
    if (profile.id) {
      dispatch(editProfile(profile))
    } else {
      dispatch(addProfile({ ...profile, id: Date.now() }))
    }
    setProfile(emptyobj)
  }

  const handleEdit = p => {
    setProfile(p)
  }

  const handleDelete = id => {
    dispatch(deleteProfile(id))
  }

  return (
    <div className='admin'>
      <h1>Admin Panel</h1>
      <div className='admin-panel'>
        <div className='profile-list'>
          {profiles.map(p => (
            <div key={p.id} className='profile-card'>
              <img src={p.photo} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>{p.address.country}</p>
              <p>{p.contact}</p>
              <div className='button'>
                <button onClick={() => handleEdit(p)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <p className='Heading'>Add a New Card</p>
          <input
            required
            type='text'
            placeholder='Name'
            value={profile.name}
            onChange={e => setProfile({ ...profile, name: e.target.value })}
          />
          <input
            required
            type='text'
            placeholder='Location State'
            value={profile.location}
            onChange={e => setProfile({ ...profile, location: e.target.value })}
          />
          <input
            required
            type='text'
            placeholder='Description'
            value={profile.description}
            onChange={e =>
              setProfile({ ...profile, description: e.target.value })
            }
          />
          <input
            required
            type='email'
            placeholder='contact email '
            value={profile.contact}
            onChange={e => setProfile({ ...profile, contact: e.target.value })}
          />
          <input
            required
            type='text'
            placeholder='url'
            value={profile.photo}
            onChange={e => setProfile({ ...profile, photo: e.target.value })}
          />
          <input
            required
            type='text'
            placeholder='Address county state city zipcode'
            value={profile.address}
            onChange={e => setProfile({ ...profile, address: e.target.value })}
          />
          <button type='submit'>{profile.id ? 'Edit' : 'Add'} Profile</button>
        </form>
      </div>
    </div>
  )
}

export default AdminPanel
