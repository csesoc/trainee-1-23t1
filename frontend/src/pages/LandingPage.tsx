import { useNavigate } from 'react-router-dom';
import PageTemplate from '../components/PageTemplate';

const LandingPage = () => {
    return (
        <PageTemplate>
            <div>
                <span className='text-9xl'> OMG I LOVE FRONTEND</span>
            </div>
        </PageTemplate>
    );
}

export default LandingPage;