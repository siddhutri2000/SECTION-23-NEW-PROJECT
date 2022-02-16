import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "a first meet up",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "some address",
    description: "not needed",
  },
  {
    id: "m2",
    title: "a second meet up",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "some add",
    description: "needed",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
