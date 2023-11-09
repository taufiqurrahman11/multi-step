import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { setAddons, setStep } from '@pages/Home/actions';

import classes from './style.module.scss';

const StepThree = ({ addons }) => {
    const dispatch = useDispatch()
    

    const handleCheckBoxClick = ({ productAdd, priceAdd }) => {
        dispatch(setAddons({ productAdd, priceAdd }));
    };
    

    const handleGoBack = () => {
        dispatch(setStep(2));
    };

    const handleNextStep = () => {
        dispatch(setStep(4));
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}><FormattedMessage id='app_stepthree_title'/></div>
                <div className={classes.subTitle}><FormattedMessage id='app_stepthree_subtitle'/></div>
            </div>
            <div className={classes.cardContainer}>
                <div className={classes.cardWrapper}>
                    <input 
                        type="checkbox"
                        onClick={() => handleCheckBoxClick({productAdd: 'Online Service', priceAdd: 1})}
                    />
                    <div className={classes.cardText}>
                        <div className={classes.textHead}><FormattedMessage id='app_stepthree_online'/></div>
                        <div className={classes.textFoot}><FormattedMessage id='app_stepthree_access' /></div>
                    </div>
                    <div className={classes.cardPrice}>+$1/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
                <div className={classes.cardWrapper}>
                    <input type="checkbox" onClick={() => handleCheckBoxClick({productAdd: 'Larger Storage', priceAdd: 1})} />
                    <div className={classes.cardText}>
                        <div className={classes.textHead}><FormattedMessage id='app_stepthree_larger'/></div>
                        <div className={classes.textFoot}><FormattedMessage id='app_stepthree_extra' /></div>
                    </div>
                    <div className={classes.cardPrice}>+$1/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
                <div className={classes.cardWrapper}>
                    <input type="checkbox" onClick={() => handleCheckBoxClick({productAdd: 'Customizable Profile', priceAdd: 1})} />
                    <div className={classes.cardText}>
                        <div className={classes.textHead}><FormattedMessage id='app_stepthree_customizable'/></div>
                        <div className={classes.textFoot}><FormattedMessage id='app_stepthree_custom' /></div>
                    </div>
                    <div className={classes.cardPrice}>+$1/<FormattedMessage id='app_steptwo_permonth'/></div>
                </div>
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

StepThree.propTypes = {
    addons: PropTypes.object.isRequired,
}

export default StepThree;