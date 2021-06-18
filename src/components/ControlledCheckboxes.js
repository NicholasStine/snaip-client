import React, { useState, useEffect } from 'react';
import controlled_check_img_0 from '../images/controlled_checkboxes_jsx.png';
import controlled_check_img_1 from '../images/controlled_checkboxes_setup.png';

const FAKE_PREFS = {
    keto: true,
    halal: true,
    kosher: false,
    vegan: false,
    presbetarian: true
}

const ControlledCheckboxes = () => {
    const [form, setForm] = useState({});
    const [submitted, setSubmitted] = useState({});

    const onSubmit = () => {
        console.log(onSubmit);
        setSubmitted({ ...form });
    }

    useEffect(() => {
        // await axios.get whatever route has profile data
        setForm(FAKE_PREFS);
        setSubmitted(FAKE_PREFS);
    }, []);

    return (
        <div>
            <strong>Controlled Checkboxes</strong>
            <p>Controlling checkboxes can be a huge pain in the rump, so here are some code snipets that have worked well for me when I need checkbox forms to reflect controlled variables (i.e react useState variables)</p>
            <div className="d-flex justify-content-between mx-5">
                <div>
                    {Object.keys(form).map((pref, i) => {
                        return (
                            <div>
                                <input
                                    type="checkbox"
                                    className="m-3"
                                    name={pref}
                                    checked={form[pref]}
                                    onClick={(e) => setForm({ ...form, [e.target.name]: !form[e.target.name] })}
                                />
                                <label>{pref}</label>
                            </div>
                        )
                    })}
                </div>
                <div className='controlled-checkbox submit-btn'>
                    <button
                        className="align-middle"
                        onClick={onSubmit}
                        >
                        Test Submit
                    </button>
                </div>
                <div>
                    {Object.keys(submitted).map((pref, i) => {
                        return (
                            <div>
                                <input
                                    type="checkbox"
                                    className="m-3"
                                    name={pref}
                                    checked={submitted[pref]}
                                />
                                <label>{pref}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-2">
                <strong>The Code:</strong>
                <div className="m-2">
                    <p>Here's the setup code. Nothing fancy, just some fake data to load in place of a route to load the data from a db, and the two state variables are set iin the useEffect as they would be in actual use.</p>
                </div>
                <img alt=" " src={controlled_check_img_1}/>
                <div className="m-2">
                    <p>Next up is the money shot. The first Object.keys being mapped is the actual checkbox form, where the form useState variable is set with the onClick listener</p>
                    <p className="mt-1">The second Object.keys is mapping the submitted form in a separate submitted useState variable, and is only settable by the Test Submit button.</p>
                </div>
                <img alt=" " src={controlled_check_img_0}/>
                <div className="ml-2 mt-4 mb-3">
                    <strong>
                        Ta Da! Controlled checkbox forms made quick and easy, with minimal jsx and focus on scalability.
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default ControlledCheckboxes;