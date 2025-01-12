const TOGGLE_MENU_ON_SMALL_SCREEN = () => {
  const HAMBURGER_MENU = document.querySelector(".header--hamburger-icon");
  const CLOSE_MENU = document.querySelector(".header--close-icon");
  const NAVIGATION_MENU = document.querySelector(".header--ul");

  const TOGGLE = () => {
    if (!HAMBURGER_MENU.classList.contains("hidden")) {
      HAMBURGER_MENU.classList.add("hidden");
      CLOSE_MENU.classList.remove("hidden");
      NAVIGATION_MENU.classList.remove("hidden");
    } else if (!CLOSE_MENU.classList.contains("hidden")) {
      HAMBURGER_MENU.classList.remove("hidden");
      CLOSE_MENU.classList.add("hidden");
      NAVIGATION_MENU.classList.add("hidden");
    }
  };
  HAMBURGER_MENU.addEventListener("click", TOGGLE);
  CLOSE_MENU.addEventListener("click", TOGGLE);
};

TOGGLE_MENU_ON_SMALL_SCREEN();

const PROJECT_FUNC = () => {
  // Grab the div that going to show the list of projects
  const projectsCard = document.querySelector("#projects");

  const projects = [
    {
      img: "./images/project-img-1.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features one",
      link: "link",
    },
    {
      img: "./images/project-img-2.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features Two",
      link: "link",
    },
    {
      img: "./images/slider-img-1.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features Three",
      link: "link",
    },
    {
      img: "./images/slider-img-2.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features Four",
      link: "link",
    },
    {
      img: "./images/slider-img-3.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features Five",
      link: "link",
    },
    {
      img: "./images/slider-img-4.jpg",
      tags: ["Web design", "UI/UX"],
      title: "Features six",
      link: "link",
    },
  ];

  const InnerList = projects.map((project) => {
    const { img, title, tags, link } = project;
    return `<li class="projects__list">
        <a href="${link}" target="_blank" class="projects__list--imgGroup">
          <img
            src="${img}"
            alt=""
            width="746"
            height="475"
          />
        </a>
        <div class="projects__list--text">
          <span>${tags[0]}</span>
          <span>${tags[1]}</span>
        </div>
        <div class="project__list--iconGroup">
          <a href="${link}" class="projects__list--icon">
            <img src="./images/icon-black-solid-sharp-arrow-right.svg" alt="arrow icon" />
          </a>
        </div>
        <div class="projects__list--bottomText">
          <h4>${title}</h4>
        </div>
      </li>`;
  });

  projectsCard.innerHTML = InnerList.join("");
};

PROJECT_FUNC();

const SERVICE_FUNC = () => {
  //Capturing the services block
  const services__block = document.querySelector(".services__block");

  //Creating service card object to store all the service in the home page
  const SERVICES_CARD = [
    {
      id: 1,
      icon: "",
      title: "Shopify Store Setup",
      description:
        "Get your online store up and running with ease! We provide end-to-end Shopify store setup services, including custom design, product uploads, payment and shipping configuration, SEO optimization, and seamless integrations. From domain setup to launch support, we ensure your store is fully functional, visually stunning, and ready to attract customers.",
    },
    {
      id: 2,
      icon: "",
      title: "Shopify Theme Customization",
      description:
        "Elevate your Shopify store with our expert theme customization services. Using Liquid, Shopify's powerful templating language, we tailor your theme with custom layouts, personalized color schemes, and advanced features. Whether it's creating interactive elements or refining your store's design, we ensure a seamless and unique experience that aligns perfectly with your brand.",
    },
    {
      id: 3,
      icon: "",
      title: "Shopify Themes Built from Scratch",
      description:
        "Creates bespoke Shopify themes tailored to your brand's unique identity and business goals. From innovative designs to advanced functionality, we deliver fully optimized, responsive, and user-friendly themes that enhance your e-commerce store and provide an exceptional customer experience",
    },
    {
      id: 4,
      icon: "",
      title: "Custom Shopify App Development and Customization",
      description:
        "Our team delivers expertly crafted Shopify apps tailored to your business needs. Whether building a custom app from the ground up or enhancing existing functionality, we provide seamless solutions designed to integrate perfectly with your store and elevate its performance.",
    },
    {
      id: 5,
      icon: "",
      title: "Shopify Email Marketing Solutions",
      description:
        "We provide expertly tailored email marketing solutions to help you connect with your customers and drive sales. From designing and automating campaigns to integrating powerful email tools directly within Shopify, we ensure a seamless, data-driven approach to maximize engagement and boost your store’s performance.",
    },
  ];
  const InnerServices = SERVICES_CARD.map((services) => {
    const { id, icon, title, description } = services;
    return `<a href="#" class="services__card">
            <div>
              <img
                src="./images/store-dukan-svgrepo-com.svg"
                alt="icon-store"
              />
            </div>
            <h4>${title}</h4>
            <p>
              ${description}
            </p>
          </a>`;
  });
  services__block.innerHTML = InnerServices.join("");
};

