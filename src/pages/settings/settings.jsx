import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../utils/fetchApiResponse";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/currentUserStore/currentUserReducer";

function Settings() {
    const currentUser = useSelector(state => state.currentUser.value);
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    let token  = localStorage.getItem("token");
    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            setBio(currentUser.bio || "");
            setEmail(currentUser.email || "");
            setImage(currentUser.image || "");
            setUsername(currentUser.username || "");
        }
        
    }, [currentUser,token]);

    function updateSetting(event) {
        event.preventDefault(); 

        const payload = {
            method: "put",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: {
                user: { email, bio, image, password, username }
            }
        };
        fetchApi('/user', payload)
        .then(res => {
            if (res) {
                navigate('/');
            } else {
                console.error("Failed to update settings");
            }
        })
        .catch(error => {
            console.error("Error updating settings:", error);
        });

    
    }
    const userLogout = () => {
       token = localStorage.removeItem('token');
       dispatch(logoutUser())
        
      navigate('/login')   
     }
    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                        <form onSubmit={updateSetting}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="URL of profile picture"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Your Name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        rows="8"
                                        placeholder="Short bio about you"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </fieldset>
                                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                                    Update Settings
                                </button>
                            </fieldset>
                        </form>
                        <hr />
                        <button className="btn btn-outline-danger" onClick={userLogout}>Or click here to logout.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
