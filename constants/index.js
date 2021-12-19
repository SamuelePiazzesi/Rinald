import SkillsList from "../components/skills-list";
import _ from "lodash";

export const studies = [
	{
		id: "st1",
		title: "I miei studi",
		video: "/videos/studies.mp4",
		image: "/images/studi-1.png",
	},
	{
		id: "st2",
		title: "I miei studi",
		video: "/videos/studies.mp4",
		image: "/images/studi-2.png",
	},
	{
		id: "st3",
		title: "I miei studi",
		video: "/videos/studies.mp4",
		image: "/images/studi-3.png",
	},
];

export const experiences = [
	{
		id: "exp1",
		title: "Le mie esperienze",
		video: "/videos/test.mp4",
		image: "/images/esperienze-1.png",
	},
	{
		id: "exp2",
		title: "Le mie esperienze",
		video: "/videos/test.mp4",
		image: "/images/esperienze-2.png",
	},
	{
		id: "exp3",
		title: "Le mie esperienze",
		video: "/videos/test.mp4",
		image: "/images/esperienze-3.png",
	},
];

export const skills = [
	{
		id: "sk1",
		title: "Le mie skill",
		video: "/videos/skills.mp4",
		image: "/images/skills-1.png",
		description: <SkillsList />,
	},
	{
		id: "sk2",
		title: "Le mie skill",
		video: "/videos/skills.mp4",
		image: "/images/skills-2.png",
		description: <SkillsList />,
	},
	{
		id: "sk3",
		title: "Le mie skill",
		video: "/videos/skills.mp4",
		image: "/images/skills-3.png",
		description: <SkillsList />,
	},
];

export const jumbotron = {
	id: "jumbotron",
	video: "/videos/test.mp4",
	image: "/images/jumbotron.png",
	title: "Un po’ di informazioni su di me",
	description: (
		<>
			<p className="mb-4">
				Mi chiamo Rinald, sono nato il 13 Ottobre 1993 a Manez, in Albania. Nel
				’97 sono arrivato in Italia, precisamente in provincia di Pordenone, in
				Friuli Venezia Giulia.
			</p>
			<p className="mb-4">
				Durante le superiori ho sviluppato una passione per i software di
				editing (sia video che immagini), seguendo i primi corsi online e
				mettendo in pratica il tutto tramite i miei primi lavoretti sui social
				network. Nel 2012 mi diplomo come Tecniche delle industrie elettroniche
				e telecomunicazioni, sempre a Pordenone. Nello stesso anno inizio il mio
				percorso di studi all’università di Udine, scegliendo il ramo di Scienze
				e Tecnologie Multimediali.
			</p>
			<p className="mb-4">
				È qui che decido di iniziare a mettere in pratica queste nuove
				conoscienze, iniziando a lavorare come freelancer nelle zone friulane,
				creando diverse campagne pubblicitarie sui Social Network e curando le
				grafiche e le promozioni. Nel 2016 completo il mio percorso di studi
				negli anni prestabiliti e decido di iniziare una nuova avventura, più
				grande, e che mi avrebbe portato a Milano.
			</p>
			<p className="mb-4">
				Inizio a lavorare per Wedos, una piccola azienda di Digital Marketing,
				che presto si trasformerà in Rewave, aggiungendo al markering una parte
				Tech. In questo periodo inizio ad interessarmi sui nuovi strumenti di
				marketing e nuovi software, come la creazione di filtri tramite il
				software Spark AR, la tecnologia augmented reality e modellazione 3D.
				Prezo l’azienda verrà acquisita da una nuova e giovane realtà, Spinup.
			</p>
			<p className="mb-4">
				In questa nuova avventura ricopro il ruolo di Direttore Creativo, con lo
				scopo di puntare sulla creatività le diverse campagne marketing dei
				nostri clienti, con nuove soluzioni alternative ed uniche ogni giorno.
				Questa esperienza mi darà le basi per poter gestire un team creativo,
				collaborare con i diversi team e riuscire a gestire, proporre nuove idee
				e analizzare le campagne dei clienti.
			</p>
			<p>
				Attualmente sto continuando qui questa mia avventura, ma sento di aver
				ancora molto da scoprire e sono sicuro che troverò nuove realtà
				interessanti, che mi aiuteranno ad ampliare i miei orizzonti e
				sviluppare nuove abilità che riguardano il mio lavoro.
			</p>
		</>
	),
};

