import React from 'react';
import { useSelector } from 'react-redux';
import ProfileCard from './ProfileCard';
import './ProfileList.css';
import SearchFilter from '../SearchFilter/SearchFilter';
 import Vector2  from '../../utils/Vector/2.png'
 import Vector3  from '../../utils/Vector/3.png'
 import Vector4 from '../../utils/Vector/4.png'
function ProfileList() {
const { profiles, searchQuery, filterCriteria, loading, error } = useSelector( (state) => state.profiles);
console.log(profiles);
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;

const filteredProfiles = profiles?.filter((profile) =>profile.name && searchQuery? profile.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
.filter((profile) =>
  filterCriteria ? profile.location === filterCriteria : true
);
// console.log("b",selectedProfile);
if (!filteredProfiles) return <div className='No-pofile-select'>No profile selected yet<br/> please click on a profile.</div>;
// console.log("a",selectedProfile);
  return (
   <>
     <SearchFilter/>
     <div className="profile-list">
     <img src={Vector4} alt="Vector4" className="Vector4" />
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
          <div key={profile.id}>
            <ProfileCard key={profile.id} profile={profile} />
          </div>
        ))
      ) : (
        <div className="no-card">No card found.</div>
      )}
    </div>
      <img src={Vector3} alt="Vector3" className="Vector3" />
      <img src={Vector2} alt="Vector2" className="Vector2" />
    </>
  );
}

export default ProfileList;
