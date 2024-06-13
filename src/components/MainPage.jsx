// src/components/MainPage.jsx
import React from 'react';
import DriveImage from '../assets/DriveImage.png'
import LinesImage from '../assets/LinesImage.png'
import Poster from '../assets/Poster.png'
import SDGImage from '../assets/SDGImage.png'
import NavBar from "./NavBar.jsx";

const MainPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="bg-neutral-900 text-white p-8 min-h-screen">
                <h1 className="text-5xl">Signatuur Specialize-Me</h1>
                <hr className="my-4 border-gray-500" />
                <h2 className="text-4xl mb-4 max-w-xl">Waarom onderzoekende technoloog?</h2>
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-1">
                        <img src={SDGImage} alt="First" className="w-1/2 h-auto mr-4"/>
                        <div className="flex-1">
                            <p className="text-base">
                                Ik heb voor de richting van onderzoekende technoloog gekozen omdat dit mij het meest
                                interessant leek in het kader van het werken aan start-ups. Dit was voornamelijk omdat
                                het onderzoeken van de doelgroep en ideeën in het project bijna het belangrijkst is om
                                een goede start-up te hebben. Ik heb gemerkt dat ik veel heb geleerd, niet alleen over
                                het uitvoeren van onderzoek op internet zoals ik aan het begin dacht dat ik alleen maar
                                zou leren, maar ook over het opstellen van persona's, testplannen en andere hulpmiddelen.
                            </p>
                            <p className="pt-4">
                                Aan het begin van deze Specialize-Me verwachtte ik dat ik al redelijk veel zou weten.
                                Voor elke opdracht die we nu uitvoeren, doen we ook al onderzoek, dus ik dacht dat ik al
                                redelijk wat ervaring had. Toch heb ik veel geleerd over de manieren van werken als
                                onderzoekende technoloog in een team. Ik merk dat ik meer als team werk, bijvoorbeeld door
                                alles wat ik online vind te delen en hier feedback op te vragen, zodat ik weer terug kan
                                gaan en nog meer informatie kan vinden of betere informatie kan vinden.
                            </p>
                        </div>

                    </div>

                    <div className="flex">
                        <div className="flex-1">

                            <p className="pt-4">
                                Mijn doel dat ik had opgesteld, was om deze keer goed op te letten dat ik niet te veel op
                                mezelf zou focussen, vooral niet als het team goed op schema ligt en alles op school ook
                                redelijk makkelijk gaat. Mijn vorige Specialize-Me verliep wat moeilijker voor mij, omdat
                                ik mezelf er niet toe kon brengen om te blijven communiceren met de doelgroep en het team.
                                Daarom was het nu voor mij een doel om hier verbetering in te brengen. Volgens feedback van
                                het team en mijn zelfevaluatie heb ik dit doel wel behaald. De belangrijkste dingen die ik
                                deed om dit te behalen, waren het blijven vragen naar feedback over de bevindingen van de
                                doelgroep. Als ik bijvoorbeeld een interview had afgenomen of informatie van de doelgroep
                                had ontvangen, zorgde ik er altijd voor dat ik eerst bij mijn team langsging om te controleren
                                of ik dit kon gebruiken of dat ik het moest verbeteren.
                            </p>
                        </div>
                        <img src={DriveImage} alt="Second" className="w-1/2 h-auto ml-4" />
                    </div>

                </div>
            </div>
        </>

    );
};

export default MainPage;
