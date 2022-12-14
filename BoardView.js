import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UpdateTime from 'UpdateTime';
import '../../css/BoardView.css'
import back from '../../images/back.svg'
import menu from '../../images/menu.svg'
import user from '../../images/user.svg'
import pic from '../../images/pic.svg'
import act from '../../images/act.svg'
import enter from '../../images/enter.svg'

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
                </div>
                <div className='content'>
                    <label>{contenet.contenet}</label>
                </div>
                <div class="pic1">
                    <img src={pic} alt="pic1" />
                </div>
                <div class="pic2">
                    <img src={pic} alt="pic1" />                  
                </div>

                <div class="act">
                    <img src={act} alt="act" />
                </div>
            </div>
            <div className='comment'>
                <div className='write_comment'>
                    <input
                        type="text"
                        placeholder="댓글을 입력하세요"
                    />
                    <div class="enter">
                        <img src={enter} alt="enter" />
                    </div>
                </div>
            </div>
        </div>  
    </>)
    return item;
}

function BoardView() {
    const{BdId} = useParams();
    const item = GetData(BdId);

    return (<>
        <div>
            {item}
        </div>
    </>);
}

export default BoardView;