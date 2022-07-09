import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="#">
              <i class="fa-light fa-burger-cheese"></i>
              fastFood
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Pedido
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cozinha
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Retirada
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="container">
          <h2>Seja bem vindo!</h2>
          <form>
            <input
              list="categorias"
              type="text"
              placeholder="O que você procura?"
            />
            <datalist id="categorias">
              <option value=" "> </option>
              <option value="Hamburguer">
                <a href="#"></a>
              </option>
              <option value="Batata">
                <a href="#"></a>
              </option>
              <option value="Bebida">
                <a href="#"></a>
              </option>
              <option value="Sobremesa">
                <a href="#"></a>
              </option>
            </datalist>
          </form>
        </section>

        <section className="categorias m-4">
          <h3>Categorias</h3>
          <p>Navegue por categoria</p>
          <div className="container-categoria m-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="img/combos.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>Combos</h5>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="img/batata.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>Acompanhamento</h5>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="../src/img/1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>Bebida</h5>
              </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
              <img src="../src/img/1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>Sobremesa</h5>
              </div>
            </div>
          </div>
        </section>
        <section className="produto m-4">
          <h3>Produto</h3>
          <p>Escolha seu produto e adicione ao seu pedido</p>
          <div className="container-categoria">
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container-categoria">
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="container-categoria">
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
            <div className="col md-4">
              <div className="card">
                <img src="./src/img/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5>Hamburguer</h5>
                  <p>Hamburguer duplo</p>
                  <h5>29,90</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="selecionar m-4">
            <div>
              <button type="button" className="btn btn-secondary" href="#">
                Cancelar
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-success" href="#">
                Finalizar pedido
              </button>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default App
