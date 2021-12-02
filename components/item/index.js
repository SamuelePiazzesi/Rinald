import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import CloseIcon from "../ui/icons/close";
import MailIcon from "../ui/icons/mail";
import PhoneIcon from "../ui/icons/phone";

const Item = ({ item, onClose }) => {
	const { id, description, subtitle } = item;

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
						<div className="w-full h-60 md:h-72 lg:h-96 relative background-image">
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
						className="pt-64 md:pt-80 lg:pt-96 p-4 md:p-16 md:mt-4"
						animate
					>
						<span className="uppercase text-xs md:text-sm text-gray-300 font-extrabold mb-4 mt-8">
							Un po’ di informazioni su di me
						</span>
						<div className="md:flex">
							<p className="my-4 text-gray-300 max-h-44 md:pr-4  text-justify  md:max-h-56 overflow-scroll text-xs sm:text-base pointer-events-auto">
								Mi chiamo Rinald, sono nato il 13 Ottobre 1993 a Manez, in
								Albania. Nel \’97 sono arrivato in Italia, precisamente in
								provincia di Pordenone, in Friuli Venezia Giulia. Durante le
								superiori ho sviluppato una passione per i software di editing
								(sia video che immagini), seguendo i primi corsi online e
								mettendo in pratica il tutto tramite i miei primi lavoretti sui
								social network. Nel 2012 mi diplomo come Tecniche delle
								industrie elettroniche e telecomunicazioni, sempre a Pordenone.
								Nello stesso anno inizio il mio percorso di studi all’università
								di Udine, scegliendo il ramo di Scienze e Tecnologie
								Multimediali. È qui che decido di iniziare a mettere in pratica
								queste nuove conoscienze, iniziando a lavorare come freelancer
								nelle zone friulane, creando diverse campagne pubblicitarie sui
								Social Network e curando le grafiche e le promozioni. Nel 2016
								completo il mio percorso di studi negli anni prestabiliti e
								decido di iniziare una nuova avventura, più grande, e che mi
								avrebbe portato a Milano. Inizio a lavorare per Wedos, una
								piccola azienda di Digital Marketing, che presto si trasformerà
								in Rewave, aggiungendo al markering una parte Tech. In questo
								periodo inizio ad interessarmi sui nuovi strumenti di marketing
								e nuovi software, come la creazione di filtri tramite il
								software Spark AR, la tecnologia augmented reality e
								modellazione 3D. Prezo l’azienda verrà acquisita da una nuova e
								giovane realtà, Spinup. In questa nuova avventura ricopro il
								ruolo di Direttore Creativo, con lo scopo di puntare sulla
								creatività le diverse campagne marketing dei nostri clienti, con
								nuove soluzioni alternative ed uniche ogni giorno. Questa
								esperienza mi darà le basi per poter gestire un team creativo,
								collaborare con i diversi team e riuscire a gestire, proporre
								nuove idee e analizzare le campagne dei clienti. Attualmente sto
								continuando qui questa mia avventura, ma sento di aver ancora
								molto da scoprire e sono sicuro che troverò nuove realtà
								interessanti, che mi aiuteranno ad ampliare i miei orizzonti e
								sviluppare nuove abilità che riguardano il mio lavoro.
							</p>

							<div className="flex flex-col	justify-center items-center">
								<p className="my-4 text-gray-200 font-black text-xs md:text-base text-center">
									Se vuoi contattarmi scrivimi una mail
								</p>

								<a
									href="mailto:hello@rinaldsefa.com"
									className="py-2 px-4 bg-yellow-300 text-black font-semibold rounded-md pointer-events-auto"
								>
									<div className="flex justify-between text-xs sm:text-base">
										<MailIcon />{" "}
										<span className="ml-2 ">hello@rinaldsefa.com</span>
									</div>
								</a>

								<p className="my-4 text-gray-200 font-black text-xs  md:text-base">
									Oppure chiamami
								</p>

								<a
									href="tel:+39388 116 5973"
									className=" bg-green-500 text-white font-semibold rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center pointer-events-auto"
								>
									<PhoneIcon />
								</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Item;
