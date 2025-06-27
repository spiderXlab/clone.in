 document.addEventListener("DOMContentLoaded", () => {

    const tvDiv = document.querySelector('.tv');

    // Array of movie-related images (you can replace these with your own URLs)

    const images = [

        'https://picsum.photos/300/200?random=1',

        'https://picsum.photos/300/200?random=2',

        'https://picsum.photos/300/200?random=3',

        'https://picsum.photos/300/200?random=4',

        'https://picsum.photos/300/200?random=5',

        "https://source.unsplash.com/300x200/?netflix",

        "https://source.unsplash.com/300x200/?series",

        "https://source.unsplash.com/300x200/?tv-show",

        "https://source.unsplash.com/300x200/?amazon-prime",

        "https://source.unsplash.com/300x200/?hbo",

        "https://source.unsplash.com/300x200/?disney",

        "https://source.unsplash.com/300x200/?thriller",

        "https://source.unsplash.com/300x200/?drama",

        "https://source.unsplash.com/300x200/?comedy",

        "https://source.unsplash.com/300x200/?action",

        "https://source.unsplash.com/300x200/?movie",

        "https://source.unsplash.com/300x200/?hollywood",

        "https://source.unsplash.com/300x200/?bollywood",

        "https://source.unsplash.com/300x200/?cinema",

        "https://source.unsplash.com/300x200/?film",

        "https://source.unsplash.com/300x200/?actor",

        "https://source.unsplash.com/300x200/?director",

        "https://source.unsplash.com/300x200/?scene",

        "https://source.unsplash.com/300x200/?poster",

        "https://source.unsplash.com/300x200/?marvel",

        "https://source.unsplash.com/300x200/?sports",

        "https://source.unsplash.com/300x200/?football",

        "https://source.unsplash.com/300x200/?cricket",

        "https://source.unsplash.com/300x200/?tennis",

        "https://source.unsplash.com/300x200/?basketball",

        "https://source.unsplash.com/300x200/?badminton",

        "https://source.unsplash.com/300x200/?volleyball",

        "https://source.unsplash.com/300x200/?hockey",

        "https://source.unsplash.com/300x200/?cycling",

        "https://source.unsplash.com/300x200/?swimming"

    ];

    function setRandomImage() {

        const randomIndex = Math.floor(Math.random() * images.length);

        const randomImage = images[randomIndex];

        // Create an image element to preload the image

        const img = new Image();

        img.src = randomImage;

        img.onload = () => {

            tvDiv.style.backgroundImage = `url('${randomImage}')`;

            tvDiv.style.backgroundSize = 'cover';

            tvDiv.style.backgroundPosition = 'center';

        };

    }

    

    // Set an initial image

    setRandomImage();

    // Change the image every 5 seconds

    setInterval(setRandomImage, 3000);

});
