import classes from './style.module.scss';

const Sidebar = ({ step }) => {
    return (
        <div className={classes.container}>
            <div className={classes.stepWrapper}>
                <div className={`${classes.stepInfo} ${step === 1 ? classes.activeStep : ''}`}>
                    <div className={classes.numberWrap}>
                        <div className={classes.number}>1</div>
                    </div>
                    <div className={classes.text}>
                        <div className={classes.step}>STEP 1</div>
                        <div className={classes.descStep}>YOUR INFO</div>
                    </div>
                </div>
                <div className={`${classes.stepInfo} ${step === 2 ? classes.activeStep : ''}`}>
                    <div className={classes.numberWrap}>
                        <div className={classes.number}>2</div>
                    </div>
                    <div className={classes.text}>
                        <div className={classes.step}>STEP 2</div>
                        <div className={classes.descStep}>SELECT PLAN</div>
                    </div>
                </div>
                <div className={`${classes.stepInfo} ${step === 3 ? classes.activeStep : ''}`}>
                    <div className={classes.numberWrap}>
                        <div className={classes.number}>3</div>
                    </div>
                    <div className={classes.text}>
                        <div className={classes.step}>STEP 3</div>
                        <div className={classes.descStep}>ADD ONS</div>
                    </div>
                </div>
                <div className={`${classes.stepInfo} ${step === 4 || step === 5 ? classes.activeStep : ''}`}>
                    <div className={classes.numberWrap}>
                        <div className={classes.number}>4</div>
                    </div>
                    <div className={classes.text}>
                        <div className={classes.step}>STEP 4</div>
                        <div className={classes.descStep}>SUMMARY</div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Sidebar;