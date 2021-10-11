import { IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonIcon, IonImg, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import './Campaigns.css';
import Header from "../../components/Header/Header";
import { add, chevronForward } from 'ionicons/icons';
import campaigns from '../../data/Campaigns.json';

const Campaings: React.FC = () => {
    return (
        <IonPage>
            <Header headerName={"getir"} headerType={"GETIR"} />
            <IonContent fullscreen className={"content"}>
                <IonSegment className={"cam-segment"} mode={"md"}>
                    <IonSegmentButton value="promotions" className={"cam-segemnt-btn"}>
                        <IonLabel>Promotions</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="announcements" className={"cam-segemnt-btn"}>
                        <IonLabel>Announcements</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                <IonCard className={"cam-card"}>
                    <IonCardContent>
                        <IonButton color={"light"}>
                            <IonIcon className={"cam-icon"} icon={add}></IonIcon>
                        </IonButton>
                        <IonLabel><span className={"cam-span"}> Add Promotion Code</span></IonLabel>
                    </IonCardContent>
                </IonCard>
                {
                    campaigns.map((cam) => (
                        <IonCard className={"cam-card"}>
                            <IonImg src={cam.camPhoto}></IonImg>
                            <IonCardHeader className={"cam-card-header"}>
                                {cam.camHeader}
                            </IonCardHeader>
                            <IonCardContent>
                                <span>{cam.camContent}</span> 
                            </IonCardContent>
                            <IonButton slot={"end"}>
                                    <IonIcon icon={chevronForward} />
                                </IonButton>
                        </IonCard>
                    ))}
            </IonContent>
        </IonPage>
    );
};

export default Campaings;
