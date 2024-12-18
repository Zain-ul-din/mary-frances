const links = {
  "Buttered Toast": "/recipe/buttered-toast",
  Omelet: "/recipe/omelet",
  "Queen of Hearts Tarts": "/recipe/queen-of-hearts-tarts"
};

const recipes = [
  [
    {
      label: "EASY RECIPES",
      category: "easy",
      cards: [
        {
          title: "Buttered Toast",
          label: "easy",
          img: "/assets/butter-toast.png",
          link: links["Buttered Toast"]
        },
        {
          title: "Jacket-Boiled Potatoes",
          label: "easy",
          img: "/assets/quiz-task.png"
        },
        { title: "Boiled Eggs", label: "easy", img: "/assets/boiled-eggs.png" }
      ]
    },
    {
      label: "MEDIUM RECIPES",
      category: "medium",
      cards: [
        {
          title: "Omelet",
          link: links["Omelet"],
          label: "medium",
          img: "/assets/omelet.png"
        },
        {
          title: "Baked Apples",
          label: "medium",
          img: "/assets/baked-apple.png"
        },
        {
          title: "Baking Powder Biscuits",
          label: "medium",
          img: "/assets/biscuits.png"
        }
      ]
    },
    {
      label: "DIFFICULT RECIPES",
      category: "difficult",
      cards: [
        {
          title: "Queen of Hearts Tarts",
          label: "hard",
          img: "/assets/hearts.png",
          link: links["Queen of Hearts Tarts"]
        },
        { title: "Bread Pudding", label: "hard", img: "/assets/bread.png" },
        {
          title: "Gingerbread Cookies",
          label: "hard",
          img: "/assets/ginger-bread.png"
        }
      ]
    }
  ],
  [
    {
      label: "FAST RECIPES",
      category: "lengthy",
      cards: [
        {
          title: "Buttered Toast",
          link: links["Buttered Toast"],
          label: "10 min.",
          img: "/assets/butter-toast.png"
        },
        {
          title: "Omelet",
          label: "10 min.",
          img: "/assets/omelet.png",
          link: links["Omelet"]
        },
        {
          title: "Boiled Eggs",
          label: "15 min.",
          img: "/assets/boiled-eggs.png"
        }
      ]
    },
    {
      label: "MEDIUM RECIPES",
      category: "medium",
      cards: [
        {
          title: "Gingerbread Cookies",
          label: "20 min.",
          img: "/assets/ginger-bread.png"
        },
        { title: "Bread Pudding", label: "30 min.", img: "/assets/bread.png" },
        {
          title: "Baking Powder Biscuits",
          label: "30 min.",
          img: "/assets/biscuits.png"
        }
      ]
    },
    {
      label: "LENGTHY RECIPES",
      category: "fast",
      cards: [
        {
          title: "Baked Apples",
          label: "45 min.",
          img: "/assets/baked-apple.png"
        },
        {
          title: "Jacket-Boiled Potatoes",
          label: "45 min.",
          img: "/assets/quiz-task.png"
        },
        {
          title: "Queen of Hearts Tarts",
          link: links["Queen of Hearts Tarts"],
          label: "1 hour.",
          img: "/assets/hearts.png"
        }
      ]
    }
  ],
  [
    {
      label: "BREAKFAST RECIPES",
      category: "breakfast",
      cards: [
        {
          title: "Buttered Toast",
          label: "BREAKFAST",
          img: "/assets/butter-toast.png",
          link: links["Buttered Toast"]
        },
        {
          title: "Omelet",
          label: "BREAKFAST",
          img: "/assets/omelet.png",
          link: links["Omelet"]
        },
        {
          title: "Boiled Eggs",
          label: "BREAKFAST",
          img: "/assets/boiled-eggs.png"
        }
      ]
    },
    {
      label: "LUNCH RECIPES",
      category: "lunch",
      cards: [
        {
          title: "Jacket-Boiled Potatoes",
          label: "LUNCH",
          img: "/assets/quiz-task.png"
        },
        {
          title: "Baked Apples",
          label: "LUNCH",
          img: "/assets/baked-apple.png"
        },
        {
          title: "Baking Powder Biscuits",
          label: "LUNCH",
          img: "/assets/biscuits.png"
        }
      ]
    },
    {
      label: "DESSERT RECIPES",
      category: "dessert",
      cards: [
        {
          title: "Gingerbread Cookies",
          label: "DESSERT",
          img: "/assets/ginger-bread.png"
        },
        { title: "Bread Pudding", label: "DESSERT", img: "/assets/bread.png" },
        {
          title: "Queen of Hearts Tarts",
          link: links["Queen of Hearts Tarts"],
          label: "DESSERT",
          img: "/assets/hearts.png"
        }
      ]
    }
  ]
];
