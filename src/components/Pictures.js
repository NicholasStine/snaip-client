import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/userContext';

const Picture = () => {
    const { userData } = useContext(UserContext);
    const [image, setImage] = useState();
    const [userImages, setUserImages] = useState([]);
    
    const onImageChange = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0]);
    }

    const onImageUpload = async (e) => {
        e.preventDefault();
        try {
            console.log(image);
            const imageForm = new FormData();
            imageForm.append('image', image, `${Date.now()}_${image.name}`);
            imageForm.append('user_id', userData.user_id);
            await axios.post(`${process.env.REACT_APP_API}/file/image`, imageForm, {
                headers: { 'content-type': 'multipart/form-data' }
            });
        } catch (err) {
            console.log(err);
        }
    }

    const loadUserImages = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/file/image/${userData.user_id}`)
        console.log(data);
        setUserImages(data);
    }

    useEffect(() => {
        loadUserImages();
    }, []);

    return (
        <div>
            <p>Picture Page</p>
            <button>start impression</button>
            <input 
                type="file"
                onClick={onImageChange}
            />
            <button 
                onClick={onImageUpload}>
                Save picture
            </button>
            <button>delete picture</button>
            <button>delete impression</button>
            <div>
                {userImages.map((img, i) => {
                    return (
                        <img alt=" " src={img.img_url} style={{width: '200px', height: '200px'}} />
                    )
                })}
            </div>
        </div>
    )
}

export default Picture;