import '../App.css'
import banner1 from '../resources/banner.jpg'
import banner2 from '../resources/banner2.jpg'
import banner3 from '../resources/banner3.jpg'
import banner4 from '../resources/banner4.jpg'
import logo1 from '../resources/logo.jpg'

export function HeaderPart() {

    return (
      <>
        <header>
    <nav class="navbar my-nav navbar-light bg-light navbar-expand-lg">
      <div class="container">
        <img src={logo1} class="d-inline logoHeader" alt=""/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tools</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Final</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="carouselExampleIndicators" class="carousel slide my-carousel my-1" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={banner1} class="d-inline w-700 banner" alt=""/>
        </div>
        <div class="carousel-item">
        <img src={banner3} class="d-inline w-700 banner" alt=""/>
        </div>
        <div class="carousel-item">
        <img src={banner4} class="d-inline w-700 banner" alt=""/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>

        </header>
      </>
    )
  }