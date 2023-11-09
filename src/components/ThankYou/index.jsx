import { FormattedMessage } from 'react-intl';
import IconThankYou from '../../assets/images/icon-thank-you.svg';
import classes from './style.module.scss'
import { useDispatch } from 'react-redux';
import { setStep } from '@pages/Home/actions';

const ThankYou = () => {
    const dispatch = useDispatch()

    const handleGoHome = () => {
        dispatch(setStep(1));
    };
    return (
        <div className={classes.container}>
            <img src={IconThankYou} alt="" />
            <div className={classes.thankYou}><FormattedMessage id='app_thankyou'/></div>
            <div className={classes.thanksLong}><FormattedMessage id='app_thankyou_long' /></div>
            <button onClick={handleGoHome}>Home</button>
        </div>
    )
}

export default ThankYou;