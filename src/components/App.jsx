import Section from './section/Section';
import Statistics from './statistics/Statistics';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Section title={'1 - Feedback widget'}>
        {
          <Statistics
            good={5}
            neutral={5}
            bad={5}
            total={5}
            positivePercentage={5}
          />
        }
        {/* {children for each Statistics FeedbackOptions} */}
      </Section>

      <Section title={'1 - Feedback options'}>
        {/* <FeedbackOptions options={} onLeaveFeedback={}/> */}
      </Section>
    </div>
  );
};
