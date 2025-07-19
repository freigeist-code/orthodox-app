const prayerChunks = {
    morning: {
      0: `<strong>Opening Prayers</strong>
In the name of the Father, and of the Son, and of the Holy Spirit. Amen. (<i>metania</i>)

Heavenly King, Comforter, Spirit of Truth, present everywhere and filling all things, Treasury of blessings and Giver of life, come and abide in us, cleanse us from every impurity, and save our souls, O Good One.

Holy God, Holy Mighty, Holy Immortal, have mercy on us. (<i>3x with metanias</i>)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen. (<i>metania</i>)

O Most-Holy Trinity, have mercy on us. Lord, cleanse us from our sins. Master, pardon our transgressions. Holy One, visit and heal our infirmities for Thy name's sake.

Lord have mercy. (<i>3x</i>)

Glory to the Father, and to the Son, and to the Holy Spirit, now and ever and unto ages of ages. Amen. (<i>metania</i>)

<strong>The Lord's Prayer</strong>
Our Father, who art in Heaven, hallowed be Thy Name. Thy Kingdom come, Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen. (<i>3x metanias</i>)
`, // Sunday
      1: `Lord Jesus Christ, Son of the living God, You offered Your life on the cross to take away the sins of the world. Receive me, a sinner, and hear my prayer of repentance. I acknowledge my sins and transgressions, voluntary and involuntary, known and unknown. I firmly resolve, with the help of Your grace, to turn away from my sins and to amend my life according to Your teachings. Help me to walk in the way of the righteous and to offer praise to Your glorious name forever. (<i>prostration</i>)

Grant me thorough repentance and a diligent heart to seek You. Grant me Your grace, and renew in me the image of Your likeness. I have forsaken You—do not forsake me! Come out to seek me; lead me to Your pasture and number me among the sheep of Your chosen flock. (<i>prostration</i>)
`, // Monday
      2: `<strong>Purification Prayers</strong>
<strong>Prayer Against Defilement (St. Basil):</strong>
O all-merciful, incorrupt, pure, undefiled, only sinless Lord, cleanse me, Thy useless servant, from all defilement of body and soul, and from this impurity which hath happened to me because of my carelessness and indifference, together with all mine other iniquities. Purify me of every stain by the grace of Thy Christ; sanctify me by sending down Thy Holy Spirit, so that rising up from the fog of mine impurities and the fantasies of the devil and from every diabolical defilement, I might be made worthy in pure conscience to open my foul and polluted mouth to praise Thine all-holy Name. (<i>prostration</i>)

<strong>Prayer Against Lust:</strong>
Grant unto me Thy hand in help, who am sunk in the pit of pleasures, and do not abandon me, O Lord, Thy servant, to be destroyed by mine iniquities and my sins. Rather, in Thy usual goodness, deliver me from the pollution and the stain of my flesh and from my passionate thoughts which in every way defile my miserable soul. (<i>prostration</i>)
`, // Tuesday
        3: `<strong>Prayer to St. George the Dragon Slayer and Great-Martyr</strong>
O holy and victorious Great-Martyr George, valiant champion of the Faith and invincible martyr, you were favored by God with the gift of faith and inflamed with an ardent love for Christ. You fought valiantly against the dragon of pride, falsehood, and deceit, neither pain nor torture, sword nor death could part you from the love of Christ.
Intercede for us in our spiritual battles: defend us against the forces of evil, the snares of the devil, and the temptations that threaten our souls. By your powerful intercession, protect us from every assault of the enemy, that we may bravely bear our cross and remain steadfast in the Orthodox faith.
O St. George, help us to overcome the dragons of sin and despair in our lives, and to be faithful witnesses to Christ, ready to defend the truth with courage and humility.
Valiant champion of the Faith, assist us in the combat against evil, that we may win the crown promised to those who persevere unto the end.
St. George, dragon-slayer and defender of the Church, pray for us! (<i>Metania</i>)

<strong>Prayer to St. Marina the Vanquisher of Demons</strong>
O holy and glorious Great-Martyr Marina, steadfast bride of Christ and vanquisher of demons, you trampled upon the strength of the enemy through the power of the Cross. When the evil one appeared to you in the form of a dragon to frighten and torment you, you seized him by the hair and beat him with a hammer, utterly humbling him by your faith and courage.
You endured torments, wounds, and prison, but the Archangel Michael comforted and healed you, and you shamed the idols of the faithless. O speedy dispeller of demons, healer of the suffering, and destroyer of the enemy, intercede for us who are beset by temptations and spiritual afflictions.
Grant us strength to resist the assaults of the evil one, healing for our souls and bodies, and courage to confess Christ boldly. O all-spotless martyr, guide us by your prayers to victory over every demonic power, and lead us to the joy of the heavenly Kingdom.
St. Marina, hammerer of demons and protector of the faithful, pray for us! (<i>Metania</i>)
`, // Wednesday
      4: `<strong>Prayer for the Conversion of Family and Loved Ones</strong>
O Lord, Lover of mankind, You desire that all should be saved and come to the knowledge of the truth. With faith and hope I entreat You:
Enlighten the hearts of my family with the light of Your holy Resurrection. Draw them to Yourself, O Christ our God, by the prayers of Your Most-Pure Mother and all Your saints. Soften that which is hardened, heal that which is broken, and open the way of salvation for them. Grant me patience, humility, and love to be a living witness of Your mercy and truth.
(<i>Metania</i>)

O glorious patriarch St. Joseph, who merited to be called “just” by the Holy Spirit, I urgently recommend to you the souls of my entire family, which Jesus redeemed at the price of His Precious Blood. Permit not, I beseech thee, that a soul so dear to me should continue any longer in its evil ways; touch the heart of the prodigal and conduct them back to the bosom of the fondest of fathers. Abandon them not, I implore thee, till thou hast opened to them the gates of the heavenly city, where they will praise and bless thee throughout eternity for the happiness which they will owe to thy powerful intercession. Amen.
`, // Thursday
      5: `<strong>Prayers to the Holy Apostles</strong>

O Almighty Master, Lord our God, who chose Your beloved Disciples and Apostles for the preaching of salvation to the whole world, and gave them power to loose sins: accept their intercessions for the human race, which You will judge with them. Though we are unworthy, we make bold to ask them to make entreaty for us, as Your friends and most honorable in our sight; for much availeth the prayer of the righteous for our souls' salvation. (<i>Metania</i>)

Ye holy Chief Apostles, Peter and Paul, Evangelists of Christ John the Theologian and Matthew, Andrew the First-Called who implanted the Cross as a blessing in Russia; ye holy Apostles James the Brother of the Lord, with the other James; Philip, Bartholomew, Thomas, Simon, Jude, and Matthias!
All ye holy Apostles, chosen of God, especially pleasing unto Christ, who rooted out godlessness and planted the True Faith:
Help us by your powerful intercession before the Lord, that we may be delivered from every evil and wile of the enemy; that we may be firm in keeping the Orthodox Faith committed unto you; that by your prayers, we may not be lessened through wounds, nor curses, nor widespread mortality, nor by any wrath separated from our Creator; but living a peaceful life here, may be found worthy to see the good things in the Land of the Living, glorifying the Father, and the Son, and the Holy Spirit, now and ever, and unto ages of ages. Amen. (<i>Metania</i>)

O Holy Apostles, pillars of the Church,
who left all and followed Christ,
who preached to the nations and suffered for the Truth,
intercede for the strength of Orthodoxy,
for the conversion of new peoples and lands,
and for the return of the West to the fullness of the faith.
By your prayers, may the world be enlightened,
the Church united, and the Gospel proclaimed in every land.
Apostles of our Lord, pray for us! (<i>Metania</i>)
`, // Friday
      6: `<strong>Missionary and Western Saints Intercessions</strong>

<strong>St. Genevieve of Paris</strong>
O holy and venerable Genevieve, shepherdess and guardian of Paris, you protected your flock from the horde of wolves and the Scourge of God, and became the refuge of your city in times of siege and famine. You shone with faith, prayer, and fasting, turning away disaster by your intercession, and strengthening the people in Orthodoxy and good works.
O wonderworking mother, who converted hearts and defended the Church in Gaul, pray for us and for all the lands of the West, that Christ may bring them back to the fullness of the Orthodox faith. Inspire courage, fortitude, and zeal for holiness in us. Intercede for the conversion of our cities and peoples, and for the protection of all who seek God’s mercy. Grant that, through your prayers, we may be steadfast in faith, bold in witness, and gentle in love, so that the light of Christ may shine anew in our land.
St. Genevieve, protector of Paris and pillar of Orthodoxy, pray for us and for the conversion of the West! (<i>Metania</i>)

<strong>St. Patrick of Ireland</strong>
O holy Patrick, Enlightener of Ireland, who arose each day in the strength of the Holy Trinity and brought the light of Christ to a pagan land, pray for us. Teach us to arise today through faith, courage, and the invocation of the Trinity. Intercede for the conversion of all nations and the return of the West to the Orthodox faith.
St. Patrick, pray for us! (<i>Metania</i>)

<strong>St. Brigid of Kildare</strong>
O Brigid, Mary of the Gael, you spread your mantle of protection over Ireland, shining light in darkness and strengthening the weak. Pray for us, that our faith and hope may never cease, and that we may do God’s will each day. Intercede for the conversion of the nations and for the healing of our land.
St. Brigid, pray for us! (<i>Metania</i>)

<strong>St. Boniface, Apostle to the Germans</strong>
O holy Boniface, great missionary and martyr, you brought the Gospel to the Germanic peoples, planting the Church where there was darkness and idolatry. You gave your life for Christ, felling the sacred oak and building the house of God. Strengthen us to proclaim the Gospel with courage and clarity. Pray for the conversion of all Europe and the return of the West to the true faith. Intercede for all missionaries, that their work may bear fruit for the glory of God and the salvation of souls.
St. Boniface, fearless apostle and martyr, pray for us and for the conversion of the nations! (<i>Metania</i>)

<strong>St. Aidan & St. Cuthbert of Lindisfarne</strong>
O holy Aidan, gentle bishop and missionary, and Cuthbert, wonderworker of Lindisfarne, you spread the light of Orthodoxy in the British Isles, teaching peace, humility, and love for all. Pray for us, that we may follow your example in prayer and service, and that the Orthodox faith may flourish again in the lands of the North.
Saints Aidan and Cuthbert, pray for us! (<i>Metania</i>)

<strong>St. Bede the Venerable</strong>
O Bede, wise teacher and historian, who preserved the memory of the saints and chronicled the faith of the English Church, pray for us. May we be diligent in learning, steadfast in faith, and zealous in passing on the Orthodox tradition to all peoples.
St. Bede, pray for us! (<i>Metania</i>)

<strong>St. Edward the Martyr & St. Alfred the Great</strong>
O Edward, righteous martyr-king, and Alfred, wise and just ruler, you defended the faith and governed with righteousness. Pray for us, that we may serve Christ in humility and truth, and that our leaders may be guided by the wisdom of God.
Saints Edward and Alfred, pray for us! (<i>Metania</i>)

<strong>St. Alfred the Great Prayer for the USA (Fr. Christopher of Holy Apostles Church in Beltsville, Maryland)</strong>
O holy right-believing Alfred, great king of Wessex and father of the English nation, hear our supplication.
Thou hast shown us an indelible example of courage and faith in the marshes of Æthelney, when all England was suffering the depredation of the heathen Danes. Thou didst build up the defenses of thy kingdom as thou didst also strive to increase the Christian Faith in thy kingly heart, showing an example of true wisdom to friend and foe alike; enlightening thy people, showing mercy to thy vanquished foes, wisely preparing for war, but striving always for a holy peace.
Thou didst love learning and render into English many holy books, sending them out to all thy people, raising up their minds and hearts in the light of true knowledge. Thou didst renew the ancient laws of England, becoming a new Justinian, showing an example of the righteous judgement required by God of all who are in seats of power.
We, thy spiritual children in America, ask now thy strong intercession before the King of kings; help us in our time of trouble. Be like Elijah and grant us a double portion of thy spirit that thirsted after these virtues of courage, faith, steadfastness in the face of uncertainty and fear, the love of the Lord that bringeth holy wisdom, and righteous and merciful judgement in the fear of God.
O Alfred, wise king, do thou entreat Him to guide us steadily, as He guided thee, and to grant order, justice, peace, and tranquility to our native land.
In the name of the Father to Whom thou drawest nearer every day, the Son Whose love thou didst teach to all, and the Holy Spirit Who fillest thy heart, now and ever and unto the ages of ages. Amen. (<i>Metania</i>)

<strong>St. Clotilde & St. Ita</strong>
O holy Clotilde, queen and mother, by whose prayers the Franks were brought to Christ, and Ita, foster-mother of saints, pray for us, that families and nations may be sanctified and led to the fullness of the faith.
Saints Clotilde and Ita, pray for us! (<i>Metania</i>)

<strong>St. Martin of Tours & St. Vincent of Lérins</strong>
O Martin, soldier turned bishop, who clothed the poor and preached peace, and Vincent, defender of the Orthodox faith in Gaul, pray for us, that we may be generous in charity and steadfast in the truth.
Saints Martin and Vincent, pray for us! (<i>Metania</i>)

<strong>St. Ansgar, Apostle of the North</strong>
O Ansgar, tireless missionary to Scandinavia, who endured hardship for the sake of Christ, pray for us and for the conversion of all lands yet in darkness.
St. Ansgar, pray for us! (<i>Metania</i>)

<strong>Combined Orthodox Prayer for the Renewal of England, Ireland, Germany, and the Czech Lands</strong>
<strong>For England:</strong>
Saint Alban, Protomartyr of Britain, who shed his blood for Christ at Verulamium, pray for us!
Saint Cuthbert of Lindisfarne, wonderworker and shepherd of Northumbria, pray for us!
Saint Bede the Venerable, scholar and chronicler of the Church’s light in England, pray for us!
(...and all saints of the English lands: Augustine of Canterbury, Hilda of Whitby, Edmund the Martyr, and those who kept the faith in the green isles, pray for us and for the theosis of the Anglo-Saxons!)

<strong>For Ireland:</strong>
Saint Patrick, Enlightener of Ireland and captor of serpents, pray for us!
Saint Brigid of Kildare, mother of monastics and guardian of the sacred flame, pray for us!
Saint Columba, apostle to the Picts and founder of Iona, pray for us!
(...and all saints of the Irish lands: Kevin of Glendalough, Ita of Killeedy, Brendan the Voyager, and the cloud of witnesses who hallowed Erin, pray for us and for the theosis of the Celts and Gaels!)

<strong>For Germany:</strong>
Saint Boniface, Apostle to the Germans and martyr of Frisia, pray for us!
Saint Kilian, missionary bishop and martyr of Würzburg, pray for us!
Saint Rupert of Salzburg, enlightener of Bavaria and Austria, pray for us!
(...and all saints of the German lands: Afra of Augsburg, Walpurga of Heidenheim, Alexander Schmorell the New Martyr, and those who shone in the heart of Europe, pray for us and for the theosis of the Germanics!)

<strong>For the Czech Lands:</strong>
Saints Cyril and Methodius, Equal-to-the-Apostles, who brought the Slavonic Word, pray for us!
Saint Ludmila, grandmother of saints and first martyr of Bohemia, pray for us!
Saint Wenceslaus, prince and passion-bearer, defender of the poor, pray for us!
(...and all saints of the Czech lands: Procopius of Sázava, Gorazd of Prague, and the new martyrs who witnessed in times of trial, pray for us and for the theosis of the Czech!)

O Lord Jesus Christ, Light of the Nations and Shepherd of Souls,
look with mercy upon the lands of England, Ireland, Germany, and the Czech peoples,
once radiant with the faith of Thy saints and now thirsting for renewal.
Through the prayers of Thy holy ones:
Alban, Cuthbert, and Bede;
Patrick, Brigid, and Columba;
Boniface, Kilian, and Rupert;
Cyril, Methodius, Ludmila, and Wenceslaus—
and all the saints who hallowed these nations,
grant repentance, unity, and courage to Thy people.
Restore in their hearts a love for the fullness of the Orthodox faith.
By the labors of Thy saints, heal the wounds of schism and secular pride,
and let the light of Thy Truth shine anew in these lands.
For Thou art the Resurrection and the Life,
and to Thee do we ascribe glory,
together with Thy Father who is without beginning,
and Thine all-holy, good, and life-creating Spirit,
now and ever, and unto ages of ages. Amen.

<strong>Troparion (Tone 4)</strong>
O saints of England, Ireland, Germany, and Czech lands,
you bridged the divide between heaven and earth.
Pray to Christ our God to grant us peace,
and to restore His Church in the West!

<strong>Final Intercessions</strong>
Holy Alban, Patrick, Boniface, and Cyril, pray to God for us!
All saints of these lands, intercede for our salvation!
`  // Saturday
    },
    evening: {
      0: `<strong>Repentance Prayers</strong>
O Lord my God, I have done nothing good in Your sight, but I entreat You to grant me true repentance and a merciful heart. Give me a contrite spirit and poverty of thought. Grant me sincere confession of my sins. Lord, grant me humility, deliverance from my own will, and obedience. Grant me patience, forbearance, and meekness. Implant in me Your holy fear, the source of all blessings. Lord, enable me to love You with all my heart, my soul, and my strength, and to love my neighbor as myself. By Your mercy, O Lord, protect me from all evil and save my wretched soul. (<i>prostration</i>)

O Lord my God, I confess that I have sinned against You in thought, word and deed. I have also omitted to do what Your holy law requires of me. But now with repentance and contrition I turn again to Your love and mercy. I entreat You to forgive me all my transgressions and to cleanse me from all my sins. Lord, fill my heart with the light of Your truth. Strengthen my will by Your grace. Teach me both to desire and to do only what pleases You. (<i>prostration</i>)
`, // Sunday
      1: `<strong>Prayers for Deliverance from Lust</strong>
(<i>3x metanias, saying: O God, cleanse me a sinner.</i>)

O Lord Jesus Christ, my God and Savior, I come before You in humility and contrition, confessing my weakness and my sin. I have fallen again into the slavery of lust, and I grieve over my failure to keep my heart pure before You. Forgive me, O Merciful One, for I have defiled the temple of my soul with thoughts and actions unworthy of Your holiness. (<i>prostration</i>)

O Lord, You know my struggles and the temptations that assail me. You know how weak I am without Your grace. Have mercy on me, O Lover of Mankind, and strengthen me to resist the passions that war against my soul. Grant me purity of heart and mind, that I may glorify You in all that I think, say, and do. (<i>prostration</i>)

O Holy Spirit, Comforter and Guide, fill me with Your grace and drive away every impure thought from my mind. Cleanse me from all defilement and renew within me a steadfast spirit. Help me to flee from temptation as Joseph fled from sin in Egypt. Teach me to guard my eyes, my thoughts, and my heart so that I may live in holiness. (<i>prostration</i>)

O Most-Holy Theotokos, pure Mother of God, intercede for me before your Son. Help me to imitate your purity and obedience to God's will. Cover me with your holy protection and deliver me from every assault of the evil one. (<i>3x metanias, saying: Most-Holy Theotokos, save us!</i>)

O Lord Jesus Christ, by Your Cross You have destroyed the power of sin. By Your Resurrection You have granted life to those in darkness. Raise me up from this pit of despair and grant me victory over the passions. Help me to love You above all things and to seek Your Kingdom first in my life. For You are holy, O Christ our God, and to You we give glory, together with Your eternal Father and Your all-holy, good, and life-giving Spirit, now and ever and unto ages of ages. Amen. (<i>prostration</i>)
`, // Monday
      2: `<strong>Spiritual Warfare Prayers</strong>
<strong>Prayer for Protection Against Evil:</strong>
Almighty God, Who delivered Your people from the bondage of the adversary, and through Your Son cast down Satan like lightning, deliver me also from every influence of unclean spirits. Command Satan to depart far from me by the power of Your only begotten Son. Rescue me from demonic imaginings and darkness. Fill me with the light of the Holy Spirit that I may be guarded against all snares of crafty demons. (<i>3x metanias</i>)

<strong>Prayer for Destruction of Evil:</strong>
Let God arise, and let His enemies be scattered; and let those who hate Him flee from His face. As smoke vanishes, let them vanish; and as wax melts from the presence of fire, so let the demons perish from the presence of those who love God and who sign themselves with the Sign of the Cross and say with gladness: Hail, most precious and life-giving Cross of the Lord, for Thou drivest away the demons by the power of our Lord Jesus Christ Who was crucified on thee, went down to hell and trampled on the power of the devil, and gave us thee, His honorable Cross, for driving away all enemies. O most precious and life-giving Cross of the Lord, help me with our holy Lady, the Virgin Theotokos, and with all the Saints throughout the ages. Amen. (<i>prostration</i>)

<strong>Prayer Against the Antichrist (Elder Anatoly the Younger of Optina)</strong>
O LORD Jesus Christ, Son of God, deliver us from the deceptive seductions of the coming antichrist, abhorred by God and crafty in evil, and from all his snares. Shelter us from his devious nets, keeping us in the secret desert of Thy salvation. Grant, Lord, that our fear of the devil may not be greater than our fear of Thee, and that we not fall away from Thee and Thy holy Church. But instead, grant us, O Lord, to suffer and die for Thy holy Name, and never to deny Thee, nor to receive the marks of the cursed antichrist, nor to worship him. Grant us, O Lord, day and night, tears and lamentation for our sins, and on the day of Thy dread Judgement, O Lord, grant us pardon. Amen. (<i>prostration</i>)
`, // Tuesday
      3: `<strong>Cultivation of Virtues</strong>
<strong>Prayer Against Pride:</strong>
O Lord and Master of my life, give me not the spirit of pride, but rather the spirit of humility, patience, and love to Thy servant. Yea, O Lord and King, grant me to see my own transgressions and not to judge my brother, for blessed art Thou, unto ages of ages. Amen. (<i>3x metanias</i>)

<strong>Prayer for Humility and Love:</strong>
O Lord, since salvation comes to me as a free gift, I give thanks to You, my Savior. I gratefully offer from my widowed soul two tiny coins, humility and love. Please accept these in the treasury of Your salvation more gladly than the host of virtues deposited there by others. (<i>prostration</i>)

<strong>Prayer for Virtuous Living:</strong>
O Lord, preserve me from every word or deed that corrupts the soul; from every impulse unpleasing in Your sight and hurtful to my fellow man. Teach me what to say and how to speak. If it be Your will that I make no answer, inspire me to keep silent in a spirit of peace that causes neither sorrow nor hurt to my fellow man. Establish me in the path of Your commandments and to my last breath let me not stray from the light of Your ordinances, that Your commandments may become the sole law of my being on this earth and all eternity. (<i>prostration</i>)
`, // Wednesday
      4: `<strong>Patron Saint Discernment and Intercessions to the Saints</strong>
O Lord Jesus Christ, Wisdom of the Father and Light of the world, I seek Your will as I choose a patron saint to guide me on the path of salvation. O Lord, illumine my heart that I may know whom You have appointed to intercede for me and that I may be inspired by their holy example. Let not my own will, but Yours, be done. (<i>prostration</i>)

<strong>Patriarch Jacob</strong>
Holy Patriarch Jacob, you who wrestled with the Lord through the night and were humbled, pray for me, that I too may be transformed through struggle and repentance. As you saw the ladder reaching to heaven, prefiguring the Theotokos, help me ascend from earth to heaven by humility and perseverance. Intercede for me, that I may receive a new name in Christ and become a true Israelite in whom there is no deceit. (<i>Metania</i>)

<strong>Prophet Daniel</strong>
O Prophet Daniel, steadfast in faith and wisdom, who beheld the Ancient of Days and was emboldened to make lions bow before you through virtue and trust in God, pray for me. Ask the Lord to grant me courage to stand firm in a fallen world, to be wise as serpents and innocent as doves, and to remain pure in heart and steadfast in prayer, that I too may be delivered from the snares of the enemy. (<i>Metania</i>)

<strong>St. John Chrysostom</strong>
Holy John Chrysostom, golden-mouthed preacher and fearless confessor, who boldly proclaimed the truth even when opposed, and who taught that humility is the root of all virtue, pray for me. Intercede that I may destroy pride with humility, cut off sin at its root, and speak and act with boldness for Christ, as you did in your sermons and writings, even as you stood firm against error and injustice. (<i>Metania</i>)

<strong>St. Maximus the Confessor</strong>
O St. Maximus, confessor of the true faith, who endured suffering for the sake of Christ and plumbed the mystical depths of divine wisdom, pray for me. Ask the Lord to grant me perseverance in truth, intellectual rigor, and a heart open to the mysteries of God. May I, like you, hold fast to the confession of the true faith, even in the face of trial and misunderstanding. (<i>Metania</i>)

<strong>St. Seraphim of Sarov</strong>
Holy Seraphim, radiant with the joy and peace of the Holy Spirit, who tamed the wild bear and greeted all with “Christ is Risen!”, pray for me. Intercede that I may acquire the Spirit of peace, gentle humility, and love for all creation. As you made the bear your friend, help me to make peace with all that is wild within me, and to radiate the love and joy of Christ to all I meet. (<i>Metania</i>)

<strong>Any and All other Saints</strong>
To the Saint that has the salve perfect for my particular wounds—pray for me. Make yourself known to me, by God's grace, and I will know you are my Patron. Lord God, thy will be done. (<i>Metania</i>)
`, // Thursday
      5: `<strong>Mission Parish Saint Intercessions</strong>

<strong>The Holy Protection of the Theotokos</strong>
O Most-Holy Theotokos, you who spread your protecting veil over the faithful in times of danger, shelter me and all those I love beneath your holy protection. As you appeared in Blachernae and saved your people from peril, intercede for us in every trial, storm, and crisis. Cover our parish, our city, and all the world with your unfailing intercession, and grant us deliverance, peace, and the shelter of your mercy. (<i>metania</i>)

<strong>Prayer to St. Barnabas the Apostle</strong>
O holy Apostle Barnabas, companion of the Apostles and son of encouragement, you were filled with faith and the Holy Spirit and set apart to bring the light of Christ to many nations.
You traveled far and wide, preaching the Gospel with courage, generosity, and joy, comforting the weary, reconciling the divided, and strengthening the Church in love and unity.
Intercede for us, O blessed Barnabas, that we too may have boldness to proclaim Christ in word and deed, generosity to support the mission of the Church, and courage to persevere in faith, especially in times of trial.
Pray that our parish may be a beacon of hope, unity, and welcome for all peoples.
By your prayers, may the Gospel be spread in our land, the poor be comforted, and the Church be strengthened in every good work.
O gentle encourager and faithful apostle, ask the Lord to grant us the spirit of peace, zeal, and steadfastness that you showed, that we may reflect the love of Christ in all we do.
St. Barnabas, pray for us and for the renewal of the Church in every place! (<i>metania</i>)

<strong>St. Herman of Alaska</strong>
O Venerable Father Herman, wonderworker of all America, who endured the wilderness and calmed storms by your prayers, intercede for us. Defend us from every danger, inspire us to love God and neighbor, and teach us to serve the least among us with humility and compassion. Pray that our parish may be a beacon of faith and a refuge for all who seek Christ. (<i>metania</i>)

<strong>St. Raphael of Brooklyn</strong>
Holy Bishop Raphael, shepherd of the scattered flock, who gathered peoples of many tongues into one Church, pray for us. Help us to welcome all with love, to build up the Church in unity and peace, and to translate the Gospel into every heart. Guide our parish to be a home for all nations and a witness to Christ in our land. (<i>metania</i>)

<strong>St. Tikhon of Moscow</strong>
O holy Patriarch Tikhon, confessor and enlightener, who guided the Church through persecution and planted Orthodoxy in a new world, pray for us. Strengthen us to confess the faith boldly, to endure trials with patience, and to serve Christ faithfully in every circumstance. May your example inspire us to build up the Church in this land and to remain steadfast in the face of adversity. (<i>metania</i>)

<strong>St. Alexis of Wilkes-Barre (Alexis Toth)</strong>
O holy Father Alexis, defender of Orthodoxy and shepherd of converts, who led many into the true faith, pray for us. Intercede for all those seeking the fullness of the faith, for all catechumens and inquirers, and for the unity of all Christians. Grant us zeal for truth, love for the Church, and courage to follow Christ wherever He leads. (<i>metania</i>)

<strong>St. Gregory the Theologian</strong>
O holy Gregory, archbishop and theologian, defender of the Trinity and teacher of the Church, pray for us. Grant us wisdom to understand the mysteries of God, courage to confess the true faith, and humility to receive the grace of the Holy Spirit. May your words enlighten our minds and your prayers purify our hearts. (<i>metania</i>)

<strong>St. Ignatius of Antioch</strong>
O holy Ignatius, God-bearer and martyr, disciple of the Apostles, pray for us. Strengthen us in unity, fidelity to the Eucharist, and obedience to Christ’s holy Church. As you longed for union with Christ, teach us to desire Him above all things and to bear witness to Him even unto death. (<i>metania</i>)

<strong>St. Maximus the Confessor</strong>
O St. Maximus, confessor of the true faith, who endured suffering for Christ and illumined the Church with your wisdom, pray for us. Grant us perseverance in truth, courage in trial, and a heart open to the mysteries of God. May we, like you, hold fast to the confession of the true faith, even in the face of misunderstanding. (<i>metania</i>)

<strong>St. Irenaeus of Lyon</strong>
O holy Hieromartyr Irenaeus, defender of the faith and refuter of heresy, pray for us. Strengthen us in apostolic tradition, guard us from error, and grant us zeal for the unity and truth of the Church. May your example inspire us to be faithful witnesses to Christ in our generation. (<i>metania</i>)

<strong>St. Ephraim the Syrian</strong>
O holy Ephraim, deacon and hymnographer, whose words are a fountain of repentance and mercy, pray for us. Teach us to mourn our sins, to seek God’s mercy, and to sing His praises with pure hearts. Grant us the spirit of compunction and the joy of forgiveness. (<i>metania</i>)

<strong>St. Gregory Palamas</strong>
O holy Gregory, defender of the hesychasts and teacher of divine grace, pray for us. Grant us the desire for unceasing prayer, the experience of God’s energies, and the humility to receive His light. May your teaching guide us to the true knowledge of God and your prayers protect us from every delusion. (<i>metania</i>)

<strong>St. Macrina the Younger</strong>
O holy Macrina, sister of St. Basil the Great, model of asceticism, and teacher of the saints, pray for us. Inspire us to balance prayer and work, to sanctify our families, and to pursue holiness in every state of life. May your example inspire women and men alike to seek the Kingdom of God above all. (<i>metania</i>)

<strong>St. Nino (Nina), Equal to the Apostles</strong>
O holy Nino, kin of St. George the Great Martyr, enlightener of Georgia, and equal to the Apostles, who brought the light of Christ to a nation in darkness, pray for us. Grant us zeal for the Gospel, perseverance in prayer, and courage to bear witness to Christ in every place. May your prayers make us fruitful missionaries in our own land. (<i>metania</i>)

<strong>St. Seraphim of Sarov</strong>
O great Saint of God, our venerable and God-bearing Father, Seraphim! Look down from the glory that is above, upon us who are humble and weak, burdened with our many sins, and ask thy help and consolation. Bend down to us in thy loving kindness, and help us to carry out God's commandments without stain, firmly to keep the Orthodox Faith, to approach God in heartfelt contrition for all our sins, to make progress in Christian devotion and to be worthy of thy prayers before God. Yea, O Saint of God, hearken unto us, who pray to thee in faith and love, and despise us not who seek thee as our defender: now, and at the hour of our departure, help us and defend us by thy prayers from the wicked assaults of the devil, lest evil powers should have dominion over us; but let us be granted, by thy help, to inherit the bliss of heavenly mansions. For we place our hope in thee, O Seraphim, radiant with the joy and peace of the Holy Spirit, who tamed the wild and greeted all with “Christ is Risen!” Pray for us! (<i>metania</i>)

<strong>St. John of San Francisco and Shanghai</strong>
O holy hierarch and wonderworker John, chosen vessel of Christ in these latter times, you shepherded your flock through persecution, exile, and suffering, never ceasing to pray for the lost, the orphan, and the suffering. You were a pillar of Orthodoxy in Shanghai, a protector of the poor in Paris, and a healer and intercessor in San Francisco.
You saw the hearts of men as if they were your own, and by your prayers, miracles were poured forth for the faithful. You comforted the sorrowful, healed the sick, and delivered many from danger and despair. Your love knew no boundaries, and your care embraced all peoples and lands.
O living icon of Christ, who now stands before the throne of God, hear our prayers and intercede for us:
Strengthen us in the Orthodox faith, protect our parish and all Orthodox Christians, and hasten the conversion of new peoples and lands to the fullness of the faith. Implore the Lord for the return of the West to Orthodoxy, for the healing of the sick, the protection of the innocent, and the unity of the Church.
O speedy helper amid misfortunes, pray for us who honor you, and grant us by your prayers the grace to endure trials with faith, to love as you loved, and to serve Christ in all people.
St. John Maximovich, wonderworker of the latter times, pray for us! (<i>metania</i>)

<strong>St. Paisios of Mt. Athos</strong>
O venerable Father Paisios, wonderworker and guide of the faithful, who bore the burdens of the suffering and prayed for the whole world, intercede for us. Pray for those far from the Church, for the healing of the sick, for peace among nations, for the afflicted, for the poor and the exiled, for the Church and her shepherds, and for all who seek God’s mercy. Through your prayers, may we be strengthened to endure trials, to love our enemies, and to walk in humility and faith. St. Paisios, pray for us and for the conversion of the nations! (<i>metania</i>)

<strong>St. Sophia of Ainos</strong>
O holy martyr Sophia, wise in God, beacon of divine wisdom and steadfast faith, you endured suffering for Christ and became a model of discernment and wise judgment. Intercede for us, that we may be granted true wisdom, clarity of mind, and pure discernment. Shield us from confusion and error, and guide our hearts to the knowledge of God’s will. St. Sophia, pray for us, that we may live each day adorned with the wisdom that comes from above! (<i>metania</i>)

<strong>St. Markella of Chios</strong>
O holy martyr of Christ Markella, hearken to my prayer, as I call upon your protection in reverence. Extend your hand, O bride of the Lord, O spotless one, and entreat your sweetest Bridegroom Christ on behalf of us, seeking the fulfillment of our requests unto salvation. As a martyr, grant us progress in the faith and correction of our life. As one possessing the grace of healing, grant us healing from above. As one truly glorious in working wonders, wondrously save us from every dangerous circumstance, tribulation, and want, that through you, we might hymn Christ God, He Who is, unto the ages of ages. St. Markella, pray for us! (<i>metania</i>)

<strong>St. Brendan the Navigator</strong>
O holy Brendan, fearless voyager for Christ, who set sail in faith across the unknown seas in search of the promised land of the saints, teach us to trust wholly in God’s providence. Inspire us to leave behind comfort and security, to confess our sins, and to seek the Kingdom of God above all things. Guide us on our journey through life, that we may reach the safe harbor of salvation. St. Brendan, pray for us and for all who seek the true homeland! (<i>metania</i>)

<strong>St. Martin of Tours</strong>
Blessed St. Martin of Tours, soldier of Christ and bishop of mercy, full of inexhaustible charity for the needy, you clothed Christ Himself in the person of the poor and became a model of humility and generosity. Pray for us, that we may be guarded by your example, protected from harm, and inspired to serve our neighbor with selfless love. Intercede for us, that we may always recognize Christ in those around us and respond with compassion and faith. St. Martin, pray for us! (<i>metania</i>)

<strong>St. Varus</strong>
O holy martyr Varus, intercessor for the departed and for those outside the Church, pray for us. Especially remember, O blessed Varus, all the peoples of the West who have been separated from the fullness of Orthodoxy since the great schism of 1054. Implore the Lord to have mercy on all who have fallen away, on all who seek the truth, and especially on my departed loved ones who died outside the visible bounds of the Orthodox faith. Through your prayers, may the Lord grant repentance, unity, and rest to all, and may His mercy encompass the whole world. (<i>metania</i>)

O glorious Varus, in God thou art able by thy divinely acceptable supplications to obtain and pour forth mercies upon those who have been utterly separated therefrom. For there is but one Father of compassions and lovingkindness, and as Master all things are possible for Him. Unfailingly beseech Him, O athlete, that He forgive and have mercy on my departed family and friends, whom we remember.
Have mercy, O Lord, if it is possible, on the soul of Your servants, departed to eternal life in separation from Your Holy Orthodox Church! Unsearchable are Your judgments. Account not this my prayer as sin, but may Your holy will be done! (<i>For all the souls of my blood kin and siblings in the blood of Christ—Memory Eternal; metania</i>)
`, // Friday
      6: `<strong>Prayer to the Theotokos (Jacob’s Ladder and Holy Protection)</strong>
O Most-Holy Theotokos, you are the ladder by which God descended to earth and by whom we ascend to heaven. As Jacob saw the ladder in his vision, so you became the living bridge between heaven and earth, the gateway of salvation. Intercede for me, O Mother of God, that I may be united to your Son, and that through your prayers I may be granted wisdom, humility, and purity. Shelter me under your holy protection and guide me on the path to your Son's Kingdom. (<i>metania</i>)

<strong>Prayer for Humility, Wisdom, and Virtue</strong>
Lord Jesus Christ, Son of God, have mercy on me, a sinner. In my pride, I foolishly come to occasions when I act as if I am doing well enough and am living virtuously. On these occasions, I feel as though I am sufficiently humble, but I know in this very thought I have fallen to pride and crushed my humility. I also may feel as if I have conquered one or more of the passions, but I know it is the demons that tell me this to stop me in my struggle for purity. I lower my guard, and once again I find myself in thought, word, and deed falling to passions as the demons laugh. In this, I live the words of Saint Paul in his letter to the Romans, "For the good that I will to do, I do not do; but the evil I will not to do, that I practice." After they have had their laugh at my sin, the demons relentlessly push me to despair over it as if I cannot possibly be forgiven, and I must fight against the vile blasphemy of the Holy Spirit. They would have me be like Judas, but grant that I may instead be like Saints Peter and Paul, O Lord, and truly repent after my offenses. Again, I live Saint Paul's words, "Now if I do what I will not to do, it is no longer I who do it, but sin that dwells in me... O wretched man that I am! Who will deliver me from this body of death? I thank God—through Jesus Christ our Lord!" I am an undeserving sinner and it is only by your merciful grace, O Lord, that I have hope of salvation. Grant me true repentance and unceasing discernment, O Christ my God. Holy Theotokos, save me and utterly destroy the demons. Pray for me, Saints Peter, Paul, and all the other saints, that I may endure until the end. Amen (<i>metania</i>)

Lord Jesus Christ, Sovereign King of All, have mercy on me, a struggling soldier in your army. I fight daily and often fall, but I know that in the end, we win. Grant me strength, O Lord, to get back up after every fall and to endure until the end. Thy will be done. Amen. (<I>metania</i>)

O Lord, grant me the wisdom of Solomon, but above all the virtue and purity of Your saints. Help me to destroy pride with humility, to cut off sin at its root, and to cultivate true love for You and my neighbor. (<i>Prostration</i>)

It is truly meet to bless thee, O Theotokos, ever-blessed and most pure, and the Mother of our God. More honorable than the Cherubim, and more glorious beyond compare than the Seraphim, without defilement thou gavest birth to God the Word. True Theotokos we magnify thee! (<i>metania</i>)

Lord have mercy. (<i>3x with metanias</i>)

Through the prayers of our holy fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.
`  // Saturday
    }
  };

  // --- Display Logic ---

function getDayIndex() {
    // Sunday = 0, Monday = 1, ..., Saturday = 6
    const d = new Date();
    return d.getDay();
}

let currentPrayerType = 'morning';

function showPrayer(type, event) {
    currentPrayerType = type;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');
    updatePrayerContent();
}

function updatePrayerContent() {
    const dayIndex = getDayIndex();
    const text = (prayerChunks[currentPrayerType][dayIndex] || "No prayer for this day.");
    document.getElementById('prayerContent').innerHTML = text.replace(/\n/g, '<br>');
}

document.addEventListener('DOMContentLoaded', function () {
    updatePrayerContent();
});
