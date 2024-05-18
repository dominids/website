import profilePic from './assets/Zrzut ekranu 2024-05-14 222115.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image card-dada dadad-dadad dadad-dadad" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Oskarek</h2>
            <p className="card-text">W dzień jestem mechatronikiem, wieczorem gram w Destiny 2. I tak moja praca się ciągnie </p>
        </div>
    );
}
export default Card