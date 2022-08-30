import '../index.css';
import { FirstPageForm } from './forms/first';
import { SecondPageForm } from './forms/second';
import { ThirdPageForm } from './forms/third';
import { verifyInput } from './forms/validators/fields_validator';

export function Signup({ state, dispatch }) {
    const currentScreen = () => {
        if (state.carousel.step === 1) {
            return <FirstPageForm 
                state={state}
                dispatch={dispatch}
            />;
        }
        if (state.carousel.step === 2) {
            return <SecondPageForm 
                state={state}
                dispatch={dispatch}
            />;
        }
        return <ThirdPageForm 
            state={state}
            dispatch={dispatch}
        />;
    }
    return <div>
        <div>
            <div className='signup'>
               <div className='stepper'>
                    <span className='stepper-text'>Step {state.carousel.step}  of 3</span>
                    <span onClick={() => dispatch({type: 'carousel/step', payload: 1})} className={state.carousel.step === 1 ? `active-dot` : `dot`}></span>
                    <span onClick={() => dispatch({type: 'carousel/step', payload: 2})} className={state.carousel.step === 2 ? `active-dot` : `dot`}></span>
                    <span onClick={() => dispatch({type: 'carousel/step', payload: 3})} className={state.carousel.step === 3 ? `active-dot` : `dot`}></span>
                </div> 
                <div className='form'>
                        {currentScreen()}
                        {
                            verifyInput(state.fields) ? 
                            
                            <button type="button" onClick={() => {
                                if (state.carousel.step === 1) {
                                    dispatch({type: 'carousel/step', payload: 2})
                                    return;
                                }
                                dispatch({type: 'carousel/step', payload: 3})
                            }} className='active-submit'>
                                Next
                            </button>
                            
                            : 
                            
                            <button type="button" className='submit' disabled>
                                Next
                            </button>
                        
                        }
                        <div className='terms'>
                            <p>
                                By clicking the "Next" button, you agree to creating a free account, 
                                and to <a>Terms of Service</a> and <a>Privacy Policy</a>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>;
}