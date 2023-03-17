import { Helmet } from 'react-helmet-async';
import s from './not-found-page.module.css';
import { Link } from 'react-router-dom';

function PageNotFound(): JSX.Element {
  return (
    <div className={s.body}>
      <Helmet>
        <title>six cities simple: Page not found</title>
      </Helmet>
      <div className={s.container}>
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We&nbsp;can&rsquo;t find the page you&rsquo;re looking for.</p>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
