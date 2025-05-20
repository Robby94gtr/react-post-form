import { useState } from 'react'

function App() {


  return (
    <>
      <header>
        <div className="navbar bg-secondary p-4 text-white ">Post Form</div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <div className='mb-2'>Autore</div>
              <input className="form-control form-control-lg" type="text" placeholder="Autore del post" aria-label=".form-control-lg example" />
              <div className='mt-2'  >Titolo</div>
              <input className="form-control mt-2" type="text" placeholder="Titolo del post" aria-label="default input example" />
              <div class="mt-3">
                <label for="exampleFormControlTextarea1" class="form-label"> Inserisci qui sotto il testo del post</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
                <label class="form-check-label" for="checkDefault">
                  Pubblica il post
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="checkChecked" checked />
                <label class="form-check-label" for="checkChecked">
                  Salva come bozza
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App