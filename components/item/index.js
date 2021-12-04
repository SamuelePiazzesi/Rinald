import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import CloseIcon from "../ui/icons/close";
import MailIcon from "../ui/icons/mail";
import PhoneIcon from "../ui/icons/phone";

const Item = ({ item, onClose }) => {
	const { id } = item;

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: "auto" }}
				className="detail-overlay z-20"
			></motion.div>
			<div className="card-content-container open">
				<motion.div className="card-content" layoutId={`card-container-${id}`}>
					<button
						className="absolute h-10 w-10 flex justify-center bg-opacity-75 items-center full-rounded bg-white shadow-2xl right-2 top-2 rounded-full z-50 pointer-events-auto"
						onClick={() => onClose()}
					>
						<CloseIcon />
					</button>
					<motion.div
						className="card-image-container"
						layoutId={`card-image-container-${id}`}
					>
						<div className="w-full h-60 relative background-image">
							<ReactPlayer
								width="100%"
								height="100%"
								controls
								playing
								style={{ pointerEvents: "auto" }}
								url={item.video}
								light={item.image}
							/>
						</div>
					</motion.div>

					<motion.div
						className="content-container"
						className="pt-64  p-4 "
						animate
					>
						<span className="uppercase text-xs text-gray-300 font-extrabold mb-4 mt-8">
							Un po’ di informazioni su di me
						</span>

						<div className="my-2 text-gray-300 max-h-64 md:max-h-56 text-justify overflow-scroll text-xs  pointer-events-auto">
							<p className="mb-4">
								Mi chiamo Rinald, sono nato il 13 Ottobre 1993 a Manez, in
								Albania. Nel ’97 sono arrivato in Italia, precisamente in
								provincia di Pordenone, in Friuli Venezia Giulia.
							</p>
							<p className="mb-4">
								Durante le superiori ho sviluppato una passione per i software
								di editing (sia video che immagini), seguendo i primi corsi
								online e mettendo in pratica il tutto tramite i miei primi
								lavoretti sui social network. Nel 2012 mi diplomo come Tecniche
								delle industrie elettroniche e telecomunicazioni, sempre a
								Pordenone. Nello stesso anno inizio il mio percorso di studi
								all’università di Udine, scegliendo il ramo di Scienze e
								Tecnologie Multimediali.
							</p>
							<p className="mb-4">
								È qui che decido di iniziare a mettere in pratica queste nuove
								conoscienze, iniziando a lavorare come freelancer nelle zone
								friulane, creando diverse campagne pubblicitarie sui Social
								Network e curando le grafiche e le promozioni. Nel 2016 completo
								il mio percorso di studi negli anni prestabiliti e decido di
								iniziare una nuova avventura, più grande, e che mi avrebbe
								portato a Milano.
							</p>
							<p className="mb-4">
								Inizio a lavorare per Wedos, una piccola azienda di Digital
								Marketing, che presto si trasformerà in Rewave, aggiungendo al
								markering una parte Tech. In questo periodo inizio ad
								interessarmi sui nuovi strumenti di marketing e nuovi software,
								come la creazione di filtri tramite il software Spark AR, la
								tecnologia augmented reality e modellazione 3D. Prezo l’azienda
								verrà acquisita da una nuova e giovane realtà, Spinup.
							</p>
							<p className="mb-4">
								In questa nuova avventura ricopro il ruolo di Direttore
								Creativo, con lo scopo di puntare sulla creatività le diverse
								campagne marketing dei nostri clienti, con nuove soluzioni
								alternative ed uniche ogni giorno. Questa esperienza mi darà le
								basi per poter gestire un team creativo, collaborare con i
								diversi team e riuscire a gestire, proporre nuove idee e
								analizzare le campagne dei clienti.
							</p>
							<p className="mb-4">
								Attualmente sto continuando qui questa mia avventura, ma sento
								di aver ancora molto da scoprire e sono sicuro che troverò nuove
								realtà interessanti, che mi aiuteranno ad ampliare i miei
								orizzonti e sviluppare nuove abilità che riguardano il mio
								lavoro.
							</p>
						</div>

						<div className="flex flex-col	justify-center items-center">
							<p className="my-2 text-gray-200 font-black text-xs text-center">
								Se vuoi contattarmi scrivimi una mail
							</p>

							<a
								href="mailto:hello@rinaldsefa.com"
								className="py-2 px-4 bg-yellow-300 text-black font-semibold rounded-md pointer-events-auto"
							>
								<div className="flex justify-between text-xs md:text-base">
									<MailIcon />{" "}
									<span className="ml-2 ">hello@rinaldsefa.com</span>
								</div>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Item;
