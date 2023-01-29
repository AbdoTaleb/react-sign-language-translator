import React from 'react'
import ProfileTranslationsHistoryItem from './ProfileTranslationsHistoryItem'

function ProfileTranslateHistory({ translations }) {
  const translationsList = translations.map((translation, index) =>
    <ProfileTranslationsHistoryItem key={index + '-' + translation} translation={translation} />)
  
    return (
    <>
      <h2>Your translations history</h2>
      <div class="card mx-auto" style={{ width: "50%" }}>
        <ul class="list-group list-group-flush">
          {translationsList.map(function (name, index) {
            return <li className="list-group-item" key={index}>{name}</li>;
          })}
        </ul>
      </div>
      <div>
      </div>
    </>
  )
}

export default ProfileTranslateHistory
