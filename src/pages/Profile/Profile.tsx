import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Profile.css';
import Header from "../../components/Header/Header";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Header headerName={""} headerType={""}/>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
