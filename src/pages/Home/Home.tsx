import { IonButton, IonContent, IonLabel, IonPage } from '@ionic/react';
import Header from "../../components/Header/Header";
import Address from "../../components/address/Address";
import Slides from "../../components/Slides/Slides";
import Getir from "../../components/Getir/Getir";
import { useState } from "react";
import './Home.css';
import GetirFood from "../../components/GetirFood/GetirFood";
import GetirMore from '../../components/GetirMore/GetirMore';
import GetirWater from '../../components/GetirWater/GetirWater';

const Home: React.FC = () => {

    const [getir, setGetir] = useState(true);
    const [getirFood, setGetirFood] = useState(false);
    const [getirMore, setGetirMore] = useState(false);
    const [getirWater, setGetirWater] = useState(false);
    const [headerName, setHeaderName] = useState("getir");
    const [headerType, setheaderType] = useState("GETIR");


    const whichGetir = (obje: any) => {
        setHeaderName(obje.header);
        setheaderType(obje.type);
        setGetir(obje.cGetir);
        setGetirFood(obje.food);
        setGetirMore(obje.more);
        setGetirWater(obje.water);
    }
 
    return (
        <IonPage>
            <Header headerName={headerName} headerType={headerType} />
            <IonContent fullscreen className={"content"}>
                <Address />
                <Slides />
                <div className={"btns"}>
                    <IonButton className={getir === true ? "btn-1" : "btn-2"} mode={"ios"}
                        onClick={e => whichGetir({ type: "GETIR", cGetir: true, food: false, more: false, water: false, header: "getir" })}>
                        {getir === true ?
                            <IonLabel className={"txt"}>
                                getir
                            </IonLabel>
                            :
                            <p className={"p-tag"}>getir</p>
                        }
                    </IonButton>
                    <IonButton className={getirFood === true ? "btn-1" : "btn-2"} mode={"ios"}
                        onClick={e => whichGetir({ type: "GETIR_FOOD", cGetir: false, food: true, more: false, water: false, header: "food" })}>
                        {getirFood === true ?
                            <IonLabel className={"txt"}>
                                getir<IonLabel className={"txt-color"}>food</IonLabel>
                            </IonLabel>
                            :
                            <p className={"p-tag"}>getirfood</p>
                        }
                    </IonButton>
                    <IonButton className={getirMore === true ? "btn-1" : "btn-2"} mode={"ios"}
                        onClick={e => whichGetir({ type: "GETIR_MORE", cGetir: false, food: false, more: true, water: false, header: "more" })}>
                        {getirMore === true ?
                            <IonLabel className={"txt"}>
                                getir<IonLabel className={"txt-color"}>more</IonLabel>
                            </IonLabel>
                            :
                            <p className={"p-tag"}>getirmore</p>
                        }
                    </IonButton>
                    <IonButton className={getirWater === true ? "btn-1" : "btn-2"} mode={"ios"}
                        onClick={e => whichGetir({ type: "GETIR_WATER", cGetir: false, food: false, more: false, water: true, header: "water" })}>
                        {getirWater === true ?
                            <IonLabel className={"txt"}>
                                getir<IonLabel className={"txt-color"}>water</IonLabel>
                            </IonLabel>
                            :
                            <p className={"p-tag"}>getirwater</p>

                        }
                    </IonButton>
                </div>
                {getir === true ? <Getir /> : ""}
                {getirFood === true ? <GetirFood /> : ""}
                {getirMore === true ? <GetirMore /> : ""}
                {getirWater === true ? <GetirWater /> : ""}

            </IonContent>
        </IonPage>
    );
};

export default Home;
