import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita!</p>
                </header>

                <footer>
                   <strong>Goiânia</strong>
                   <span>Goiás</span>
                </footer>
            </aside>  
            
            <Map 
                center={[-16.6926552,-49.2942842,]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    
                <Marker
                    icon={mapIcon}
                    position={[-16.6926552,-49.2942842,]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>    
             </Map>
            

            <Link to="/orphanages/create" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;