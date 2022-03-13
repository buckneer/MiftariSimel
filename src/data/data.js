let projects = [
  {
    id: 1,
    name: "Magic Match",
    img: ['/img/magic-match/1.jpeg', '/img/magic-match/2.jpeg', '/img/magic-match/3.jpeg', '/img/magic-match/4.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "react",
    thumb: '/img/thumbs/magic-match.jpeg'
  },
  {
    id: 2,
    name: "Portfolio",
    img: ['/img/portfolio/1.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "vue",
    thumb: '/img/thumbs/portfolio.jpeg'
  },
  {
    id: 3,
    name: "MusicShare",
    img: ['/img/musicshare/1.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "native",
    thumb: '/img/thumbs/music-share.jpeg'
  },
  {
    id: 4,
    name: "Ekonomsko-turisticka Skola",
    img: ['/img/school/1.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "native",
    thumb: '/img/thumbs/school.jpeg'
  },
  {
    id: 5,
    name: "BabySi",
    img: ['/img/babysi/1.jpeg', '/img/babysi/2.jpeg', '/img/babysi/3.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/baby-si.jpeg'
  },
  {
    id: 6,
    name: "Guessing Game",
    img: ['/img/guess/1.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/guess-word.jpeg'
  },
  {
    id: 7,
    name: "MyDentSched",
    img: ['/img/dent/1.jpeg', '/img/dent/2.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/dent-sched.jpeg'
  },
  {
    id: 8,
    name: "Nasa News",
    img: ['/img/nasanews/1.jpeg', '/img/nasanews/2.jpeg', '/img/nasanews/3.jpeg', '/img/nasanews/4.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/nasa-news.jpeg'
  },
  {
    id: 9,
    name: "Nature Gallery",
    img: ['/img/nature/1.jpeg', '/img/nature/2.jpeg', '/img/nature/3.jpeg', "/img/nature/4.jpeg", '/img/nature/5.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/nature-gallery.jpeg'
  },
  {
    id: 10,
    name: "Tonight's Movie",
    img: ['/img/tonights/1.jpeg', '/img/tonights/2.jpeg', '/img/tonights/3.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "android",
    thumb: '/img/thumbs/tonights.jpeg'
  },
  {
    id: 11,
    name: "Online Karma Shop",
    img: ['/img/shop/1.jpeg'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim nulla. Nam sagittis sit amet orci ut placerat. Cras purus libero, venenatis id dui a, lobortis molestie est.",
    category: "native",
    thumb: '/img/thumbs/shop.jpeg'
  }

//  Add more

]

const buttons = [
  {
    name: "All",
    value: "all"
  },
  {
    name: "Android",
    value: "android"
  },
  {
    name: "Native",
    value: "native"
  },
  {
    name: "React",
    value: "react"
  },
  {
    name: "Vue",
    value: "vue"
  }
]

export {projects, buttons};

