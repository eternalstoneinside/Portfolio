// Language translations
const translations = {
	en: {
		hero: "Hey, I am Dmytro Orlenko",
		heroDesc:
			"I craft clean, modern web experiences with focus on performance and intuitive design.",
		heroLabel: "Hero",
		techStackLabel: "Tech Stack",
		aboutLabel: "About",
		socialsLabel: "Socials",
		projectsLabel: "Projects",
		aboutText:
			"Front-end developer passionate about creating beautiful, responsive interfaces. I combine clean code with smooth animations and pixel-perfect attention to detail.",
		project1Title: "Wevv",
		project1Desc:
			"Wavv Lite is a lightweight browser speed and stability test that measures latency, jitter and download speed in real time.",
		project1Link: "Code on GitHub",
		project2Title: "Productivio",
		project2Desc:
			"Productivity web app with task board, notes, Pomodoro timer and mood tracker in one dashboard.",
		project2Link: "Code on GitHub",
		project3Title: "AIM Game",
		project3Desc:
			"Browser aim trainer with time modes, difficulty levels, hit accuracy tracking and ranked mode.",
		project3Link: "Code on GitHub",
		project4Title: "Lovee",
		project4Desc:
			"Romantic flower delivery landing with catalog sections, composition picks, booking flow and checkout screens.",
		project4Link: "Code on GitHub",
		project5Title: "Dzherelo Restaurant",
		project5Desc:
			"Cafe-restaurant website with menu highlights, pizza section, gallery, map and table reservation flow.",
		project5Link: "Code on GitHub",
		project6Title: "Bridge",
		project6Desc:
			"Debit card promo landing with earning mechanics, step-by-step onboarding and app download CTA flow.",
		project6Link: "Code on GitHub",
	},
	uk: {
		hero: "Привіт, я Дмитро Орленко",
		heroDesc:
			"Я створюю чисті, сучасні веб-досвіди зосереджуючись на продуктивності й інтуїтивному дизайні.",
		heroLabel: "Герой",
		techStackLabel: "Технологічний стек",
		aboutLabel: "Про мене",
		socialsLabel: "Соціальні мережі",
		projectsLabel: "Проекти",
		aboutText:
			"Front-end розробник, захоплений створенням красивих адаптивних інтерфейсів. Я поєдную чистий код зі плавною анімацією та пристальною увагою до деталей.",
		project1Title: "Wevv",
		project1Desc:
			"Wavv Lite - легкий веб-додаток для тесту швидкості та стабільності мережі: вимірює latency, jitter і download speed у реальному часі.",
		project1Link: "Код на GitHub",
		project2Title: "Productivio",
		project2Desc:
			"Продуктивний веб-додаток з таскбордом, нотатками, Pomodoro-таймером і трекером настрою в одному дашборді.",
		project2Link: "Код на GitHub",
		project3Title: "AIM Game",
		project3Desc:
			"Браузерний aim-тренажер з режимами часу, рівнями складності, статистикою влучань та ranked-режимом.",
		project3Link: "Код на GitHub",
		project4Title: "Lovee",
		project4Desc:
			"Романтичний flower-delivery лендінг з каталогом, добіркою композицій, формою бронювання та екранами checkout.",
		project4Link: "Код на GitHub",
		project5Title: "Dzherelo Restaurant",
		project5Desc:
			"Сайт кафе-ресторану з меню, секцією піци, галереєю, мапою та формою бронювання столика.",
		project5Link: "Код на GitHub",
		project6Title: "Bridge",
		project6Desc:
			"Промо-лендінг дебетової картки з механікою заробітку, покроковим онбордингом і CTA на завантаження застосунку.",
		project6Link: "Код на GitHub",
	},
	pl: {
		hero: "Cześć, jestem Dmytro Orlenko",
		heroDesc:
			"Tworzę czyste, nowoczesne doświadczenia webowe z naciskiem na wydajność i intuicyjny design.",
		heroLabel: "Bohater",
		techStackLabel: "Stos techniczny",
		aboutLabel: "O mnie",
		socialsLabel: "Sieci społeczne",
		projectsLabel: "Projekty",
		aboutText:
			"Programista front-end pasjonujący się tworzeniem pięknych, responsywnych interfejsów. Łączę czysty kod z płynnymi animacjami i pieczołowitą uwagą do szczegółów.",
		project1Title: "Wevv",
		project1Desc:
			"Wavv Lite to lekki test szybkosci i stabilnosci lacza w przegladarce, mierzacy latency, jitter oraz download speed w czasie rzeczywistym.",
		project1Link: "Kod na GitHub",
		project2Title: "Productivio",
		project2Desc:
			"Aplikacja produktywnosci z tablica zadan, notatkami, timerem Pomodoro i trackerem nastroju w jednym dashboardzie.",
		project2Link: "Kod na GitHub",
		project3Title: "AIM Game",
		project3Desc:
			"Przegladarkowy trainer celowania z trybami czasu, poziomami trudnosci, statystykami trafien i trybem ranked.",
		project3Link: "Kod na GitHub",
		project4Title: "Lovee",
		project4Desc:
			"Romantyczny landing flower-delivery z katalogiem, wyborami kompozycji, flow rezerwacji i ekranami checkout.",
		project4Link: "Kod na GitHub",
		project5Title: "Dzherelo Restaurant",
		project5Desc:
			"Strona cafe-restauracji z menu, sekcja pizzy, galeria, mapa i flow rezerwacji stolika.",
		project5Link: "Kod na GitHub",
		project6Title: "Bridge",
		project6Desc:
			"Landing promocyjny karty debetowej z mechanika zarabiania, krokowym onboardingiem i CTA do pobrania aplikacji.",
		project6Link: "Kod na GitHub",
	},
};

