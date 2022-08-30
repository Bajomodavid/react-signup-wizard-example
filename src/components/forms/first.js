import '../../index.css';
import { validateEmail } from './validators/fields_validator';


export function FirstPageForm({ state, dispatch }) {
    return <div>
        <div>
            <h2>Let's set up your account</h2>
        </div>
        <div>
            <p className='sub-header'>Already have an account? <a>Sign in</a></p>
        </div>
        <form>
            <div>
                <input type="text" placeholder="Your name" name="name" onChange={(e) => dispatch({type: 'fields/name', payload: e.target.value})}/>
            </div>
            <div>
                <input type="text" placeholder="Email Address" name="email" onChange={(e) => {
                    let email = e.target.value;
                    dispatch({type: 'fields/email', payload: email})
                    dispatch({type: 'input_errors/email', payload: validateEmail(email)})
                }}/>
                {
                    state.inputErrors.email === false
                    ?
                    <p className='input-error'>Please enter a valid email address</p>
                    :
                    ``
                }
            </div>
            <div>
                <input type="text" placeholder="I would describe my user type as" name="type" onChange={(e) => dispatch({type: 'fields/type', payload: e.target.value})}/>
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" onChange={(e) => dispatch({type: 'fields/password', payload: e.target.value})}/>
            </div>
            <div>
                <p className='hint'>Minimum 8 characters</p>
            </div>
        </form>
    </div>
}