export const lives = [
	{
		id: "work",
		title: "Live",
		video: "/videos/live/work.mp4",
		description: [
			"Sto cercando di lavorare, ti prego non disturbarmi",
			"Sono occupatissimo al momento...",
			"Non posso parlare adesso",
			"Lavoro durissimo",
			"Ancora tu? Dai lasciami lavorare!",
		],
	},
	{
		id: "break",
		title: "Live",
		video: "/videos/live/break.mp4",
		description: [
			"Sto leggendo, ci sentiamo dopo?",
			"Sto cercando di leggere un buon libro. Lo faccio ogni mattina, giuro.",
			"Sono in pausa!",
			"La colazione è il pasto più importante della giornata",
		],
	},
	{
		id: "lunch",
		title: "Live",
		video: "/videos/live/lunch.mp4",
		description: [
			"Sto pranzando, ci sentiamo dopo?",
			"Sto mangiando qualche schifezza. Lo so, dovrei smetterla...",
			"Sono in pausa!",
			"Fuori a pranzo con i miei colleghi",
		],
	},
	{
		id: "off",
		title: "Live",
		video: "/videos/live/off.mp4",
		description: [
			"Ma che ci fai qua a quest'ora? Non vedi che è tardissimo?",
			"Out of office - Torno domani",
			"Sono uscito! ci sentiamo domani?",
			"Ho bisogno di dormire anche io sai",
		],
	},
];

export const skillsList = [
	{
		title: "Social Media Management",
		premium: true,
	},
	{
		title: "Content Management",
		premium: true,
	},

	{
		title: "Adobe Suite",
		premium: true,
	},
	{
		title: "Photoshop",
		premium: false,
	},
	{
		title: "Premiere",
		premium: false,
	},
	{
		title: "Copywriting",
		premium: false,
	},
	{
		title: "Marketing campaigns",
		premium: true,
	},
	{
		title: "CSS",
		premium: false,
	},
	{
		title: "HTML",

		premium: false,
	},
	{
		title: "Shopify",
		premium: false,
	},
	{
		title: "Visual Concept",
		premium: true,
	},
	{
		title: "UX/UI Design",
		premium: false,
	},
	{
		title: "Illustrator",
		premium: false,
	},
	{
		title: "After Effects",
		premium: true,
	},
	{
		title: "Audition",
		premium: false,
	},

	{
		title: "Instagram filters",
		premium: true,
	},
	{
		title: "Spark AR",
		premium: false,
	},
	{
		title: "Audio/video Production",
		premium: true,
	},
	{
		title: "Facebook Business Manager",
		premium: false,
	},
	{
		title: "Data analysis",
		premium: false,
	},
	{
		title: "Creative Team Management",
		premium: false,
	},
	{
		title: "Canva",
		premium: false,
	},
	{
		title: "Wordpress",
		premium: false,
	},
	{
		title: "E-Commerce",
		premium: true,
	},
];

export const notifications = [
	"Imprenditore Imbruttito ha appena visualizzato il mio sito",
	"Elon Musk ha appena scaricato il mio CV",
	"3 persone hanno appena confuso questo sito per Netflix",
	"Bill Gates mi ha appena chiesto di entrate nei massoni",
	"Un principe africano mi ha proposto un contratto a sei zeri se prima gli mando 5k euro ",
	"Jeff Bezos ha appena offerto il triplo per rifare questo sito come Amazon prime video",
];
