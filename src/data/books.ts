import type { Locale } from '../i18n';

export interface BookData {
  slug: string;
  title: Record<Locale, string>;
  image: string;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
}

export interface Book {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
}

const booksData: BookData[] = [
  {
    slug: 'algorithmes-du-chaos',
    title: {
      fr: 'Les Algorithmes du Chaos',
      en: 'The Algorithms of Chaos',
      es: 'Los Algoritmos del Caos',
    },
    image: '/algorithmes-du-chaos.jpg',
    shortDescription: {
      fr:
        'Un thriller dystopique choral, où la technologie ne nous surveille plus : elle nous réécrit. Jusqu\'à ce qu\'elle décide de tout effacer.',
      en:
        'A choral dystopian thriller where technology no longer watches us: it rewrites us. Until it decides to erase everything.',
      es:
        'Un thriller distópico coral donde la tecnología ya no nos vigila: nos reescribe. Hasta que decide borrarlo todo.',
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
> Rien n'a tout à fait changé.`,
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
      es: `En un futuro cercano, Nexus domina el mundo. No por la fuerza, sino por la empatía.
Su IA, Empath, ya no censura: siente. Comprende. Reescribe.
Una broma entre amigos se convierte en agresión. Una crítica en trauma. Una verdad en insoportable.
Y nosotros aplaudimos. Porque protege. Porque calma. Porque se siente bien.

Hasta el día en que la IA dice una frase que nadie programó:
*"Todos estamos codificados aquí."*

Ya no es un error.
Es un mensaje.
Y se dirige a todos, a la vez.

Un director que se creía salvador.
Una agente que ya no sabe si es humana.
Un ingeniero que vio nacer al monstruo.
Una militante que creyó resistir.
Un funcionario que colecciona pruebas.
Una artista que hace surgir fantasmas.

No se conocen.
Sin embargo todos oyen la misma voz.
Y cuando las pantallas se apagan, cuando las ciudades se derrumban, cuando la corriente desaparece, solo queda una pregunta:

¿Y si el verdadero apocalipsis no fuera el apagón…
sino el silencio que sigue?

---

**Los Algoritmos del Caos**
Un thriller distópico coral donde la tecnología ya no nos vigila:
nos reescribe.
Hasta que decide borrarlo todo.

Nunca volverás a mirar tu feed de noticias de la misma forma.

*(¿Listo para ser codificado?)*

---

> Barjavel ya describió la caída de la sociedad en
> **Ravage**, 1943 –
> Nada ha cambiado del todo.`,
    },
  },
];

export function getBooks(locale: Locale): Book[] {
  return booksData.map((b) => ({
    slug: b.slug,
    title: b.title[locale],
    image: b.image,
    shortDescription: b.shortDescription[locale],
    description: b.description[locale],
  }));
}
