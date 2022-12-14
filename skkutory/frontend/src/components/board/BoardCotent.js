import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UpdateTime from './UpdateTime';
import '../../css/BoardView.css';
import back from './content/back.svg';
import menu from './content/menu.svg';
import user from './content/user.svg';
import dot from './content/dot.svg';


function GetData(BdId) {
    const [id, setId] = useState({});
    const [title, setTitle] = useState({});
    const [contenet, setContent] = useState({});
    const [owner, setOwner] = useState({});

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/api/posts/'+BdId).then((response)=> {
            setId(response.data.id);
            setTitle(response.data.title);
            setContent(response.data.contenet);
            setOwner(response.data.owner);
        })
    }, []);

    const item = (<>
        <div className='background'>
            <div className='board_view'>
                <span className='back'>
                    <img src={back} alt='back'></img>
                </span>
                <p class="free_board_txt">자유게시판</p>
                <span class="menu">
                    <img src={menu} alt="menu" />
                </span>
            </div>
            <div className='content_main'>
                <div className='board_view_top'>
                    <div className='title'>
                        <label>{title.title}</label>
                    </div>
                    <div className='user' img src={user} alt="user">
                        <label>{owner.owner}</label>
                    </div>
                    <div className='info_time'>
                        <UpdateTime></UpdateTime>
                    </div>
                    <div className='dot'>
                        <img src={dot} alt="dot" />
                    </div>
                </div>
                <div className='content'>
                    <label>{contenet.contenet}</label>
                </div>
            </div>
            <div className='comment'>
                <div class="write_comment">댓글을 입력하세요.</div>
            </div>
        </div>  
    </>)
    return item;
}

function BoardContent() {
    const{BdId} = useParams();
    const item = GetData(BdId);

    return (<>
        <div>
            {item}
        </div>
    </>);
}

export default BoardContent;