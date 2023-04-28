import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <div className='min-h-screen bg-yellow'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col'>
          <span className='text-8xl font-semibold text-blue'>404</span>
          <span className='text-2xl m-[5px] font-medium text-blue'>
            PAGE NOT FOUND
          </span>
          <button
            className='p-3 rounded-lg bg-pink'
            onClick={() => navigate("/")}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Page404;
