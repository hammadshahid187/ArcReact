import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { MainBox } from './Components/MainBox/MainBox';
import { Model } from './Components/NewsModel/Model';
import { EventModel } from './Components/EventModel/EventModel';

function App() {
  return (
    <>
      <Header />
      <MainBox />
      {/*<Model/>*/}

      {/* Model Box */}
      <div class="modal fade newsModel" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content p-lg-4 p-md-3 py-3">
            <button type="button" class="btn-close ms-auto px-lg-0 px-md-0 px-3" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <Model />
            </div>
          </div>
        </div>
      </div>


      {/* Model Box */}
      <div class="modal fade eventModel" id="EventModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EventModelLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content p-lg-4 p-md-3 py-3">
            <button type="button" class="btn-close ms-auto px-lg-0 px-md-0 px-3" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <EventModel/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
