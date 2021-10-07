import {IonContent, IonPage} from '@ionic/react';
import Header from "../../components/Header/Header";
import './Search.css';

const Search: React.FC = () => {
    return (
        <IonPage>
            <Header headerName={""} headerType={""}/>
            <IonContent fullscreen>
            </IonContent>
        </IonPage>
    );
};

export default Search;
