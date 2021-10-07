import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList, IonThumbnail } from "@ionic/react";
import { albumsOutline, funnel, heartOutline, list, swapVertical } from "ionicons/icons";
import { useState } from "react";
import "./GetirFood.css";
import resturants from '../../data/Resturants.json';


const GetirFood: React.FC = () => {
    const [isList, setList] = useState(true);
    const [isCard, setCard] = useState(false);

    const showList = (value: any) => {
        if (value === "LIST") {
            setList(true);
            setCard(false);
        } else {
            setList(false);
            setCard(true);
        }
    }
  

    return (
        <>
            <div className={"btns-food"}>
                <a className={"a-tag"}><IonIcon className={"icon"} icon={funnel}></IonIcon> Filters</a>
                <div className={"border-between"}></div>
                <a  className={"a-tag"}><IonIcon className={"icon"} icon={swapVertical}></IonIcon> Sorting</a>
            </div>
            <div>
                <div className={"list"}>
                    <IonItem color={"none"} lines={"none"}>
                        <IonLabel> <span className={"ionLabel"}>All Resturants (433)</span></IonLabel>
                        <IonButtons>
                            <IonButton slot={"end"}
                                onClick={e => showList("LIST")}>
                                <IonIcon icon={list} className={isList === false ? "icon-list-1" : "icon-list-2"}></IonIcon>
                            </IonButton>
                            <IonButton slot={"end"}
                                onClick={e => showList("CARD")}>
                                <IonIcon icon={albumsOutline} className={isCard === false ? "icon-list-1" : "icon-list-2"}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonItem>
                </div>
                <IonList>
                    {resturants.map((res) => (
                        <IonItem key={res.id}>
                            <div className={"res-item"}>
                                <IonThumbnail slot="start" className={"res-thumbnail"}>
                                    <img className={"res-img"} src={res.resturantPhoto} alt={"res"} />
                                    <img className={"res-camera"} src={res.smallCam} alt={"camera"} />
                                </IonThumbnail>
                            </div>
                            <IonLabel className={"res-label"}>
                                <h3>{res.resturantName}</h3>

                                <p className={"p-food"}> <img className={"res-courier"} src={res.courier} alt={"courier"} /> {res.leadTime} {res.least}</p>
                            </IonLabel>
                            <IonIcon className={"res-icon"} icon={heartOutline}></IonIcon>
                        </IonItem>
                    ))}

                </IonList>
            </div>
        </>
    );
};

export default GetirFood;
