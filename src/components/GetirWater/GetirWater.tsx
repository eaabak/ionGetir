import { IonButton, IonButtons, IonCard, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { add } from "ionicons/icons";
import './GetirWater.css';
import waters from '../../data/Waters.json';

const GetirWater: React.FC = () => {


    return (
        <div className={"ion-padding-top"}>
            <IonList lines={"none"}>
                {waters.map((water) => (
                    <div>

                        <IonItem style={{ paddingTop: "20px;" }}>

                            <IonCard className={"card-water"}>
                                <img src={water.waterPhoto} alt="Kuzeyden" />
                            </IonCard>
                            <IonButton className={"btn-water"} mode="md">
                                <IonIcon className={"icon-water"} icon={add}></IonIcon>
                            </IonButton>
                        </IonItem>

                        <IonLabel>
                            <h4 className={"h4-water"}>
                                {water.waterPrice}
                            </h4>
                            <p className={"p-water"}>{water.waterTitle}</p>
                        </IonLabel>
                    </div>
                ))}
            </IonList>
        </div>
    );
};

export default GetirWater;
