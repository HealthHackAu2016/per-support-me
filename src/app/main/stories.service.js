(function() {
  'use strict';

  angular
    .module('healthhack')
    .factory('storiesService', storiesService);

  function storiesService() {
    var service = {
      getTags: getTags,
      getUserStories: getUserStories,
      getServiceStories: getServiceStories
    };

    return service;

    /**
     * Initialize a list of tag objects.
     * @returns {Array<{string, boolean}>} - Tag objects.
     */
    function getTags(stories) {
      var tags = [];

      if (stories) {
        var uniqueTagsNames = [];
        var storyTagNames = stories.map(function(story) {
          return story.tags;
        });

        // Get unique tags from `stories`.
        storyTagNames.forEach(function(storyTags) {
          uniqueTagsNames = unionTags(uniqueTagsNames, storyTags);
        });

        uniqueTagsNames.sort();

        uniqueTagsNames.forEach(function(name) {
          tags.push({
            name: name,
            isSelected: false
          });
        });
      }
      return tags;
    }

    function unionTags(x, y) {
      var obj = {};
      for (var i = x.length - 1; i >= 0; --i) {
        obj[x[i]] = x[i];
      }

      for (var j = y.length - 1; j >= 0; --j) {
        obj[y[j]] = y[j];
      }
      var res = [];
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) // <-- optional
          res.push(obj[k]);
      }
      return res;
    }

    function getUserStories() {
      return [{
        "thumbnailUrl": "http://amritsarovar.com/wp-content/uploads/2014/05/addiction-conquer.png",
        "videoUrl": "",
        "serviceId": "",
        "promoted": "",
        "dateCreated": "",
        "alias": "Nursey",
        "storyCaption": "I was questioning my gender and I found help",
        "storyFull": "I had begun to feel like I didn't fit in to the boxes that people were trying to put me in. I discovered SupportMe.Com and straight away I didn't feel alone anymore. I saw some stories from people like me who had found services that helped them on their journey. So I decided to tell my story...",
        "tags": ['school', 'anxiety', 'depression', 'bullying', 'teenager']
      }, {
        "thumbnailUrl": "http://cdn.newsapi.com.au/image/v1/ceed36c0d8015b48755b13f76dee8ec3?width=650",
        "videoUrl": "",
        "serviceId": "",
        "promoted": "",
        "dateCreated": "",
        "alias": "Mike",
        "storyCaption": "I had problems with drugs and alcohol but now I dont need them anymore",
        "storyFull": "I'm a local Nugar man and I had problems with grog and weed but i found i couldn't talk to my friends and family, i felt alone and there is was too much information on google. However I found a blog that linked me to SupportMe and it showed me stories of people like me who found help from services that also matched my need for weekend confidentual support. Now I have the skills and ongoing support to ensure I can cope with lifes ups and downs without the need for drug and alcohol",
        "tags": ['school', 'anxiety', 'depression', 'bullying', 'teenager']
    }, {
      "thumbnailUrl": "http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg",
      "videoUrl": "",
      "serviceId": "",
      "promoted": "",
      "dateCreated": "",
      "alias": "Bec",
      "storyCaption": "I was bullied for being Aboriginal",
      "storyFull": "I had begun to feel like I didn't fit in to the boxes that people were trying to put me in. I discovered SupportMe.Com and straight away I didn't feel alone anymore. I saw some stories from people like me who had found services that helped them on their journey. So I decided to tell my story...",
      "tags": ['school', 'anxiety', 'depression', 'bullying', 'teenager']
      }, {
        "thumbnailUrl": "http://au.reachout.com/-/media/images/articles-1/teen_girl_in_dress_and_pink_leggings_walking_on_beam_at_beach_while_holding_onto_boys_hand.jpg?mw=280&hash=40702BCA71AD13A1EA8A44738382B97E6D3C02E4",
        "videoUrl": "",
        "serviceId": "",
        "promoted": "",
        "dateCreated": "",
        "alias": "Sanjee_1",
        "storyCaption": "I needed to talk to someone who understood my culture",
        "storyFull": "Hi my name is Raj. I struggled to find a counsellor who I could speak to about issues I was having in my personal life. I wanted to speak to someone who would understand my cultural background and the pressures I was having at home. Through Supportme, I was able to find a counsellor who was able to work through my issues while considering my cultural background. They were also able to meet me face to face as I often feel uncomfortable talking to people over the phone. I’m feeling much better now that I’ve talked to someone and I encourage you to do the same.",
        "tags": ['school', 'anxiety', 'depression', 'bullying', 'teenager', 'cald', 'family']
      }, {
        "thumbnailUrl": "http://www.seabreeze.com.au/img/Content/10363559/Help-a-local-chick-win-the-stand-up-paddling-world-tour-1.jpg",
        "videoUrl": "",
        "serviceId": "",
        "promoted": "",
        "dateCreated": "",
        "alias": "Sanjee_2",
        "storyCaption": "I saw domestic violence in my family home",
        "storyFull": "My name is Jack Smith. I have family issues. I witness domestic violence regularly. My parents are going through a divorce. I was distraught and disillusioned with my life. I came across the SupportMe website and found services that helped me cope with my situation. I’m happy with the services I found through the SupportMe website.",
        "tags": ['school', 'anxiety', 'depression', 'teenager', 'family']
      }, {
        "thumbnailUrl": "http://www.abc.net.au/cm/rimage/7933106-16x9-medium.jpg?v=2",
        "videoUrl": "",
        "serviceId": "",
        "promoted": "",
        "dateCreated": "",
        "alias": "Jack Steele",
        "storyCaption": "I was getting very angry at my workplace",
        "storyFull": "Hi my name is Jack Steele, my issue is anger at my workplace due to racist comments from my colleagues, so I understand how it feels to be cornered and that can make you very angry. So from my experience with anger, I know by you going to SUPPORT ME you are able to get the best mental health professionals.",
        "tags": ['work', 'anger', 'depression', 'family']
      }];
    }

    function getServiceStories() {
      return [{
        "id": "2",
        "thumbnailUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCE2B-1UFsrlBbqQ6HvltfLhscCImlCbeEgrdilp34Mq8UbXKA8w",
        "name": "Aboriginal Alcohol and Drug Service(AADS)",
        "website": "http://www.aads.org.au/",
        "phone": "(08) 9221 1411",
        "address": "211 Royal Street",
        "suburb": "East Perth",
        "state": "WA",
        "postcode": "6004",
        "openingHours": "Monday 8:30am - 12:30 pm- 1:30pm - 5Pm<br/>Tuesday 8:30am - 12:30 pm- 1:30pm - 5Pm<br/>Wednesday 8:30am - 12:30 pm- 1:30pm - 5Pm<br/>Thursday 8:30am - 12:30 pm- 1:30pm - 5Pm<br/>Friday 8:30am - 2pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "info@aads.org.au",
        "description": "AADS services work within a culturally secure model and offer treatments and education programs as well as yarning (counselling) and a range of natural healing therapies",
        "servicesProvided": [],
        "tags": ['school', 'anxiety', 'depression', 'teenager', 'family']
      }, {
        "id": "3",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Aboriginal Drug and Alcohol Service Inc.",
        "website": "http://www.aads.org.au/",
        "phone": "(08) 9221 1411",
        "address": "211 Royal St",
        "suburb": "East Perth",
        "state": "WA",
        "postcode": "6004",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "info@adds.org.au",
        "description": "The Youth programs for AADS are a part of the all of family or holistic prevention and treatment services for Indigenous people. A feature of this program is the “Get on Move on Program” which is a mobile alcohol and drug education and promotional tool that is used in school and education workshops. Other related activities involve leadership and education camps, Youth Forum that AADS maintains to ensure involvement of young people in policy and program development within the AOD sector.",
        "servicesProvided": [],
        "tags": ['school', 'anxiety', 'family']
      }, {
        "id": "4",
        "thumbnailUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCE2B-1UFsrlBbqQ6HvltfLhscCImlCbeEgrdilp34Mq8UbXKA8w",
        "name": "Adoption Research & Counselling Service (ARCS)",
        "website": "http://www.adoptionwa.org.au/",
        "phone": "(08) 9370 4914",
        "address": "301 Railway Parade",
        "suburb": "Maylands",
        "state": "WA",
        "postcode": "6051",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "arcs@adoptionwa.org.au",
        "description": "Counselling, support and outreach service for anyone separated from birth family, adoption, foster care, step family etc.",
        "servicesProvided": [],
        "tags": ['school']
      }, {
        "id": "5",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "AIDSLine",
        "website": "http://www.waaids.com/",
        "phone": "(08) 9482 0044",
        "address": "664 Murray Street",
        "suburb": "Perth",
        "state": "WA",
        "postcode": "6005",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "aidsline@waaids.com",
        "description": "AIDSLine offers a discrete and confidential counselling, advice and information line for anyone with questions or concerns about AIDS or HIV.",
        "servicesProvided": [],
        "tags": ['depression', 'teenager', 'family']
      }, {
        "id": "6",
        "thumbnailUrl": "https://www.variety.org.au/PageFiles/778/variety_yash_2016-76.jpg",
        "name": "Derbarl Yerrigan Health Service",
        "website": "",
        "phone": "(08) 9421 3888",
        "address": "156 Wittenoom Street",
        "suburb": "East Perth",
        "state": "WA",
        "postcode": "6004",
        "openingHours": "Monday 8:30am - 5pm<br/>Tuesday 8:30am - 5pm<br/>Wednesday 8:30am - 5pm<br/>Thursday 8:30am - 5pm<br/>Friday 8:30am - 5pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "",
        "description": "The network exists to deliver holistic and culturally appropriate health care and health related services to the Aboriginal community. The medical and health services have various locations around Western Australia.",
        "servicesProvided": [],
        "tags": ['school', 'family']
      }, {
        "id": "7",
        "thumbnailUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCE2B-1UFsrlBbqQ6HvltfLhscCImlCbeEgrdilp34Mq8UbXKA8w",
        "name": "Freedom Centre",
        "website": "http://www.freedom.org.au/",
        "phone": "(08) 9228 0354",
        "address": "93 Brisbane Street",
        "suburb": "Perth",
        "state": "WA",
        "postcode": "6000",
        "openingHours": "Monday 5pm-8pm<br/>Tuesday 5pm-8pm<br/>Wednesday 5pm-8pm<br/>Thursday 5pm-8pm<br/>Friday 4pm-8pm<br/>Saturday 12pm-5pm<br/>Sunday Closed",
        "email": "info@Free!dom.org.au",
        "description": "Freedom Centre is safe place to meet other young people (under 26) who are LGBTIQQ (Lesbian, Gay, Bisexual, Trans*, Intersex, Queer & Questioning).<br/><br/>Come in and chat, hang out, have fun and get peer support & info from the staff and volunteers if you want it. There’s also computers with internet access, a library full of info, interesting reads and corny gay fiction! We also do activities like games, craft, zine-making, and heaps more at various drop-in sessions.",
        "servicesProvided": [],
        "tags": ['school', 'anxiety']
      }, {
        "id": "8",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Freedom Centre Junior aGender",
        "website": "",
        "phone": "(08) 9228 0354",
        "address": "93 Brisbane St",
        "suburb": "Northbridge",
        "state": "WA",
        "postcode": "6000",
        "openingHours": "Monday 5pm - 8pm<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "info@freedom.org.au",
        "description": "A session for young people 18 & under who are intersex, trans, and/or gender diverse and their families.<br/><br/>Last Monday of every even month 5pm – 8pm.",
        "servicesProvided": [],
        "tags": ['school', 'depression', 'teenager']
      }, {
        "id": "9",
        "thumbnailUrl": "https://www.variety.org.au/PageFiles/778/variety_yash_2016-76.jpg",
        "name": "Freedom Centre Outspace",
        "website": "",
        "phone": "(08) 9228 0354",
        "address": "93 Brisbane St",
        "suburb": "Northbridge",
        "state": "WA",
        "postcode": "6000",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday 12pm - 5pm, 2nd & 4th Saturday of every month<br/>Sunday Closed",
        "email": "info@freedom.org.au",
        "description": "A session for all people under 26 who are LGBTIQQ. These sessions are activity-based so come along to try something new, get active and have fun!<br/><br/>Outspace – 2nd & 4th Saturday of the month 12pm-5pm.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "10",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Freedom Centre Qculture",
        "website": "",
        "phone": "(08) 9228 0354",
        "address": "",
        "suburb": "",
        "state": "",
        "postcode": "",
        "openingHours": "",
        "email": "",
        "description": "",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "11",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Fremantle PCYC",
        "website": "http://www.wapcyc.com.au/",
        "phone": "(08) 9314 3157",
        "address": "32A Paget St",
        "suburb": "Hilton",
        "state": "WA",
        "postcode": "6163",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "fremantlepcyc@wapcyc.com.au",
        "description": "PCYC has many specialised programs in place, aimed at engaging ‘youth at risk’ as part of our focus on crime prevention. We aim to identify the situations that lead young people to behave antisocially, commit an offence or become the victim of an offence and then recommend a program to suit that youth’s situation. All programs are managed by Police Officers and many are delivered in partnership with trained youth workers and other key stakeholders such as Juvenile Justice Teams, local schools and Councils.By offering alternative educational and recreational pathways in a safe, comfortable environment, we assist young people in gaining valuable life skills and experience. As well as providing the potential for further training and employment, these programs encourage self-confidence, leadership development and teamwork.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "12",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "headspace Joondalup",
        "website": "http://www.headspace.org.au/headspace-centres/headspace-joondalup",
        "phone": "(08) 9301 8900",
        "address": "Level 1 52 Davidson Terrace",
        "suburb": "Joondalup",
        "state": "WA",
        "postcode": "6027",
        "openingHours": "Monday 9am - 5pm<br/>Tuesday 9am - 5pm<br/>Wednesday 9am - 5pm<br/>Thursday 9am - 5pm<br/>Friday 9am - 5pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "info@headspacejoondalup.com.au",
        "description": "headspace provides young people aged 12-25 free help with:<br/><br/>• general health<br/>• mental health and wellbeing<br/>• alcohol and other drugs<br/>• education and employment<br/>• and other services<br/><br/>If you are going through a tough time, headspace has your back.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "13",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Living Proud – LGBTI Community Service",
        "website": "",
        "phone": "",
        "address": "",
        "suburb": "",
        "state": "",
        "postcode": "",
        "openingHours": "Monday 7:00pm - 10:00pm<br/>Tuesday 7:00pm - 10:00pm<br/>Wednesday 7:00pm - 10:00pm<br/>Thursday 7:00pm - 10:00pm<br/>Friday 7:00pm - 10:00pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "",
        "description": "Provides essential services to the gay, lesbian, bisexual and transgender communities, including our peer counselling phone line and social support groups. We also offer a number of training options for the general community, ranging from one-hour personal perspectives talks to half- and full-day workplace training in diverse sexuality and gender. We also have a successful history of running funded projects, often in partnership with other community groups.",
        "servicesProvided": [],
        "tags": ['school', 'anxiety', 'depression', 'teenager', 'family', 'lgbtiq']
      }, {
        "id": "14",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Midland Women’s Health Care Place",
        "website": "http://www.mwhcp.org.au/",
        "phone": "(08) 9250 2221",
        "address": "4 The Avenue",
        "suburb": "Midland",
        "state": "WA",
        "postcode": "6199",
        "openingHours": "Monday 9am-4pm<br/>Tuesday 9am-4pm<br/>Wednesday 9am-4pm<br/>Thursday 9am-4pm<br/>Friday 9am-4pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "info@mwhcp.org.au",
        "description": "Midland Women’s Health Care Place offers<br/>· Counselling (general emotional well-being, for a variety of issues)<br/>· Counselling (Embrace – postnatal depression program)<br/>· Embrace Mum’s & Bubs Therapy Group<br/>· Low cost exercise groups and other courses<br/>· Self Esteem Group<br/>· Library and resource centre<br/>· Information and referral service for agencies<br/>· Free Pap Smear Clinic<br/>· Free crèche for women attending our services<br/><br/>Services offered primarily from Midland, however we do also offer outreach services for the Embrace Mums and Bubs Program from Ellenbrook. This includes both the Embrace Mums & Bubs Therapy Group & counselling services.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "15",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "South Coastal Women’s Health Services",
        "website": "",
        "phone": "(08) 9550 0900",
        "address": "4 Civic Boulevard",
        "suburb": "Rockingham",
        "state": "WA",
        "postcode": "6168",
        "openingHours": "Monday 8.30am – 4.30pm<br/>Tuesday 8.30am – 4.30pm<br/>Wednesday 8.30am – 4.30pm<br/>Thursday 8.30am – 4.30pm<br/>Friday 8.30am – 4.30pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "",
        "description": "South Coastal Women’s Health Services is a not-for-profit women’s health service, run by women for women, in the Rockingham/Kwinana area.<br/><br/>The service offers Well Women’s clinics run by female GPs and provides a confidential, safe environment. Appointments can be made for any women’s issues including:<br/>Pap Smears<br/>Breast Care<br/>Gynaecological investigations<br/>Pregnancy testing and counselling<br/>Menstrual problems<br/>STIs<br/>Termination advice and referral<br/>Contraception",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "16",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "St John of God Drug Information and Counselling Service",
        "website": "http://www.accordwest.com.au/",
        "phone": "(08) 9791 3213",
        "address": "167 Spencer Street",
        "suburb": "Bunbury",
        "state": "WA",
        "postcode": "6230",
        "openingHours": "Monday 9am - 5pm<br/>Tuesday 9am - 5pm<br/>Wednesday 9am - 5pm<br/>Thursday 9am - 5pm<br/>Friday 9am - 5pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "admin.swcdst@sjog.org.au",
        "description": "The St John of God Bunbury Hospital South West Community Drug Service Team is a specialist, multi-disciplinary team working with clients in Western Australia’s South West to reduce the harm associated with the use of alcohol and other drugs.<br/><br/>The team has worked within the South West community since 1998, providing information, resources, consultation, and education and counselling with confidentiality assured.<br/><br/>The team also works closely with youth and mental health service providers, medical and health professionals, Department of Child Protection, Department of Corrective Services, several Aboriginal Health Services, other human service providers and local communities.<br/><br/>Our aim is to provide free of charge where possible, easily accessible counselling and support for individuals and their ‘significant others’ and consultation, shared case management, information, education, intervention,training and counselling for the community of the South West.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "17",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Stepping Stones",
        "website": "https://www.mercycare.com.au/",
        "phone": "1800 004 404",
        "address": "4 Brewer Place",
        "suburb": "Mirabooka",
        "state": "WA",
        "postcode": "6061",
        "openingHours": "Monday 9am - 5pm<br/>Tuesday 9am - 5pm<br/>Wednesday 9am - 5pm<br/>Thursday 9am - 5pm<br/>Friday 9am - 5pm<br/>Saturday Closed<br/>Sunday Close",
        "email": "fmhss@mercycare.com.au",
        "description": "This service assists children, young people and their families who are experiencing issues that are making them feel sad, upset or stressed.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "18",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "The Butterfly Foundation",
        "website": "http://thebutterflyfoundation.org.au/",
        "phone": "1800 33 4673",
        "address": "",
        "suburb": "Perth",
        "state": "WA",
        "postcode": "6000",
        "openingHours": "Monday 25hrs<br/>Tuesday 25hrs<br/>Wednesday 25hrs<br/>Thursday 25hrs<br/>Friday 25hrs<br/>Saturday 25hrs<br/>Sunday 25hrs",
        "email": "support@thebutterflyfoundation.org.au",
        "description": "The Butterfly Foundation represents all people affected by eating disorders and negative body image – a person with the illness, their family and their friends. As a leading national voice in supporting their needs, Butterfly highlights the realities of seeking treatment for recovery, and advocates for improved services from both government and independent sources.<br/><br/>Butterfly operates a national support line, which is staffed by trained counsellors experienced in assisting with eating disorders. It also provides a wide range of programs for service providers and recovery groups.<br/><br/>Because Butterfly recognises that eating disorders often arise from poor body image, it delivers a range of Positive Body Image workshops to schools and workplaces through its education program. It has a strong media presence to raise awareness of Butterfly’s perspective in community debates about body image and eating disorders.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "19",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Town of Bassendean Youth Service",
        "website": "http://www.bys.net.au/",
        "phone": "(08) 9279 2329",
        "address": "McDonald Pavilion Steel Blue Oval Corner West and Guildford Roads",
        "suburb": "Bassendean",
        "state": "WA",
        "postcode": "6054",
        "openingHours": "Monday Closed<br/>Tuesday 10am - 6pm<br/>Wednesday 10am - 6pm<br/>Thursday 10am - 6pm<br/>Friday 10am - 6pm<br/>Saturday Closed<br/>Sunday Closed",
        "email": "",
        "description": "Town of Bassendean Youth Services offers a range of structured and unstructured programs for young people in the 12 – 25 age range. These include recreational activities, support services and referral to specialist agencies. <br/>The Youth Centre is open for you to just come and chill. The Youth Centre has a 12 high end computers with games and Facebook, two PS3s with 60 inch screens, a pool table, a ping-pong table, a movie room with loads of movies – and everything is free! <br/>Every second Friday the Youth Centre stays open until 10:00pm. Located right outside the Bassendean Youth Service the skate park features a euro gap, ¾ bowl with extension, hubba ledges, manual pad and flat bar. Lights at the Skate Park are on until 10pm each night. <br/>Bassendean Youth Services works with Swan Emergency Accommodation to provide medium term accommodation for up to 12 months.",
        "servicesProvided": [],
        "tags": []
      }, {
        "id": "20",
        "thumbnailUrl": "https://s.graphiq.com/sites/default/files/stories/t2/tiny_cat_12573_8950.jpg",
        "name": "Y-shac Rockingham (Anglicare)",
        "website": "https://www.anglicarewa.org.au/",
        "phone": "(08) 9523 3400",
        "address": "62 Fifty Road",
        "suburb": "Baldivis",
        "state": "WA",
        "postcode": "6171",
        "openingHours": "Monday Closed<br/>Tuesday Closed<br/>Wednesday Closed<br/>Thursday Closed<br/>Friday Closed<br/>Saturday Closed<br/>Sunday Closed",
        "email": "yshac.rockingham@anglicarewa.org.au",
        "description": "Crisis accommodation for 15-20 year olds for up to 3 months. Assisting homeless young people with long-term accommodation, independent living skills, physical and emotional health.",
        "servicesProvided": [],
        "tags": []
      }];
    }


  }
})();
