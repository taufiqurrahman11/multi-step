import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { ping } from '@containers/App/actions';

import Sidebar from '@components/Sidebar';
import PersonalInfo from '@components/PersonalInfo';
import StepTwo from '@components/StepTwo';
import StepThree from '@components/StepThree';
import StepFour from '@components/StepFour';
import ThankYou from '@components/ThankYou';

import classes from './style.module.scss';
import { selectAddons, selectInfo, selectPrice, selectStep } from './selectors';


const Home = ({step, info, price, addons }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <main>
      <div className={classes.container}>
        <Sidebar step={step} />
        {step === 1 && <PersonalInfo info={info}/>}
        {step === 2 && <StepTwo price={price} />}
        {step === 3 && <StepThree addons={addons} />}
        {step === 4 && <StepFour />}
        {step === 5 && <ThankYou />}
      </div>
    </main>
  );
};

Home.propTypes = {
  step: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  addons: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  info: selectInfo,
  price: selectPrice,
  addons: selectAddons,
})

export default connect(mapStateToProps)(Home);
