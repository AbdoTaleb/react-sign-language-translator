import React from 'react'
import ProfileTranslationsHistoryItem from './ProfileTranslationsHistoryItem'

function ProfileTranslateHistory({ translations }) {
  const translationsList = translations.map((translation, index) =>
    <ProfileTranslationsHistoryItem key={index + '-' + translation} translation={translation} />)
  return (
    <>

      <div>
        <h2>Your translations history</h2>
        <ul className="flex-column d-flex justify-content-center">
          {translationsList.map(function(name, index){
                    return <p style={{
                      width: '500px'
                    }}><li className="d justify-content-center" key={ index }>{name}</li></p>;
                  })}
          
        </ul>
      </div>

     
      
      
    </>
  )
}

export default ProfileTranslateHistory
