let currentLanguage = "en";
let currentPlaceList = [];

document.getElementById("language-toggle").addEventListener("change", function () {
  currentLanguage = this.value;
  renderPlaces(currentPlaceList.length ? currentPlaceList : places);
});

document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = places.filter(p => {
    const nameToSearch = currentLanguage === "hi" ? p.name_hi : p.name;
    return nameToSearch.toLowerCase().includes(keyword);
  });
  renderPlaces(filtered, keyword);
});

const places = [
   {
    name: "Kamtanath",
    name_hi: "कामतानाथ",
    description: "Kamtanath Parikrama is a sacred pilgrimage route that encircles a hill believed to bear the footprints of Lord Rama.",
    description_hi: "कामतानाथ परिक्रमा एक पवित्र यात्रा मार्ग है जो भगवान राम के पदचिन्हों वाले पर्वत के चारों ओर जाती है।",
    cover: "imageg/Kamtanath/K Main.jpg",
    images: [
      "imageg/Kamtanath/K 1.jpg",
      "imageg/Kamtanath/K 4.jpg",
      "imageg/Kamtanath/K 5.jpg",
      "imageg/Kamtanath/K 2.jpg",
      "imageg/Kamtanath/K 3.jpg",
    ],
    map: "https://maps.google.com/maps?q=Kamtanath%20Temple&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Gupt Godavari",
    name_hi: "गुप्त गोदावरी",
    description: "Gupt Godavari is a pair of sacred caves believed to be the secret court of Lord Rama and Laxman during their exile.",
    description_hi: "गुप्त गोदावरी दो पवित्र गुफाएं हैं जहाँ भगवान राम और लक्ष्मण ने वनवास के समय दरबार लगाया था।",
    cover: "imageg/Gupt Godavari/G Main.jpg",
    images: [
      "imageg/Gupt Godavari/G 1.jpg",
      "imageg/Gupt Godavari/G 2.jpg",
      "imageg/Gupt Godavari/G 3.jpg",
      "imageg/Gupt Godavari/G 4.jpg",
      "imageg/Gupt Godavari/G 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Gupt%20Godavari&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Arogyadham",
    name_hi: "आरोग्यधाम",
    description: "Arogyadham is a renowned Ayurvedic wellness center offering holistic healing.",
    description_hi: "आरोग्यधाम एक प्रसिद्ध आयुर्वेदिक केंद्र है जहाँ प्राकृतिक चिकित्सा और योग उपचार होते हैं।",
    cover: "imageg/Arogyadham/A Main.jpg",
    images: [
      "imageg/Arogyadham/A 1.jpg",
      "imageg/Arogyadham/A 2.jpg",
      "imageg/Arogyadham/A 3.jpg",
      "imageg/Arogyadham/A 4.jpg",
      "imageg/Arogyadham/A 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Arogyadham%20Ayurveda&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Sati Anusuya Ashram",
    name_hi: "सती अनुसूया आश्रम",
    description: "This serene ashram is dedicated to Sati Anusuya, wife of Sage Atri.",
    description_hi: "यह शांत आश्रम सती अनुसूया को समर्पित है, जिन्होंने यहाँ कठोर तप किया था।",
    cover: "imageg/Sati Anusuya Ashram/S Main.jpg",
    images: [
      "imageg/Sati Anusuya Ashram/S 1.jpg",
      "imageg/Sati Anusuya Ashram/S 2.jpg",
      "imageg/Sati Anusuya Ashram/S 3.jpg",
      "imageg/Sati Anusuya Ashram/S 4.jpg",
      "imageg/Sati Anusuya Ashram/S 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Sati%20Anusuya%20Ashram&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Ganesh Bagh",
    name_hi: "गणेश बाग",
    description: "Ganesh Bagh is an archaeological site featuring a temple and stepwell.",
    description_hi: "गणेश बाग एक ऐतिहासिक स्थल है जहाँ एक प्राचीन मंदिर और बावड़ी स्थित है।",
    cover: "imageg/Ganesh Bagh/Ga Main.jpg",
    images: [
      "imageg/Ganesh Bagh/Ga 1.jpg",
      "imageg/Ganesh Bagh/Ga 2.jpg",
      "imageg/Ganesh Bagh/Ga 3.jpg",
      "imageg/Ganesh Bagh/Ga 4.jpg",
      "imageg/Ganesh Bagh/Ga 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Ganesh%20Bagh%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Lakshman Pahari",
    name_hi: "लक्ष्मण पहाड़ी",
    description: "This hill is associated with Lakshman's meditation and vigilance.",
    description_hi: "यह पहाड़ी लक्ष्मण जी की तपस्या और रक्षक रूप में उनके स्थान से जुड़ी हुई है।",
    cover: "imageg/Lakshman Pahari/L Main.jpg",
    images: [
      "imageg/Lakshman Pahari/L 1.jpg",
      "imageg/Lakshman Pahari/L 2.jpg",
      "imageg/Lakshman Pahari/L 3.jpg",
      "imageg/Lakshman Pahari/L 4.jpg",
      "imageg/Lakshman Pahari/L 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Lakshman%20Pahari%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Shabari Waterfall",
    name_hi: "सबरी जलप्रपात",
    description: "These are seasonal waterfalls that flow through rocky terrains around Chitrakoot.",
    description_hi: "यह मौसमी जलप्रपात हैं जो वर्षा ऋतु में सुंदर दृश्यों के साथ बहते हैं।",
    cover: "imageg/Shabari Waterfall/Sh Main.jpg",
    images: [
      "imageg/Shabari Waterfall/Sh 1.jpg",
      "imageg/Shabari Waterfall/Sh 2.jpg",
      "imageg/Shabari Waterfall/Sh 3.jpg",
      "imageg/Shabari Waterfall/Sh 4.jpg",
      "imageg/Shabari Waterfall/Sh 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Chitrakoot%20Waterfall&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Sphatik Shila",
    name_hi: "स्फटिक शिला",
    description: "Sphatik Shila is a shimmering rock slab on the banks of Mandakini River.",
    description_hi: "स्फटिक शिला मंदाकिनी नदी के किनारे स्थित एक चकाचौंध पत्थर है जहाँ भगवान राम और सीता के पदचिन्ह माने जाते हैं।",
    cover: "imageg/Sphatik Shila/Sp Main.jpg",
    images: [
      "imageg/Sphatik Shila/Sp 1.jpg",
      "imageg/Sphatik Shila/Sp 2.jpg",
      "imageg/Sphatik Shila/Sp 3.jpg",
      "imageg/Sphatik Shila/Sp 4.jpg",
      "imageg/Sphatik Shila/Sp 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Sphatik%20Shila&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Ram Darshan",
    name_hi: "राम दर्शन",
    description: "Ram Darshan is a unique cultural center in Chitrakoot that showcases the life and values of Lord Rama through beautiful clay models and exhibits.",
    description_hi: "राम दर्शन, चित्रकूट में स्थित एक अनोखा सांस्कृतिक केंद्र है, जहाँ भगवान राम के जीवन और आदर्शों को सुंदर मिट्टी की मूर्तियों और झाँकियों के माध्यम से प्रस्तुत किया गया है।",
    cover: "imageg/Ram Darshan/R Main.jpg",
    images: [
      "imageg/Ram Darshan/R 1.jpg",
      "imageg/Ram Darshan/R 2.jpg",
      "imageg/Ram Darshan/R 3.jpg",
      "imageg/Ram Darshan/R 4.jpg",
      "imageg/Ram Darshan/R 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Pramod%20Van%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Hanuman Dhara",
    name_hi: "हनुमान धारा",
    description: "Located on a steep hill, Hanuman Dhara features a statue of Lord Hanuman under a natural stream.",
    description_hi: "हनुमान धारा एक तीव्र पहाड़ी पर स्थित स्थल है जहाँ हनुमान जी की मूर्ति पर प्राकृतिक जलधारा गिरती है।",
    cover: "imageg/Hanuman Dhara/H Main.jpg",
    images: [
      "imageg/Hanuman Dhara/H 1.jpg",
      "imageg/Hanuman Dhara/H 2.jpg",
      "imageg/Hanuman Dhara/H 3.jpg",
      "imageg/Hanuman Dhara/H 4.jpg",
      "imageg/Hanuman Dhara/H 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Hanuman%20Dhara%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Ram Ghat",
    name_hi: "राम घाट",
    description: "This is one of the most revered places in Chitrakoot, where Lord Rama is said to have appeared before Tulsidas.",
    description_hi: "राम घाट वह स्थान है जहाँ भगवान राम तुलसीदास को प्रकट हुए थे। यह मंदाकिनी नदी के किनारे स्थित है।",
    cover: "imageg/Ram Ghat/Ram Main.jpg",
    images: [
      "imageg/Ram Ghat/Ram 1.jpg",
      "imageg/Ram Ghat/Ram 2.jpg",
      "imageg/Ram Ghat/Ram 3.jpg",
      "imageg/Ram Ghat/Ram 4.jpg",
      "imageg/Ram Ghat/Ram 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Ram%20Ghat%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    name: "Bharat Milap",
    name_hi: "भरत मिलाप",
    description: "Bharat Milap is believed to be the place where Bharat met Lord Rama to persuade him to return to Ayodhya.",
    description_hi: "भरत मिलाप वह स्थान है जहाँ भरत ने भगवान राम से मिलने के लिए वन में आकर उन्हें अयोध्या लौटने के लिए मनाया था।",
    cover: "imageg/Bharat Milap/B Main.jpg",
    images: [
      "imageg/Bharat Milap/B 1.jpg",
      "imageg/Bharat Milap/B 2.jpg",
      "imageg/Bharat Milap/B 3.jpg",
      "imageg/Bharat Milap/B 4.jpg",
      "imageg/Bharat Milap/B 5.jpg",
    ],
    map: "https://maps.google.com/maps?q=Bharat%20Milap%20Chitrakoot&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

function renderPlaces(filtered, keyword = "") {
  currentPlaceList = filtered;
  const placesList = document.getElementById("places-list");
  placesList.innerHTML = "";

  if (filtered.length === 0) {
    const msg = document.createElement("p");
    msg.style.textAlign = "center";
    msg.style.fontSize = "18px";
    msg.style.color = "red";
    msg.innerText = "No result found";
    placesList.appendChild(msg);
    return;
  }

  filtered.forEach((place) => {
    let name = currentLanguage === "hi" ? place.name_hi : place.name;
    const description = currentLanguage === "hi" ? place.description_hi : place.description;

    if (keyword) {
      const regex = new RegExp(`(${keyword})`, "gi");
      name = name.replace(regex, "<mark>$1</mark>");
    }

    const card = document.createElement("div");
    card.className = "place";
    card.innerHTML = `
      <img src="${place.cover}" alt="${place.name}">
      <h3>${name}</h3>
      <p>${description}</p>
    `;
    card.onclick = () => openModal(place);
    placesList.appendChild(card);
  });
}

function openModal(place) {
  const name = currentLanguage === "hi" ? place.name_hi : place.name;
  document.getElementById("modal-title").innerText = name;

  const gallery = document.getElementById("modal-gallery");
  gallery.innerHTML = "";

  let currentSlide = 0;
  let intervalId;

  const wrapper = document.createElement("div");
  wrapper.className = "modal-gallery-wrapper";

  const slideImg = document.createElement("img");
  slideImg.src = place.images[currentSlide];
  slideImg.onclick = () => {
    window.open(place.images[currentSlide], "_self");
  };

  const leftArrow = document.createElement("span");
  leftArrow.innerHTML = "&#8592;";
  leftArrow.className = "slide-arrow slide-left";
  leftArrow.onclick = () => {
    clearInterval(intervalId);
    currentSlide = (currentSlide - 1 + place.images.length) % place.images.length;
    slideImg.src = place.images[currentSlide];
  };

  const rightArrow = document.createElement("span");
  rightArrow.innerHTML = "&#8594;";
  rightArrow.className = "slide-arrow slide-right";
  rightArrow.onclick = () => {
    clearInterval(intervalId);
    currentSlide = (currentSlide + 1) % place.images.length;
    slideImg.src = place.images[currentSlide];
  };

  wrapper.appendChild(leftArrow);
  wrapper.appendChild(slideImg);
  wrapper.appendChild(rightArrow);
  gallery.appendChild(wrapper);

  if (place.images.length > 1) {
    intervalId = setInterval(() => {
      currentSlide = (currentSlide + 1) % place.images.length;
      slideImg.src = place.images[currentSlide];
    }, 3000);
  }

  document.getElementById("modal-map").src = place.map;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal-map").src = "";
}

// Initial render
renderPlaces(places);