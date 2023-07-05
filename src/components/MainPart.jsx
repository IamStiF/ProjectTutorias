import { Topics } from './Topics.jsx'
import driveLogo from '../resources/driveMark.png'
import gitHubLogo from '../resources/githubMark.png'
import youtubeLogo from '../resources/youtubeMark.png'
import '../App.css'



export function MainPart() {

    return (
      <>
        <main>
        <div class="container my-5">
          <h1>Tools</h1>
          <div class="d-flex flex-wrap justify-content-center">
            
            <a href="https://drive.google.com/drive/u/1/folders/1D-Ax0gfAlygzNhwRn8x5hVyw-dCkqZkO" class="text-decoration-none" target="_blank">
              <div class="card gallery-item hover-lila card-img-container mx-2 my-2">
                <img src={gitHubLogo} class="card-img-top img-fluid black-and-white re-size-drive" alt="Imagen 2"/>

              </div>
            </a>

            <a href="https://drive.google.com/drive/u/1/folders/1D-Ax0gfAlygzNhwRn8x5hVyw-dCkqZkO" class="text-decoration-none" target="_blank">
              <div class="card gallery-item hover-green card-img-container mx-2 my-2">
                <img src={driveLogo} class="card-img-top black-and-white" alt="Imagen 1"/>              
              </div>
              
            </a>

            <a href="https://drive.google.com/drive/u/1/folders/1D-Ax0gfAlygzNhwRn8x5hVyw-dCkqZkO" class="text-decoration-none" target="_blank">
              <div class="card gallery-item hover-green card-img-container mx-2 my-2 hover-red">
                <img src={youtubeLogo} class="card-img-top re-size black-and-white" alt="Imagen 3"/>
              </div>
            </a>

            

            
          </div>
        </div>

        <Topics/>
        
        </main>
      </>
    )
  }