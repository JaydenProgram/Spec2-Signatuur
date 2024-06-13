// src/components/MainPage.jsx
import React from 'react';
import book from '../assets/book.png';
import bookInfo from '../assets/bookInfo.png';
import Navbar from "./NavBar.jsx";

const SignatureBook = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-neutral-900 text-white p-8 min-h-screen">
                <h1 className="text-5xl">Signatuur Specialize-Me</h1>
                <hr className="my-4 border-gray-500" />
                <h2 className="text-4xl mb-4 max-w-xl">Hoe kijk ik terug?</h2>
                <div className="flex flex-col space-y-8">
                    <img src={bookInfo} alt="Second" className="w-1/2 h-auto" />
                    <p className="text-base">
                        <h1 className="text-xl mb-2">Waarom dit boek?</h1>
                        Mijn keuze voor het boek "Contagious: Why Things Catch On" was vooral ingegeven door mijn wens
                        om te begrijpen waarom sommige producten in dezelfde markt als het onze bestaan, maar niet allemaal
                        evenveel gebruikt worden. Bij ons project, een AI-reisplanner app waarbij betrouwbaarheid centraal
                        staat, was ik me al tijdens de eerste onderzoeken bewust van de aanwezigheid van concurrenten. Het
                        leek me daarom handig om dit boek te lezen, om twee redenen: ten eerste om ervoor te zorgen dat ik
                        en mijn team het product zo goed mogelijk konden verbeteren met behulp van inzichten uit het boek,
                        en ten tweede om te begrijpen waarom ons product mogelijk niet zou aanslaan bij onze doelgroep, of
                        zelfs helemaal niet gebruikt zou worden.
                    </p>
                    <p className="text-base">
                        <h1 className="text-xl mb-2">Wat heb ik geleerd van het boek?</h1>
                        <p className="text-base mt-4">
                            In het boek vond ik diverse inzichten over sociale valuta, waar ik nog niet eerder veel over had gehoord,
                            en over triggers die ook in een ander boek voorkwamen dat ik las (Hooked, van Nir Eyal). Ik kon bepaalde
                            concepten uit het boek toepassen op onze AI-reisplanner app. Aanvankelijk begreep ik niet goed wat sociale
                            valuta betekende; ik dacht op dat moment dat het te maken had met prijzen en hoe dat mensen beïnvloedt.
                            Later realiseerde ik me dat sociale valuta een belangrijk aspect is van ons product. Het concept draait om
                            het belonen van gebruikers voor hun interacties binnen de app of website. In onze app hebben we dit
                            geïmplementeerd door bewustwording te creëren rond CO2-uitstoot. Aanvankelijk wilden we alleen het percentage
                            verminderde CO2-uitstoot tonen, maar later besloten we om gebruikers te laten zien welke impact hun reizen
                            hadden op het milieu, bijvoorbeeld door te laten zien: "Je hebt deze week genoeg CO2-uitstoot verminderd om
                            het werk van 3 bomen te compenseren! 🌳". Dit heeft ook veel meer te maken met dit begrip.
                        </p>

                        <p className="text-base mt-4">
                            Triggers speelden ook een rol in ons product. We implementeerden pushmeldingen die gebruikers informeerden over
                            eventuele veranderingen in hun reis. Hoewel dit misschien niet de klassieke definitie van een trigger is zoals
                            beschreven in het boek, waren deze meldingen natuurlijk toch een soort trigger die ervoor zorgde dat gebruikers de
                            app openden en ermee bezig waren.
                        </p>

                        <p className="text-base mt-4">
                            Ons product is vooral praktisch, waarbij we ons hebben gericht op het toevoegen van functies die
                            daadwerkelijk het leven van de gebruikers verbeteren. De informatie is realtime en kan door de gebruiker
                            als een soort makkelijke chat binnengekregen worden, ook zitten er functies voor het berekenen
                            van CO2 uitstoot in deze app vergeleken met de auto. Deze CO2-berekeningen voegden een extra dimensie toe aan de
                            functionaliteit van de app, omdat ze niet alleen praktisch waren, maar ook een emotionele waarde hadden.
                            Zoals eerder uitgelegd, zorgt het ervoor dat mensen om bewuster na te denken over hun
                            reisgedrag, waardoor ze milieubewustere keuzes kunnen maken.
                        </p>

                    </p>
                    <div className="flex">
                        <img src={book} alt="Second" className="w-1/3 h-auto" />
                        <div className="flex-1 ml-4">
                            <p className="text-base">
                                <h1 className="text-xl mb-2">Wat had ik anders gedaan?</h1>
                                Het product heeft nu niet veel triggers. Meestal is de motivatie achter het
                                gebruik van een reisplanner gewoon de behoefte om een reis te plannen. Echter, één van de
                                doelen van ons team was om gebruikers bewuster te maken van het openbaar vervoer als alternatief
                                voor de auto. Daarom leek het mij een goed idee om bijvoorbeeld het logo van de app te koppelen
                                aan dit milieubewustzijn, zoals met afbeeldingen van bomen, zoals eerder besproken. Hierdoor
                                zouden gebruikers de app zien en er direct mee geassocieerd worden. Dit zou dus als een trigger
                                kunnen dienen, zoals uitgelegd in het boek, waardoor mensen de app gaan gebruiken.
                            </p>
                            <p className="text-base mt-4">
                                <h1 className="text-xl mb-2">Andere inspiratie?</h1>
                                Naast dit boek heb ik ook wat inspiratie opgedaan uit andere bronnen.
                                Ik heb opnieuw gekeken naar hoe mensen gewoonten vormen en hoe je dat kunt gebruiken om mensen
                                betrokken te houden bij je product, vooral door terug te kijken naar mijn boek van vorige TLE
                                en hoe ik deze heb gebruikt. Verder heb ik me voornamelijk gericht op standaard onderzoek
                                en het toepassen van lessen die ik heb geleerd. Bijvoorbeeld, ik heb inspiratie gehaald uit
                                de eerste les over onderzoek op een Sci-Fi manier, maar ook uit reguliere informatiebronnen
                                over het openbaar vervoer zelf.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignatureBook;
