import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createAvatar, getAvatar } from '../services/utils';

function InputBox({ addPost }) {
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const getPostText = async (topic) => {
        const formData = new FormData();
        formData.append("post_detail", topic);
        const response = await fetch('https://socialbotapi.cerebro.host/postgen/', {
            method: 'POST',
            body: formData
        });
        const text = await response.text();
        return text;
    }

    const sendPost = async (e) => {
        e.preventDefault();
        const topic = inputRef.current.value;
        if (!inputRef.current.value) return;
        inputRef.current.value = "Posting... Please wait!";
        inputRef.current.disabled = true;
        const postText = await getPostText(topic);
        const post =
        {
            id: uuidv4(),
            name: 'Mr.Kouhadi',
            message: postText,
            timestamp: 1580901774643,
            image: '/images/avatars/bakr_kouhadi.jpg',
            // postImage: '/images/avatars/bakr_kouhadi.jpg'
        }
        addPost(post);
        inputRef.current.value = "";
        inputRef.current.disabled = false;
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () => {
        setImageToPost(null);
    };

    const handleCreateAvatar = () => {
        (async () => {
            await createAvatar();
            const blob = await getAvatar();
            let objectURL = URL.createObjectURL(blob);
            imageRef.current.src = objectURL;
        })();
    }
    const imageRef = React.useRef();

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <div style={{ width: 40, height: 40 }}>
                    <img
                        className="rounded-full w-full h-full cursor-pointer"
                        src={'/images/avatars/bakr_kouhadi.jpg'}
                        ref={imageRef}
                        onClick={handleCreateAvatar}
                    />
                </div>
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100
                    flex-grow px-5 focus:outline-none"
                        type="text"
                        ref={inputRef}
                        placeholder={`What's on your mind?`}
                    />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition 
                    duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
}

export default InputBox