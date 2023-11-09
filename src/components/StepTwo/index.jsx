import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Switch from '@mui/material/Switch';

import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'
import { setPrice, setStep } from '@pages/Home/actions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './style.module.scss';

const StepTwo = ({ price }) => {
    const dispatch = useDispatch();
    const [selectedBox, setSelectedBox] = useState(null);

    const handleGoBack = () => {
        dispatch(setStep(1));
    };

    const handleNextStep = () => {
        dispatch(setStep(3));
    };

    const handleBoxClick = (boxIndex, boxPrice) => {
        if (selectedBox === boxIndex) {
            setSelectedBox(null);
            dispatch(setPrice(0));
        } else {
            setSelectedBox(boxIndex);
            dispatch(setPrice(boxPrice));
        }
    }

    useEffect(() => {
        dispatch(setPrice(price))
    }, [dispatch, price])

    console.log(price, '<<< PRICE')

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}><FormattedMessage id='app_steptwo_title'/></div>
                <div className={classes.subTitle}><FormattedMessage id='app_steptwo_subtitle'/></div>
            </div>
            <div className={classes.cardContainer}>
                <div className={`${classes.cardWrapper} ${selectedBox === 0 && classes.selected}`} onClick={() => handleBoxClick(0, 9)}>
                    <img src={arcadeIcon} alt="" />
                    <div className={classes.cardTitle}><FormattedMessage id='app_steptwo_arcade'/></div>
                    <div className={classes.cardPrice}>$9/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
                <div className={`${classes.cardWrapper} ${selectedBox === 1 && classes.selected}`} onClick={() => handleBoxClick(1, 12)}>
                    <img src={advancedIcon} alt="" />
                    <div className={classes.cardTitle}><FormattedMessage id='app_steptwo_advanced'/></div>
                    <div className={classes.cardPrice}>$12/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
                <div className={`${classes.cardWrapper} ${selectedBox === 2 && classes.selected}`} onClick={() => handleBoxClick(2, 15)}>
                    <img src={proIcon} alt="" />
                    <div className={classes.cardTitle}><FormattedMessage id='app_steptwo_pro'/></div>
                    <div className={classes.cardPrice}>$15/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
            </div>
            <div className={classes.toggleContainer}>
                <div className={classes.monthly}><FormattedMessage id='app_steptwo_monthly'/></div>
                <Switch defaultChecked />
                <div className={classes.yearly}><FormattedMessage id='app_steptwo_yearly'/></div>
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.goback} onClick={handleGoBack}>
                    Go Back
                </button>
                <button className={classes.next} onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </div>
    )
}

StepTwo.propTypes = {
    price: PropTypes.number,
}

export default StepTwo;