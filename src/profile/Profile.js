import React from 'react'
import PropTypes from 'prop-types';

const Profile = ({fullName, bio, profession, children, handleName}) => {
    const styleBtn={
        color: "#0099cc",
        background: "transparent",
        border: "1px solid #0099cc",
        borderRadius: "6px",
    }
    const styleName={
        color: "#2d4722",
        textTransform: "uppercase",
        fontFamily: "Oswald, sans-serif",
        fontSize: "1.2em",
    }
    const styleBio={
        width: "75%",
        margin: "auto",
        textAlign: "center",
        color: "grey",
        fontFamily: "cardo-regular",
    }

    return (
        <div>
            <h5 style={{fontFamily: "Slabo27px"}}>Full Name:</h5>
            <p style={styleName}>{fullName}</p>
            <h5 style={{fontFamily: "Slabo27px"}}>Biographie:</h5>
            <p style={styleBio}>{bio}</p>
            <h5 style={{fontFamily: "Slabo27px"}}>Profession:</h5>
            <p>{profession}</p>
            <div>{children}</div>
            <button onClick={()=>handleName(fullName)} style={styleBtn}>who is it ?</button>
        </div>
    )
}

export default Profile

Profile.defaultProps = {
    fullName:"Anonymous",
    bio:"No description",
    profession:"Unknown",
    children:"profile photo abscent"
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};
//  src="https://www.booksie.com/files/profiles/22/mr-anonymous.png"