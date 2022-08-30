import face from './face.png';

<div className="my_cv_container">
        <Row>
          <ColData>
            <Row>
              <ColKey>Name:</ColKey>
              <ColVal>Mathias Green</ColVal>
            </Row>
            <Row>
              <ColKey>Address:</ColKey>
              <ColVal>Stockholm, Sweden</ColVal>
            </Row>
            <Row>
              <ColKey>Mail:</ColKey>
              <ColVal>
                <a href="mailto:flmathematic@gmail.com?subject=Hello,%20I%20have%20found%20your%20web%20CV!"
                   target="_top">flmathematic</a>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Linkedin profile:</ColKey>
              <ColVal>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/mathias-green'>mathias-green</a>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Github accounts:</ColKey>
              <ColVal>
                <Row>
                  <ColHalf>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/flmath'>main</a>
                  </ColHalf>
                  <ColHalf>
                    <a  target="_blank" rel="noopener noreferrer" href='https://github.com/flmath-dirty'>secondary</a>
                  </ColHalf>
                </Row>
              </ColVal>
            </Row>
            <Row>
              <ColKey>Resume:</ColKey>
              <ColVal>
                <Row>
                  <ColHalf>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.PUBLIC_URL+"/resumes/resume.pdf"}>PDF</a>
                  </ColHalf>
                  <ColHalf>
                    <a href={process.env.PUBLIC_URL+"/resumes/resume.odt"}>ODT</a>
                  </ColHalf>
                </Row>
              </ColVal>
            </Row>
          </ColData>
          <ColPic className="my_cv_face">
            <img src={face}  className="my_cv_face_img" alt="Here should be my face."/>
          </ColPic>
        </Row>
  </div>