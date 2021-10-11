import {
    IonCol,
    IonContent,
    IonIcon,
    IonInput,
    IonLabel,
    IonPage,
    IonRow,
    IonSlide,
    IonSlides,
} from "@ionic/react";
import { mic, search, trashOutline } from "ionicons/icons";
import Header from "../../components/Header/Header";
import "./Search.css";
import labels from "../../data/CategoriesLabel.json";
import kitchens from "../../data/Kitchens.json";

const Search: React.FC = () => {
    const options = {
        slidesPerView: 5,
        spaceBetween: 5,
        freeMode: true
    }
    return (
        <IonPage>
            <Header headerName={"Search"} headerType={""} />
            <IonContent fullscreen className={"content"}>
                <div className={"div-search"}>
                    <IonIcon
                        className={"search-icon"}
                        slot={"start"}
                        icon={search}
                    ></IonIcon>
                    <IonInput
                        className={"search-input"}
                        placeholder={"What are you craving?"}
                    ></IonInput>
                    <IonIcon
                        className={"search-icon-mic"}
                        slot={"end"}
                        icon={mic}
                    ></IonIcon>
                </div>
                <div className={"div-label"}>
                    <IonLabel>Top Searches</IonLabel>
                    <IonIcon className={"trash-icon"} icon={trashOutline}></IonIcon>
                </div>
                <IonRow className={"c-row"}>
                    <div className={"div-labels"}>
                        {
                            labels.map((label) => (
                                <IonCol key={label.id}>
                                    <IonLabel className={"row-label"}>{label.labelName} </IonLabel>
                                </IonCol>
                            ))}

                    </div>
                </IonRow>
                <div className={"div-label"}>
                    <IonLabel>Cuisines</IonLabel>
                </div>
                <IonSlides options={options} className={"bg-slides"}>
                    {kitchens.map((kit) => (
                        <IonSlide key={kit.id}>
                            <img className={"slide-img"} src={kit.kitchenPhoto} alt="cuisines" />
                            <p className={"name-cui"}>{kit.kitchenName}</p>
                        </IonSlide>
                    ))}
                </IonSlides>
            </IonContent>
        </IonPage>
    );
};

export default Search;
