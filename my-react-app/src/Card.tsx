import profilePic from './assets/Zrzut ekranu 2024-05-14 222115.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Dominik</h2>
            <p className="card-text">I study programming and play video games, also I love metal music </p>
        </div>
    );
}

export default Card