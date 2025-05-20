import { useState } from 'react'
import axios from 'axios'

function App() {

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
    public: ""
  })


  const sendData = (e) => {
    e.preventDefault();
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData).then((resp) => { console.log(resp.data) })
    setFormData({
      ...formData
    })

  }



  return (
    <>
      <header>
        <div className="navbar bg-secondary p-4 text-white ">Post Form</div>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <form onSubmit={sendData} >
                <div className='mb-2'>Autore</div>
                <input className="form-control form-control-lg" type="text" placeholder="Autore del post" aria-label=".form-control-lg example" name='autore' value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

                <div className='mt-2'  >Titolo</div>
                <input className="form-control mt-2" type="text" placeholder="Titolo del post" aria-label="default input example" name='titolo' value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} />

                <div className="mt-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label"> Inserisci qui sotto il testo del post</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='testo' value={formData.body} onChange={(e) => setFormData({ ...formData, body: e.target.value })}></textarea>
                </div>
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                  <label className="form-check-label" htmlFor="checkDefault">
                    Pubblica il post
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="checkChecked" />
                  <label className="form-check-label" htmlFor="checkChecked">
                    Salva come bozza
                  </label>
                </div>
                <button className='btn btn-primary'>Invia</button>
              </form>
            </div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default App