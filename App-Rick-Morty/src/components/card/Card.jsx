import { Link } from "react-router-dom";
import styles from "./Card.module.css"; // { }
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card(props) {
   // props = { addFav, removeFav, myFavorites, id, name, origin, ... }
   console.log(props)
   const [isFav, setIsFav] = useState(false); // true <=> false

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = event => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   const handleCardClick = (e) => {
      if (props.onClick) {
         e.preventDefault();
         props.onClick();
      }
   }

   return (
      <div className={styles.container} >
         <div className={styles.buttonContainer}>
            {
               isFav ? (
                  <button onClick={handleFavorite} className={styles.favBtn}>❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={styles.favBtn}>🤍</button>
               )
            }
            <button onClick={props.onClose} className={styles.closeBtn}>X</button>
         </div>

         <div className={styles.cardContent} onClick={handleCardClick}>
            <img src={props.image} alt={props.name} />
            <div className={styles.cardInfo}>
               <h2>{props.name}</h2>
               <h4>{props.status} - {props.species}</h4>
               <h4>{props.gender}</h4>
               <p className={styles.originText}>{props.origin}</p>
            </div>
         </div>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addFav: character => {
         dispatch(addFav(character))
      },
      removeFav: id => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);