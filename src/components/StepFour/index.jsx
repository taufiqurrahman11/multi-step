import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss'
import { useDispatch } from 'react-redux';
import { setStep } from '@pages/Home/actions';

const StepFour = () => {
    const dispatch = useDispatch()

    const handleGoBack = () => {
        dispatch(setStep(3));
    };

    const handleNextStep = () => {
        dispatch(setStep(5));
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.title}><FormattedMessage id='app_stepfour_title'/></div>
                <div className={classes.subTitle}><FormattedMessage id='app_stepfour_subtitle'/></div>
            </div>
            <div className={classes.cardContainer}>
                <div className={classes.cardWrapper}>
                    <div>
                        <div className={classes.product}>Arcade <span>(Monthly)</span></div>
                        <div className={classes.change}>change</div>
                    </div>
                    <div className={classes.product}>$9/mo</div>
                </div>
                <div className={classes.cardWrapper}>
                    <div className={classes.productTambahan}>Online service</div>
                    <div className={classes.priceTambahan}>+$1/mo</div>
                </div>
                <div className={classes.cardWrapper}>
                    <div className={classes.productTambahan}>Larger Storage</div>
                    <div className={classes.priceTambahan}>+$1/mo</div>
                </div>
            </div>
            <div className={classes.totalContainer}>
                <div className={classes.total}>Total per <span>month</span></div>
                <div className={classes.price}>+$12/mo</div>
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.goback} onClick={handleGoBack}>
                    Go Back
                </button>
                <button className={classes.next} onClick={handleNextStep}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default StepFour;