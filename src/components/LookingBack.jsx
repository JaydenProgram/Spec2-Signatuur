// src/components/MainPage.jsx
import React from 'react';
import DriveImage from '../assets/DriveImage.png';
import LinesImage from '../assets/LinesImage.png';
import Poster from '../assets/Poster.png';
import SDGImage from '../assets/SDGImage.png';
import Navbar from "./NavBar.jsx";

const LookingBack = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-neutral-900 text-white p-8 min-h-screen">
                <h1 className="text-5xl">Signatuur Specialize-Me</h1>
                <hr className="my-4 border-gray-500" />
                <h2 className="text-4xl mb-4 max-w-xl">Hoe kijk ik terug?</h2>
                <div className="flex flex-col space-y-8">

                    <p className="text-base">
                        <h1 className="text-xl mb-2">Hoe kijk ik terug op het afgelopen jaar?</h1>
                        Als ik terugkijk op dit halfjaar, heb ik zeker hoogte- en dieptepunten ervaren.
                        Desondanks heb ik hier veel van geleerd en ben ik gegroeid. De grootste dieptepunten
                        of obstakels waren het voortdurende onderzoek en het onderzoeken op een andere manier dan
                        gebruikelijk. Hiermee bedoel ik dat ik nooit tevreden was met de informatie die ik had.
                        Aan het begin van de opdracht had ik hier geen last van; ik was snel "tevreden" zodat ik weer
                        verder kon met nieuwe taken. Later besefte ik echter dat dit niet werkte; ik had vaak te weinig
                        informatie of zelfs irrelevante gegevens. Daarom zorgde ik ervoor om hierop te letten en feedback
                        te blijven vragen over mijn informatie. Ook het onderzoeken op andere manieren was een uitdaging.
                        Aan het begin hadden we geleerd hoe je als Sci-Fi kunt onderzoeken, dit waren bepaalde methoden om
                        zelf ideeën te genereren. Voor mij was het moeilijk om hiermee iets te bedenken, vooral omdat ik er
                        niet genoeg tijd aan besteedde, net zoals bij het normale onderzoek. Later nam ik hier wel de tijd
                        voor en dit heeft echt geholpen.
                    </p>
                    <p className="text-base">
                        <h1 className="text-xl mb-2">Wat heb ik geleerd in het vakgebied?</h1>
                        Ik heb vooral veel geleerd over het uitvoeren en doen van gebruikerstests binnen het vakgebied.
                        Voor ons product heb ik me hierop gericht. Ik heb geleerd op welke aspecten gelet moet worden
                        bij deze tests, wat essentieel is voor een goede test en hoe de planning ervan verloopt. We hebben
                        meerdere keren tests uitgevoerd met gebruikers. In het begin wist ik er nog niet veel vanaf; ik
                        vertrouwde te veel op mijn aannames en dacht ook bij de tests dat ik wist wat de gebruikers prettig
                        zouden vinden, wat uiteindelijk niet klopte. Daarna ben ik gaan onderzoeken hoe ik veel meer kon testen
                        op de behoeften van mensen, en hierdoor ben ik echt gegroeid in mijn vaardigheden op dit gebied.
                    </p>
                    <div className="flex">
                        <img src={Poster} alt="Second" className="w-1/2 h-auto" />
                        <div className="flex-1 ml-4">
                            <p className="text-base">
                                <h1 className="text-xl mb-2">Wat onderscheidt mij?</h1>
                                Wat mij onderscheidt van andere onderzoekende technologen is mijn verlangen om voortdurend
                                nieuwe dingen te blijven leren. Mijn leergierigheid speelt hierbij een grote rol in mijn werk
                                als technoloog. Ik heb gemerkt dat deze eigenschap nog verder is ontwikkeld door taken uit te
                                voeren zoals het testen met gebruikers en het maken van persona's. Ik was altijd bereid om te
                                blijven experimenteren met nieuwe ideeën die door het team werden gegenereerd, en ik streefde
                                ernaar om voortdurend nieuwe informatie te vergaren om ons product verder te verbeteren. Deze
                                eigenschap helpt mij echt bij het vinden van waardevolle informatie waarmee mijn team verder kan.
                            </p>
                            <p className="text-base mt-4">
                                <h1 className="text-xl mb-2">Aanbeleving voor toekomst en vervolg in studie?</h1>
                                Voor de toekomst en bij andere projecten moet ik, net zoals bij Specialize Me, blijven letten
                                op het werken in een groep en het delen van alle bevindingen. Aan het begin vond ik dit nog
                                wat lastig bij bepaalde taken, waardoor er soms later in het proces nog veranderingen moesten
                                worden aangebracht aan het product die eigenlijk onnodig zouden zijn geweest als alles vanaf
                                het begin goed was gecommuniceerd. Verder zal ik mijn opgedane kennis van mijn rol in dit team
                                gebruiken in mijn toekomstige opdrachten. Dit varieert van eenvoudige zaken zoals bepaalde
                                zoekmethoden op internet met behulp van operators, tot de communicatie die nodig is om een
                                goede test uit te voeren met de doelgroep.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LookingBack;
