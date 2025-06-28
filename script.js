document.addEventListener("DOMContentLoaded", () => {
  const tvDiv = document.querySelector('.tv');

  const images = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5',
    'https://source.unsplash.com/300x200/?netflix',
    'https://source.unsplash.com/300x200/?series',
    'https://source.unsplash.com/300x200/?tv-show',
    'https://source.unsplash.com/300x200/?amazon-prime',
    'https://source.unsplash.com/300x200/?hbo',
    'https://source.unsplash.com/300x200/?disney',
    'https://source.unsplash.com/300x200/?thriller',
    'https://source.unsplash.com/300x200/?drama',
    'https://source.unsplash.com/300x200/?comedy',
    'https://source.unsplash.com/300x200/?action',
    'https://source.unsplash.com/300x200/?movie',
    'https://source.unsplash.com/300x200/?hollywood',
    'https://source.unsplash.com/300x200/?bollywood',
    'https://source.unsplash.com/300x200/?cinema',
    'https://source.unsplash.com/300x200/?film',
    'https://source.unsplash.com/300x200/?actor',
    'https://source.unsplash.com/300x200/?director',
    'https://source.unsplash.com/300x200/?scene',
    'https://source.unsplash.com/300x200/?poster',
    'https://source.unsplash.com/300x200/?marvel',
    'https://source.unsplash.com/300x200/?sports',
    'https://source.unsplash.com/300x200/?football',
    'https://source.unsplash.com/300x200/?cricket',
    'https://source.unsplash.com/300x200/?tennis',
    'https://source.unsplash.com/300x200/?basketball',
    'https://source.unsplash.com/300x200/?badminton',
    'https://source.unsplash.com/300x200/?volleyball',
    'https://source.unsplash.com/300x200/?hockey',
    'https://source.unsplash.com/300x200/?cycling',
    'https://source.unsplash.com/300x200/?swimming'
  ];

  let currentIndex = 0;
  let imgFade;

  function setImageWithFade(index) {
    if (!tvDiv) return;

    const newImage = new Image();
    newImage.src = images[index];

    newImage.onload = () => {
      tvDiv.style.opacity = 0;
      clearTimeout(imgFade);

      imgFade = setTimeout(() => {
        tvDiv.style.backgroundImage = `url('${newImage.src}')`;
        tvDiv.style.opacity = 1;
      }, 500);
    };
  }

  setImageWithFade(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    setImageWithFade(currentIndex);
  }, 3000);
});