SERVICE_FUNC();

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question:
        "What programming languages do you use for custom Shopify development?",
      response:
        "We primarily use Liquid (Shopify's templating language), HTML, CSS, JavaScript, and Ruby for custom app development and theme modifications to ensure seamless integrations and enhanced store functionality.",
    },
    {
      id: 2,
      question: "How do you integrate third-party apps with Shopify?",
      response:
        "We integrate third-party applications using Shopify’s API, webhooks, and custom app development to enhance your store’s functionality, ensuring smooth data transfer, real-time updates, and optimized workflows.",
    },
    {
      id: 3,
      question:
        "What are the best practices for optimizing Shopify store performance?",
      response:
        "We optimize store performance through techniques like lazy loading, image compression, script minification, caching strategies, CDN integration, and database optimization to reduce load times and improve user experience.",
    },
    {
      id: 4,
      question: "How do you ensure the security of my Shopify store?",
      response:
        "We implement best practices for security, such as SSL encryption, regular software updates, secure payment gateway integration, two-factor authentication, and vulnerability scans to protect your store from data breaches and attacks.",
    },
    {
      id: 5,
      question: "Can you help with custom Shopify app development?",
      response:
        "Yes, we specialize in developing custom Shopify apps using Shopify’s API and private apps to add unique features, automate processes, and provide tailored solutions that integrate seamlessly with your store’s existing ecosystem.",
    },
  ];

  //Let add the faq in the html
  const containerGroup = document.querySelector(".faq__containerGroup");
  const InerFAQ = faqs.map((faq) => {
    const { id, question, response } = faq;
    return `<div class="faq__container">
            <div class="faq__card">
              <!-- Question -->
              <div class="faq__question">
                <div class="faq__question-title">
                  <h3>${question}</h3>
                </div>
                <div class="faq__question-icons">
                  <span class="faq__question-iconPlus">
                    <img
                      src="./images/plus-circle-svgrepo-com.svg"
                      alt="icon plus"
                    />
                  </span>
                  <span class="faq__question-iconMinus">
                    <img
                      src="./images/minus-circle-svgrepo-com.svg"
                      alt="icon minus"
                    />
                  </span>
                </div>
              </div>
              <!-- Response -->
              <div class="faq__response">
                <p>
                  ${response}
                </p>
              </div>
            </div>
          </div>`;
  });
  containerGroup.innerHTML = InerFAQ.join();

  // Toggle faq
  const responseSection = document.querySelectorAll(".faq__response");
  const minusIcon = document.querySelectorAll(".faq__question-iconMinus");
  const plusIcon = document.querySelectorAll(".faq__question-iconPlus");

  for (let p = 0; p < plusIcon.length; p++) {
    plusIcon[p].addEventListener("click", (e) => {
      // Loop minus icon
      for (let m = 0; m < minusIcon.length; m++) {
        //Loop response
        for (let r = 0; r < responseSection.length; r++) {
          if (p === r) {
            responseSection[r].style.display = "block";
            plusIcon[p].style.display = "none";
            minusIcon[m].style.display = "block";
          }
        }
      }
    });
  }
};

FAQ();
