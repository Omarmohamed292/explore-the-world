    const destinations = [
        {
            num: "01",
            country: "FRANCE",
            city: "Paris",
            desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
            continent: "Europe",
            food: "Croissant, Macarons",
            place: "Eiffel Tower",
            lang: "French",
            img: "paris.jpg"
        },
        {
            num: "02",
            country: "JAPAN",
            city: "Tokyo",
            desc: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
            continent: "Asia",
            food: "Sushi, Ramen",
            place: "Tokyo Tower",
            lang: "Japanese",
            img: "tokyo.jpg"
        },
        {
            num: "03",
            country: "ITALY",
            city: "Rome",
            desc: "Rome is a historic city known for its ancient ruins, stunning art, and world-famous cuisine.",
            continent: "Europe",
            food: "Pizza, Pasta",
            place: "Colosseum",
            lang: "Italian",
            img: "rome.jpg"
        },
        {
            num: "04",
            country: "EGYPT",
            city: "Cairo",
            desc: "Cairo is a vibrant city rich in ancient history, culture, and home to the Great Pyramids.",
            continent: "Africa",
            food: "Koshary, Falafel",
            place: "Pyramids of Giza",
            lang: "Arabic",
            img: "cairo.jpg"
        }
    ];

    let currentIndex = 0; 
    const dots = document.querySelectorAll(".dot");

    function updateCard(index) {
        const item = destinations[index];
        document.getElementById("slide-num").textContent = item.num;
        document.getElementById("badge-num").textContent = item.num;
        document.getElementById("country").textContent = item.country;
        document.getElementById("city").textContent = item.city;
        document.getElementById("description").textContent = item.desc;
        document.getElementById("continent").textContent = item.continent;
        document.getElementById("food").textContent = item.food;
        document.getElementById("place").textContent = item.place;
        document.getElementById("language").textContent = item.lang;
        document.getElementById("city-img").src = item.img;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    document.getElementById("next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % destinations.length; 
        updateCard(currentIndex);
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + destinations.length) % destinations.length; 
        updateCard(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.style.cursor = "pointer";
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCard(currentIndex);
        });
    });
document.querySelectorAll(".explore-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("txt").scrollIntoView({
            behavior: "smooth"
        });
    });
});
