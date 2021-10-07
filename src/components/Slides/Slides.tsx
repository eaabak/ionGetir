import './Slides.css';
import {IonImg, IonSlide, IonSlides} from "@ionic/react";
import './Slides.css';

const Slides: React.FC = () => {
    const options = {
        loop: true,
        autoplay: true
    }
    const campSlides = [{
        id: 0,
        cdn: 'https://cdn.getir.com/misc/6156a42a7caca0ceac613ba9_banner_en_1633068107919.jpeg'
    }, {
        id: 1,
        cdn: 'https://cdn.getir.com/promos/6149a15bf1e82ea0f54fdcc9_banner_en_1632983823466.jpeg'
    }, {
        id: 2,
        cdn: 'https://cdn.getir.com/misc/61517f20003542a66ae9c317_banner_en_1632731098423.jpeg'
    }, {
        id: 3,
        cdn: 'https://cdn.getir.com/misc/6143be6dd92a5d430dadeef8_banner_en_1633036260939.jpeg'
    }]

    return (
        <div className={"slides"}>
            <IonSlides options={options}>
                {campSlides.map((item) => (
                    <IonSlide key={item.id}>
                        <IonImg
                            src={item.cdn}></IonImg>
                    </IonSlide>
                ))}
            </IonSlides>
        </div>
    );
};

export default Slides;
