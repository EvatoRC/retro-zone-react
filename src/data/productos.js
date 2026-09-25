// Catálogo de productos de la tienda
// Se agregó el campo "precioOferta" (y "enOferta") a partir del productos.json


import doom from '../assets/img/doom.jpg'
import dukeNukem3d from '../assets/img/duke_nukem_3d.jpg'
import heretic from '../assets/img/heretic.jpg'
import ageOfEmpires from '../assets/img/age_of_empires.jpg'
import ageOfMythology from '../assets/img/age_of_mythology.jpg'
import starcraftBroodWar from '../assets/img/starcraft_broodwar.jpg'
import warcraftFrozenThrone from '../assets/img/warcraft_frozen_throne.jpg'

const productos = [
  {
    id: 'doom',
    nombre: 'Doom',
    categoria: 'shooters',
    precioNormal: 9990,
    precioOferta: 7990,
    enOferta: true,
    imagen: doom,
    descripcion:
      'Acción frenética, demonios y toneladas de balas; un clásico que definió el género de los shooters en primera persona.',
  },
  {
    id: 'duke-nukem-3d',
    nombre: 'Duke Nukem 3D',
    categoria: 'shooters',
    precioNormal: 8990,
    precioOferta: null,
    enOferta: false,
    imagen: dukeNukem3d,
    descripcion:
      'Humor irreverente, armas descomunales y acción desenfrenada en uno de los grandes clásicos de los shooters de los 90.',
  },
  {
    id: 'heretic',
    nombre: 'Heretic',
    categoria: 'shooters',
    precioNormal: 7990,
    precioOferta: 5990,
    enOferta: true,
    imagen: heretic,
    descripcion:
      'Magia oscura, monstruos infernales y combates frenéticos en un clásico de fantasía oscura nacido de la era dorada de los FPS.',
  },
  {
    id: 'age-of-empires',
    nombre: 'Age of Empires: Definitive Edition',
    categoria: 'estrategia',
    precioNormal: 14990,
    precioOferta: 11990,
    enOferta: true,
    imagen: ageOfEmpires,
    descripcion:
      'Lidera civilizaciones antiguas, desde griegos hasta babilonios, en el remaster del RTS histórico que marcó una época.',
  },
  {
    id: 'age-of-mythology',
    nombre: 'Age of Mythology',
    categoria: 'estrategia',
    precioNormal: 12990,
    precioOferta: null,
    enOferta: false,
    imagen: ageOfMythology,
    descripcion:
      'Dioses, mitos y héroes legendarios de Grecia, Egipto y Escandinavia se unen en este clásico de Ensemble Studios.',
  },
  {
    id: 'starcraft-brood-war',
    nombre: 'StarCraft: Brood War',
    categoria: 'estrategia',
    precioNormal: 11990,
    precioOferta: 9990,
    enOferta: true,
    imagen: starcraftBroodWar,
    descripcion:
      'Terran, Zerg y Protoss en guerra por la galaxia; la expansión que convirtió a StarCraft en leyenda del esport.',
  },
  {
    id: 'warcraft-frozen-throne',
    nombre: 'Warcraft III: The Frozen Throne',
    categoria: 'estrategia',
    precioNormal: 13990,
    precioOferta: null,
    enOferta: false,
    imagen: warcraftFrozenThrone,
    descripcion:
      'La expansión que consolidó la saga de Warcraft como referente absoluto del RTS, con la caída y ascenso del Rey Exánime.',
  },
]

export default productos
