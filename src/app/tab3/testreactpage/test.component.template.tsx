import React, { useRef, useState } from 'react';
import { FC } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonModal, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core';

type TestComponentProps = {
};

const TestReactComponent: FC<TestComponentProps> = ({ }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function confirm() {
        modal.current?.dismiss(input.current?.value, 'confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            setMessage(`Hello, ${ev.detail.data}!`);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inline Modal</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton id="open-modal" expand="block">
                    Open
                </IonButton>
                <p>{message}</p>
                <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                            </IonButtons>
                            <IonTitle>Welcome</IonTitle>
                            <IonButtons slot="end">
                                <IonButton strong={true} onClick={() => confirm()}>
                                    Confirm
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <IonItem>
                            <IonInput
                                label="Enter your name"
                                labelPlacement="stacked"
                                ref={input}
                                type="text"
                                placeholder="Your name"
                            />
                        </IonItem>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}
export default TestReactComponent;