let currentLang = "en";

function setLanguage(lang) {
	currentLang = lang;
	localStorage.setItem("preferredLang", lang);

	// Update button active state
	document.querySelectorAll(".lang-btn").forEach((btn) => {
		btn.classList.toggle("is-active", btn.dataset.lang === lang);
	});

	// Update page content
	const t = translations[lang];

	// Hero section
	const heroTitle = document.querySelector(".hero-card__content h1");
	if (heroTitle) heroTitle.textContent = t.hero;

	const heroDesc = document.querySelector(".hero-card__content p");
	if (heroDesc) heroDesc.textContent = t.heroDesc;

	const heroLabel = document.querySelector(".hero-card .card-label");
	if (heroLabel) heroLabel.textContent = t.heroLabel;

	// Tech Stack label
	const stackLabel = document.querySelector(".stack-card .card-label");
	if (stackLabel) stackLabel.textContent = t.techStackLabel;

	// Socials label
	const socialsLabel = document.querySelector(".social-card .card-label");
	if (socialsLabel) socialsLabel.textContent = t.socialsLabel;

	// About section
	const aboutLabel = document.querySelector(".about-card .card-label");
	if (aboutLabel) aboutLabel.textContent = t.aboutLabel;

	// Update About section text
	const aboutText = document.querySelector(".about-card .about-summary");
	if (aboutText) aboutText.textContent = t.aboutText;

	// Projects section
	const projectsLabel = document.querySelector(".projects-card .card-label");
	if (projectsLabel) projectsLabel.textContent = t.projectsLabel;

	const slides = document.querySelectorAll(".slide");
	if (slides.length >= 3) {
		const project1TitleLink = slides[0].querySelector(".project-title-link");
		if (project1TitleLink) {
			project1TitleLink.textContent = t.project1Title;
		} else {
			slides[0].querySelector("h3").textContent = t.project1Title;
		}
		slides[0].querySelector("p").textContent = t.project1Desc;
		const project1Link = slides[0].querySelector(".project-link");
		if (project1Link) project1Link.textContent = t.project1Link;
		const project2TitleLink = slides[1].querySelector(".project-title-link");
		if (project2TitleLink) {
			project2TitleLink.textContent = t.project2Title;
		} else {
			slides[1].querySelector("h3").textContent = t.project2Title;
		}
		slides[1].querySelector("p").textContent = t.project2Desc;
		const project2Link = slides[1].querySelector(".project-link");
		if (project2Link) project2Link.textContent = t.project2Link;
		const project3TitleLink = slides[2].querySelector(".project-title-link");
		if (project3TitleLink) {
			project3TitleLink.textContent = t.project3Title;
		} else {
			slides[2].querySelector("h3").textContent = t.project3Title;
		}
		slides[2].querySelector("p").textContent = t.project3Desc;
		const project3Link = slides[2].querySelector(".project-link");
		if (project3Link) project3Link.textContent = t.project3Link;

		if (slides.length >= 4) {
			const project4TitleLink = slides[3].querySelector(".project-title-link");
			if (project4TitleLink) {
				project4TitleLink.textContent = t.project4Title;
			} else {
				slides[3].querySelector("h3").textContent = t.project4Title;
			}
			slides[3].querySelector("p").textContent = t.project4Desc;
			const project4Link = slides[3].querySelector(".project-link");
			if (project4Link) project4Link.textContent = t.project4Link;
		}

		if (slides.length >= 5) {
			const project5TitleLink = slides[4].querySelector(".project-title-link");
			if (project5TitleLink) {
				project5TitleLink.textContent = t.project5Title;
			} else {
				slides[4].querySelector("h3").textContent = t.project5Title;
			}
			slides[4].querySelector("p").textContent = t.project5Desc;
			const project5Link = slides[4].querySelector(".project-link");
			if (project5Link) project5Link.textContent = t.project5Link;
		}

		if (slides.length >= 6) {
			const project6TitleLink = slides[5].querySelector(".project-title-link");
			if (project6TitleLink) {
				project6TitleLink.textContent = t.project6Title;
			} else {
				slides[5].querySelector("h3").textContent = t.project6Title;
			}
			slides[5].querySelector("p").textContent = t.project6Desc;
			const project6Link = slides[5].querySelector(".project-link");
			if (project6Link) project6Link.textContent = t.project6Link;
		}
	}

	// Update page title
	document.title = `Portfolio | Dmytro (${lang.toUpperCase()})`;
	document.documentElement.lang = lang;
}

