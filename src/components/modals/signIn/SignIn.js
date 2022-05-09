import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';

import Cross from './../../../img/cross.svg'
import AllNews from './../../../img/all_news.svg'
import Sports from './../../../img/sports.svg'
import Science from './../../../img/science.svg'
import Culture from './../../../img/culture.svg'

import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout, setFirebaseSection } from "./../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import classNames from "classnames";

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
    const [section, setSection] = useState('');
    const changeStep = (step) => {
        setStep(step);
        //setEmail('');
        setLogin('');
        setPassword('');
    };
    const closeModalFunc = () => {
        changeStep('registration')
        closeModal();
    }

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            console.log('loading')
            return;
        }
        if (user) {
            console.log(user)
        };
    }, [user, loading]);

    const onOkClick = () => {
        switch (step) {
            case 'registration':
                registerWithEmailAndPassword(login, email, password).then(()=>changeStep('section'))
                break;
            case 'signIn':
                logInWithEmailAndPassword(email, password).then(()=>closeModalFunc())
                break;
            case 'section':
                setFirebaseSection(email, section).then((res)=>console.log(res));
                break;
        }
       /* console.log(email, password)
            //logInWithEmailAndPassword(email, password)
        registerWithEmailAndPassword(login, email, password)*/
    };

    const setSectionFunc = (section) => {
        setSection(section)
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
                    {sections.map(sectionItem=><div className={classNames('section',{'active':section===sectionItem.text})} onClick={setSectionFunc.bind(this,sectionItem.text)}>
                        <img src={sectionItem.icon} className='section-pic'/>
                        <div className='section-text'>{sectionItem.text}</div>
                    </div>)}
                </div>}
                <div className='buttons'>
                    <div className='accept' onClick={onOkClick}>Ok</div>
                    {step !== 'section' && <div className='redirect' onClick={changeStep.bind(this, step === 'registration' ? 'singIn' : 'registration')}>{step === 'registration' ? 'Sign in' : 'Registration'}</div>}
                </div>
            </div>
        </Modal>
    );
}

export default SignIn;