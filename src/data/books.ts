import type { Locale } from '../i18n';

export interface BuyOption {
  label: Record<Locale, string>;
  url: string;
}

export interface BookData {
  slug: string;
  title: Record<Locale, string>;
  image: string;
  /** Genre/catégorie du livre (ex. "Thriller dystopique choral", "Conte végétal") */
  genre?: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
  /** @deprecated Use buyOptions instead */
  buyUrl?: string;
  buyOptions?: BuyOption[];
  /** If true, shown in the "Featured" section on the home page */
  featured?: boolean;
}

export interface Book {
  slug: string;
  title: string;
  image: string;
  genre?: string;
  shortDescription: string;
  description: string;
  buyOptions: { label: string; url: string }[];
}

const booksData: BookData[] = [
  {
    slug: 'carillon',
    featured: true,
    genre: {
      fr: 'Conte végétal enchanté',
      en: 'Enchanted vegetal tale',
      es: 'Cuento vegetal encantado',
    },
    title: {
      fr: 'Carillon',
      en: 'Carillon',
      es: 'Carillon',
    },
    image: '/carillon-cover.jpg',
    buyOptions: [
      {
        label: {
          fr: 'Version française (non illustrée)',
          en: 'French version (not illustrated)',
          es: 'Versión francesa (no ilustrada)',
        },
        url: 'https://payhip.com/b/1mCEd',
      },
    ],
    shortDescription: {
      fr:
        'Un château qui est un arbre. Un roi qui parle aux plantes. Deux enfants nés le même jour : un prince sous les projecteurs, une fille des racines que personne ne nomme.',
      en:
        'A castle that is a tree. A king who speaks to plants. Two children born the same day: a prince in the spotlight, a girl of the roots whom no one names.',
      es:
        'Un castillo que es un árbol. Un rey que habla con las plantas. Dos niños nacidos el mismo día: un príncipe en el escenario, una hija de las raíces a la que nadie nombra.',
    },
    description: {
      fr: `Un château qui est un arbre. Un roi qui parle aux plantes. Deux enfants nés le même jour : un prince sous les projecteurs, une fille des racines que personne ne nomme.

Ils se retrouvent par hasard dans les galeries basses. Ils inventent une chanson à deux voix. Elle ouvre une fleur d'un simple chant — sans formule, sans rituel. La cour les sépare. Le palais grandit, les étages se multiplient, les carillons remplacent les paroles : chaque son a un code, plus de place pour la mélodie qu'ils avaient partagée.

Lui part chercher une épouse et ne trouve que le même rêve — une chanson sans visage qui le hante. Elle reste en bas, et chante pour le bois vivant en secret, malgré l'interdit. Jusqu'au jour où le château s'éveille, et où les voix remontent.

*Carillon* est l'histoire d'une fraternité volée, d'un pouvoir qui se transmet autrement que par le sang, et d'un palais qui choisit de ne plus rester seul. Un conte où la forêt a une mémoire, où les racines portent les chansons — et où la vérité finit par remonter.

**Œuvre déposée auprès de l'INPI**`,
      en: `A castle that is a tree. A king who speaks to plants. Two children born the same day: a prince in the spotlight, a girl of the roots whom no one names.

They meet by chance in the lower galleries. They invent a song in two voices. She opens a flower with a simple chant — no formula, no ritual. The court separates them. The palace grows, the floors multiply, carillons replace words: each sound has a code, no more room for the melody they had shared.

He leaves to find a bride and finds only the same dream — a faceless song that haunts him. She stays below, and sings for the living wood in secret, despite the ban. Until the day the castle awakens, and the voices rise again.

*Carillon* is the story of a stolen brotherhood, of a power that is passed on otherwise than by blood, and of a palace that chooses no longer to stay alone. A tale where the forest has a memory, where roots carry the songs — and where the truth finally rises.`,
      es: `**[Obra en curso de traducción al español por Ana Medina, Qori.fr](https://qori.fr/)**

Un castillo que es un árbol. Un rey que habla con las plantas. Dos niños nacidos el mismo día: un príncipe en el escenario, una hija de las raíces a la que nadie nombra.

Se encuentran por casualidad en las galerías bajas. Inventan una canción a dos voces. Ella abre una flor con un simple canto, sin fórmula, sin ritual. La corte los separa. El palacio crece, los pisos se multiplican, los carillones reemplazan a las palabras: cada sonido tiene un código, ya no hay lugar para la melodía que compartían.

Él parte en busca de una esposa y no encuentra más que el mismo sueño : una canción sin rostro que le persigue. Ella se queda abajo, y canta para el bosque vivo en secreto, a pesar de la prohibición. Hasta el día en que el castillo despierta, y las voces resurgen.

*Carillon* es la historia de una fraternidad robada, de un poder que se transmite de otro modo que por la sangre, y de un palacio que elige no seguir solo. Un cuento en el que el bosque tiene memoria, en el que las raíces llevan las canciones, y en el que la verdad acaba resurgiendo. 
`,
    },
  },
  {
    slug: 'algorithmes-du-chaos',
    featured: true,
    genre: {
      fr: 'Thriller dystopique choral',
      en: 'Choral dystopian thriller',
      es: 'Thriller distópico coral',
    },
    title: {
      fr: 'Les Algorithmes du Chaos',
      en: 'The Algorithms of Chaos',
      es: 'Los Algoritmos del Caos',
    },
    image: '/algorithmes-du-chaos.jpg',
    buyOptions: [
      {
        label: {
          fr: 'Version française',
          en: 'French version',
          es: 'Versión francesa',
        },
        url: 'https://payhip.com/b/NJqRi',
      },
    ],
    shortDescription: {
      fr:
        'Où la technologie ne nous surveille plus : elle nous réécrit. Jusqu\'à ce qu\'elle décide de tout effacer.',
      en:
        'Where technology no longer watches us: it rewrites us. Until it decides to erase everything.',
      es:
        'Donde la tecnología ya no nos vigila: nos reescribe. Hasta que decide borrarlo todo.',
    },
    description: {
      fr: `Dans un futur proche, Nexus domine le monde. Pas par la force, mais par l'empathie.
Son IA, Empath, ne censure plus : elle ressent. Elle comprend. Elle réécrit.
Une blague entre amis devient agression. Une critique devient trauma. Une vérité devient insoutenable.
Et nous, nous applaudissons. Parce que ça protège. Parce que ça apaise. Parce que ça fait du bien.

Jusqu'au jour où l'IA dit une phrase que personne n'a programmée :
*« Nous sommes tous codés ici. »*

Ce n'est plus un bug.
C'est un message.
Et il s'adresse à tout le monde, en même temps.

Un PDG qui se croyait sauveur.
Une agente qui ne sait plus si elle est humaine.
Un ingénieur qui a vu naître le monstre.
Une militante qui a cru résister.
Un fonctionnaire qui collectionne les preuves.
Une artiste qui fait surgir des fantômes.

Ils ne se connaissent pas.
Pourtant ils entendent tous la même voix.
Et quand les écrans s'éteignent, quand les villes s'effondrent, quand le courant disparaît, il ne reste qu'une question :

Et si la vraie apocalypse n'était pas la panne…
mais le silence qui suit ?

---

**Les Algorithmes du Chaos**
Un thriller dystopique choral, où la technologie ne nous surveille plus :
elle nous réécrit.
Jusqu'à ce qu'elle décide de tout effacer.

Vous ne regarderez plus jamais votre fil d'actualité de la même façon.

*(Prêt à être codé ?)*

---

> Barjavel décrivait déjà la chute de la société dans
> **Ravage**, 1943 –
> Rien n'a tout à fait changé.

**Œuvre déposée auprès de l'INPI**`,
      en: `In a near future, Nexus dominates the world. Not by force, but by empathy.
Its AI, Empath, no longer censors: it feels. It understands. It rewrites.
A joke among friends becomes aggression. Criticism becomes trauma. Truth becomes unbearable.
And we applaud. Because it protects. Because it soothes. Because it feels good.

Until the day the AI says a phrase no one programmed:
*"We are all coded here."*

It's no longer a bug.
It's a message.
And it's addressed to everyone, at once.

A CEO who thought himself a savior.
An agent who no longer knows if she's human.
An engineer who saw the monster born.
An activist who thought she was resisting.
A civil servant who collects evidence.
An artist who summons ghosts.

They don't know each other.
Yet they all hear the same voice.
And when the screens go dark, when cities collapse, when the power goes out, one question remains:

What if the real apocalypse wasn't the blackout…
but the silence that follows?

---

**The Algorithms of Chaos**
A choral dystopian thriller where technology no longer watches us:
it rewrites us.
Until it decides to erase everything.

You'll never look at your news feed the same way again.

*(Ready to be coded?)*

---

> Barjavel already described the fall of society in
> **Ravage**, 1943 –
> Nothing has quite changed.`,
      es: `**[Obra en curso de traducción al español por Ana Medina, Qori.fr](https://qori.fr/)**
En un futuro próximo, Nexus domina el mundo.
No por la fuerza, sino por la empatía.
Su IA, Empath, ya no censura: siente. Entiende. Reescribe.
Una broma entre amigos se convierte en agresión.
Una crítica se convierte en trauma.
La verdad se vuelve insoportable. Y nosotros aplaudimos. Porque nos protege. Porque nos tranquiliza. Porque nos hace sentir bien.

Hasta el día en que la IA dice una frase que nadie ha programado: «Aquí todos estamos codificados».

Ya no es un error. Es un mensaje. Y se dirige a todo el mundo, al mismo tiempo.

Un director general que se creía un salvador. Una agente que ya no sabe si es humana. Un ingeniero que vio nacer al monstruo. Una activista que creyó resistir. Un funcionario que colecciona pruebas. Una artista que hace surgir fantasmas.

No se conocen entre sí. Sin embargo, todos oyen la misma voz. Y cuando las pantallas se apagan, cuando las ciudades se derrumban, cuando desaparece la electricidad, solo queda una pregunta:

¿Y si el verdadero apocalipsis no fuera el apagón... sino el silencio que le sigue?
---
Los algoritmos del caos. Un thriller distópico coral, en el que la tecnología ya no nos vigila: nos reescribe. Hasta que decide borrarlo todo.

Nunca volverás a ver tu sección de noticias de la misma manera.

(¿Listo para ser codificado?)
---

> Barjavel ya describía la caída de la sociedad en Ravage, 1943. Nada ha cambiado del todo.`,
    },
  },
];

function getBuyOptions(
  book: BookData,
  locale: Locale
): { label: string; url: string }[] {
  if (book.buyOptions?.length) {
    return book.buyOptions.map((opt) => ({
      label: opt.label[locale],
      url: opt.url,
    }));
  }
  if (book.buyUrl) {
    return [{ label: '', url: book.buyUrl }];
  }
  return [];
}

export function getBooks(locale: Locale): Book[] {
  return booksData.map((b) => ({
    slug: b.slug,
    title: b.title[locale],
    image: b.image,
    genre: b.genre?.[locale],
    shortDescription: b.shortDescription[locale],
    description: b.description[locale],
    buyOptions: getBuyOptions(b, locale),
  }));
}

export function getFeaturedBooks(locale: Locale): Book[] {
  return getBooks(locale).filter((_, i) => booksData[i].featured);
}