// Language switcher event listeners
document.querySelectorAll(".lang-btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		setLanguage(btn.dataset.lang);
	});
});

// Load saved language or default to 'en'
const savedLang = localStorage.getItem("preferredLang") || "en";
setLanguage(savedLang);

// Carousel code
const track = document.querySelector(".carousel__track");
const dots = Array.from(document.querySelectorAll(".dot"));
const prevBtn = document.querySelector('[data-carousel="prev"]');
const nextBtn = document.querySelector('[data-carousel="next"]');
const carousel = document.querySelector(".carousel");
const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

let currentIndex = 0;
const slideCount = dots.length;
let autoplayId = null;

// Swipe/drag tracking
let dragStart = 0;
let dragEnd = 0;
let isDragging = false;

function renderCarousel() {
	if (!track || slideCount === 0) {
		return;
	}

	track.style.transform = `translateX(-${currentIndex * 100}%)`;
	dots.forEach((dot, index) => {
		dot.classList.toggle("is-active", index === currentIndex);
	});
}

function nextSlide() {
	if (slideCount < 2) {
		return;
	}

	currentIndex = (currentIndex + 1) % slideCount;
	renderCarousel();
}

function startAutoplay() {
	if (slideCount < 2 || prefersReducedMotion) {
		return;
	}

	stopAutoplay();
	autoplayId = window.setInterval(nextSlide, 4200);
}

function stopAutoplay() {
	if (autoplayId !== null) {
		window.clearInterval(autoplayId);
		autoplayId = null;
	}
}

if (prevBtn) {
	prevBtn.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + slideCount) % slideCount;
		renderCarousel();
		startAutoplay();
	});
}

if (nextBtn) {
	nextBtn.addEventListener("click", () => {
		nextSlide();
		startAutoplay();
	});
}

dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentIndex = index;
		renderCarousel();
		startAutoplay();
	});
});

if (carousel) {
	carousel.setAttribute("tabindex", "0");
	carousel.setAttribute("aria-label", "Projects carousel");

	carousel.addEventListener("mouseenter", stopAutoplay);
	carousel.addEventListener("mouseleave", startAutoplay);

	// Drag/swipe events
	carousel.addEventListener("mousedown", (e) => {
		isDragging = true;
		dragStart = e.clientX;
		track.classList.add("dragging");
		stopAutoplay();
	});

	carousel.addEventListener("mousemove", (e) => {
		if (!isDragging) return;
		dragEnd = e.clientX;
	});

	carousel.addEventListener("mouseup", () => {
		if (!isDragging) return;
		isDragging = false;
		track.classList.remove("dragging");

		const threshold = 50; // минимум пиксели для свайпа
		const diff = dragStart - dragEnd;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				// Свайп влево → следующий слайд
				nextSlide();
			} else {
				// Свайп вправо → предыдущий слайд
				currentIndex = (currentIndex - 1 + slideCount) % slideCount;
				renderCarousel();
			}
		}

		startAutoplay();
	});

	carousel.addEventListener("mouseleave", () => {
		isDragging = false;
		track.classList.remove("dragging");
		startAutoplay();
	});

	carousel.addEventListener(
		"touchstart",
		(e) => {
			if (!e.touches.length) return;
			isDragging = true;
			dragStart = e.touches[0].clientX;
			dragEnd = dragStart;
			stopAutoplay();
		},
		{ passive: true },
	);

	carousel.addEventListener(
		"touchmove",
		(e) => {
			if (!isDragging || !e.touches.length) return;
			dragEnd = e.touches[0].clientX;
		},
		{ passive: true },
	);

	carousel.addEventListener(
		"touchend",
		() => {
			if (!isDragging) return;
			isDragging = false;
			const threshold = 40;
			const diff = dragStart - dragEnd;

			if (Math.abs(diff) > threshold) {
				if (diff > 0) {
					nextSlide();
				} else {
					currentIndex = (currentIndex - 1 + slideCount) % slideCount;
					renderCarousel();
				}
			}

			startAutoplay();
		},
		{ passive: true },
	);

	carousel.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			currentIndex = (currentIndex - 1 + slideCount) % slideCount;
			renderCarousel();
			startAutoplay();
		}

		if (e.key === "ArrowRight") {
			e.preventDefault();
			nextSlide();
			startAutoplay();
		}
	});
}

document.addEventListener("visibilitychange", () => {
	if (document.hidden) {
		stopAutoplay();
	} else {
		startAutoplay();
	}
});

renderCarousel();
startAutoplay();
