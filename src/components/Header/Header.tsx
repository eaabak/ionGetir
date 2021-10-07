import {IonHeader, IonLabel, IonTitle, IonToolbar} from "@ionic/react";
import './Header.css';

interface ContainerProps {
    headerName: string;
    headerType: string;
}

const Header: React.FC<ContainerProps> = ({headerName, headerType}) => {
    console.log(headerName + " " + headerType);
    return (
        <IonHeader>
            <IonToolbar className={"header"}>
                <IonTitle className={"title ion-text-center"}>
                    <IonLabel>getir</IonLabel>
                    {headerType === "GETIR" ? "" :
                        <IonLabel className={"label"}>{headerName}</IonLabel>
                    }
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
