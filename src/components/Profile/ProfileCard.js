import React, { useState } from 'react'
import './ProfileCard.css'
import Map from '../Map/Map'

function ProfileCard ({ profile }) {
  const [selectedProfile, setSelectedProfile] = useState(null)

  const openProfileModal = profile => {
    setSelectedProfile(profile)
  }

  const closeProfileModal = () => {
    setSelectedProfile(null)
  }

  return (
    <>
      <div className='profile-card'>
        <img src={profile.photo} alt={profile.name} />
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <p>{profile.address.country}</p>
        <p>{profile.contact}</p>
        <button onClick={() => openProfileModal(profile)}>Summary</button>
      </div>
      {selectedProfile && (
        <div className='profile-card profile-card-open'>
          <span className='close' onClick={closeProfileModal}>
            &times;
          </span>
          <img src={profile.photo} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <p>{profile.address.country}</p>
          <p>{profile.contact}</p>
          <Map address={profile.address} />
        </div>
      )}
    </>
  )
}

export default ProfileCard
