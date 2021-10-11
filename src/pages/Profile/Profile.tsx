import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import './Profile.css';
import Header from "../../components/Header/Header";
import { checkmarkCircle, chevronForward, person, location, heart, bagSharp, card, lockClosed, notifications, helpCircleOutline, logOutOutline, logOut } from 'ionicons/icons';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Header headerName={"Profile"} headerType={""} />
            <IonContent fullscreen className={"content"}>
                <IonList className={"prof-list"} lines={"none"}>
                    <IonItem>
                        <IonIcon slot={"start"} className={"prof-icon"} icon={person}></IonIcon>
                        <IonLabel><span className={"prof-name"}> E. Alan</span></IonLabel>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMyOCA1LjQyNTQ4TDguOTg2NzIgNi44NzgzM0w3LjEwMiA4LjA0Njg0QzYuNTMyMiA4LjQwMDcgNS42MDExMSA4LjQwMDcgNS4wMzEzOCA4LjA0Njg0TDIuOTM0ODggNi43NDY4NEwwLjgwNTIwOSA1LjQyNTQ3QzAuMzYyMzE1IDUuMTUwMTggMCA1LjM1NzU4IDAgNS44ODM1N1YxMS4wODQxQzAgMTEuODM3MyAwLjYwNjY2NyAxMi40NTI1IDEuMzQ4MTUgMTIuNDUyNUgxMC43ODU3QzExLjUyNjcgMTIuNDUyNSAxMi4xMzMzIDExLjgzNzMgMTIuMTMzMyAxMS4wODQ3VjUuODgzNTZDMTIuMTMzMyA1LjM1NzU2IDExLjc3MSA1LjE1MDE3IDExLjMyODEgNS40MjU0NUwxMS4zMjggNS40MjU0OFoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjA2NjY3IDcuNzY1MkM2LjM1NjMgNy43NjUyIDYuNjMxNzMgNy42OTY3OCA2LjgyMTMyIDcuNTc5NzFMMTAuNzg1NyA1LjExOTdWMS41MDQ2MUMxMC43ODU3IDAuNzUxOTc1IDEwLjE3OCAwLjEzNjcxOSA5LjQzNyAwLjEzNjcxOUgyLjY5NjI2QzEuOTU0NzcgMC4xMzY3MTkgMS4zNDg2MyAwLjc1MTk3NSAxLjM0ODYzIDEuNTA0NjFWNS4xMTk3TDUuMzEyNDYgNy41Nzk3MUM1LjUwMDk4IDcuNjk2NzggNS43NzY0MSA3Ljc2NTIgNi4wNjY1OSA3Ljc2NTJINi4wNjY2N1pNNC4wNDQ0NCAyLjE4ODM1SDguMDg4ODlDOC4yNzUzMSAyLjE4ODM1IDguNDI1OTMgMi4zNDE3NyA4LjQyNTkzIDIuNTMwOTlDOC40MjU5MyAyLjcyMDc1IDguMjc0NzggMi44NzM2MyA4LjA4ODg5IDIuODczNjNMNC4wNDQ0NCAyLjg3NDE3QzMuODU4NTUgMi44NzQxNyAzLjcwNzQxIDIuNzIwNzUgMy43MDc0MSAyLjUzMTUzQzMuNzA3NDEgMi4zNDE3NyAzLjg1ODU1IDIuMTg4MzYgNC4wNDQ0NCAyLjE4ODM1Wk00LjA0NDQ0IDQuMjQyMDdDMy44NTg1NSA0LjI0MjA3IDMuNzA3NDEgNC4zOTU0OCAzLjcwNzQxIDQuNTgzNjRDMy43MDc0MSA0Ljc3MzQgMy44NTg1NSA0LjkyNjgxIDQuMDQ0NDQgNC45MjY4MUw4LjA4ODg5IDQuOTI2MjhDOC4yNzQ3OCA0LjkyNjI4IDguNDI1OTMgNC43NzI4NiA4LjQyNTkzIDQuNTgzNjRDOC40MjU5MyA0LjM5NTQ4IDguMjc1MzEgNC4yNDIwNyA4LjA4ODg5IDQuMjQyMDdINC4wNDQ0NFoiIGZpbGw9IiM1RDM4QzAiLz4KPC9zdmc+Cg=="}></IonIcon>
                        <IonLabel> <span className={"span-prof"}> alan47m@gmail.com</span></IonLabel>
                        <IonIcon icon={checkmarkCircle} color={"success"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDAuNzEyMTY0QzAgMC4zMTk1NiAwLjMxNTQ5IDAgMC43MDI3ODggMEg5LjA2ODg5QzkuNDU5MjQgMCA5Ljc3Nzc4IDAuMzE5NTYgOS43Nzc3OCAwLjcxMjE2NFYyLjM5ODI0SDBWMC43MTIxNjRaTTMuNTI2MTcgMC43MzA0MjlDMy41MTE2NiAwLjcyOTY2OCAzLjQ5NzkxIDAuNzI5NjY4IDMuNDgzMzkgMC43MzA0MjlMMy40ODMzOCAwLjczMDQzN0MzLjI2NzIxIDAuNzQxODUxIDMuMTAyMjEgMC45MjU5NzkgMy4xMTM2NyAxLjE0MTMxQzMuMTI1ODkgMS4zNTU4NyAzLjMwOTk4IDEuNTIwOTggMy41MjYxNyAxLjUwOTU3SDYuMjUxODJDNi4zNTY0OCAxLjUxMTA5IDYuNDU3MzEgMS40NzA3NiA2LjUzMjE3IDEuMzk2OTZDNi42MDYyNyAxLjMyMzkyIDYuNjQ4MjggMS4yMjQyNCA2LjY0ODI4IDEuMTJDNi42NDgyOCAxLjAxNTc1IDYuNjA2MjcgMC45MTUzMjEgNi41MzIxNyAwLjg0MjI3N0M2LjQ1NzMxIDAuNzY5MjM0IDYuMzU2NDggMC43Mjg5MDcgNi4yNTE4MiAwLjczMDQyOUgzLjUyNjE3WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMCAzLjE3NTE3SDkuNzc3NzhWMTIuNDA5SDBWMy4xNzUxN1oiIGZpbGw9IiM1RDM4QzAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE0Ljg3NjVWMTMuMTkwNEg5Ljc3Nzc0VjE0Ljg3NjVDOS43Nzc3NCAxNS4yNjkxIDkuNDU5MiAxNS41ODI2IDkuMDY4ODUgMTUuNTgyNkgwLjcwMjc4OEMwLjMxNTQ5IDE1LjU4MjYgMCAxNS4yNjkxIDAgMTQuODc2NVpNNS41MTgzNCAxNC4zODk2QzUuNTE4MzQgMTQuMDQ2NCA1LjIzNDkyIDEzLjc2MjYgNC44ODg4OSAxMy43NjI2QzQuNTQyODMgMTMuNzYyNiA0LjI1OTQzIDE0LjA0NDkgNC4yNTk0MyAxNC4zODk2QzQuMjU5NDMgMTQuNzM0MiA0LjU0NDM4IDE1LjAxNjUgNC44ODg4OSAxNS4wMTY1QzUuMjM0MTggMTUuMDE2NSA1LjUxODM0IDE0LjczMzUgNS41MTgzNCAxNC4zODk2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8L3N2Zz4K"}></IonIcon>
                        <IonLabel><span className={"span-prof"}> +90 000 000 00 00</span></IonLabel>
                        <IonIcon icon={checkmarkCircle} color={"success"}></IonIcon>
                    </IonItem>
                </IonList>

                <IonList className={"prof-list"} lines={"none"}>
                    <IonItem>
                        <IonIcon slot={"start"} className={"icon-color-prof"} icon={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPgo8cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMCkiPgo8cGF0aCBkPSJNMTkuNjk0NiA3LjI0MTIxTDE0IDIzLjY1NUwyOCA3LjI0MTIxSDE5LjY5NDZaIiBmaWxsPSIjOUY4QkRBIi8+CjxwYXRoIGQ9Ik01Ljc5MzEgMEwwIDcuMjQxMzlIOC4zMDU0NUw1Ljc5MzEgMFoiIGZpbGw9IiM4Qjc0RDUiLz4KPHBhdGggZD0iTTE5LjY5NDUgNy4yNDEzOUgyNy45OTk5TDIyLjIwNjggMEwxOS42OTQ1IDcuMjQxMzlaIiBmaWxsPSIjOEI3NEQ1Ii8+CjxwYXRoIGQ9Ik0xOS42OTQ3IDcuMjQxMzlMMTQuMDAwMSAwTDguMzA1NTQgNy4yNDEzOUgxOS42OTQ3WiIgZmlsbD0iIzhCNzRENSIvPgo8cGF0aCBkPSJNMTMuOTk5OSAwSDUuNzkzMDNMOC4zMDUzNyA3LjI0MTM5TDEzLjk5OTkgMFoiIGZpbGw9IiNBODk0RTIiLz4KPHBhdGggZD0iTTIyLjIwNjkgMEgxNEwxOS42OTQ2IDcuMjQxMzlMMjIuMjA2OSAwWiIgZmlsbD0iI0EwOEJERSIvPgo8cGF0aCBkPSJNOC4zMDU1NCA3LjI0MTIxTDE0LjAwMDEgMjMuNjU1TDE5LjY5NDcgNy4yNDEyMUg4LjMwNTU0WiIgZmlsbD0iIzVEM0VCQyIvPgo8cGF0aCBkPSJNMCA3LjI0MTIxTDE0IDIzLjY1NUw4LjMwNTQ1IDcuMjQxMjFIMFoiIGZpbGw9IiM0NTMwODQiLz4KPC9nPgo8L3N2Zz4K"}></IonIcon>
                        <IonLabel><span> GetirFood Müdavim</span></IonLabel>
                            <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>

                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={location} className={"icon-color-prof"}></IonIcon>
                        <IonLabel> <span> My Addresses</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={heart} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Favourite Resturans</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={bagSharp} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Previous Orders</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>

                    <IonItem>
                        <IonIcon slot={"start"} icon={card} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Payment Options</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={lockClosed} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Change Password</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={notifications} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Communication Preferences</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon slot={"start"} icon={helpCircleOutline} className={"icon-color-prof"}></IonIcon>
                        <IonLabel><span> Support</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                    <div className={"div-bor"}></div>
                    <IonItem>
                        <IonIcon className={"icon-color-prof"} slot={"start"} icon={logOut}></IonIcon>
                        <IonLabel><span> Logout</span></IonLabel>
                        <IonIcon icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                    </IonItem>
                </IonList>

                <div className={"div-label"}>
                    <IonLabel>Language</IonLabel>
                </div>
                <IonItem lines="none" className={"prof-list"}>
                    <IonLabel><span>English</span></IonLabel>
                    <IonIcon slot={"end"} icon={chevronForward} className={"icon-color-prof"}></IonIcon>
                </IonItem>
                <div className={"div-label"}>
                    <IonLabel><span>Version</span></IonLabel>
                </div>
                <IonItem lines="none" className={"ion-padding-bottom"}>
                    <IonLabel>0.0.1</IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
