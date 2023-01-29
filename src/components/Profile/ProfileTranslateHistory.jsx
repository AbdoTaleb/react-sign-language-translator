import React from 'react'
import ProfileTranslationsHistoryItem from './ProfileTranslationsHistoryItem'

function ProfileTranslateHistory({ translations }) {
  const translationsList = translations.map((translation, index) =>
    <ProfileTranslationsHistoryItem key={index + '-' + translation} translation={translation} />)
  return (
    <>
     <h2>Your translations history</h2>

      <div class="card mx-auto" style={{width: "50%"}}>
        <ul class="list-group list-group-flush">
          {translationsList.map(function (name, index) {
                return <li className="list-group-item" key={index}>{name}</li>;
              })}
        </ul>
      </div>
      <div>

      {/* <div class="card mx-auto" style={{width: "50%"}}>

    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text.</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div> */}
       
        {/* <div>
          <div class="card">
            <ul className="list-group list-group-flush">
              {translationsList.map(function (name, index) {
                return <li className="list-group-item" key={index}>{name}</li>;
              })}

            </ul>
          </div>
        </div> */}




        {/* <ul className="list-group list-group-flush">
          {translationsList.map(function (name, index) {
            return <p style={{
              width: '500px'
            }}><li className="list-group-item" key={index}>{name}</li></p>;
          })}

        </ul> */}
      </div>




    </>
  )
}

export default ProfileTranslateHistory
