function ProfilePicture(){
    const imageUrl = './src/assets/Zrzut ekranu 2024-05-14 222115.png';

    const handleClick = (e:any) => e.target.style.display="none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} />);
}

export default ProfilePicture;