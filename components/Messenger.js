import { XIcon, MinusIcon } from '@heroicons/react/solid';
import React from 'react';

const getResponseMessage = async (msg) => {
    const formData = new FormData();
    formData.append("message", msg);
    const response = await fetch('https://socialbotapi.cerebro.host/chat/', {
        method: 'POST',
        body: formData
    });
    const text = await response.text();
    return text;
}

function Messenger() {
    const name = "Hamza Mouiret";
    const srcBot = '/images/avatars/hamza_muiret.jpg';
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
        setMessages(pre => [...pre, {
            user: 'me',
            message: msg
        }]);
        setMsg('');
        (async () => {
            const responseMessage = await getResponseMessage(msg);
            setMessages(pre => [...pre, {
                user: 'bot',
                message: responseMessage
            }]);
        })();
    }
    return (
        <>
            {show ?
                <div className='fixed bottom-0 right-32 border w-80 bg-white flex flex-col rounded-lg'>
                    <div className='flex border justify-between items-center p-2 gap-2 rounded-t-lg'>
                        <div className='flex items-center gap-2'>
                            <div style={{ width: 40, height: 40 }} className='cursor-pointer'>
                                <img
                                    className="rounded-full w-full h-full"
                                    src={srcBot}
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
                        className='border h-72 p-2 flex flex-col gap-2 overflow-x-hidden overflow-y-scroll'
                        ref={messageScroller}
                    >
                        {messages.map(({ user, message }) => <div className={`flex gap-2 items-end ${user === 'me' ? 'flex-row-reverse' : ''}`}>
                            {user === 'bot' ? <div style={{ width: 30, height: 30 }}>
                                <img
                                    className="rounded-full w-full h-full"
                                    src={srcBot}
                                />
                            </div> : ''}
                            <div className={`${user === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'} p-2 rounded flex-1`}>{message}</div>
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
                <div className='fixed bottom-0 right-32 border w-80 bg-white flex flex-col rounded-lg cursor-pointer'
                    onClick={() => setShow(true)}
                >
                    <div className='flex border justify-between items-center p-2 gap-2 rounded-t-lg'>
                        <div className='flex items-center gap-2'>
                            <div style={{ width: 40, height: 40 }}>
                                <img
                                    className="rounded-full w-full h-full"
                                    src={srcBot}
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