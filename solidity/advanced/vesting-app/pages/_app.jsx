import Nav from '../components/Nav';
import { ContextWrapper } from '../contexts/ContextWrapper';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <div className='w-screen h-full bg-slate-300'>
        <Nav />
        <div className='w-10/12 mx-auto flex justify-center items-center'>
          <Component {...pageProps} />
        </div>
      </div>
    </ContextWrapper>
  );
}

export default MyApp
