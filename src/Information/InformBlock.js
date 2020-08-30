import React from 'react';
import './information.css';

class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        }
    }

    render() {
        let bird = this.props.correctAnswer;
        if (this.props.isDone) {
            return (
                <div className="information">
                    <div className="short-info">
                        <img className="info-img" src={bird.image} alt={bird.species} />
                        <div className="info-name-audio">
                            <p className="info-bird-name">{bird.name}</p>
                            <hr />
                            <p className="info-bird-latin">{bird.species}</p>
                            <hr />
                            <audio src={bird.audio} controls className="info-audio-player"></audio>
                        </div>
                    </div>
                    <p className="description">{bird.description}</p>
                </div>
            )
        }
        return (
            <div>
                <p>Послушайте плеер и выберите птицу из списка</p>
            </div>

        )
    }
}

export default InfoBlock;