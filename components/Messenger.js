import { XIcon, MinusIcon } from '@heroicons/react/solid';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { ImSad2 } from 'react-icons/im';
import { getResponseMessage, getSentinel, createAvatar, getAvatar } from '../services/utils';
import { useSelector, useDispatch } from 'react-redux';

function Messenger() {
    const dispatch = useDispatch();
    const currentState = useSelector(state => state);
    const name = "Hamza Mouiret";
    const [messages, setMessages] = React.useState([]);
    const [msg, setMsg] = React.useState('');
    const messageScroller = React.createRef();
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        if (messageScroller.current) {
            messageScroller.current.scrollTop = 9999;
        }
    }, [messages]);
    const handeKeyUp = (e) => {
        if (e.code === 'Enter')
            handeSubmit();
    }
    const handeSubmit = () => {
        if (!msg) return;
        (async () => {
            const sentinel = await getSentinel(msg);
            setMessages(pre => [...pre, {
                user: 'me',
                message: msg,
                sentinel
            }]);
            setMsg('');
            const responseMessage = await getResponseMessage(msg);
            setMessages(pre => [...pre, {
                user: 'bot',
                message: responseMessage,
            }]);
        })();
    }
    const handleCreateAvatar = () => {
        (async () => {
            await createAvatar();
            const blob = await getAvatar();
            let objectURL = URL.createObjectURL(blob);
            dispatch({ type: "NEW_AVATAR", payload: { avatarUrl: objectURL } });
        })();
    }
    return (
        <>
            {show ?
                <div className='fixed right-0 top-0 bottom-0 sm:right-32 sm:top-auto border w-screen sm:w-80 sm:h-96 bg-white flex flex-col rounded-lg z-50'>
                    <div className='flex border justify-between items-center p-2 gap-2 rounded-t-lg'>
                        <div className='flex items-center gap-2'>
                            <div style={{ width: 40, height: 40 }}>
                                <img
                                    className="rounded-full w-full h-full cursor-pointer"
                                    src={currentState.avatarUrl}
                                    onClick={handleCreateAvatar}
                                />
                            </div>
                            <div>{name}</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MinusIcon className="h-5 sm:h-7 text-gray-500 hover:text-blue-500 cursor-pointer"
                                onClick={() => setShow(false)}
                            />
                            <XIcon className="h-5 sm:h-7 text-gray-500 hover:text-blue-500 cursor-pointer"
                                onClick={() => setShow(false)}
                            />
                        </div>
                    </div>
                    <div
                        className='flex-1 border p-2 flex flex-col gap-6 overflow-x-hidden overflow-y-scroll'
                        ref={messageScroller}
                    >
                        {messages.map(({ user, message, sentinel }, index) => <div key={index} className={`flex gap-2 items-end ${user === 'me' ? 'flex-row-reverse' : ''}`}>
                            {user === 'bot' ? <div style={{ width: 30, height: 30 }}>
                                <img
                                    className="rounded-full w-full h-full"
                                    src={currentState.avatarUrl}
                                />
                            </div> : ''}
                            <div className={`${user === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'} p-2 rounded flex-1 relative`}>
                                {message}
                                {sentinel === 'POSITIVE' ? <AiFillLike className='absolute text-blue-500 bg-gray-200 rounded-full p-1 w-6 h-6 right-1' /> : ''}
                                {sentinel === 'NEGATIVE' ? <ImSad2 className='absolute text-yellow-500 bg-gray-200 rounded-full p-1 w-6 h-6 right-1' /> : ''}
                            </div>
                            <div className='w-16'></div>
                        </div>)}
                    </div>
                    <div className='border flex items-center p-2 gap-2'>
                        <input
                            className='flex-1 border bg-gray-200 px-3 py-1 outline-none rounded-full'
                            value={msg} onKeyUp={handeKeyUp} onChange={e => setMsg(e.target.value)}
                        />
                        <img
                            className='cursor-pointer'
                            src={'/images/send-fill.svg'}
                            width={25}
                            height={25}
                            onClick={handeSubmit}
                        />
                    </div>
                </div>
                :
                <div className='fixed bottom-0 right-0 sm:right-32 border w-screen sm:w-80 bg-white flex flex-col rounded-lg cursor-pointer'
                    onClick={() => setShow(true)}
                >
                    <div className='flex border justify-between items-center p-2 gap-2 rounded-t-lg'>
                        <div className='flex items-center gap-2'>
                            <div style={{ width: 40, height: 40 }}>
                                <img
                                    className="rounded-full w-full h-full"
                                    src={currentState.avatarUrl}
                                />
                            </div>
                            <div>{name}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Messenger