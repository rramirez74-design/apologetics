export interface Article {
  title: string;
  content: string;
  url?: string;
  lastUpdated?: string;
}

export interface SubTopicCategory {
  title: string;
  description?: string;
  articles: Article[];
}

export interface SubTopic {
  title: string;
  items: (string | SubTopicCategory)[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: (string | SubTopic)[];
}

export const topics: Topic[] = [
  {
    id: "god",
    title: "God",
    subtopics: [
      {
        title: "The Nature of God",
        items: [
          {
            title: "Basics",
            description: "Explore fundamental questions about God's nature, including what God is like, His attributes, and what it means that God is spirit.",
            articles: [
              { 
                title: "What is God like?", 
                url: "https://www.gotquestions.org/what-is-God-like.html",
                lastUpdated: "January 21, 2026",
                content: `Every culture in the history of the world has had some concept of what God is like. Some have assumed that God is in control of the weather and have made images of a storm god throwing lightning bolts around (Baal worship in Canaan). Some have assumed that God is very powerful, and so they worshiped the most powerful thing they could see, the sun (Ra worship in Egypt). Others have assumed that God is everywhere and therefore have worshiped everything (pantheism in Stoic philosophy). Some have assumed that God is unknowable and have turned to agnosticism or, just to cover their bases, have worshiped "An Unknown God" ([Acts 17:23](https://www.bibleref.com/Acts/17/Acts-17-23.html)).\n\nThe problem with each of these assumptions is that they only get part of the picture of who God is. Yes, God is in control of the weather, but He is also in control of so much more. He is powerful, but much more powerful than the sun. He is everywhere, but He also transcends everything. And, thankfully, while there are some things we don't understand about God, He is knowable. In fact, He has revealed everything we need to know about Him in the Bible. God _wants_ to be known ([Psalm 46:10](https://www.bibleref.com/Psalms/46/Psalm-46-10.html)).\n\nNorman Geisler and Frank Turek, in their book _I Don't Have Enough Faith to be an Atheist_, state the following:\n\n- Truth is discovered, not invented. It exists independent of anyone's knowledge of it. (Gravity existed prior to Newton.)\n- Truth is transcultural; if something is true, it is true for all people, in all places, at all times. (2+2=4 for everyone, everywhere, at every time.)\n- Truth is unchanging even though our _beliefs_ about truth change. (When we began to believe the earth was round instead of flat, the _truth_ about the earth didn't change, only our _belief_ about the earth changed.)\n\nTherefore, as we try to ascertain what God is like, we are simply trying to discover truths already there.\n\nFirst, God exists. The Bible never argues for God's existence; it simply states it. The fact that God _is_ should be self-evident through the works He has created ([Psalm 19:1-6](https://www.bibleref.com/Psalms/19/Psalm-19-1.html)). [Genesis 1:1](https://www.bibleref.com/Genesis/1/Genesis-1-1.html) says, "In the beginning God created the heavens and the earth." This is a simple yet powerful statement. The universe includes time, space, matter, and energy, so that all discernible elements in the universe came into being by God's decree. Albert Einstein's Theory of General Relativity states that all time, space, and matter had a definite, simultaneous beginning. What has a beginning has a cause. That is the law of causality, and the fact of God easily explains the ultimate cause. God is the creator of all that is, and so we know something else about Him: He is almighty ([Joel 1:15](https://www.bibleref.com/Joel/1/Joel-1-15.html)), He is eternally self-existent ([Psalm 90:2](https://www.bibleref.com/Psalms/90/Psalm-90-2.html)), and He exists above and beyond all of creation ([Psalm 97:9](https://www.bibleref.com/Psalms/97/Psalm-97-9.html)).\n\nThe same God who made all things also controls those things. He is sovereign ([Isaiah 46:10](https://www.bibleref.com/Isaiah/46/Isaiah-46-10.html)). He who creates an item owns it and has power to utilize it as he sees fit. The ultimate cause has ultimate authority. In [Isaiah 44:24](https://www.bibleref.com/Isaiah/44/Isaiah-44-24.html) God presents Himself as the One "who has made all things, who alone stretched out the heavens, who spread out the earth by myself." The next verse says that He "overthrows the learning of the wise and turns it into nonsense." This is obviously a God with power to do as He pleases.\n\nGod is spirit ([John 4:24](https://www.bibleref.com/John/4/John-4-24.html)) and cannot be represented by any created thing; in fact, the attempt to create such a representation is blasphemous ([Exodus 20:4-6](https://www.bibleref.com/Exodus/20/Exodus-20-4.html)). God is unchanging ([Malachi 3:6](https://www.bibleref.com/Malachi/3/Malachi-3-6.html)). God is all-knowing ([1 John 3:20](https://www.bibleref.com/1-John/3/1-John-3-20.html)) and all-present ([Psalm 139:7-13](https://www.bibleref.com/Psalms/139/Psalm-139-7.html)). He is holy and glorious ([Isaiah 6:3](https://www.bibleref.com/Isaiah/6/Isaiah-6-3.html)). He is just ([Deuteronomy 32:4](https://www.bibleref.com/Deuteronomy/32/Deuteronomy-32-4.html)) and will justly judge all sin and unrighteousness ([Jude 1:15](https://www.bibleref.com/Jude/1/Jude-1-15.html)).\n\nThe judgment of God highlights another truth about what He is like: He is a moral being. C. S. Lewis, in _Mere Christianity_, makes the case that, just as there exists observable laws of nature (gravity, entropy, etc.), there are also observable laws of morality. He writes, "First, that human beings, all over the earth, have this curious idea that they ought to behave in a certain way, and cannot really get rid of it. Secondly, that they do not in fact behave in that way. They know the Law of Nature; they break it. These two facts are the foundation of all clear thinking about ourselves and the universe we live in." Despite varied ideas about what constitutes right and wrong, there is a universal belief that right and wrong _exist_, and this is a reflection of the God who made us ([Genesis 1:26](https://www.bibleref.com/Genesis/1/Genesis-1-26.html); [Ecclesiastes 3:11](https://www.bibleref.com/Ecclesiastes/3/Ecclesiastes-3-11.html)).\n\nWhen Jesus entered our world, He showed us the Father ([John 14:7-9](https://www.bibleref.com/John/14/John-14-7.html)). Through Jesus, we understand that God seeks to save the lost ([Luke 19:10](https://www.bibleref.com/Luke/19/Luke-19-10.html)). He is compassionate ([Matthew 14:14](https://www.bibleref.com/Matthew/14/Matthew-14-14.html)), He is merciful ([Luke 6:36](https://www.bibleref.com/Luke/6/Luke-6-36.html)), and He is forgiving ([Matthew 9:1-8](https://www.bibleref.com/Matthew/9/Matthew-9-1.html)). At the same time, Jesus shows us that God will judge unrepentant sin ([Luke 13:5](https://www.bibleref.com/Luke/13/Luke-13-5.html)) and that God is angry with those who live falsely and refuse to acknowledge the truth ([Matthew 23](https://www.bibleref.com/Matthew/23/Matthew-chapter-23.html)).\n\nMost of all, Jesus showed us that God is love ([1 John 4:8](https://www.bibleref.com/1-John/4/1-John-4-8.html)). It was in love that God sent His Son into the world ([John 3:16](https://www.bibleref.com/John/3/John-3-16.html)). It was in love that Jesus died on the cross for sinners ([Romans 5:8](https://www.bibleref.com/Romans/5/Romans-5-8.html)). It is in love that He still calls sinners to repentance to experience the grace of God and to be called the children of God ([1 John 3:1](https://www.bibleref.com/1-John/3/1-John-3-1.html)).`
              },
              { 
                title: "Who is God?", 
                url: "https://www.gotquestions.org/who-is-God.html",
                lastUpdated: "January 21, 2026",
                content: `Who is God? What is God? How can we know God?\n\n**Who is God? - The Fact**\nThe fact of God’s existence is so conspicuous, both through creation and through man’s conscience, that the Bible calls the atheist a “fool” ([Psalm 14:1](https://www.bibleref.com/Psalms/14/Psalm-14-1.html)). Accordingly, the Bible never attempts to prove the existence of God; rather, it assumes His existence from the very beginning ([Genesis 1:1](https://www.bibleref.com/Genesis/1/Genesis-1-1.html)). What the Bible does is reveal the nature, character, and work of God.\n\n**Who is God? - The Definition**\nThinking correctly about God is of utmost importance because a false idea about God is idolatry. In [Psalm 50:21](https://www.bibleref.com/Psalms/50/Psalm-50-21.html), God reproves the wicked man with this accusation: “You thought I was altogether like you.” To start with, a good summary definition of God is “the Supreme Being; the Creator and Ruler of all that is; the Self-existent One who is perfect in power, goodness, and wisdom.”\n\n**Who is God? - His Nature**\nWe know certain things to be true of God for one reason: in His mercy He has condescended to reveal some of His qualities to us. God is spirit, by nature intangible ([John 4:24](https://www.bibleref.com/John/4/John-4-24.html)). God is One, but He exists as three Persons—God the Father, God the Son, and God the Holy Spirit ([Matthew 3:16-17](https://www.bibleref.com/Matthew/3/Matthew-3-16.html)). God is infinite ([1 Timothy 1:17](https://www.bibleref.com/1-Timothy/1/1-Timothy-1-17.html)), incomparable ([2 Samuel 7:22](https://www.bibleref.com/2-Samuel/7/2-Samuel-7-22.html)), and unchanging ([Malachi 3:6](https://www.bibleref.com/Malachi/3/Malachi-3-6.html)). God exists everywhere ([Psalm 139:7-12](https://www.bibleref.com/Psalms/139/Psalm-139-7.html)), knows everything ([Psalm 147:5](https://www.bibleref.com/Psalms/147/Psalm-147-5.html); [Isaiah 40:28](https://www.bibleref.com/Isaiah/40/Isaiah-40-28.html)), and has all power and authority ([Ephesians 1](https://www.bibleref.com/Ephesians/1/Ephesians-chapter-1.html); [Revelation 19:6](https://www.bibleref.com/Revelation/19/Revelation-19-6.html)).\n\n**Who is God? - His Character**\nHere are some of God’s characteristics as revealed in the Bible: God is just ([Acts 17:31](https://www.bibleref.com/Acts/17/Acts-17-31.html)), loving ([Ephesians 2:4-5](https://www.bibleref.com/Ephesians/2/Ephesians-2-4.html)), truthful ([John 14:6](https://www.bibleref.com/John/14/John-14-6.html)), and holy ([1 John 1:5](https://www.bibleref.com/1-John/1/1-John-1-5.html)). God shows compassion ([2 Corinthians 1:3](https://www.bibleref.com/2-Corinthians/1/2-Corinthians-1-3.html)), mercy ([Romans 9:15](https://www.bibleref.com/Romans/9/Romans-9-15.html)), and grace ([Romans 5:17](https://www.bibleref.com/Romans/5/Romans-5-17.html)). God judges sin ([Psalm 5:5](https://www.bibleref.com/Psalms/5/Psalm-5-5.html)) but also offers forgiveness ([Psalm 130:4](https://www.bibleref.com/Psalms/130/Psalm-130-4.html)).\n\n**Who is God? - His Work**\nWe cannot understand God apart from His works, because what God does flows from who He is. Here is an abbreviated list of God’s works, past, present, and future: God created the world ([Genesis 1:1](https://www.bibleref.com/Genesis/1/Genesis-1-1.html); [Isaiah 42:5](https://www.bibleref.com/Isaiah/42/Isaiah-42-5.html)); He actively sustains the world ([Colossians 1:17](https://www.bibleref.com/Colossians/1/Colossians-1-17.html)); He is executing His eternal plan ([Ephesians 1:11](https://www.bibleref.com/Ephesians/1/Ephesians-1-11.html)) which involves the redemption of man from the curse of sin and death ([Galatians 3:13-14](https://www.bibleref.com/Galatians/3/Galatians-3-13.html)); He draws people to Christ ([John 6:44](https://www.bibleref.com/John/6/John-6-44.html)); He disciplines His children ([Hebrews 12:6](https://www.bibleref.com/Hebrews/12/Hebrews-12-6.html)); and He will judge the world ([Revelation 20:11-15](https://www.bibleref.com/Revelation/20/Revelation-20-11.html)).\n\n**Who is God? - A Relationship with Him**\nIn the Person of the Son, God became incarnate ([John 1:14](https://www.bibleref.com/John/1/John-1-14.html)). The Son of God became the Son of Man and is therefore the “bridge” between God and man ([John 14:6](https://www.bibleref.com/John/14/John-14-6.html); [1 Timothy 2:5](https://www.bibleref.com/1-Timothy/2/1-Timothy-2-5.html)). It is only through the Son that we can have forgiveness of sins ([Ephesians 1:7](https://www.bibleref.com/Ephesians/1/Ephesians-1-7.html)), reconciliation with God ([John 15:15](https://www.bibleref.com/John/15/John-15-15.html); [Romans 5:10](https://www.bibleref.com/Romans/5/Romans-5-10.html)), and eternal salvation ([2 Timothy 2:10](https://www.bibleref.com/2-Timothy/2/2-Timothy-2-10.html)). In Jesus Christ “all the fullness of the Deity lives in bodily form” ([Colossians 2:9](https://www.bibleref.com/Colossians/2/Colossians-2-9.html)). So, to really know who God is, all we have to do is look at Jesus.`
              },
              { title: "What is God?", content: "Content for 'What is God?' will be added here." },
              { title: "What are the attributes of God?", content: "Content for 'What are the attributes of God?' will be added here." },
              { title: "What are the most important things to understand about the nature of God?", content: "Content for 'What are the most important things to understand about the nature of God?' will be added here." },
              { title: "Is God a person?", content: "Content for 'Is God a person?' will be added here." },
              { title: "What does it mean that God is spirit?", content: "Content for 'What does it mean that God is spirit?' will be added here." },
              { title: "Does God have a soul?", content: "Content for 'Does God have a soul?' will be added here." },
              { title: "What is the immutability of God?", content: "Content for 'What is the immutability of God?' will be added here." },
              { title: "What is Theology Proper / Paterology?", content: "Content for 'What is Theology Proper / Paterology?' will be added here." }
            ]
          },
          {
            title: "The Trinity",
            description: "Explore questions about the Trinity, its biblical basis, and the distinct roles of the Father, Son, and Holy Spirit.",
            articles: [
              { title: "What is the Trinity?", content: "Content for 'What is the Trinity?' will be added here." },
              { title: "What does the Bible teach about the Trinity?", content: "Content for 'What does the Bible teach about the Trinity?' will be added here." },
              { title: "What does it mean that the Trinity is God in three Persons?", content: "Content for 'What does it mean that the Trinity is God in three Persons?' will be added here." },
              { title: "How is the Trinity not tritheism?", content: "Content for 'How is the Trinity not tritheism?' will be added here." },
              { title: "How can there be subordination in the Trinity?", content: "Content for 'How can there be subordination in the Trinity?' will be added here." },
              { title: "What is the ontological Trinity?", content: "Content for 'What is the ontological Trinity?' will be added here." },
              { title: "What is the economic Trinity?", content: "Content for 'What is the economic Trinity?' will be added here." },
              { title: "What does it mean that the Father is the first Person of the Trinity?", content: "Content for 'What does it mean that the Father is the first Person of the Trinity?' will be added here." },
              { title: "What does it mean that Jesus, the Son, is the second Person of the Trinity?", content: "Content for 'What does it mean that Jesus, the Son, is the second Person of the Trinity?' will be added here." },
              { title: "What does it mean that the Holy Spirit is the third person of the Trinity?", content: "Content for 'What does it mean that the Holy Spirit is the third person of the Trinity?' will be added here." },
              { title: "Who is God the Father?", content: "Content for 'Who is God the Father?' will be added here." }
            ]
          },
          {
            title: "Singularity",
            description: "Questions about the oneness of God, monotheism, and the uniqueness of the Godhead.",
            articles: [
              { title: "What is the Godhead?", content: "Content for 'What is the Godhead?' will be added here." },
              { title: "Can monotheism be proven?", content: "Content for 'Can monotheism be proven?' will be added here." },
              { title: "Why does God refer to Himself in the plural in Genesis 1:26 and 3:22?", content: "Content for 'Why does God refer to Himself in the plural in Genesis 1:26 and 3:22?' will be added here." },
              { title: "Who is the one true God?", content: "Content for 'Who is the one true God?' will be added here." },
              { title: "How many gods are there?", content: "Content for 'How many gods are there?' will be added here." },
              { title: "What are the seven spirits of God?", content: "Content for 'What are the seven spirits of God?' will be added here." }
            ]
          },
          {
            title: "Time and Place",
            description: "Explore God's relationship to time, space, and His omnipresence and eternality.",
            articles: [
              { title: "What does it mean that God is infinite?", content: "Content for 'What does it mean that God is infinite?' will be added here." },
              { title: "What was God doing before He created the universe?", content: "Content for 'What was God doing before He created the universe?' will be added here." },
              { title: "What is God’s relationship to time?", content: "Content for 'What is God’s relationship to time?' will be added here." },
              { title: "What does it mean that God is eternal?", content: "Content for 'What does it mean that God is eternal?' will be added here." },
              { title: "Does God know the future?", content: "Content for 'Does God know the future?' will be added here." },
              { title: "How old is God?", content: "Content for 'How old is God?' will be added here." },
              { title: "If God is omnipresent, does that mean God is in hell?", content: "Content for 'If God is omnipresent, does that mean God is in hell?' will be added here." },
              { title: "What does it mean that God is omnipresent?", content: "Content for 'What does it mean that God is omnipresent?' will be added here." },
              { title: "If God is omnipresent, then what is special about being in the presence of God?", content: "Content for 'If God is omnipresent, then what is special about being in the presence of God?' will be added here." },
              { title: "What is the immanence of God?", content: "Content for 'What is the immanence of God?' will be added here." },
              { title: "What are the implications of God being infinite, unlimited, and unmeasurable?", content: "Content for 'What are the implications of God being infinite, unlimited, and unmeasurable?' will be added here." },
              { title: "What is the doctrine of divine concurrence?", content: "Content for 'What is the doctrine of divine concurrence?' will be added here." }
            ]
          },
          {
            title: "Attributes",
            description: "Questions about God's specific attributes such as omniscience, omnipotence, goodness, and immutability.",
            articles: [
              { title: "What does it mean that God is omniscient?", content: "Content for 'What does it mean that God is omniscient?' will be added here." },
              { title: "What does it mean that God is omnipotent?", content: "Content for 'What does it mean that God is omnipotent?' will be added here." },
              { title: "What does it mean that God is omnificent?", content: "Content for 'What does it mean that God is omnificent?' will be added here." },
              { title: "Does God have free will?", content: "Content for 'Does God have free will?' will be added here." },
              { title: "Is there anything God can’t do?", content: "Content for 'Is there anything God can’t do?' will be added here." },
              { title: "Could God create a rock so heavy He could not lift it?", content: "Content for 'Could God create a rock so heavy He could not lift it?' will be added here." },
              { title: "Is God logical?", content: "Content for 'Is God logical?' will be added here." },
              { title: "What does it mean that God is good?", content: "Content for 'What does it mean that God is good?' will be added here." },
              { title: "What does it mean that God is great?", content: "Content for 'What does it mean that God is great?' will be added here." },
              { title: "What are the communicable and incommunicable attributes of God?", content: "Content for 'What are the communicable and incommunicable attributes of God?' will be added here." },
              { title: "What is the incomprehensibility of God?", content: "Content for 'What is the incomprehensibility of God?' will be added here." }
            ]
          }
        ]
      },
      {
        title: "The Character of God",
        items: ["God’s Love", "God’s Holiness", "How God Works", "Anthropomorphism", "Emotion", "Justice"]
      },
      {
        title: "The Identity of God",
        items: ["The Existence of God", "The Origin of God", "The Names of God", "The Titles of God", "Faulty Assumptions"]
      },
      {
        title: "God’s Relationship to Us",
        items: ["Toward All People", "Father-God", "He Cares for Us"]
      },
      {
        title: "Our Response to God",
        items: ["Seeking God", "Knowing God", "Worshiping God", "Honest Questions"]
      },
      {
        title: "God and Evil",
        items: ["The Existence of Sin and Evil", "God’s Character", "Hardships", "Health Problems", "War and Disasters"]
      }
    ]
  },
  {
    id: "jesus",
    title: "Jesus Christ",
    subtopics: ["The Identity of Jesus", "The Nature of Jesus", "The Person of Jesus", "The Life of Jesus", "The Cross and the Empty Tomb", "The Ministry of Jesus", "The Relationships of Jesus"]
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    subtopics: ["The Identity of the Holy Spirit", "The Gifts of the Holy Spirit", "The Work of the Holy Spirit"]
  },
  {
    id: "salvation",
    title: "Salvation",
    subtopics: ["The Gospel", "Theology of Salvation", "The Truths of Salvation", "Who can be Saved", "Salvation Clarified"]
  },
  {
    id: "bible",
    title: "The Bible",
    subtopics: ["Bible Essentials", "Translations and Criticisms", "Studying the Bible", "Books and Testaments", "Understanding the Bible", "How We Got the Bible", "Believing the Bible", "Apocrypha and Pseudepigrapha"]
  },
  {
    id: "new-christians",
    title: "New Christians",
    subtopics: ["First Ten", "Second Ten", "Living the Christian Life", "Understanding God", "Growth and Maturity", "Bible Study", "Abundance in Christ", "Problems and Challenges", "False Beliefs"]
  },
  {
    id: "church",
    title: "The Church",
    subtopics: ["Church Identity", "The Body of Christ", "Church Worship", "Rites and Ordinances", "Church Culture", "Church Ministry", "Church Leadership", "Church Organization"]
  },
  {
    id: "end-times",
    title: "The End Times",
    subtopics: ["Eschatology", "Keep Watch", "People and Nations", "End Times Events"]
  },
  {
    id: "angels-demons",
    title: "Angels and Demons",
    subtopics: ["The Basics on Angels and Demons", "Angels", "Demons", "Satan"]
  },
  {
    id: "humanity",
    title: "Humanity",
    subtopics: ["Human Nature", "Life and Death", "God our Creator", "In the World"]
  },
  {
    id: "theology",
    title: "Theology",
    subtopics: ["Theology Basics", "Calvinism and Arminianism", "Dispensationalism and Covenantalism", "God and Humanity", "Systematic Theology", "Theology of the Trinity"]
  },
  {
    id: "apologetics",
    title: "Apologetics",
    subtopics: ["Apologetics Basics", "Apologetics in Christianity", "Apologetics and Unbelievers"]
  },
  {
    id: "worldview",
    title: "Worldview",
    subtopics: ["Worldview Essentials", "Entertainment and Worldview", "Worldview on Social Issues", "Government and Worldview", "Conflict and Worldview", "Worldview and Ethics", "Worldview and Philosophy", "Worldview Application"]
  },
  {
    id: "spiritual-life",
    title: "Spiritual Life",
    subtopics: ["Spiritual Life Essentials", "Following God", "God in our Lives", "God in our Hearts", "Spiritual Warfare", "Christ's Gifts"]
  },
  {
    id: "prayer",
    title: "Prayer",
    subtopics: ["Prayer Essentials", "Prayer in Practice", "Prayer Specifics", "Unsound Prayer"]
  },
  {
    id: "sin",
    title: "Sin",
    subtopics: ["Essentials about Sin", "Sinful Character Traits", "Specific Sins", "Worldliness", "Sexual Sin", "Terminology of Sin", "The Study of Sin"]
  },
  {
    id: "eternity",
    title: "Eternity",
    subtopics: ["Essentials about Eternity", "Mortality and Eternity", "Eternal Judgment", "Eternity in Heaven", "Eternity in Hell"]
  },
  {
    id: "relationships",
    title: "Relationships",
    subtopics: ["Friendship", "Dating", "Getting Married", "Marriage Basics", "Marital Unity", "Marriage Hardships"]
  },
  {
    id: "family",
    title: "Family",
    subtopics: ["Family Basics", "Having Children", "Raising Children", "Family Relationships"]
  },
  {
    id: "creation",
    title: "Creation",
    subtopics: ["Creation Basics", "The Biblical Creation Account", "The Age of the Earth", "Evolution vs. Creationism"]
  },
  {
    id: "cults-religions",
    title: "Cults and Religions",
    subtopics: ["Cults and Religions Basics", "Religious Terms and Practices", "Major World Religions", "Minor World Religions", "Regional Religions", "The Occult"]
  },
  {
    id: "false-beliefs",
    title: "False Beliefs",
    subtopics: ["False Belief Essentials", "False Beliefs about the Bible", "False Beliefs about God", "False Believe about Jesus", "False Beliefs about the Holy Spirit", "Mysticism", "Religious Worldviews"]
  },
  {
    id: "christianity",
    title: "Christianity",
    subtopics: ["Christianity Essentials", "Christianity Basics", "Protestant Christianity", "Baptistic Christianity", "Catholic and Orthodox Christianity", "Parachurch Christianity"]
  },
  {
    id: "christian-history",
    title: "Christian History",
    subtopics: ["Early Christian Theology", "Early Church Fathers", "The Middle Ages", "The Renaissance and the Reformation", "Reason and Enlightenment", "Modern Christianity"]
  },
  {
    id: "places",
    title: "Places in the Bible",
    subtopics: ["Places in Israel", "Places Outside Israel", "Other Places in the Bible"]
  },
  {
    id: "people",
    title: "People in the Bible",
    subtopics: ["Bible People Basics", "Old Testament Groups", "Old Testament Individuals", "New Testament Groups", "New Testament Individuals"]
  },
  {
    id: "health",
    title: "Health",
    subtopics: ["Physical Health Essentials", "Physical Health Care", "Physical Health Conditions", "Mental Health Basics", "Mental Illness", "Counseling and Therapy", "Emotions and Thoughts"]
  },
  {
    id: "life",
    title: "Life",
    subtopics: ["Life Essentials", "Christian Character", "Christian Evangelism", "Growth in Life", "Life in Practice", "The Christian and Money", "Personal Interaction", "The Christian and Culture", "The Christian and Holidays"]
  },
  {
    id: "topical",
    title: "Topical Bible",
    subtopics: ["Topical: Definitions", "Topical Analogies", "Topical: Specifics", "Topical: Biblical Culture", "Topical: Community", "Topical: Alternative Spirituality"]
  },
  {
    id: "books",
    title: "Books of the Bible",
    subtopics: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 & 2 Samuel", "1 & 2 Kings", "1 & 2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 & 2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 & 2 Thessalonians", "1 & 2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 & 2 Peter", "1, 2, & 3 John", "Jude", "Revelation"]
  },
  {
    id: "catholicism",
    title: "Catholicism",
    subtopics: ["Catholicism Basics", "Catholicism and Authority", "Catholic Beliefs", "Catholicism and Tradition", "Mary and the Saints"]
  },
  {
    id: "judaism",
    title: "Judaism",
    subtopics: ["Judaism Essentials", "Judaism and Old Testament History", "Judaism and New Testament History", "Contemporary Judaism", "Judaism and the Mosaic Law", "The Feasts and Festivals of Judaism", "The Writings of Judaism"]
  },
  {
    id: "islam",
    title: "Islam",
    subtopics: ["Islamic Beliefs", "Islamic Sects and Writings", "Bible Studies for Muslims"]
  }
];
