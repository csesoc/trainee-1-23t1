import { signOut } from 'firebase/auth';
import PageTemplate from '../components/PageTemplate';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { authUid } = useAuth();

  return (
    <PageTemplate showYellowBg={false}>
      <span className="text-9xl"> OMG I LOVE FRONTEND</span>
      {authUid && (
        <button
          onClick={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                console.log('user is logged out');
              })
              .catch((error) => {
                // An error happened.
                alert(error);
              });
          }}
        >
          SIGNOUT
        </button>
      )}
    </PageTemplate>
  );
};

export default LandingPage;
