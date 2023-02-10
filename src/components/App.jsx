import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: '60px',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
