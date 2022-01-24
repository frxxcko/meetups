import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetUpForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitleValue = titleInputRef.current.value;
        const enteredImageValue = imageInputRef.current.value;
        const enteredAddressValue = addressInputRef.current.value;
        const enteredDescriptionValue = descriptionInputRef.current.value;

        const NewMeetupData = {
            title: enteredTitleValue,
            image: enteredImageValue,
            address: enteredAddressValue,
            description: enteredDescriptionValue
        };

        console.log(NewMeetupData); // This data could be sent to the server to persist it.
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image URL</label>
                <input type='url' id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea rows={5} id='description' ref={descriptionInputRef} />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetUpForm;