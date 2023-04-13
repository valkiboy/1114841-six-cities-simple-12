import { useAppDispatch } from '../../hooks/index';
import { fetchOffersAction } from '../../store/api-actions';
import './error-screen.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>


              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Упс
                </h3>

                <p>Не удалось загрузить предложения</p>

                <button
                  className="link_404"
                  type="button"
                  onClick={() => {
                    dispatch(fetchOffersAction());
                  }}
                >
                  Попробовать ещё раз
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorScreen;
