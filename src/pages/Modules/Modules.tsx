import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Header from "../../components/Header/Header";
import './Modules.css';

const Modules: React.FC = () => {
    return (
        <IonPage>
            <Header headerName={""} headerType={""}/>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Modules;
