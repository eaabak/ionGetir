import {
    IonCard,
    IonCol,
    IonGrid,
    IonImg,
    IonRow,
} from "@ionic/react";
import './Getir.css';
import categories from '../../data/Categories.json';


const Getir: React.FC = () => {

    return (
            <IonGrid className={"grid-getir"}>
                <IonRow>
                    { categories.map((item)=>(
                    <IonCol size={"3"} key={item.id}>
                        <IonCard className={"card-size"} mode={"md"}>
                            <IonImg className={"card-img"} src={item.image} alt={"photo"}></IonImg>
                        </IonCard>
                        <p className={"cat-p"}>{item.title}</p>
                    </IonCol>
                    ))}
                </IonRow>
            </IonGrid>

    );
};

export default Getir;
