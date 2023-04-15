import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div>

      {   
      characters.map(obj => { return <Card
         key = {obj.id}
         id={obj.id}
         name={obj.name}
         status={obj.status}
         species={obj.species}
         gender={obj.gender}
         origin={obj.origin.name}
         image={obj.image}
         onClose={onClose}
         />} )      
      }
      
   </div>;
}
