import logo from './logo.svg';
import image from './profile.jpg';
import './App.css';

const App = ()=> {
  return (
    <div className="container">
        <div className="flex-container">
          <div className="flex-left">
            <img src={image} alt=''/>
          </div>
          <div className="flex-right">
            <h1>Asfakul Ghani</h1>

            <ul>
              <li>
                <span>Github: </span>
                https://github.com/hrOarr
              </li>
              <li>
                <span>Github: </span>
                https://github.com/hrOarr
              </li>
              <li>
                <span>Github: </span>
                https://github.com/hrOarr
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-container2">
          <div className="flex-left2">
               <h1>Education</h1>
            <div className="flex-left2_1">
              <div>
                <h4>Bachelor Of Science</h4>
                <ul>
                  <li>Jahangirnagar University</li>
                  <li>Computer Science</li>
                  <li>CGPA: 3.40</li>
                </ul>
              </div>
              <div>
                <h4>Higher Secondary School</h4>
                <ul>
                  <li>Hajera-taju university college</li>
                  <li>Science</li>
                  <li>CGPA: 4.83</li>
                </ul>
              </div>
            </div>
               <h1>Key Skills</h1>
          </div>
          <div className="flex-right2">2</div>
        </div>
    </div>
  );
}

export default App;
