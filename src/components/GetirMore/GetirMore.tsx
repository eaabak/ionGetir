import {
    IonCard,
    IonCol,
    IonGrid,
    IonImg,
    IonLabel,
    IonRow,
} from "@ionic/react";
import './GetirMore.css';
import categories from '../../data/Categories.json';


const GetirMore: React.FC = () => {

    return (
            <IonGrid className={"grid-more"}>
                <IonRow>
                    { categories.map((item)=>(
                    <IonCol size={"6"} key={item.id}>
                        <IonCard className={"card-more"} mode={"md"}>
                            <IonImg className={"card-img-more"} src={item.image} alt={"photo"}></IonImg>
                            <IonLabel>
                                <h3>{item.title}</h3>
                                <p className={"p-more"}>{item.productCount}</p>
                            </IonLabel>
                        </IonCard>
                    </IonCol>
                    ))}
                </IonRow>
            </IonGrid>

    );
};

export default GetirMore;
