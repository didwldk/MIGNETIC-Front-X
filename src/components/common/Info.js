import Modal from 'react-modal';
import React, { useState } from 'react';

import '../../css/common/Info.css'
import info from '../../images/icons/info.png'
import close from '../../images/icons/close.png'

function Info() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className='info'>
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

export default Info