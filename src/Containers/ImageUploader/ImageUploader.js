import React from 'react';
import styles from './ImageUploader.module.css';

class ImageUploader extends React.Component {
    constructor(){
        super();
        this.state = {validUrl: true};
    }

    onInputChange = (event) => {
        let url = event.target.value;
        fetch(url)
        .then(res => {
            console.log(res);
        })
    } 

    onButtonClick = (event) => {
        console.log("UPLOAD not implemented");
    }

    render(){
        return (
            <div className={styles.container}>
                <div className={styles.mainTitle}>
                        Enter a URL or upload a photo from your device. The site me require some time to 
                        load the photo from a url so please be patient!
                </div>
                <div className={styles.main} >
                    <input
                        type='text' 
                        placeholder='Enter a URL'
                        className={styles.input}
                        onChange={this.onInputChange}
                    ></input>
                    <div className={styles.uploadContainer}>
                        <div className={styles.title}>
                            Or upload a photo
                        </div>
                        
                        <div className={styles.svgHolder}>
                            <img 
                                src='/image-enhancer/assets/svg/image-upload-undraw.svg' 
                                width='100%' 
                                alt='illustration'
                            />
                        </div>
                        <div className={styles.uploadButtonContainer}>
                            <button 
                                className={styles.uploadButton}
                                onClick={this.onButtonClick}
                            >UPLOAD</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;