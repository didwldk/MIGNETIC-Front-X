import '../css/home.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import Modal from 'react-modal';

import info from '../images/icons/info.png'
import close from '../images/icons/close.png'


function Home() {
    const navigate = useNavigate()
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOnclickTest = () => {
        navigate('/test')
    }

    const handleOnclickView = () => {
        navigate('/hotplace')
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className='home'>
            <div className='btnContainer'>
                <button onClick={handleOnclickTest}>검사하기</button>
                <button onClick={handleOnclickView}>핫플보기</button>
            </div>

            <button onClick={openModal} className='info'><img src={info} /></button>

            <div className='modalContainer'>
                <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <div className='modalHeader'>
                        설명서
                        <button onClick={closeModal}><img src={close} /></button>
                    </div>

                    <div className='modalText'>
                        <div className=''>자신의 성격이랑 잘 맞는 사람이<br /> 있는지 궁금하다면 <p>검사하기</p> 클릭!</div>
                        <div className=''>나와 잘 맞는 사람과 같이<br /> 놀러갈 수 있는 장소가 궁금하다면<br /> <p>핫플보기</p> 클릭!</div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Home