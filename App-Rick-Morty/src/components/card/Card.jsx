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
      <div className={`${styles.container} ${styles[props.status?.toLowerCase().replace(' ', '')]}`}>
         <div className={styles.buttonContainer}>
            <button onClick={handleFavorite} className={styles.favBtn}>
               {isFav ? '❤️' : '🤍'}
            </button>
            <button onClick={props.onClose} className={styles.closeBtn}>X</button>
         </div>

         {/* Badge de status */}
         <div className={`${styles.statusBadge} ${styles[props.status?.toLowerCase().replace(' ', '')]}`}>
            <span className={styles.statusDot}></span>
            {props.status}
         </div>

         <div className={styles.cardContent} onClick={handleCardClick}>
            {/* Imagen full con gradiente encima */}
            <div className={styles.imageWrapper}>
               <img src={props.image} alt={props.name} />
               <div className={styles.imageOverlay}></div>
               {/* Scanlines */}
               <div className={styles.scanlines}></div>
            </div>

            {/* Info flotando sobre imagen */}
            <div className={styles.cardInfo}>
               <h2>{props.name}</h2>
               <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                     <span className={styles.infoLabel}>Species</span>
                     <span className={styles.infoValue}>{props.species}</span>
                  </div>
                  <div className={styles.infoItem}>
                     <span className={styles.infoLabel}>Gender</span>
                     <span className={styles.infoValue}>{props.gender}</span>
                  </div>
                  <div className={styles.infoItem}>
                     <span className={styles.infoLabel}>Origin</span>
                     <span className={styles.infoValue}>{props.origin}</span>
                  </div>
                  <div className={styles.infoItem}>
                     <span className={styles.infoLabel}>Type</span>
                     <span className={styles.infoValue}>{props.type || 'Unknown'}</span>
                  </div>
               </div>
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