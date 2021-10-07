import {IonButton, IonButtons, IonHeader, IonIcon, IonText, IonToolbar} from "@ionic/react";
import './Address.css';
import {chevronForwardOutline} from 'ionicons/icons';

const Address: React.FC = () => {
    return (
        <div className={"bg-color"}>

            <IonHeader>
                <div className={"eta"}>
                    <IonText className={"eta-1"}>ETA</IonText>
                </div>
                <div className={"time"}>
                    <IonText className={"min-1"}>10<IonText className={"min-2"}>min</IonText></IonText>
                </div>
                <IonToolbar className={"toolbar"}>

                    <IonButtons slot={"start"}>
                        <IonButton>
                            <IonIcon src={"https://cdn.getir.com/address-emojies/House.svg"}></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <div className={"border"}></div>
                    <span>Home</span>
                    <span className={"spn-address"}>Your address...</span>
                    <IonButtons slot={"end"}>
                        <IonButton>
                            <IonIcon icon={chevronForwardOutline}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        </div>
    );
};

export default Address;
