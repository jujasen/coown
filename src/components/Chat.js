import X from '../img/x.png';
import Person from '../img/person.png'
import Send from '../img/send.png';
import Bubble from '../img/chat.svg'
import { useState, useRef } from 'react';
import uuid from 'react-uuid'

const Chat = () => {
    const [toggleChat, setToggleChat] = useState(false);
    const messageRef = useRef();
    const [messages, setMessages] = useState([]);

    const sendMessage = () => {
        setMessages(prevArray => [...prevArray, messageRef.current.value])
        console.log(messages);
    }



    return (
        <>
            {toggleChat ?
                <div className="chat">
                    <div className="chat__header f f--j-space f--a-center">
                        <h4 className="chat__heading">CHAT</h4>
                        <img
                            onClick={() => {
                                setToggleChat(!toggleChat);
                            }}
                            className="chat__close"
                            src={X}
                            alt="close" />
                    </div>
                    <div className="chat__box">
                        <div className="chat__bubble chat__bubble--coown">
                            <img className="chat__person" src={Person} alt="person" />
                            <div>
                                <h5 className="chat__name">Olivia Jensen // CoOwn</h5>
                                <p className="chat__text">Hei, hva kan jeg hjelpe deg med?</p>
                            </div>
                        </div>
                        {messages.map(entry =>
                            <div key={uuid()} className="chat__bubble chat__bubble--user">
                                <div>
                                    <h5 className="chat__name">Deg</h5>
                                    <p className="chat__text">{entry}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="chat__data">
                        <textarea
                            ref={messageRef}
                            className="chat__input"></textarea>
                        <img
                            onClick={() => {
                                sendMessage();
                                setTimeout(() => {
                                    messageRef.current.value = ''
                                    console.log(messageRef.current.value)
                                }, 200);
                            }}
                            className="chat__send"
                            src={Send}
                            alt="send" />
                    </div>
                </div>
                :
                ''
            }

            <img
                onClick={() => {
                    setToggleChat(!toggleChat);
                }}
                className="chat__toggle" src={Bubble} alt="open chat" />
        </>
    );
}

export default Chat;

