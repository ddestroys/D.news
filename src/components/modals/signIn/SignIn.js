import React, {useState} from 'react';
import Modal from 'react-modal';

import Cross from './../../../img/cross.svg'
import AllNews from './../../../img/all_news.svg'
import Sports from './../../../img/sports.svg'
import Science from './../../../img/science.svg'
import Culture from './../../../img/culture.svg'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(0,0,0,0.6)'
    }
};

const sections = [
    {
        icon: AllNews,
        text: 'All news'
    },
    {
        icon: Sports,
        text: 'Sport'
    },
    {
        icon: Science,
        text: 'Science'
    },
    {
        icon: Culture,
        text: 'Culture'
    },
]

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const SignIn = ({closeModal, modalIsOpen}) => {
    const [step, setStep] = useState('registration');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const changeStep = (step) => {
        console.log(step)
        setStep(step);
        setEmail('');
        setLogin('');
        setPassword('');
    };
    const closeModalFunc = () => {
        changeStep('registration')
        closeModal();
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModalFunc}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='sign-in-body'>
                <img src={Cross} className='close-modal' onClick={closeModalFunc}/>
                <div className='status'>
                    {step !== 'section' && <span>{step === 'registration' ? 'Registration' : 'Sin in'}</span>}
                    {step === 'section' && <>
                        <span>Choose your</span>
                        <span>favorite news</span>
                        <span>section</span>
                    </>}
                </div>
                {step !== 'section' ? <div className='form'>
                    <div className='input-label'>
                        <div className='label'>Login</div>
                        <input className='input' value={login} onChange={(e)=>setLogin(e.target.value)}/>
                    </div>
                    {step === 'registration' && <div className='input-label'>
                        <div className='label'>E-mail</div>
                        <input className='input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>}
                    <div className='input-label'>
                        <div className='label'>Password</div>
                        <input className='input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div> : <div className='sections'>
                    {sections.map(section=><div className='section'>
                        <img src={section.icon} className='section-pic'/>
                        <div className='section-text'>{section.text}</div>
                    </div>)}
                </div>}
                <div className='buttons'>
                    <div className='accept' onClick={changeStep.bind(this, 'section')}>Ok</div>
                    {step !== 'section' && <div className='redirect' onClick={changeStep.bind(this, step === 'registration' ? 'singIn' : 'registration')}>{step === 'registration' ? 'Sign in' : 'Registration'}</div>}
                </div>
            </div>
        </Modal>
    );
}

export default SignIn;