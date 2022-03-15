import DUMMY_DATA from '../DUMMY_DATA/dummy_data';
import MeetupList from '../components/Meetups/MeetupList';

function AllMeetups() {
    return (
        <div>
            <div>All Meetups</div>
            <section>
                <MeetupList meetups={DUMMY_DATA} />
            </section>
        </div>
    )
}

export default AllMeetups;