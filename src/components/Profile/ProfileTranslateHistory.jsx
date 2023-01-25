import React from 'react'
import ProfileTranslationsHistoryItem from './ProfileTranslationsHistoryItem'

function ProfileTranslateHistory({translations}) {
    const translationsList = translations.map((translation, index) => 
    <ProfileTranslationsHistoryItem key={index + '-' + translation} translation={translation}/>)
  return (
    <>
      <section>
        <h4>Your translations history</h4>
        <ul>
            {translationsList}
        </ul>
      </section>
    </>
  )
}

export default ProfileTranslateHistory
