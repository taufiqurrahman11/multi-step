import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { setInfo, setStep } from '@pages/Home/actions';
import { useState } from 'react';

import classes from './style.module.scss';

const PersonalInfo = ({ info }) => {
    const dispatch = useDispatch();
    console.log(info, '<<< INFO')
    
    const [formData, setFormData] = useState({
        name: info.name,
        email: info.email,
        phoneNumber: info.phoneNumber,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }


    const handleNextStep = () => {
        if (formData.name && formData.email && formData.phoneNumber) {
            dispatch(setInfo(formData));
            dispatch(setStep(2));
        } else {
            alert("Please fill in all fields");
        }
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}><FormattedMessage id='app_personalinfo_title'/></div>
                <div className={classes.subTitle}><FormattedMessage id='app_personalinfo_subtitle'/></div>
            </div>
            <form action="#">
                <div className={classes.inputItem}>
                    <label className={classes.label}><FormattedMessage id='app_personal_name'/></label>
                    <input 
                        type='text'
                        name='name'
                        required
                        placeholder='e.g. John Doe'
                        className={classes.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.inputItem}>
                    <label className={classes.label}><FormattedMessage id='app_personal_email'/></label>
                    <input 
                        type='text'
                        name='email'
                        required
                        placeholder='e.g. johndoe@example.com'
                        className={classes.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.inputItem}>
                    <label className={classes.label}><FormattedMessage id='app_personal_phone'/></label>
                    <input 
                        type='text'
                        name='phoneNumber'
                        required
                        placeholder='e.g. +62 812301234'
                        className={classes.input}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.buttonWrapper}>
                    <button className={classes.button} onClick={handleNextStep}>
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    )
}

PersonalInfo.propTypes = {
    step: PropTypes.number,
    info: PropTypes.object.isRequired,
}

export default PersonalInfo;