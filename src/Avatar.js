const Avatar = (props) => {
    return (
        <div class="Avatar">
            <img 
                src={props.profilePic} 
                style={{width: 20, borderRadius: '50%', marginRight: 5}} 
            />
            <b>{props.userName}</b>
            <br />
        </div>
    );
}

export default Avatar;