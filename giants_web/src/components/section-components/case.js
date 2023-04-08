import React, { Component } from "react";

class Case extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    let CustomClass = this.props.customclass ? this.props.customclass : "";

    return (
      <section className={"case-one " + CustomClass}>
        <div className="container  go-top">
          <div className="case-one__top">
            <div className="block-title-two text-left">
              <p>Clients Repo</p>
              <h3>Clients Photo Collection</h3>
            </div>
            {/* /.block-title-two */}
          </div>
          {/* /.case-one__top */}
          <div className="row">
            <div className="col-lg-3">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/arnaud.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.case-one__image */}
                <div className="case-one__content">
                  <h3>
                    <a
                      href="https://thegiantspictures.pixieset.com/arnaudandagasaro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Arnauld & Agasaro
                    </a>
                  </h3>
                </div>
                {/* /.case-one__content */}
              </div>
              {/* /.case-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-3">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/alex_sarah.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.case-one__image */}
                <div className="case-one__content">
                  <h3>
                    <a
                      href="https://thegiantspictures.pixieset.com/alexandsarah/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Alex & Sarah
                    </a>
                  </h3>
                </div>
                {/* /.case-one__content */}
              </div>
              {/* /.case-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-3">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img
                    src={
                      publicUrl + "assets/images/portfolio/sharon_geoffrey.png"
                    }
                    alt={imagealt}
                  />
                </div>
                {/* /.case-one__image */}
                <div className="case-one__content">
                  <h3>
                    <a
                      href="https://thegiantspictures.pixieset.com/sharonandgeoffreycivilwedding/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Geoffrey & Sharon
                    </a>
                  </h3>
                </div>
                {/* /.case-one__content */}
              </div>
              {/* /.case-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-3">
              <div className="case-one__single">
                <div className="case-one__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/zahabu.png"}
                    alt={imagealt}
                  />
                </div>
                {/* /.case-one__image */}
                <div className="case-one__content">
                  <h3>
                    <a
                      href="https://thegiantspictures.pixieset.com/zahabumaternityphotoshoot/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zahabu
                    </a>
                  </h3>
                </div>
                {/* /.case-one__content */}
              </div>
              {/* /.case-one__single */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default Case;
